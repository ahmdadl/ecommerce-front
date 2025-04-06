import { cartStore } from '@/modules/cart/stores/cart-store';
import axios, {
    AxiosError,
    AxiosResponse,
    InternalAxiosRequestConfig,
} from 'axios';
import { userStore } from '../stores/userStore';
import { env } from './env';

// Interface for error response from API
interface ApiErrorResponse {
    message?: string;
    status?: number;
    errors?: Record<string, string[]>;
}

// Create axios instance
const http = axios.create({
    baseURL: env.apiUrl || 'http://localhost:5000/api',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'x-app-key': env.apiKey,
        'x-app-type': 'wui',
        'x-public-token': env.apiPublicToken,
    },
});

// Request interceptor
http.interceptors.request.use(
    (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
        const token = userStore.getState().access_token;
        if (token) {
            config.headers = config.headers || {};
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error: AxiosError) => Promise.reject(error)
);

// Response interceptor (simplified without refresh token)
http.interceptors.response.use(
    (response: AxiosResponse) => {
        if (response.data.data.cart) {
            cartStore.setState({ cart: response.data.data.cart });
        }

        return {
            ...response,
            success: response.data.success,
            message: response.data.message,
            data: response.data.data,
        };
    },
    (error: AxiosError<ApiErrorResponse>) => {
        if (error.response?.status === 401) {
            // If unauthorized, clear token and redirect to login
            // localStorage.removeItem('authToken');
            // window.location.href = '/login';
        }

        return Promise.reject(error);
    }
);

export default http;

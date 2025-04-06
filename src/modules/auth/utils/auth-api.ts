import useUserStore from '@/modules/core/stores/userStore';
import http from '@/modules/core/utils/http';
import { parseError } from '@/modules/core/utils/parseError';
import { AxiosResponse } from 'axios';

interface User {
    id: string;
    email: string;
    name: string;
}

interface LoginCredentials {
    email: string;
    password: string;
}

interface RegisterData {
    email: string;
    phone: string;
    password: string;
    password_confirmation: string;
    terms: boolean;
    firstName: string;
    lastName: string;
}

// API endpoints
export const authApi = {
    guest: {
        login: async () => {
            const response = (await http
                .post('/login/guests')
                .catch(parseError)) as AxiosResponse;

            if (!response?.data) return;

            useUserStore.getState().login({
                ...response.data.record,
                isLoaded: true,
                role: 'guest',
            });

            return response.data;
        },

        register: (userData: RegisterData) => http.post('/register', userData),

        forgetPassword: (email: string) =>
            http.post('/forget-password', { email }),

        resetPassword: (data: any) =>
            http.post<{ record: any }>('/reset-password', {
                ...data,
            }),
    },

    login: (credentials: LoginCredentials) => http.post('/login', credentials),

    logout: () => http.post<void>('/logout'),
};

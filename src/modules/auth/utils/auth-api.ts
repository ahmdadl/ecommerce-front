import { cartStore } from '@/modules/cart/stores/cart-store';
import useUserStore, { userStore } from '@/modules/core/stores/userStore';
import http from '@/modules/core/utils/http';
import { parseError } from '@/modules/core/utils/parseError';
import { wishlistStore } from '@/modules/wishlist/stores/wishlist-store';
import { AxiosResponse } from 'axios';

interface LoginCredentials {
    email: string;
    password: string;
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

        register: (userData: any) => http.post('/register', userData),

        forgetPassword: (email: string) =>
            http.post('/forget-password', { email }),

        resetPassword: (data: any) =>
            http.post<{ record: any }>('/reset-password', {
                ...data,
            }),
    },

    login: (credentials: LoginCredentials) => http.post('/login', credentials),

    initialData: async () => {
        const response = (await http
            .get('/initial-data')
            .catch(parseError)) as AxiosResponse;

        if (!response?.data) return;

        userStore.setState({
            ...response.data.user,
            isLoaded: true,
        });

        if (response.data.cart) {
            cartStore.setState({
                cart: response.data.cart,
            });
        }

        if (response.data.wishlist) {
            wishlistStore.setState({
                wishlist: response.data.wishlist,
            });
        }

        return response.data;
    },
};

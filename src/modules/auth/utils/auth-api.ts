import http from '@/modules/core/utils/http';

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
        login: () => http.post<{ record: any }>('/login/guests'),

        register: (userData: RegisterData) =>
            http.post<{ record: any }>('/register', userData),

        forgetPassword: (email: string) =>
            http.post('/forget-password', { email }),

        resetPassword: (data: any) =>
            http.post<{ record: any }>('/reset-password', {
                ...data,
            }),
    },

    login: (credentials: LoginCredentials) =>
        http.post<{ record: User }>('/login', credentials),

    logout: () => http.post<void>('/logout'),
};

import http from './http';

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
    password: string;
    name: string;
}

// API endpoints
export const api = {
    login: (credentials: LoginCredentials) =>
        http.post<{ user: User; token: string }>('/auth/login', credentials),

    register: (userData: RegisterData) =>
        http.post<{ user: User; token: string }>('/auth/register', userData),

    logout: () => http.post<void>('/auth/logout'),

    getUserProfile: () => http.get<User>('/users/profile'),

    updateUser: (data: Partial<User>) => http.put<User>('/users/profile', data),
};

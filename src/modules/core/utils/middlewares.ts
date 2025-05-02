import { redirect } from '@tanstack/react-router';
import { userStore } from '../stores/userStore'; // Adjust path to your store
import { urls } from './urls';

export function requireCustomer(location: any) {
    const { isCustomer } = userStore.getState();

    // Check if user is authenticated (e.g., isCustomer)
    if (!isCustomer()) {
        throw redirect({
            to: urls.auth.login,
            search: {
                redirect: location.href,
            },
        });
    }
}

export function requireGuest(location: any) {
    const { isGuest } = userStore.getState();

    // Check if user is not authenticated (e.g., isGuest)
    if (!isGuest()) {
        throw redirect({
            to: urls.auth.register,
            search: {
                redirect: location.href,
            },
        });
    }
}

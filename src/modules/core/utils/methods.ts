import { i18n } from '@lingui/core';
import { toast } from 'sonner';
import { localeStore } from '../stores/localeStore';
import { env } from './env';

interface LoadingToastOptions {
    loadingMessage?: string;
    successMessage?: string | ((data: any) => string);
    errorMessage?: string;
    toastOptions?: any;
    onFinally?: () => void | Promise<void>;
    onSuccess?: () => void | Promise<void>;
}

export default async function loadingToast<T>(
    promise: Promise<T> | (() => Promise<T>),
    options: LoadingToastOptions = {}
) {
    const {
        loadingMessage = i18n._('Please Wait...'),
        successMessage = i18n._('Done'),
        errorMessage = i18n._('Something went wrong'),
        onFinally = () => {},
        toastOptions = {},
    } = options;

    return toast.promise<T>(promise, {
        loading: loadingMessage,
        success: (data) => {
            options.onSuccess?.();

            return typeof successMessage === 'function'
                ? successMessage(data)
                : successMessage;
        },
        error: errorMessage,
        finally: async () => {
            await Promise.resolve(onFinally());
        },
        ...toastOptions,
    });
}

export function getDefaultGuestToken() {
    const tokens = env.apiDefaultGuestTokens.split(',');

    const randomIndex = Math.floor(Math.random() * tokens.length);

    return tokens[randomIndex];
}

export function isValidResponse(response: any) {
    return typeof response === 'object' && typeof response?.data === 'object';
}

export function getCurrentLocaleKey() {
    return localeStore.getState().localeKey();
}

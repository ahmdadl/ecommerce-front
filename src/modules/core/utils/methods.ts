import { i18n } from '@lingui/core';
import { toast } from 'sonner';
import { env } from './env';

interface LoadingToastOptions {
    loadingMessage?: string;
    successMessage?: string | ((data: any) => string);
    errorMessage?: string;
    onFinally?: () => void | Promise<void>;
    toastOptions?: any;
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
        success: (data) =>
            typeof successMessage === 'function'
                ? successMessage(data)
                : successMessage,
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

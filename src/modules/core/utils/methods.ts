import { i18n } from '@lingui/core';
import { toast } from 'sonner';

export default function loadingToast(
    promise: Promise<any>,
    loadingMessage?: string,
    successMessage?: string,
    errorMessage?: string
) {
    return toast.promise(promise, {
        loading: loadingMessage || i18n._('Please Wait...'),
        success: successMessage || i18n._('Done'),
        error: errorMessage || i18n._('Something went wrong'),
    });
}

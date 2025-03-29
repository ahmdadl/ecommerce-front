import ResetPasswordPage from '@/modules/auth/pages/ResetPasswordPage';
import { userStore } from '@/modules/core/stores/userStore';
import { urls } from '@/modules/core/utils/urls';
import {
    createFileRoute,
    FileRoutesByPath,
    redirect,
} from '@tanstack/react-router';

export const Route = createFileRoute(
    urls.auth.resetPassword as keyof FileRoutesByPath
)({
    component: ResetPasswordPage,
    beforeLoad: async ({ search }) => {
        if (userStore.getState().isCustomer()) {
            throw redirect({
                to: (search as { redirect?: string })?.redirect ?? urls.home,
            });
        }
    },
});

import LoginPage from '@/modules/auth/pages/LoginPage';
import { userStore } from '@/modules/core/stores/userStore';
import { urls } from '@/modules/core/utils/urls';
import {
    createFileRoute,
    FileRoutesByPath,
    redirect,
} from '@tanstack/react-router';

export const Route = createFileRoute(
    ('/_auth' + urls.auth.login) as keyof FileRoutesByPath
)({
    component: LoginPage,
    beforeLoad: async ({ search }) => {
        if (userStore.getState().isCustomer()) {
            throw redirect({
                to: (search as { redirect?: string })?.redirect ?? urls.home,
            });
        }
    },
});

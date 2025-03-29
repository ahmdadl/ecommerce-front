import RegisterPage from '@/modules/auth/pages/RegisterPage';
import { userStore } from '@/modules/core/stores/userStore';
import { urls } from '@/modules/core/utils/urls';
import {
    createFileRoute,
    FileRoutesByPath,
    redirect,
} from '@tanstack/react-router';

export const Route = createFileRoute(
    ('/_auth' + urls.auth.register) as keyof FileRoutesByPath
)({
    component: RegisterPage,
    beforeLoad: async ({ search }) => {
        if (userStore.getState().isCustomer()) {
            throw redirect({
                to: (search as { redirect?: string })?.redirect ?? urls.home,
            });
        }
    },
});

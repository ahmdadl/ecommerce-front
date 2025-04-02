import RegisterPage from '@/modules/auth/pages/RegisterPage';
import { userStore } from '@/modules/core/stores/userStore';
import { urls } from '@/modules/core/utils/urls';
import { createFileRoute, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/$locale/_auth/register')({
    component: RegisterPage,
    beforeLoad: async ({ search }) => {
        if (userStore.getState().isCustomer()) {
            throw redirect({
                to: (search as { redirect?: string })?.redirect ?? urls.home,
            });
        }
    },
});

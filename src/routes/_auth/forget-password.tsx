import ForgetPasswordPage from '@/modules/auth/pages/ForgetPasswordPage';
import { urls } from '@/modules/core/utils/urls';
import { createFileRoute, FileRoutesByPath } from '@tanstack/react-router';

export const Route = createFileRoute(
    urls.auth.forgetPassword as keyof FileRoutesByPath
)({
    component: ForgetPasswordPage,
});

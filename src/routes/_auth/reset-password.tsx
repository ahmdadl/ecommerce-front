import ResetPasswordPage from '@/modules/auth/pages/ResetPasswordPage';
import { urls } from '@/modules/core/utils/urls';
import { createFileRoute, FileRoutesByPath } from '@tanstack/react-router';

export const Route = createFileRoute(
    urls.auth.resetPassword as keyof FileRoutesByPath
)({
    component: ResetPasswordPage,
});

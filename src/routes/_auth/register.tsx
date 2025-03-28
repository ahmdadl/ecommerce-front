import RegisterPage from '@/modules/auth/pages/RegisterPage';
import { urls } from '@/modules/core/utils/urls';
import { createFileRoute, FileRoutesByPath } from '@tanstack/react-router';

export const Route = createFileRoute(
    urls.auth.register as keyof FileRoutesByPath
)({
    component: RegisterPage,
});

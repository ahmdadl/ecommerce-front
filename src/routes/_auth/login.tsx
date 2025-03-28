import LoginPage from '@/modules/auth/pages/LoginPage';
import { urls } from '@/modules/core/utils/urls';
import { createFileRoute, FileRoutesByPath } from '@tanstack/react-router';

export const Route = createFileRoute(urls.auth.login as keyof FileRoutesByPath)(
    {
        component: LoginPage,
    }
);

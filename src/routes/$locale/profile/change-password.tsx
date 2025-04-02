import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/$locale/profile/change-password')({
    component: RouteComponent,
});

function RouteComponent() {
    return <div>Hello "/$locale/profile/changePassword"!</div>;
}

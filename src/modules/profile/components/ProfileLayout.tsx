import { Outlet } from '@tanstack/react-router';

export default function ProfileLayout() {
    return (
        <div>
            <h1>App Layout</h1>
            <Outlet />
        </div>
    );
}

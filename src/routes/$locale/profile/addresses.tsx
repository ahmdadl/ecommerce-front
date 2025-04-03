import AddressPage from '@/modules/profile/pages/AddressPage';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/$locale/profile/addresses')({
    component: AddressPage,
});

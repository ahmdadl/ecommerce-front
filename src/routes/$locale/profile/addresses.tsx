import AddressesPage from '@/modules/addresses/pages/AddressesPage';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/$locale/profile/addresses')({
    component: AddressesPage,
});

import OrderDetailsPage from '@/modules/profile/pages/OrdersPage/OrderDetailsPage';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/$locale/profile/orders/$id')({
    component: OrderDetailsPage,
});

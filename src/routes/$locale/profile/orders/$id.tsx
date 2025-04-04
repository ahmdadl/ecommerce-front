import OrdersPage from '@/modules/orders/pages/OrdersPage';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/$locale/profile/orders/$id')({
    component: OrdersPage,
});

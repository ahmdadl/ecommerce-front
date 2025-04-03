import OrdersPage from '@/modules/profile/pages/OrdersPage';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/$locale/profile/orders/')({
    component: OrdersPage,
});

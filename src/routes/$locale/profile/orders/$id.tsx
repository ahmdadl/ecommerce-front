import OrderDetailsPage from '@/modules/orders/pages/OrderDetailsPage';
import OrderDetailsSkeletonPage from '@/modules/orders/pages/OrderDetailsPage/OrderDetailsSkeletonPage';
import { ordersApi } from '@/modules/orders/utils/orders-api';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/$locale/profile/orders/$id')({
    component: OrderDetailsPage,

    loader: ({ params }) => ordersApi.loadOne(params.id),

    pendingComponent: OrderDetailsSkeletonPage,

    pendingMinMs: 200,
});

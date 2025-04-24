import { getPageMetaData } from '@/modules/core/utils/methods';
import OrdersPage from '@/modules/orders/pages/OrdersPage';
import OrdersSkeletonPage from '@/modules/orders/pages/OrdersSkeletonPage';
import { ordersApi } from '@/modules/orders/utils/orders-api';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/$locale/profile/orders/')({
    head: () => ({
        ...getPageMetaData('orders'),
    }),

    component: OrdersPage,
    loader: () => ordersApi.loadOrders(),

    pendingComponent: OrdersSkeletonPage,
});

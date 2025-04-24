import { getPageMetaData } from '@/modules/core/utils/methods';
import TrackOrderPage from '@/modules/orders/pages/TrackOrderPage';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/$locale/profile/orders/$id/track')({
    head: () => ({
        ...getPageMetaData('order-track'),
    }),

    component: TrackOrderPage,
});

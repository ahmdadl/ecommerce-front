import TrackOrderPage from '@/modules/orders/pages/TrackOrderPage';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/$locale/profile/orders/$id/track')({
    component: TrackOrderPage,
});

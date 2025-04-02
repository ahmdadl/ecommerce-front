import ShopPage from '@/modules/shop/pages/ShopPage';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/$locale/_catalog/shop')({
    component: ShopPage,
});

export const shopRoute = Route;

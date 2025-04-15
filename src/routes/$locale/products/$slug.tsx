import ProductPage from '@/modules/product/pages/ProductPage';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/$locale/products/$slug')({
    component: ProductPage,
});

export const productRoute = Route;

import CartPage from '@/modules/cart/pages/CartPage';
import { cartApi } from '@/modules/cart/utils/cart-api';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/$locale/_cart/cart')({
    component: CartPage,

    loader: async () => cartApi.load(),
});

import { cartApi } from '@/modules/cart/utils/cart-api';
import CheckoutPage from '@/modules/checkout/pages/CheckoutPAge';
import CheckoutSkeletonPage from '@/modules/checkout/pages/CheckoutSkeletonPage';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/$locale/_cart/checkout')({
    component: CheckoutPage,

    loader: async () =>
        cartApi.load({
            with: ['addresses', 'paymentMethods'],
        }),

    pendingComponent: CheckoutSkeletonPage,
});

export const checkoutRoute = Route;

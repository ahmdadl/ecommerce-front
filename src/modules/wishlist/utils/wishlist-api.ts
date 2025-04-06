import http from '@/modules/core/utils/http';
import { productsStore } from '@/modules/shop/stores/products-store';

export const wishlistApi = {
    get: () => http.get('/wishlists'),

    add: async (productId: string) => {
        const response = await http.post(`/wishlists/${productId}`, {
            // withoutResponse: true,
        });

        if (!response?.data) return;

        productsStore.getState().toggleWishlist(productId);

        return response.data;
    },

    remove: async (productId: string) => {
        const response = await http.delete(
            `/wishlists/${productId}/by-product`,
            {
                params: {
                    // withoutResponse: true,
                },
            }
        );

        if (!response?.data) return;

        productsStore.getState().toggleWishlist(productId);

        return response.data;
    },

    clear: async () => {
        const response = await http.delete('/wishlists/clear', {
            params: {
                // withoutResponse: true,
            },
        });

        if (!response?.data) return;

        return response.data;
    },
};

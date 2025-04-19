import http from '@/modules/core/utils/http';
import { isValidResponse } from '@/modules/core/utils/methods';
import { parseError } from '@/modules/core/utils/parseError';
import { productsStore } from '@/modules/shop/stores/products-store';
import { AxiosResponse } from 'axios';

export const wishlistApi = {
    get: () => http.get('/profile/wishlist'),

    add: async (productId: string) => {
        const response = (await http
            .post(`/wishlists/${productId}`, {
                // withoutResponse: true,
            })
            .catch(parseError)) as AxiosResponse;

        if (!isValidResponse(response)) return;

        productsStore.getState().toggleWishlist(productId);

        return response.data;
    },

    remove: async (productId: string) => {
        const response = (await http
            .delete(`/wishlists/${productId}/by-product`, {
                params: {
                    // withoutResponse: true,
                },
            })
            .catch(parseError)) as AxiosResponse;

        if (!isValidResponse(response)) return;

        productsStore.getState().toggleWishlist(productId);

        return response.data;
    },

    clear: async () => {
        const response = (await http
            .delete('/wishlists/clear', {
                params: {
                    // withoutResponse: true,
                },
            })
            .catch(parseError)) as AxiosResponse;

        if (!isValidResponse(response)) return;

        return response.data;
    },
};

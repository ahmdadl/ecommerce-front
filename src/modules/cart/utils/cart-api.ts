import http from '@/modules/core/utils/http';
import { parseError } from '@/modules/core/utils/parseError';
import { SuccessResponse } from '@/modules/core/utils/types';
import { cartStore } from '../stores/cart-store';
import { CartResponse } from './types';

export const cartApi = {
    load: async () => {
        const response = (await http
            .get('/cart')
            .catch(parseError)) as SuccessResponse<CartResponse>;

        if (!response?.data) return;

        cartStore.setState({
            ...response.data,
        });

        return response.data;
    },

    setAddress: async (addressId: string) => {
        const response = (await http
            .patch(`/cart/address/${addressId}`)
            .catch(parseError)) as SuccessResponse<CartResponse>;

        if (!response?.data) return;

        cartStore.setState({
            ...response.data,
        });

        return response.data;
    },

    removeAddress: async () => {
        const response = (await http
            .delete('/cart/address')
            .catch(parseError)) as SuccessResponse<CartResponse>;

        if (!response?.data) return;

        cartStore.setState({
            ...response.data,
        });

        return response.data;
    },

    applyCoupon: async (couponCode: string) => {
        const response = (await http
            .patch(`/cart/coupon/${couponCode}`)
            .catch(parseError)) as SuccessResponse<CartResponse>;

        if (!response?.data) return;

        cartStore.setState({
            ...response.data,
        });

        return response.data;
    },

    removeCoupon: async () => {
        const response = (await http
            .delete('/cart/coupon')
            .catch(parseError)) as SuccessResponse<CartResponse>;

        if (!response?.data) return;

        cartStore.setState({
            ...response.data,
        });

        return response.data;
    },

    add: async (productId: string) => {
        const response = (await http
            .post(`/cart/${productId}`)
            .catch(parseError)) as SuccessResponse<CartResponse>;

        if (!response?.data) return;

        cartStore.setState({
            ...response.data,
        });

        return response.data;
    },

    updateByProduct: async (productId: string, quantity: number) => {
        const response = (await http
            .patch(`/cart/${productId}/by-product`, { quantity })
            .catch(parseError)) as SuccessResponse<CartResponse>;

        if (!response?.data) return;

        cartStore.setState({
            ...response.data,
        });

        return response.data;
    },

    update: async (cartItemId: string, quantity: number) => {
        const response = (await http
            .patch(`/cart/${cartItemId}`, { quantity })
            .catch(parseError)) as SuccessResponse<CartResponse>;

        if (!response?.data) return;

        cartStore.setState({
            ...response.data,
        });

        return response.data;
    },

    removeByProduct: async (productId: string) => {
        const response = (await http
            .delete(`/cart/${productId}/by-product`)
            .catch(parseError)) as SuccessResponse<CartResponse>;

        if (!response?.data) return;

        cartStore.setState({
            ...response.data,
        });

        return response.data;
    },

    remove: async (cartItemId: string) => {
        const response = (await http
            .delete(`/cart/${cartItemId}`)
            .catch(parseError)) as SuccessResponse<CartResponse>;

        if (!response?.data) return;

        cartStore.setState({
            ...response.data,
        });

        return response.data;
    },

    reset: async () => {
        const response = (await http
            .delete('/cart')
            .catch(parseError)) as SuccessResponse<CartResponse>;

        if (!response?.data) return;

        cartStore.setState({
            ...response.data,
        });

        return response.data;
    },
};

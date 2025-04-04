import http from '@/modules/core/utils/http';
import { parseError } from '@/modules/core/utils/parseError';
import { AxiosResponse } from 'axios';
import { cartStore } from '../stores/cart-store';

export const cartApi = {
    load: async () => {
        const response = (await http
            .get('/cart')
            .catch(parseError)) as AxiosResponse;

        if (!response?.data) return;

        cartStore.setState({
            ...response.data,
        });

        return;
    },
};

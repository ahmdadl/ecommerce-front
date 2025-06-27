import http from '@/modules/core/utils/http';
import { parseError } from '@/modules/core/utils/parseError';
import { productsStore } from '@/modules/shop/stores/products-store';
import { homeStore } from '../stores/home-store';

export const homeApi = {
    load: async () => {
        const response = await http.get('/home').catch(parseError);

        if (typeof response !== 'object' || !response?.data) return;

        homeStore.setState({
            banners: response.data.banners,
            // bestSellers: response.data.bestSellers,
        });

        productsStore.setState({
            records: response.data.bestSellers,
        });

        return response.data;
    },
};

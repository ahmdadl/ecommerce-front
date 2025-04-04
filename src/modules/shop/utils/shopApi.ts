import http from '@/modules/core/utils/http';
import { productsStore } from '../stores/products-store';

export const shopApi = {
    loadProducts: async (params: any) => {
        const response = await http.get('/products', { params });

        if (!response?.data) return;

        productsStore.setState({
            records: response.data.records,
            paginationInfo: response.data.paginationInfo,
        });

        return {};
    },
};

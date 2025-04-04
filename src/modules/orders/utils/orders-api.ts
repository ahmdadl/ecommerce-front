import http from '@/modules/core/utils/http';
import { parseError } from '@/modules/core/utils/parseError';
import { AxiosResponse } from 'axios';
import { ordersStore } from '../stores/orders-store';

export const ordersApi = {
    index: (params: any = {}) =>
        http.get('/profile/orders', {
            params,
        }),
    show: (id: string) => http.get(`/orders/${id}`),

    loadOrders: async (page?: number, id?: string) => {
        const response = (await ordersApi
            .index({
                page: page ?? 1,
                id,
            })
            .catch(parseError)) as AxiosResponse;

        if (!response?.data?.records) return;

        const data = response.data;

        ordersStore.setState({
            list: data.records,
            paginationInfo: data.paginationInfo,
        });

        return response.data;
    },

    loadOne: async (id: string) => {
        const response = (await ordersApi
            .show(id)
            .catch(parseError)) as AxiosResponse;

        if (!response?.data?.data?.record) return;

        ordersStore.setState({
            currentOrder: response.data.data.record,
        });

        return;
    },
};

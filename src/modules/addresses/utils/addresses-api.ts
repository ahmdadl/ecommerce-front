import http from '@/modules/core/utils/http';

export const addressApi = {
    create: (data: any) => http.post('/addresses', data),
    update: (addressId: string, data: any) =>
        http.patch('/addresses/' + addressId, data),
    delete: (id: number) => http.delete(`/addresses/${id}`),
};

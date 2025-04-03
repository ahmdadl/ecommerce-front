import http from '@/modules/core/utils/http';

export const addressApi = {
    getAll: (withGovernments: boolean = false, withCities: boolean = false) =>
        http.get('/addresses', {
            params: { withGovernments, withCities },
        }),
    create: (data: any) => http.post('/addresses', data),
    update: (addressId: string, data: any) =>
        http.patch('/addresses/' + addressId, data),
    delete: (id: number) => http.delete(`/addresses/${id}`),
};

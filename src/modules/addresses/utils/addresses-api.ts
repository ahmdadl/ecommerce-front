import http from '@/modules/core/utils/http';

export const addressApi = {
    create: (data: any) => http.post('/addresses', data),
    update: (data: any) => http.patch('/addresses', data),
    delete: (id: number) => http.delete(`/addresses/${id}`),
};

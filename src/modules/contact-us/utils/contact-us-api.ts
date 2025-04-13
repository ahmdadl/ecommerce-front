import http from '@/modules/core/utils/http';

export const contactUsApi = {
    send: async (data: any) => http.post('/contact-us', data),
};

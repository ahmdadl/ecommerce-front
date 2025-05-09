import http from '@/modules/core/utils/http';
import { parseError } from '@/modules/core/utils/parseError';
import { walletPopupStore } from '../stores/wallet-popup-store';
import { walletStore } from '../stores/wallet-store';

export const walletApi = {
    load: async () => {
        const response = await http
            .get('/wallets', {
                params: {
                    with: ['paymentMethods'],
                },
            })
            .catch((err) => parseError(err, undefined, true));

        if (typeof response !== 'object' || !response?.data) return;

        walletStore.setState({
            record: response.data.record,
        });

        walletPopupStore.setState({
            paymentMethods: response.data.paymentMethods,
        });

        return response.data;
    },

    credit: async (form: any, values: any) => {
        const response = await http
            .post('/wallets/credit', values)
            .catch((err) => parseError(err, form));

        if (typeof response !== 'object' || !response?.data) return;

        return response?.data;
    },
};

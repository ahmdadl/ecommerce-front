import http from '@/modules/core/utils/http';
import { parseError } from '@/modules/core/utils/parseError';
import { termsConditionsStore } from '../stores/terms-conditions-store';

export const termsConditionsApi = {
    load: async () => {
        const response = await http
            .get('/terms-and-conditions')
            .catch(parseError);

        if (typeof response !== 'object' || !response?.data) return;

        termsConditionsStore.setState({
            records: response.data.records,
        });

        return response.data;
    },
};

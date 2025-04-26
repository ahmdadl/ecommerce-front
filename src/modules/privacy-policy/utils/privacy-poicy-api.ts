import http from '@/modules/core/utils/http';
import { parseError } from '@/modules/core/utils/parseError';
import { privacyPolicyStore } from '../stores/privacy-policy-store';

export const privacyPolicyApi = {
    load: async () => {
        const response = await http.get('/privacy-policies').catch(parseError);

        if (typeof response !== 'object' || !response?.data) return;

        privacyPolicyStore.setState({
            records: response.data.records,
        });

        return response.data;
    },
};

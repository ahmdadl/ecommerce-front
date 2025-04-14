import http from '@/modules/core/utils/http';
import { parseError } from '@/modules/core/utils/parseError';
import { faqsStore } from '../stores/faqs-store';

export const faqsApi = {
    load: async () => {
        const response = await http.get('/faqs').catch(parseError);

        if (typeof response !== 'object') return;

        faqsStore.setState({
            faqCategories: response.data.records,
        });
    },
};

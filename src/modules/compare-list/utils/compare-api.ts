import http from '@/modules/core/utils/http';
import { parseError } from '@/modules/core/utils/parseError';
import { compareListStore } from '../stores/compare-list-store';

export const compareApi = {
    load: async () => {
        const response = await http.get('/compare-lists').catch(parseError);

        if (typeof response !== 'object' || !response?.data) return;

        compareListStore.setState({
            compareList: response.data.compareList,
        });
    },

    add: async (productId: string) => {
        const response = await http
            .post(`/compare-lists/${productId}`)
            .catch(parseError);
        if (typeof response !== 'object' || !response?.data) return;

        compareListStore.setState({
            compareList: response.data.compareList,
        });

        return response.data;
    },
    remove: async (compareItemId: string) => {
        const response = await http
            .delete(`/compare-lists/${compareItemId}`)
            .catch(parseError);

        if (typeof response !== 'object' || !response?.data) return;

        compareListStore.setState({
            compareList: response.data.compareList,
        });

        return response.data;
    },
    clear: async () => {
        const response = await http
            .delete('/compare-lists/clear')
            .catch(parseError);
        if (typeof response !== 'object' || !response?.data) return;

        compareListStore.setState({
            compareList: response.data.compareList,
        });

        return response.data;
    },
};

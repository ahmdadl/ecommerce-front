import http from '@/modules/core/utils/http';
import { filtersStore } from '../stores/filters-store';
import { productsStore } from '../stores/products-store';

export const shopApi = {
    loadProducts: async (params: any = {}, allowFilters: boolean = true) => {
        const filtered: any = {};

        if (allowFilters) {
            const {
                selectedCategories,
                selectedBrands,
                currentPriceRange,
                currentPage,
                sortBy,
            } = filtersStore.getState();

            if (selectedCategories.length > 0)
                filtered.categories = selectedCategories.join(',');
            if (selectedBrands.length > 0)
                filtered.brands = selectedBrands.join(',');
            if (currentPriceRange[0] > 0 || currentPriceRange[1] < 1000)
                filtered.price = `${currentPriceRange[0]}-${currentPriceRange[1]}`;

            if (currentPage) filtered.page = currentPage;

            if (sortBy) filtered.sortBy = sortBy;
        }

        const response = await http.get('/products', {
            params: {
                ...params,
                withFilters: true,
                withCategory: true,
                ...filtered,
            },
        });

        if (!response?.data) return;

        productsStore.setState({
            records: response.data.records,
            paginationInfo: response.data.paginationInfo,
        });

        filtersStore.setState({
            filters: response.data.filters,
        });

        return {};
    },
};

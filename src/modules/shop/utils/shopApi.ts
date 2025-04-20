import http from '@/modules/core/utils/http';
import { parseError } from '@/modules/core/utils/parseError';
import { filtersStore } from '../stores/filters-store';
import { productsStore } from '../stores/products-store';
import { searchResultStore } from '../stores/search-results-store';

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
                categorySlug,
                brandSlug,
                tagSlug,
                selectedTags,
            } = filtersStore.getState();

            if (selectedCategories.length > 0)
                filtered.categories = selectedCategories.join(',');
            if (selectedBrands.length > 0)
                filtered.brands = selectedBrands.join(',');
            if (currentPriceRange[0] > 0 || currentPriceRange[1] < 1000)
                filtered.price = `${currentPriceRange[0]}-${currentPriceRange[1]}`;

            if (selectedTags.length > 0) filtered.tags = selectedTags.join(',');

            if (currentPage) filtered.page = currentPage;

            if (sortBy) filtered.sortBy = sortBy;

            if (categorySlug?.length) filtered.categorySlug = categorySlug;

            if (brandSlug?.length) filtered.brandSlug = brandSlug;

            if (tagSlug?.length) filtered.tagSlug = tagSlug;
        }

        const response = await http.get('/products', {
            params: {
                ...params,
                withFilters: true,
                withCategory: !params.withBrand, // default is true
                withBrand: params.withBrand,
                ...filtered,
            },
        });

        if (!response?.data) return;

        productsStore.setState({
            records: response.data.records,
            paginationInfo: response.data.paginationInfo,
            category: response.data.category,
            brand: response.data.brand,
            tag: response.data.tag,
        });

        filtersStore.setState({
            filters: response.data.filters,
        });

        return {};
    },

    searchForProducts: async (query: string) => {
        const response = await http
            .get('/products', {
                params: { searchQuery: query, perPage: 5 },
            })
            .catch(parseError);

        if (typeof response !== 'object' || !response?.data) return;

        searchResultStore.setState({
            records: response.data.records,
        });

        return {};
    },
};

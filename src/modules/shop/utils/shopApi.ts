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
                categorySlug,
                brandSlug,
            } = filtersStore.getState();

            if (selectedCategories.length > 0)
                filtered.categories = selectedCategories.join(',');
            if (selectedBrands.length > 0)
                filtered.brands = selectedBrands.join(',');
            if (currentPriceRange[0] > 0 || currentPriceRange[1] < 1000)
                filtered.price = `${currentPriceRange[0]}-${currentPriceRange[1]}`;

            if (currentPage) filtered.page = currentPage;

            if (sortBy) filtered.sortBy = sortBy;

            if (categorySlug?.length) filtered.categorySlug = categorySlug;

            if (brandSlug?.length) filtered.brandSlug = brandSlug;
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
        });

        filtersStore.setState({
            filters: response.data.filters,
        });

        return {};
    },
};

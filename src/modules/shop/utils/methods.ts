import { filtersStore } from '../stores/filters-store';
import { FilterState } from './types';

const getSearchParams = (state: FilterState): Record<string, string> => {
    if (!state.filters) return {};

    const params: Record<string, string> = {};
    if (state.selectedCategories.length > 0) {
        params.categories = state.selectedCategories.join(',');
    }
    if (state.selectedBrands.length > 0) {
        params.brands = state.selectedBrands.join(',');
    }
    const minPrice = Number.parseFloat(state.filters.price_range.min);
    const maxPrice = Number.parseFloat(state.filters.price_range.max);
    if (
        state.currentPriceRange[0] > minPrice ||
        state.currentPriceRange[1] < maxPrice
    ) {
        params.price = `${state.currentPriceRange[0]}-${state.currentPriceRange[1]}`;
    }
    return params;
};

export const getFilterSearchParams = () =>
    getSearchParams(filtersStore.getState());

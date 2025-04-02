import { create } from 'zustand';
import { FilterState } from '../utils/types';

export const useFilterStore = create<FilterState>((set) => ({
    filters: null,
    selectedCategories: [],
    selectedBrands: [],
    currentPriceRange: [0, 1000],
    isLoading: false,
    error: null,

    setFilters: (filters) =>
        // @ts-ignore
        set((state) => {
            const newState = {
                ...state,
                filters,
                currentPriceRange: state.currentPriceRange.every(
                    (v) => v === 0 || v === 1000
                )
                    ? [
                          Number.parseFloat(filters.price_range.min),
                          Number.parseFloat(filters.price_range.max),
                      ]
                    : state.currentPriceRange,
            };
            return newState;
        }),

    toggleCategory: (categoryId) =>
        set((state) => ({
            selectedCategories: state.selectedCategories.includes(categoryId)
                ? state.selectedCategories.filter((id) => id !== categoryId)
                : [...state.selectedCategories, categoryId],
        })),

    toggleBrand: (brandId) =>
        set((state) => ({
            selectedBrands: state.selectedBrands.includes(brandId)
                ? state.selectedBrands.filter((id) => id !== brandId)
                : [...state.selectedBrands, brandId],
        })),

    setPriceRange: (range) => set({ currentPriceRange: range }),

    resetFilters: () =>
        set((state) => ({
            selectedCategories: [],
            selectedBrands: [],
            currentPriceRange: state.filters
                ? [
                      Number.parseFloat(state.filters.price_range.min),
                      Number.parseFloat(state.filters.price_range.max),
                  ]
                : [0, 1000],
        })),

    syncWithUrl: (search) =>
        set((state) => {
            const categories =
                typeof search.categories === 'string'
                    ? search.categories.split(',').filter(Boolean)
                    : [];
            const brands =
                typeof search.brands === 'string'
                    ? search.brands.split(',').filter(Boolean)
                    : [];
            const price =
                typeof search.price === 'string'
                    ? search.price.split('-')
                    : null;

            return {
                ...state,
                selectedCategories: categories,
                selectedBrands: brands,
                currentPriceRange: price
                    ? [Number.parseFloat(price[0]), Number.parseFloat(price[1])]
                    : state.filters
                      ? [
                            Number.parseFloat(state.filters.price_range.min),
                            Number.parseFloat(state.filters.price_range.max),
                        ]
                      : [0, 1000],
            };
        }),
}));

export type CategoryFilterEntity = {
    id: string;
    title: string;
    slug: string;
    products_count: number;
};

export type BrandFilterEntity = {
    id: string;
    title: string;
    slug: string;
    products_count: number;
};

export type PriceRangeFilterEntity = {
    min: string;
    max: string;
};

export type Filters = {
    categories: CategoryFilterEntity[];
    brands: BrandFilterEntity[];
    price_range: PriceRangeFilterEntity;
};

export type FilterState = {
    filters: Filters | null;
    selectedCategories: string[];
    selectedBrands: string[];
    currentPriceRange: [number, number];
    isLoading: boolean;
    error: string | null;

    // Actions
    setFilters: (filters: Filters) => void;
    toggleCategory: (categoryId: string) => void;
    toggleBrand: (brandId: string) => void;
    setPriceRange: (range: [number, number]) => void;
    resetFilters: () => void;
    syncWithUrl: (search: Record<string, string | string[]>) => void;
};

import { CategoryEntity } from '@/modules/categories/utils/types';

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

// Product details
export type ProductEntity = {
    id: string;
    category_id: string;
    brand_id: string;
    title: string;
    description: string;
    slug: string;
    is_main: boolean;
    images: string[];
    price: number;
    sale_price: number;
    is_discounted: boolean;
    discounted_price: number;
    discounted_percentage: number;
    stock: number;
    has_stock: boolean;
    is_wished: boolean;
    is_carted: boolean;
    is_compared: boolean;
    sku: string;
    meta_title: string;
    meta_description: string;
    meta_keywords: string[];
    is_new: boolean;
    category: CategoryEntity;
};

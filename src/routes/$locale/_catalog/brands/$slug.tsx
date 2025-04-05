import BrandProductsPage from '@/modules/brands/pages/BrandProductsPage';
import BrandProductsSkeletonPage from '@/modules/brands/pages/brandProductsSkeletonPage';
import { filtersStore } from '@/modules/shop/stores/filters-store';
import { shopApi } from '@/modules/shop/utils/shopApi';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/$locale/_catalog/brands/$slug')({
    component: BrandProductsPage,

    loader: ({ params }) => {
        filtersStore.setState({ brandSlug: params.slug });

        return shopApi.loadProducts({
            forBrand: params.slug,
        });
    },

    pendingComponent: BrandProductsSkeletonPage,
});

export const brandRoute = Route;

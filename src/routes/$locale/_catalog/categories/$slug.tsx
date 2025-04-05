import CategoryProductsPage from '@/modules/categories/pages/CategoryProductsPage';
import CategoryProductsSkeletonPage from '@/modules/categories/pages/CategoryProductsSkeletonPage';
import { filtersStore } from '@/modules/shop/stores/filters-store';
import { shopApi } from '@/modules/shop/utils/shopApi';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/$locale/_catalog/categories/$slug')({
    component: CategoryProductsPage,

    loader: ({ params }) => {
        filtersStore.setState({ categorySlug: params.slug });

        return shopApi.loadProducts({
            forCategory: params.slug,
            withBrand: true,
        });
    },

    pendingComponent: CategoryProductsSkeletonPage,
});

export const categoryRoute = Route;

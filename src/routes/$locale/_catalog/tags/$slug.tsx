import { filtersStore } from '@/modules/shop/stores/filters-store';
import { shopApi } from '@/modules/shop/utils/shopApi';
import TagProductsSkeletonPage from '@/modules/tags/pages/TagProductsSkeletonPage';
import TagsProductsPage from '@/modules/tags/pages/TagsProductsPage';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/$locale/_catalog/tags/$slug')({
    component: TagsProductsPage,

    loader: ({ params, location }) => {
        filtersStore.getState().setTagSlug(params.slug, location.search);

        return shopApi.loadProducts({
            forTag: params.slug,
            withCategory: true,
        });
    },

    pendingComponent: TagProductsSkeletonPage,
});

export const tagRoute = Route;

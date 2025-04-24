import { getPageMetaData } from '@/modules/core/utils/methods';
import ShopPage from '@/modules/shop/pages/ShopPage';
import ShopSkeleton from '@/modules/shop/pages/ShopSkeleton';
import { filtersStore } from '@/modules/shop/stores/filters-store';
import { shopApi } from '@/modules/shop/utils/shopApi';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/$locale/_catalog/shop')({
    head: () => ({
        ...getPageMetaData('shop'),
    }),

    component: ShopPage,

    loader: ({ location }) => {
        filtersStore.getState().forShop(location.search);

        return shopApi.loadProducts({});
    },

    pendingComponent: ShopSkeleton,
});

export const shopRoute = Route;

import WishlistPage from '@/modules/wishlist/pages/WishlistPage';
import WishlistSkeletonPage from '@/modules/wishlist/pages/WishlistSkeletonPage';
import { wishlistApi } from '@/modules/wishlist/utils/wishlist-api';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/$locale/profile/wishlist')({
    component: WishlistPage,

    loader: async () => wishlistApi.get(),

    pendingComponent: WishlistSkeletonPage,
});

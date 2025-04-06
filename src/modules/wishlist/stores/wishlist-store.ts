import createZustandSelectors from '@/modules/core/utils/zustand/create-zustand-selectors';
import { create } from 'zustand';
import { WishlistEntity } from '../utils/types';

type WishlistResponse = {
    wishlist: WishlistEntity;
};

export const wishlistStore = create<WishlistResponse>(() => ({
    wishlist: {} as WishlistEntity,
}));

export const useWishlistStore = createZustandSelectors(wishlistStore);

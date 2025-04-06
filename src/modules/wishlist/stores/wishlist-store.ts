import createZustandSelectors from '@/modules/core/utils/zustand/create-zustand-selectors';
import { create } from 'zustand';
import { WishlistEntity } from '../utils/types';

type WishlistResponse = {
    wishlist: WishlistEntity;

    toggleProductCarted: (productId: string) => void;
};

export const wishlistStore = create<WishlistResponse>((set, get) => ({
    wishlist: {} as WishlistEntity,

    toggleProductCarted: (productId: string) =>
        set({
            wishlist: {
                ...get().wishlist,
                items: get().wishlist.items.map((item) => ({
                    ...item,
                    product: {
                        ...item.product,
                        is_carted:
                            item.product.id === productId
                                ? !item.product.is_carted
                                : item.product.is_carted,
                    },
                })),
            },
        }),
}));

export const useWishlistStore = createZustandSelectors(wishlistStore);

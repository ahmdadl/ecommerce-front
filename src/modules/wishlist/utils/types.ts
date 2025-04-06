import { ProductEntity } from '@/modules/shop/utils/types';

export type WishlistEntity = {
    id: string;
    user_id: string;
    items: WishlistItemEntity[];
};

export type WishlistItemEntity = {
    id: string;
    wishlist_id: string;
    product_id: string;
    product: ProductEntity;
};

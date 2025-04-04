import { PaginationInfoEntity } from '@/modules/core/utils/types';
import createZustandSelectors from '@/modules/core/utils/zustand/create-zustand-selectors';
import { create } from 'zustand';
import { ProductEntity } from '../utils/types';

type ProductsState = {
    records: ProductEntity[];
    paginationInfo: PaginationInfoEntity;

    toggleWishlist: (productId: string) => void;
};

export const productsStore = create<ProductsState>((set, get) => ({
    records: [],
    paginationInfo: {} as PaginationInfoEntity,

    toggleWishlist: (productId: string) => {
        set((state) => ({
            records: state.records.map((product) => {
                if (product.id === productId) {
                    return { ...product, is_wished: !product.is_wished };
                }
                return product;
            }),
        }));
    },
}));

export const useProductsStore = createZustandSelectors(productsStore);

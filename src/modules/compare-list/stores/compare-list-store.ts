import createZustandSelectors from '@/modules/core/utils/zustand/create-zustand-selectors';
import { create } from 'zustand';
import { CompareListEntity } from '../utils/types';

type CompareListState = {
    compareList: CompareListEntity;

    toggleProductCarted: (productId: string) => void;
    toggleProductWhitelisted: (productId: string) => void;
    toggleProductCompared: (productId: string) => void;
    // addProductToCompareList: (productId: string) => void;
    // removeProductFromCompareList: (productId: string) => void;
    // clearCompareList: () => void;
};

export const compareListStore = create<CompareListState>((set, get) => ({
    compareList: {} as CompareListEntity,

    toggleProductCarted: (productId: string) => {
        set({
            compareList: {
                ...get().compareList,
                items: get().compareList.items.map((item) => ({
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
        });
    },
    toggleProductWhitelisted: (productId: string) => {
        set({
            compareList: {
                ...get().compareList,
                items: get().compareList.items.map((item) => ({
                    ...item,
                    product: {
                        ...item.product,
                        is_wished:
                            item.product.id === productId
                                ? !item.product.is_wished
                                : item.product.is_wished,
                    },
                })),
            },
        });
    },
    toggleProductCompared: (productId: string) => {
        set({
            compareList: {
                ...get().compareList,
                items: get().compareList.items.map((item) => ({
                    ...item,
                    product: {
                        ...item.product,
                        is_compared:
                            item.product.id === productId
                                ? !item.product.is_compared
                                : item.product.is_compared,
                    },
                })),
            },
        });
    },
}));

export const useCompareListStore = createZustandSelectors(compareListStore);

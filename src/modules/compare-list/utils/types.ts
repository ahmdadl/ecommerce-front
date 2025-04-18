import { ProductEntity } from '@/modules/shop/utils/types';

export type CompareListEntity = {
    id: string;
    user_id: string;
    items: CompareListItemEntity[];
};

export type CompareListItemEntity = {
    id: string;
    compare_list_id: string;
    product_id: string;
    product: ProductEntity;
};

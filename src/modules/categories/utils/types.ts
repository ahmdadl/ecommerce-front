import { LocalizedEntity } from '@/modules/core/utils/types';

export type CategoryEntity = {
    id: string;
    title: string;
    slug: string;
    description: string;
    image: string;
    products_count?: number;
};

export type CategoryCachedEntity = CategoryEntity & {
    title: LocalizedEntity;
    description: LocalizedEntity;
    meta_title: LocalizedEntity;
    meta_description: LocalizedEntity;
};

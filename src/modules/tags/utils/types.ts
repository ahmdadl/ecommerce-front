export type TagEntity = {
    id: string;
    title: string;
    description: string | null;
    slug: string;
    products_count?: number;
    meta_title: string;
    meta_description: string;
    meta_keywords: string[];
};

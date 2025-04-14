export type FaqEntity = {
    id: string;
    faq_category_id: string;
    question: string;
    answer: string;
};

export type FaqCategoryEntity = {
    id: string;
    title: string;
    faqs: FaqEntity[];
};

import createZustandSelectors from '@/modules/core/utils/zustand/create-zustand-selectors';
import { create } from 'zustand';
import { FaqCategoryEntity } from '../utils/types';

type FaqsState = {
    faqCategories: FaqCategoryEntity[];
};

export const faqsStore = create<FaqsState>((set, get) => ({
    faqCategories: [],
}));

export const useFaqStore = createZustandSelectors(faqsStore);

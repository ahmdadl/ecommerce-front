import createZustandSelectors from '@/modules/core/utils/zustand/create-zustand-selectors';
import { create } from 'zustand';
import { TermsAndConditionEntity } from '../utils/types';

export type TermsAndConditionStore = {
    records: TermsAndConditionEntity[];
};

export const termsConditionsStore = create<TermsAndConditionStore>(
    (set, get) => ({
        records: [],
    })
);

export const useTermsConditionsStore =
    createZustandSelectors(termsConditionsStore);

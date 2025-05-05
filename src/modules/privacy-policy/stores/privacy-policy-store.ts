import createZustandSelectors from '@/modules/core/utils/zustand/create-zustand-selectors';
import { create } from 'zustand';
import { PrivacyPolicyEntity } from '../utils/types';

type privacyPolicyState = {
    records: PrivacyPolicyEntity[];
};

export const privacyPolicyStore = create<privacyPolicyState>(() => ({
    records: [],
}));

export const usePrivacyPolicyStore = createZustandSelectors(privacyPolicyStore);

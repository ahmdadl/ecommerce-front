import createZustandSelectors from '@/modules/core/utils/zustand/create-zustand-selectors';
import { create } from 'zustand';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';
import { GovernmentEntity } from '../utils/types';

type GovernmentsState = {
    records: GovernmentEntity[];
};

export const governmentsStore = create<GovernmentsState>()(
    devtools(
        persist(
            (set, get) => ({
                records: [],
            }),
            {
                name: 'governments_store',
                storage: createJSONStorage(() => sessionStorage),
            }
        )
    )
);

export const useGovernmentsStore = createZustandSelectors(governmentsStore);

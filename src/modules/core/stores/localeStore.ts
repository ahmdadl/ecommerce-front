import { create } from 'zustand';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';
import createZustandSelectors from '../utils/zustand/create-zustand-selectors';
import { secureStorage } from '../utils/zustand/secure-local-storage';

interface LocaleStoreState {
    locale: string;
    otherLocale: () => string;
    isRtl: () => boolean;
}

export const localeStore = create<LocaleStoreState>()(
    devtools(
        persist(
            (set, get) => ({
                locale: 'en',

                // computed values
                otherLocale: () => (get().locale === 'en' ? 'ar' : 'en'),
                isRtl: () => get().locale === 'ar',
            }),
            {
                name: 'locale_store',
                storage: createJSONStorage(() => secureStorage),
            }
        )
    )
);

const useLocaleStore = createZustandSelectors(localeStore);

export default useLocaleStore;

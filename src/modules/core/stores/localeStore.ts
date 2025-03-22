import { create } from 'zustand';
import createZustandSelectors from '../utils/zustand/create-zustand-selectors';

interface LocaleStoreState {
    locale: string;
    otherLocale: () => string;
    isRtl: () => boolean;
    setLocale: (newLocale: string) => void;
}

const localeStore = create<LocaleStoreState>((set, get) => ({
    locale: 'en',

    // computed values
    otherLocale: () => (get().locale === 'en' ? 'ar' : 'en'),
    isRtl: () => get().locale === 'ar',

    // Actions to update state (optional, added for completeness)
    setLocale: (newLocale) => set({ locale: newLocale }),
}));

const useLocaleStore = createZustandSelectors(localeStore);

export default useLocaleStore;

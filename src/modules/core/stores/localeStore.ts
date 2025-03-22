import { create } from 'zustand';

interface LocaleStoreState {
    locale: string;
    otherLocale: () => string;
    isRtl: () => boolean;
    setLocale: (newLocale: string) => void;
}

const useLocaleStore = create<LocaleStoreState>((set, get) => ({
    locale: 'en',

    // computed values
    otherLocale: () => (get().locale === 'en' ? 'ar' : 'en'),
    isRtl: () => get().locale === 'ar',

    // Actions to update state (optional, added for completeness)
    setLocale: (newLocale) => set({ locale: newLocale }),
}));

export default useLocaleStore;

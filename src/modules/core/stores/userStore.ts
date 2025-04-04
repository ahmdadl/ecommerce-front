import { UserGender } from '@/modules/profile/utils/types';
import { create } from 'zustand';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';
import createZustandSelectors from '../utils/zustand/create-zustand-selectors';
import { secureStorage } from '../utils/zustand/secure-local-storage';

interface UserStoreState {
    id: string;
    name: string;
    email: string;
    phone: string;
    role: string;
    access_token: string;
    gender?: UserGender;
    totals: {
        cartItems: number;
        comparedItems: number;
        orders: number;
        totalPurchased: number;
        wishlistItems: number;
    };
    isGuest: () => boolean;
    isCustomer: () => boolean;
    login: (userData: any) => void;
    logout: () => void;
}

export const userStore = create<UserStoreState>()(
    devtools(
        persist(
            (set, get) => ({
                id: '',
                name: '',
                email: '',
                phone: '',
                role: '',
                gender: undefined,
                access_token: '',
                totals: {
                    cartItems: 0,
                    comparedItems: 0,
                    orders: 0,
                    totalPurchased: 0,
                    wishlistItems: 0,
                },
                isGuest: () => get().role === 'guest',
                isCustomer: () => get().role === 'customer',

                login: (userData: any) =>
                    set({
                        id: userData?.id,
                        name: userData?.name,
                        email: userData?.email,
                        phone: userData?.phone,
                        access_token: userData?.access_token,
                        gender: userData?.gender,
                        totals: userData?.totals,
                        role: userData?.role,
                    }),
                logout: () =>
                    set({
                        id: '',
                        name: '',
                        email: '',
                        role: '',
                        access_token: '',
                    }),
            }),
            {
                name: 'user_store',
                storage: createJSONStorage(() => secureStorage),
            }
        )
    )
);

const useUserStore = createZustandSelectors(userStore);

export default useUserStore;

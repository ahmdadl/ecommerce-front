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
    totals: {
        cartItems: number;
        comparedItems: number;
        orders: number;
        totalPurchased: number;
        wishlistItems: number;
    };
    isGuest: () => boolean;
    isCustomer: () => boolean;
    login: (user: any) => void;
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

                login: (user: any) =>
                    set({
                        id: user.id,
                        name: user.name,
                        email: user.email,
                        role: user.role,
                        access_token: user.access_token,
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

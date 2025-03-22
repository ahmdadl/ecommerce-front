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
    token: string;
    isGuest: () => boolean;
    isCustomer: () => boolean;
    login: (user: any) => void;
    logout: () => void;
}

const userStore = create<UserStoreState>()(
    devtools(
        persist(
            (set, get) => ({
                id: '',
                name: '',
                email: '',
                phone: '',
                role: '',
                token: '',

                isGuest: () => get().role === 'guest',
                isCustomer: () => get().role === 'customer',

                login: (user: any) =>
                    set({
                        id: user.id,
                        name: user.name,
                        email: user.email,
                        role: user.role,
                        token: user.token,
                    }),
                logout: () =>
                    set({
                        id: '',
                        name: '',
                        email: '',
                        role: '',
                        token: '',
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

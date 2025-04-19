import { create } from 'zustand';
import createZustandSelectors from '../utils/zustand/create-zustand-selectors';

interface NavbarState {
    isSearchOpened: boolean;
    isCartOpened: boolean;
    isWishlistOpened: boolean;
    isUserMenuOpened: boolean;
}

const NavbarStore = create<NavbarState>((set, get) => ({
    isSearchOpened: false,
    isCartOpened: false,
    isWishlistOpened: false,
    isUserMenuOpened: false,
}));

const useNavbarStore = createZustandSelectors(NavbarStore);

export default useNavbarStore;

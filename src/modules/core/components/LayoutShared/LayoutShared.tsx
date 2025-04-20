import { Toaster } from '@/components/ui/sonner';
import { useIsMobile } from '@/hooks/use-mobile';
import useLocaleStore from '../../stores/localeStore';
import CartSideMenu from './CartSideMenu';
import CategoriesSideMenu from './CategoriesSideMenu';
import SearchCommand from './SearchCommand';
import UserSideMenu from './UserSideMenu';
import WishlistSideMenu from './WishlistSideMenu';

export default function LayoutShared() {
    const isMobile = useIsMobile();
    const isRtl = useLocaleStore.use.isRtl();

    return (
        <>
            <SearchCommand />

            <CartSideMenu />

            {!isMobile && <WishlistSideMenu />}

            {isMobile && <UserSideMenu />}

            {isMobile && <CategoriesSideMenu />}

            <Toaster position={isRtl() ? 'top-left' : 'top-right'} richColors />
        </>
    );
}

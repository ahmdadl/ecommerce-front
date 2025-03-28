import { Toaster } from '@/components/ui/sonner';
import { useIsMobile } from '@/hooks/use-mobile';
import useLocaleStore from '../../stores/localeStore';
import CartSideMenu from './CartSideMenu';
import { SearchCommand } from './SearchCommand';
import WishlistSideMenu from './WishlistSideMenu';

export default function LayoutShared() {
    const isMobile = useIsMobile();
    const isRtl = useLocaleStore.use.isRtl();

    return (
        <>
            <SearchCommand />

            <CartSideMenu />

            {!isMobile && <WishlistSideMenu />}

            <Toaster position={isRtl() ? 'top-left' : 'top-right'} />
        </>
    );
}

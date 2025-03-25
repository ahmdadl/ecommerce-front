import { useIsMobile } from '@/hooks/use-mobile';
import CartSideMenu from './CartSideMenu';
import { SearchCommand } from './SearchCommand';
import WishlistSideMenu from './WishlistSideMenu';

export default function LayoutShared() {
    const isMobile = useIsMobile();

    return (
        <>
            <SearchCommand />

            <CartSideMenu />

            {!isMobile && <WishlistSideMenu />}
        </>
    );
}

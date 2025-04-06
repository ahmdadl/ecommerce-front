import { Button } from '@/components/ui/button';
import useNavbarStore from '@/modules/core/stores/navbar-store';
import { useWishlistStore } from '@/modules/wishlist/stores/wishlist-store';
import { Trans } from '@lingui/react/macro';
import { Heart } from 'lucide-react';

export default function TopMenuWishlistButton() {
    const wishlist = useWishlistStore.use.wishlist();

    const wishlistCount = wishlist?.items?.length;

    return (
        <Button
            variant={'outline'}
            className='flex items-center hover:text-primary'
            onClick={() => useNavbarStore.setState({ isWishlistOpened: true })}
        >
            <div className='relative'>
                <Heart className='h-5 w-5' />
                {wishlistCount > 0 && (
                    <span className='absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full h-4 w-4 flex items-center justify-center'>
                        {wishlistCount}
                    </span>
                )}
            </div>
            <span className='ms-1 hidden xl:inline'>
                <Trans>Wishlist</Trans>
            </span>
        </Button>
    );
}

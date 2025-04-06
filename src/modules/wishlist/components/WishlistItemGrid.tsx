import ProductCard from '@/modules/shop/components/Products/ProductCard';
import { Trans } from '@lingui/react/macro';
import { HeartCrack } from 'lucide-react';
import { useWishlistStore } from '../stores/wishlist-store';

export default function WishlistItemGrid() {
    const { items } = useWishlistStore.getState().wishlist;

    if (!items?.length) {
        return (
            <div className='flex h-full flex-col items-center justify-center space-y-2 text-center'>
                <HeartCrack className='h-12 w-12 text-muted-foreground' />
                <div className='text-lg font-medium'>
                    <Trans>Your wishlist is empty</Trans>
                </div>
                <div className='text-sm text-muted-foreground'>
                    <Trans>Add items to your wishlist to see them here.</Trans>
                </div>
            </div>
        );
    }

    return (
        <div className='space-y-4 py-3 px-3'>
            <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3'>
                {items.map((item) => (
                    <ProductCard product={item.product} key={item.product.id} />
                ))}
            </div>
        </div>
    );
}

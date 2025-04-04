import { Button } from '@/components/ui/button';
import { ProductEntity } from '@/modules/shop/utils/types';
import { wishlistApi } from '@/modules/wishlist/utils/wishlist-api';
import { Trans } from '@lingui/react/macro';
import { Heart, Loader2 } from 'lucide-react';
import { useState } from 'react';

export default function ProductWishlistToggleButton({
    product,
}: {
    product: ProductEntity;
}) {
    const [isLoading, setIsLoading] = useState(false);

    async function toggle() {
        if (isLoading) return;
        setIsLoading(true);

        if (product.is_wished) {
            await wishlistApi.remove(product.id);
        } else {
            await wishlistApi.add(product.id);
        }

        setIsLoading(false);
    }

    return (
        <Button
            variant='outline'
            size='icon'
            className={`absolute top-2 right-2 rounded-full bg-background/80 backdrop-blur-sm ${
                product.is_wished ? 'text-destructive' : ''
            }`}
            onClick={toggle}
            disabled={isLoading}
        >
            {isLoading ? (
                <Loader2 className='h-4 w-4 animate-spin text-destructive' />
            ) : (
                <Heart
                    className={`h-4 w-4 ${product.is_wished && 'fill-destructive'}`}
                />
            )}
            <span className='sr-only'>
                <Trans>Add to wishlist</Trans>
            </span>
        </Button>
    );
}

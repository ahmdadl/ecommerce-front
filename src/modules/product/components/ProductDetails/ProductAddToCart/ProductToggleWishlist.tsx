import { Heart, Loader2 } from 'lucide-react';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';
import loadingToast from '@/modules/core/utils/methods';
import { productStore } from '@/modules/product/stores/product-store';
import { ProductEntity } from '@/modules/shop/utils/types';
import { wishlistApi } from '@/modules/wishlist/utils/wishlist-api';
import { Trans } from '@lingui/react/macro';

export default function ProductToggleWishlist({
    product,
}: {
    product: ProductEntity;
}) {
    const [isLoading, setIsLoading] = useState(false);

    function toggleWishlist() {
        if (product.is_wished) {
            removeFromWishlist();
        } else {
            addToWishlist();
        }
    }

    function addToWishlist() {
        if (isLoading) return;

        setIsLoading(true);

        loadingToast(wishlistApi.add(product.id), {
            onFinally: () => {
                setIsLoading(false);
                productStore.setState({
                    record: {
                        ...product,
                        is_wished: true,
                    },
                });
            },
        });
    }

    function removeFromWishlist() {
        if (isLoading) return;

        setIsLoading(true);

        loadingToast(wishlistApi.remove(product.id), {
            onFinally: () => {
                setIsLoading(false);
                productStore.setState({
                    record: {
                        ...product,
                        is_wished: false,
                    },
                });
            },
        });
    }

    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button
                        variant={product.is_wished ? 'secondary' : 'outline'}
                        size='icon'
                        onClick={toggleWishlist}
                    >
                        {isLoading ? (
                            <Loader2 className='h-4 w-4 animate-spin' />
                        ) : (
                            <Heart
                                className={cn(
                                    'h-4 w-4',
                                    product.is_wished &&
                                        'fill-red-600 text-red-500'
                                )}
                            />
                        )}
                    </Button>
                </TooltipTrigger>
                <TooltipContent>
                    <p>
                        {product.is_wished ? (
                            <Trans>Remove from Wishlist</Trans>
                        ) : (
                            <Trans>Add to Wishlist</Trans>
                        )}
                    </p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
}

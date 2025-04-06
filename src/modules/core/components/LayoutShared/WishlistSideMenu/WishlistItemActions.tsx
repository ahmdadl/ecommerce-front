import { Button } from '@/components/ui/button';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip';
import { cartApi } from '@/modules/cart/utils/cart-api';
import loadingToast from '@/modules/core/utils/methods';
import { parseError } from '@/modules/core/utils/parseError';
import { wishlistStore } from '@/modules/wishlist/stores/wishlist-store';
import { WishlistItemEntity } from '@/modules/wishlist/utils/types';
import { wishlistApi } from '@/modules/wishlist/utils/wishlist-api';
import { Trans } from '@lingui/react/macro';
import { Loader2, ShoppingCart, Trash2 } from 'lucide-react';
import { useState } from 'react';

export default function WishlistItemActions({
    item,
}: {
    item: WishlistItemEntity;
}) {
    const [loading, setLoading] = useState<
        '' | 'addingToCart' | 'removingFromWishlist'
    >('');

    async function removeFromWishlist(productId: string) {
        if (loading !== '') return;

        setLoading('removingFromWishlist');

        await wishlistApi.remove(productId).catch(parseError);

        setLoading('');
    }

    async function addToCart(productId: string) {
        if (loading !== '') return;

        setLoading('addingToCart');

        loadingToast(cartApi.add(productId).catch(parseError), {
            onFinally: () => {
                wishlistStore.getState().toggleProductCarted(productId);
                setLoading('');
            },
        });
    }

    return (
        <div className='flex items-center gap-3'>
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button
                            size={'icon'}
                            onClick={() => addToCart(item.product.id)}
                            disabled={
                                loading === 'addingToCart' ||
                                item.product.is_carted ||
                                !item.product.has_stock
                            }
                        >
                            {loading === 'addingToCart' ? (
                                <Loader2 className='animate-spin' />
                            ) : (
                                <ShoppingCart />
                            )}
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>
                            {item.product.is_carted ? (
                                <Trans>Product in cart</Trans>
                            ) : (
                                <Trans>Add to cart</Trans>
                            )}
                        </p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button
                            variant={'destructive'}
                            size={'icon'}
                            onClick={() => removeFromWishlist(item.product.id)}
                            disabled={loading === 'removingFromWishlist'}
                        >
                            {loading === 'removingFromWishlist' ? (
                                <Loader2 className='animate-spin' />
                            ) : (
                                <Trash2 />
                            )}
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>
                            <Trans>Remove from wishlist</Trans>
                        </p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </div>
    );
}

import { Button } from '@/components/ui/button';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip';
import { Trans } from '@lingui/react/macro';
import { Loader2, ShoppingCart, Trash2 } from 'lucide-react';
import { useState } from 'react';

export default function WishlistItemActions({ item }: any) {
    const [loading, setLoading] = useState<
        '' | 'addingToCart' | 'removingFromWishlist'
    >('');

    const removeFromWishlist = (id: number) => {
        setLoading('removingFromWishlist');

        setTimeout(() => {
            // setItems(items.filter((i) => i.id !== id));
            setLoading('');
        }, 1000);
    };

    const addToCart = (id: number) => {
        setLoading('addingToCart');

        setTimeout(() => {
            setLoading('');
        }, 1000);
    };

    return (
        <div className='flex items-center gap-3'>
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button
                            variant={'default'}
                            size={'icon'}
                            onClick={() => addToCart(item.id)}
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
                            <Trans>Add to cart</Trans>
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
                            onClick={() => removeFromWishlist(item.id)}
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
                            <Trans>remove from wishlist</Trans>
                        </p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </div>
    );
}

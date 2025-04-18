import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { cartApi } from '@/modules/cart/utils/cart-api';
import Image from '@/modules/core/components/Image';
import loadingToast from '@/modules/core/utils/methods';
import { ProductEntity } from '@/modules/shop/utils/types';
import { wishlistApi } from '@/modules/wishlist/utils/wishlist-api';
import { Trans } from '@lingui/react/macro';
import { Heart, Loader2, ShoppingCart, Trash2 } from 'lucide-react';
import { useState } from 'react';
import { compareListStore } from '../stores/compare-list-store';
import { compareApi } from '../utils/compare-api';

export default function CompareListProduct({
    compareItemId,
    product,
}: {
    compareItemId: string;
    product: ProductEntity;
}) {
    const [isLoading, setIsLoading] = useState<
        '' | 'cart' | 'wishlist' | 'compare'
    >('');

    const removeProduct = () => {
        if (isLoading === 'compare') return;

        setIsLoading('compare');

        loadingToast(compareApi.remove(compareItemId), {
            onFinally: () => {
                setIsLoading('');
            },
        });
    };

    const addToCart = (product: ProductEntity) => {
        if (isLoading === 'cart') return;

        setIsLoading('cart');

        loadingToast(cartApi.add(product.id), {
            onFinally: () => {
                compareListStore.getState().toggleProductCarted(product.id);
                setIsLoading('');
            },
        });
    };

    const addToWishlist = (product: ProductEntity) => {
        if (isLoading === 'wishlist') return;

        setIsLoading('wishlist');

        loadingToast(wishlistApi.add(product.id), {
            onFinally: () => {
                compareListStore
                    .getState()
                    .toggleProductWhitelisted(product.id);
                setIsLoading('');
            },
        });
    };

    return (
        <div className='flex flex-col items-center gap-4'>
            <div className='relative'>
                <div className='max-w-full'>
                    <Image
                        src={product.images[0]}
                        alt={product.title}
                        width={150}
                        height={150}
                        className='object-cover mx-auto rounded-md'
                    />
                </div>
                <Button
                    variant='ghost'
                    size='icon'
                    className='absolute -top-2 -right-2 rounded-full bg-background shadow-sm hover:bg-destructive hover:text-destructive-foreground'
                    onClick={removeProduct}
                    disabled={isLoading !== ''}
                >
                    {isLoading === 'compare' ? (
                        <Loader2 className='h-4 w-4 animate-spin' />
                    ) : (
                        <Trash2 className='h-4 w-4' />
                    )}
                </Button>
                {product.is_new && (
                    <Badge className='absolute top-0 left-0'>
                        <Trans>New</Trans>
                    </Badge>
                )}
            </div>
            <div className='text-center'>
                <h3 className='font-semibold truncate max-w-[200px]'>
                    {product.title}
                </h3>
                <p className='text-sm text-muted-foreground'>
                    <Trans>SKU: {product.sku}</Trans>
                </p>
            </div>
            <div className='flex gap-2'>
                <Button
                    size='sm'
                    onClick={() => addToCart(product)}
                    disabled={
                        isLoading !== '' ||
                        !product.has_stock ||
                        product.is_carted
                    }
                >
                    {isLoading === 'cart' ? (
                        <Loader2 className='h-4 w-4 animate-spin' />
                    ) : (
                        <ShoppingCart className='h-4 w-4' />
                    )}
                    <Trans>Add to Cart</Trans>
                </Button>
                <Button
                    size='sm'
                    variant='outline'
                    onClick={() => addToWishlist(product)}
                    disabled={isLoading !== '' || product.is_wished}
                    className={cn(
                        product.is_wished && 'text-destructive fill-red-600'
                    )}
                >
                    {isLoading === 'wishlist' ? (
                        <Loader2 className='h-4 w-4 animate-spin' />
                    ) : (
                        <Heart className='h-4 w-4' />
                    )}
                </Button>
            </div>
        </div>
    );
}

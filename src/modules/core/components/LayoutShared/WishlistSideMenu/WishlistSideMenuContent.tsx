import { HeartCrack } from 'lucide-react';

import { urls } from '@/modules/core/utils/urls';
import { parsePrice } from '@/modules/orders/utils/methods';
import { useWishlistStore } from '@/modules/wishlist/stores/wishlist-store';
import { Trans } from '@lingui/react/macro';
import Image from '../../Image';
import Link from '../../LocalizedLink';
import WishlistItemActions from './WishlistItemActions';

export default function WishlistSideMenuContent() {
    const { items } = useWishlistStore.use.wishlist();

    return (
        <div className='flex-1 overflow-y-auto py-4'>
            {!Boolean(items?.length) ? (
                <div className='flex h-full flex-col items-center justify-center space-y-2 text-center'>
                    <HeartCrack className='h-12 w-12 text-muted-foreground' />
                    <div className='text-lg font-medium'>
                        <Trans>Your wishlist is empty</Trans>
                    </div>
                    <div className='text-sm text-muted-foreground'>
                        <Trans>
                            Add items to your wishlist to see them here.
                        </Trans>
                    </div>
                </div>
            ) : (
                <ul className='space-y-4 px-3'>
                    {items.map((item) => (
                        <li
                            key={item.id}
                            className='flex items-center space-x-3 border-b pb-4'
                        >
                            <Link
                                to={urls.products.view(item.product)}
                                className='h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border'
                            >
                                <Image
                                    src={item.product.images[0] || ''}
                                    alt={item.product.title}
                                    width={80}
                                    height={80}
                                    className='h-full w-full object-cover'
                                />
                            </Link>
                            <div className='flex flex-1 flex-col'>
                                <Link
                                    to={urls.products.view(item.product)}
                                    className='flex justify-between text-base font-medium'
                                >
                                    <h3 className='line-clamp-2'>
                                        {item.product.title}
                                    </h3>
                                </Link>
                                <div className='mt-1 flex items-end justify-between'>
                                    <div>
                                        {item.product.is_discounted ? (
                                            <div className='flex items-center gap-1.5'>
                                                <span className='font-medium text-primary'>
                                                    {parsePrice(
                                                        item.product
                                                            .discounted_price
                                                    )}
                                                </span>
                                                <span className='text-sm text-muted-foreground line-through'>
                                                    {parsePrice(
                                                        item.product.sale_price
                                                    )}
                                                </span>
                                            </div>
                                        ) : (
                                            <span className='font-medium'>
                                                {parsePrice(
                                                    item.product.sale_price
                                                )}
                                            </span>
                                        )}
                                    </div>

                                    <WishlistItemActions item={item} />
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

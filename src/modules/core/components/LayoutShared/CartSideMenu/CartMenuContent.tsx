import { ShoppingBag } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { SheetClose, SheetFooter } from '@/components/ui/sheet';
import { useCartStore } from '@/modules/cart/stores/cart-store';
import { urls } from '@/modules/core/utils/urls';
import { parsePrice } from '@/modules/orders/utils/methods';
import Link from '@core/components/LocalizedLink';
import { Trans } from '@lingui/react/macro';
import Image from '../../Image';
import CartItemQuantity from './CartItemQuantity';

export default function CartMenuContent() {
    const cart = useCartStore.use.cart();

    const items = cart.items ?? [];

    return (
        <>
            <div className='flex-1 overflow-y-auto py-4'>
                {items.length === 0 ? (
                    <div className='flex h-full flex-col items-center justify-center space-y-2 text-center'>
                        <ShoppingBag className='h-12 w-12 text-muted-foreground' />
                        <div className='text-lg font-medium'>
                            <Trans>Your cart is empty</Trans>
                        </div>
                        <div className='text-sm text-muted-foreground'>
                            <Trans>
                                Add items to your cart to see them here.
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
                                                            item.totals.discount
                                                        )}
                                                    </span>
                                                    <span className='text-sm text-muted-foreground line-through'>
                                                        {parsePrice(
                                                            item.totals.total
                                                        )}
                                                    </span>
                                                </div>
                                            ) : (
                                                <span className='font-medium'>
                                                    {parsePrice(
                                                        item.totals.total
                                                    )}
                                                </span>
                                            )}
                                        </div>
                                        <div className='flex items-center border rounded-md'>
                                            <CartItemQuantity item={item} />
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            <SheetFooter className='border-t pt-4'>
                <div className='space-y-4 w-full'>
                    <div className='flex items-center justify-between text-base font-medium'>
                        <span>
                            <Trans>Subtotal</Trans>
                        </span>
                        <span>{parsePrice(cart.totals?.subtotal)}</span>
                    </div>
                    <div className='text-sm text-muted-foreground'>
                        <Trans>Shipping calculated at checkout.</Trans>
                    </div>
                    <div className='grid grid-cols-2 gap-2'>
                        <SheetClose asChild>
                            <Button variant='outline' asChild>
                                <Link to={urls.cart}>
                                    <Trans>View Cart</Trans>
                                </Link>
                            </Button>
                        </SheetClose>
                        <SheetClose asChild>
                            <Button asChild>
                                <Link to='/checkout'>
                                    <Trans>Checkout</Trans>
                                </Link>
                            </Button>
                        </SheetClose>
                    </div>
                </div>
            </SheetFooter>
        </>
    );
}

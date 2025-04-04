import { Badge } from '@/components/ui/badge';
import Image from '@/modules/core/components/Image';
import CartItemQuantity from '@/modules/core/components/LayoutShared/CartSideMenu/CartItemQuantity';
import Link from '@/modules/core/components/LocalizedLink';
import { urls } from '@/modules/core/utils/urls';
import { parsePrice } from '@/modules/orders/utils/methods';
import { Trans } from '@lingui/react/macro';
import { Trash2 } from 'lucide-react';
import { CartItemEntity } from '../utils/types';
import RemoveFromCartButton from './RemoveFromCartButton';

export function CartItemCard({ item }: { item: CartItemEntity }) {
    return (
        <div className='flex align-center justify-between shadow border border-gray-300 rounded-lg items-center p-3 xl:p-5'>
            <div className='w-[60%] lg:w-[65%] 2xl:w-[80%] flex gap-3'>
                <div className='max-w-36'>
                    <Image
                        // src={item.product.images[0]}
                        src={`https://picsum.photos/seed/${item.product.id}/300/200`}
                        alt={item.product.title}
                        className='rounded-md'
                    />
                </div>
                <div className='flex flex-col gap-3'>
                    <h4 className='text-lg'>
                        <Link to={urls.products.view(item.product)}>
                            {item.product.title}
                        </Link>
                    </h4>
                    <p className='text-muted-foreground text-sm'>
                        <Trans>SKU: {item.product.sku}</Trans>
                    </p>
                    <h5 className='flex gap-4 items-center justify-start text-md'>
                        <span>{parsePrice(item.totals.total)}</span>
                        {item.totals.discount > 0 && (
                            <>
                                <span className='text-muted-foreground line-through'>
                                    {parsePrice(item.totals.discount)}
                                </span>
                                <Badge variant={'destructive'}>
                                    {Math.round(
                                        (item.totals.discount /
                                            item.totals.total) *
                                            100
                                    )}
                                    %
                                </Badge>
                            </>
                        )}
                    </h5>
                </div>
            </div>
            <div>
                <CartItemQuantity item={item} />
            </div>

            <div>
                <RemoveFromCartButton itemId={item.id}>
                    <Trash2 className='h-5 w-5' />
                </RemoveFromCartButton>
            </div>
        </div>
    );
}

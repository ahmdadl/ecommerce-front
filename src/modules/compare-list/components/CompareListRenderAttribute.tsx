import { Badge } from '@/components/ui/badge';
import { parsePrice } from '@/modules/orders/utils/methods';
import { ProductEntity } from '@/modules/shop/utils/types';
import { Trans } from '@lingui/react/macro';
import { Check, X } from 'lucide-react';

export default function CompareListRenderAttribute({
    product,
    attributeId,
}: {
    product: ProductEntity;
    attributeId: string;
}) {
    switch (attributeId) {
        case 'price':
            return (
                <div className='text-center'>
                    {product.is_discounted ? (
                        <div>
                            <span className='line-through text-muted-foreground mr-2'>
                                {parsePrice(product.price)}
                            </span>
                            <span className='font-semibold text-primary'>
                                {parsePrice(product.discounted_price)}
                            </span>
                        </div>
                    ) : (
                        <span className='font-semibold'>
                            {parsePrice(product.price)}
                        </span>
                    )}
                </div>
            );
        case 'discount':
            return (
                <div className='text-center'>
                    {product.is_discounted ? (
                        <Badge
                            variant='outline'
                            className='bg-green-50 text-green-700 border-green-200'
                        >
                            {product.discounted_percentage}% OFF
                        </Badge>
                    ) : (
                        <span className='text-muted-foreground'>
                            <Trans>No discount</Trans>
                        </span>
                    )}
                </div>
            );
        case 'availability':
            return (
                <div className='text-center'>
                    {product.has_stock ? (
                        <div className='flex items-center justify-center gap-1 text-green-600'>
                            <Check className='h-4 w-4' />
                            <span>
                                <Trans>In Stock ({product.stock})</Trans>
                            </span>
                        </div>
                    ) : (
                        <div className='flex items-center justify-center gap-1 text-destructive'>
                            <X className='h-4 w-4' />
                            <span>
                                <Trans>Out of Stock</Trans>
                            </span>
                        </div>
                    )}
                </div>
            );
        case 'new':
            return (
                <div className='text-center'>
                    {product.is_new ? (
                        <div className='flex items-center justify-center gap-1 text-green-600'>
                            <Check className='h-4 w-4' />
                            <span>
                                <Trans>Yes</Trans>
                            </span>
                        </div>
                    ) : (
                        <div className='flex items-center justify-center gap-1 text-muted-foreground'>
                            <X className='h-4 w-4' />
                            <span>
                                <Trans>No</Trans>
                            </span>
                        </div>
                    )}
                </div>
            );
        case 'category':
            return (
                <div className='text-center'>
                    <Badge variant='secondary'>{product.category.title}</Badge>
                </div>
            );
        case 'brand':
            return (
                <div className='text-center'>
                    <Badge variant='outline'>{product.brand.title}</Badge>
                </div>
            );
        case 'description':
            return (
                <p className='text-sm text-muted-foreground text-center'>
                    {product.description}
                </p>
            );
        default:
            return null;
    }
}

import { parsePrice } from '@/modules/orders/utils/methods';
import { Trans } from '@lingui/react/macro';
import { useProductStore } from '../../stores/product-store';
import ProductAddToCart from './ProductAddToCart';

export default function ProductDetails() {
    const product = useProductStore.use.record();

    return (
        <>
            <div className='space-y-6'>
                <div>
                    <h1 className='text-3xl font-bold'>
                        <Trans>{product.title}</Trans>
                    </h1>
                    <div className='mt-2 flex items-center gap-2'>
                        <span className='text-2xl font-semibold'>
                            {parsePrice(product.sale_price)}
                        </span>

                        {product.discounted_percentage > 0 && (
                            <>
                                <span className='text-lg text-muted-foreground line-through'>
                                    {parsePrice(product.price)}
                                </span>
                                <span className='rounded-md bg-green-100 px-2 py-1 text-sm font-medium text-green-800'>
                                    <Trans>
                                        {product.discounted_percentage}% OFF
                                    </Trans>
                                </span>
                            </>
                        )}
                    </div>
                    {product.discounted_price > 0 && (
                        <p className='mt-1 text-sm text-green-700'>
                            <Trans>
                                You save: {parsePrice(product.discounted_price)}
                            </Trans>
                        </p>
                    )}
                </div>

                <p className='text-muted-foreground'>
                    <Trans>{product.description}</Trans>
                </p>

                <ProductAddToCart product={product} />
            </div>
        </>
    );
}

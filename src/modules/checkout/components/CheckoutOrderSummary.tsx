import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { useCartStore } from '@/modules/cart/stores/cart-store';
import Image from '@/modules/core/components/Image';
import { parsePrice } from '@/modules/orders/utils/methods';
import { Trans } from '@lingui/react/macro';
import CheckoutPlaceOrderButton from './CheckoutPlaceOrderButton';

export default function CheckoutOrderSummary() {
    const cart = useCartStore.use.cart();

    return (
        <div className='lg:col-span-1'>
            <Card className='sticky top-5'>
                <CardHeader>
                    <CardTitle>
                        <Trans>Order Summary</Trans>
                    </CardTitle>
                </CardHeader>
                <CardContent className='space-y-4'>
                    {/* Cart Items */}
                    <div className='space-y-4'>
                        {cart.items.map((item) => (
                            <div key={item.id} className='flex gap-4'>
                                <Image
                                    src={
                                        'https://picsum.photos/seed/' +
                                        item.id +
                                        '/64/64'
                                    }
                                    alt={item.product.title}
                                    width={64}
                                    height={64}
                                    className='rounded-md object-cover'
                                />
                                <div className='flex-1'>
                                    <h4 className='font-medium'>
                                        <Trans>{item.product.title}</Trans>
                                    </h4>
                                    <p className='text-sm text-muted-foreground'>
                                        <Trans>Quantity: {item.quantity}</Trans>
                                    </p>
                                </div>
                                <div className='text-right'>
                                    <p className='font-medium'>
                                        {parsePrice(item.totals.total)}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <Separator />

                    {/* Order Totals */}
                    <div className='space-y-2'>
                        <div className='flex justify-between'>
                            <p className='text-muted-foreground'>
                                <Trans>Subtotal</Trans>
                            </p>
                            <p>{parsePrice(cart.totals.subtotal)}</p>
                        </div>
                        <div className='flex justify-between'>
                            <p className='text-muted-foreground'>
                                <Trans>Shipping</Trans>
                            </p>
                            <p>{parsePrice(cart.totals.shipping)}</p>
                        </div>
                        <div className='flex justify-between'>
                            <p className='text-muted-foreground'>
                                <Trans>Tax</Trans>
                            </p>
                            <p>{parsePrice(cart.totals.taxes)}</p>
                        </div>
                        <Separator />
                        <div className='flex justify-between font-medium text-lg'>
                            <p>
                                <Trans>Total</Trans>
                            </p>
                            <p>{parsePrice(cart.totals.total)}</p>
                        </div>
                    </div>
                </CardContent>
                <CardFooter>
                    <CheckoutPlaceOrderButton />
                </CardFooter>
            </Card>
        </div>
    );
}

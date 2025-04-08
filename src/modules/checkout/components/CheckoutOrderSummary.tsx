import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Image from '@/modules/core/components/Image';
import { parsePrice } from '@/modules/orders/utils/methods';
import { Trans } from '@lingui/react/macro';

const cartItems = [
    {
        id: '1',
        name: 'Premium Headphones',
        price: 129.99,
        quantity: 1,
        image: '/placeholder.svg?height=64&width=64',
    },
    {
        id: '2',
        name: 'Wireless Keyboard',
        price: 59.99,
        quantity: 1,
        image: '/placeholder.svg?height=64&width=64',
    },
    {
        id: '3',
        name: 'USB-C Cable (3-pack)',
        price: 19.99,
        quantity: 2,
        image: '/placeholder.svg?height=64&width=64',
    },
];

export default function CheckoutOrderSummary() {
    // Calculate order totals
    const subtotal = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );
    const shipping = 4.99;
    const tax = subtotal * 0.08;
    const total = subtotal + shipping + tax;

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
                        {cartItems.map((item) => (
                            <div key={item.id} className='flex gap-4'>
                                <Image
                                    src={item.image || '/placeholder.svg'}
                                    alt={item.name}
                                    width={64}
                                    height={64}
                                    className='rounded-md object-cover'
                                />
                                <div className='flex-1'>
                                    <h4 className='font-medium'>
                                        <Trans>{item.name}</Trans>
                                    </h4>
                                    <p className='text-sm text-muted-foreground'>
                                        <Trans>Quantity: {item.quantity}</Trans>
                                    </p>
                                </div>
                                <div className='text-right'>
                                    <p className='font-medium'>
                                        {parsePrice(item.price * item.quantity)}
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
                            <p>{parsePrice(subtotal)}</p>
                        </div>
                        <div className='flex justify-between'>
                            <p className='text-muted-foreground'>
                                <Trans>Shipping</Trans>
                            </p>
                            <p>{parsePrice(shipping)}</p>
                        </div>
                        <div className='flex justify-between'>
                            <p className='text-muted-foreground'>
                                <Trans>Tax</Trans>
                            </p>
                            <p>{parsePrice(tax)}</p>
                        </div>
                        <Separator />
                        <div className='flex justify-between font-medium text-lg'>
                            <p>
                                <Trans>Total</Trans>
                            </p>
                            <p>{parsePrice(total)}</p>
                        </div>
                    </div>
                </CardContent>
                <CardFooter>
                    <Button className='w-full' size='lg'>
                        <Trans>Place Order</Trans>
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
}

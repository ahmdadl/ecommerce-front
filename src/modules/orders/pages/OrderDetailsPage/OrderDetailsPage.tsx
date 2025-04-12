import { format } from 'date-fns';
import { ArrowLeft, Calendar, CreditCard, MapPin } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import Link from '@/modules/core/components/LocalizedLink';
import { urls } from '@/modules/core/utils/urls';
import { Trans } from '@lingui/react/macro';
import { useOrdersStore } from '../../stores/orders-store';
import { getOrderStatusColor, parsePrice } from '../../utils/methods';

export default function OrderDetailsPage() {
    const order = useOrdersStore.use.currentOrder();

    if (!order) return null;

    // Format the date
    const orderDate = new Date(order.created_at);
    const formattedDate = format(orderDate, 'dd MMMM yyyy');

    return (
        <div className='container mx-auto px-4 py-8'>
            <div className='mb-6 flex items-center'>
                <Link to={urls.profile.orders.index} className='mr-4'>
                    <Button variant='outline' size='icon'>
                        <ArrowLeft className='h-4 w-4' />
                        <span className='sr-only'>
                            <Trans>Back to orders</Trans>
                        </span>
                    </Button>
                </Link>
                <div>
                    <h1 className='text-2xl font-bold md:text-3xl max-w-full text-wrap'>
                        <Trans>Order #{order.id}</Trans>
                    </h1>
                    <p className='text-muted-foreground'>
                        <Trans>Placed on {formattedDate}</Trans>
                    </p>
                </div>
            </div>

            <div className='grid gap-6 md:grid-cols-3'>
                {/* Order Summary */}
                <div className='md:col-span-2'>
                    <Card>
                        <CardHeader className='flex flex-row items-center justify-between'>
                            <div>
                                <CardTitle>
                                    <Trans>Order Summary</Trans>
                                </CardTitle>
                                <CardDescription>
                                    <Trans>Order details and status</Trans>
                                </CardDescription>
                            </div>
                            <Badge
                                className={getOrderStatusColor(order.status)}
                            >
                                {order.status}
                            </Badge>
                        </CardHeader>
                        <CardContent>
                            <div className='grid gap-4 md:grid-cols-2'>
                                <div className='space-y-1'>
                                    <p className='text-sm font-medium'>
                                        <Trans>Order Date</Trans>
                                    </p>
                                    <div className='flex items-center gap-2'>
                                        <Calendar className='h-4 w-4 text-muted-foreground' />
                                        <span>{formattedDate}</span>
                                    </div>
                                </div>
                                <div className='space-y-1'>
                                    <p className='text-sm font-medium'>
                                        <Trans>Payment Method</Trans>
                                    </p>
                                    <div className='flex items-center gap-2'>
                                        <CreditCard className='h-4 w-4 text-muted-foreground' />
                                        <span>{order.payment_method}</span>
                                    </div>
                                </div>
                                <div className='space-y-1'>
                                    <p className='text-sm font-medium'>
                                        <Trans>Payment Status</Trans>
                                    </p>
                                    <Badge variant='outline'>
                                        {order.payment_status}
                                    </Badge>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Order Items */}
                    <Card className='mt-6'>
                        <CardHeader>
                            <CardTitle>
                                <Trans>Order Items</Trans>
                            </CardTitle>
                            <CardDescription>
                                <Trans>Order Items</Trans> (
                                {order.items?.length ?? 0})
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className='w-[100px]'>
                                            <Trans>Image</Trans>
                                        </TableHead>
                                        <TableHead>Product</TableHead>
                                        <TableHead className='text-right'>
                                            <Trans>Price</Trans>
                                        </TableHead>
                                        <TableHead className='text-right'>
                                            <Trans>Quantity</Trans>
                                        </TableHead>
                                        <TableHead className='text-right'>
                                            <Trans>Total</Trans>
                                        </TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {Boolean(order.items?.length) &&
                                        order.items?.map((item) => (
                                            <TableRow key={item.id}>
                                                <TableCell>
                                                    <div className='relative h-16 w-16 overflow-hidden rounded-md'>
                                                        <img
                                                            src={
                                                                item.product
                                                                    .images[0] ||
                                                                '/placeholder.svg?height=64&width=64'
                                                            }
                                                            alt={
                                                                item.product
                                                                    .title
                                                            }
                                                            className='object-cover'
                                                        />
                                                    </div>
                                                </TableCell>
                                                <TableCell>
                                                    <div className='font-medium'>
                                                        {item.product.title}
                                                    </div>
                                                    <div className='text-sm text-muted-foreground'>
                                                        <Trans>
                                                            SKU:{' '}
                                                            {item.product.sku}
                                                        </Trans>
                                                    </div>
                                                </TableCell>
                                                <TableCell className='text-right'>
                                                    {parsePrice(
                                                        item.product.price
                                                    )}
                                                </TableCell>
                                                <TableCell className='text-right'>
                                                    {item.quantity}
                                                </TableCell>
                                                <TableCell className='text-right font-medium'>
                                                    {parsePrice(
                                                        item.totals.total
                                                    )}
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </div>

                {/* Order Totals and Shipping */}
                <div className='space-y-6'>
                    {/* Order Totals */}
                    <Card>
                        <CardHeader>
                            <CardTitle>
                                <Trans>Order Total</Trans>
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className='space-y-2'>
                                <div className='flex justify-between'>
                                    <span className='text-muted-foreground'>
                                        <Trans>Subtotal</Trans>
                                    </span>
                                    <span>
                                        {parsePrice(order.totals.subtotal)}
                                    </span>
                                </div>
                                <div className='flex justify-between'>
                                    <span className='text-muted-foreground'>
                                        <Trans>Taxes</Trans>
                                    </span>
                                    <span>
                                        {parsePrice(order.totals.taxes)}
                                    </span>
                                </div>
                                {order.totals.discount > 0 && (
                                    <div className='flex justify-between'>
                                        <span className='text-muted-foreground'>
                                            <Trans>Discount</Trans>
                                        </span>
                                        <span className='text-green-600'>
                                            -{parsePrice(order.totals.discount)}
                                        </span>
                                    </div>
                                )}
                                {order.totals.shipping > 0 && (
                                    <div className='flex justify-between'>
                                        <span className='text-muted-foreground'>
                                            <Trans>Shipping</Trans>
                                        </span>
                                        <span>
                                            {parsePrice(order.totals.shipping)}
                                        </span>
                                    </div>
                                )}
                                <Separator className='my-2' />
                                <div className='flex justify-between font-medium'>
                                    <span>
                                        <Trans>Total</Trans>
                                    </span>
                                    <span>
                                        {parsePrice(order.totals.total)}
                                    </span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Shipping Address */}
                    <Card>
                        <CardHeader className='flex flex-row items-center'>
                            <div>
                                <CardTitle>
                                    <Trans>Shipping Address</Trans>
                                </CardTitle>
                                <CardDescription>
                                    <Trans>
                                        Where your order will be delivered
                                    </Trans>
                                </CardDescription>
                            </div>
                            <MapPin className='ml-auto h-5 w-5 text-muted-foreground' />
                        </CardHeader>
                        <CardContent>
                            <div className='space-y-1'>
                                <p className='font-medium'>
                                    {order.shippingAddress?.name}
                                </p>
                                <p>{order.shippingAddress?.address}</p>
                                <p>{order.shippingAddress?.city_title}</p>
                                <p className='pt-2 text-sm text-muted-foreground'>
                                    <span className='font-medium'>
                                        <Trans>Phone</Trans>:
                                    </span>{' '}
                                    {order.shippingAddress?.phone}
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Need Help */}
                    <Card>
                        <CardHeader>
                            <CardTitle>
                                <Trans>Need Help?</Trans>
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className='text-sm text-muted-foreground'>
                                <Trans>
                                    If you have any questions about your order,
                                    please contact our customer support.
                                </Trans>
                            </p>
                        </CardContent>
                        <CardFooter>
                            <Button variant='outline' className='w-full'>
                                <Trans>Contact Support</Trans>
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </div>
    );
}

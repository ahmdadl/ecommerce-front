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
import Link from '@/modules/core/components/LocalizedLink';
import { urls } from '@/modules/core/utils/urls';
import { Trans } from '@lingui/react/macro';
import OrderItemsTable from '../../components/OrderItemsTable';
import { useOrdersStore } from '../../stores/orders-store';
import { getOrderStatusColor, parsePrice } from '../../utils/methods';

export default function OrderDetailsPage() {
    const order = useOrdersStore.use.currentOrder();

    if (!order) return null;

    // Format the date
    const orderDate = new Date(order.created_at);
    const formattedDate = format(orderDate, 'dd MMMM yyyy');

    return (
        <div className='mx-auto max-w-full px-4 py-6 sm:px-6 lg:px-8 2xl:max-w-7xl'>
            <div className='mb-6 flex flex-col items-start sm:flex-row sm:items-center gap-4'>
                <Link to={urls.profile.orders.index}>
                    <Button variant='outline' size='icon'>
                        <ArrowLeft className='h-4 w-4 rtl:rotate-180' />
                        <span className='sr-only'>
                            <Trans>Back to orders</Trans>
                        </span>
                    </Button>
                </Link>
                <div>
                    <h1 className='text-xl sm:text-2xl lg:text-3xl font-bold max-w-full break-words'>
                        <Trans>Order #{order.id}</Trans>
                    </h1>
                    <p className='text-sm sm:text-base text-muted-foreground'>
                        <Trans>
                            Placed on <span dir='ltr'>{formattedDate}</span>
                        </Trans>
                    </p>
                </div>
            </div>

            <div className='grid gap-6 md:grid-cols-3'>
                {/* Order Summary */}
                <div className='md:col-span-2 space-y-6'>
                    <Card>
                        <CardHeader className='flex flex-col sm:flex-row sm:items-center justify-between gap-4'>
                            <div>
                                <CardTitle className='text-lg sm:text-xl'>
                                    <Trans>Order Summary</Trans>
                                </CardTitle>
                                <CardDescription className='text-sm'>
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
                            <div className='grid gap-4 sm:grid-cols-2'>
                                <div className='space-y-1'>
                                    <p className='text-sm font-medium'>
                                        <Trans>Order Date</Trans>
                                    </p>
                                    <div className='flex items-center gap-2'>
                                        <Calendar className='h-4 w-4 text-muted-foreground' />
                                        <span className='text-sm' dir='ltr'>
                                            {formattedDate}
                                        </span>
                                    </div>
                                </div>
                                <div className='space-y-1'>
                                    <p className='text-sm font-medium'>
                                        <Trans>Payment Method</Trans>
                                    </p>
                                    <div className='flex items-center gap-2'>
                                        <CreditCard className='h-4 w-4 text-muted-foreground' />
                                        <span className='text-sm'>
                                            {order.payment_method}
                                        </span>
                                    </div>
                                </div>
                                <div className='space-y-1'>
                                    <p className='text-sm font-medium'>
                                        <Trans>Payment Status</Trans>
                                    </p>
                                    <Badge
                                        variant='outline'
                                        className='text-xs'
                                    >
                                        {order.payment_status}
                                    </Badge>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Order Items */}
                    <OrderItemsTable order={order} />
                </div>

                {/* Order Totals and Shipping */}
                <div className='space-y-6'>
                    {/* Order Totals */}
                    <Card>
                        <CardHeader>
                            <CardTitle className='text-lg sm:text-xl'>
                                <Trans>Order Total</Trans>
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className='space-y-2 text-sm'>
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
                                <CardTitle className='text-lg sm:text-xl'>
                                    <Trans>Shipping Address</Trans>
                                </CardTitle>
                                <CardDescription className='text-sm'>
                                    <Trans>
                                        Where your order will be delivered
                                    </Trans>
                                </CardDescription>
                            </div>
                            <MapPin className='ml-auto h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground' />
                        </CardHeader>
                        <CardContent>
                            <div className='space-y-1 text-sm'>
                                <p className='font-medium'>
                                    {order.shippingAddress?.name}
                                </p>
                                <p>{order.shippingAddress?.address}</p>
                                <p>{order.shippingAddress?.city_title}</p>
                                <p className='pt-2 text-xs sm:text-sm text-muted-foreground'>
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
                            <CardTitle className='text-lg sm:text-xl'>
                                <Trans>Need Help?</Trans>
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className='text-xs sm:text-sm text-muted-foreground'>
                                <Trans>
                                    If you have any questions about your order,
                                    please contact our customer support.
                                </Trans>
                            </p>
                        </CardContent>
                        <CardFooter>
                            <Button
                                variant='outline'
                                className='w-full text-sm'
                                asChild
                            >
                                <Link to={urls.contactUs}>
                                    <Trans>Contact Support</Trans>
                                </Link>
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </div>
    );
}

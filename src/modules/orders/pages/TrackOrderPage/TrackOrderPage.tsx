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
import Image from '@/modules/core/components/Image';
import { parsePrice } from '@/modules/orders/utils/methods';
import {
    OrderEntity,
    OrderPaymentStatus,
    OrderStatus,
} from '@/modules/orders/utils/types'; // Adjust path as needed
import { Trans } from '@lingui/react/macro';
import {
    Calendar,
    CheckCircle2,
    ChevronDown,
    ChevronUp,
    Clock,
    MapPin,
    Phone,
    Truck,
} from 'lucide-react';
import { useState } from 'react';

export default function TrackOrderPage() {
    const [isDetailsOpen, setIsDetailsOpen] = useState(false);

    // Fake order data conforming to OrderEntity
    const order: OrderEntity = {
        id: 'ORD-7652901',
        user_id: 'USR-123',
        shipping_address_id: 'ADDR-456',
        status: OrderStatus.SHIPPED,
        payment_status: OrderPaymentStatus.PENDING,
        payment_method: 'cod',
        totals: {
            subtotal: 219.98,
            shipping: 4.99,
            taxeses: 17.6,
            total: 242.57,
        },
        created_at: '2025-04-08T10:23:00Z',
        items: [
            {
                id: 'ITEM-1',
                order_id: 'ORD-7652901',
                product_id: 'PROD-1',
                quantity: 1,
                totals: {
                    subtotal: 129.99,
                    taxes: 10.4,
                    total: 140.39,
                },
                created_at: '2025-04-08T10:23:00Z',
                product: {
                    id: 'PROD-1',
                    name: 'Premium Wireless Headphones',
                    price: 129.99,
                    image: '/placeholder.svg',
                    color: 'Matte Black',
                },
            },
            {
                id: 'ITEM-2',
                order_id: 'ORD-7652901',
                product_id: 'PROD-2',
                quantity: 1,
                totals: {
                    subtotal: 89.99,
                    taxes: 7.2,
                    total: 97.19,
                },
                created_at: '2025-04-08T10:23:00Z',
                product: {
                    id: 'PROD-2',
                    name: 'Smart Fitness Watch',
                    price: 89.99,
                    image: '/placeholder.svg',
                    color: 'Silver',
                },
            },
        ],
        shippingAddress: {
            id: 'ADDR-456',
            address_id: 'ADDR-456',
            user_id: 'USR-123',
            government_id: 'GOV-789',
            city_id: 'CITY-101',
            city_title: 'New York',
            shipping_fees: 4.99,
            name: 'Alex Johnson',
            title: 'Home',
            address: '123 Main Street, Apt 4B',
            phone: '+1 (555) 123-4567',
            created_at: '2025-04-01T00:00:00Z',
            updated_at: '2025-04-01T00:00:00Z',
        },
        coupon: null,
        paymentAttempts: [
            {
                id: 'PAY-001',
                order_id: 'ORD-7652901',
                payment_method: 'cod',
                status: 'pending',
                payment_details: null,
                created_at: '2025-04-08T10:23:00Z',
                updated_at: '2025-04-08T10:23:00Z',
            },
        ],
    };

    // Timeline derived from order status
    const timeline = [
        {
            status: 'Order Placed',
            date: new Date(order.created_at).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
            }),
            time: new Date(order.created_at).toLocaleTimeString('en-US', {
                hour: '2-digit',
                minute: '2-digit',
            }),
            completed: true,
        },
        {
            status: 'Order Processed',
            date: 'April 9, 2025',
            time: '09:45 AM',
            completed: order.status !== OrderStatus.PENDING,
        },
        {
            status: 'Shipped',
            date: 'April 10, 2025',
            time: '02:30 PM',
            completed: [OrderStatus.SHIPPED, OrderStatus.DELIVERED].includes(
                order.status
            ),
        },
        {
            status: 'In Transit',
            date: 'April 12, 2025',
            time: '11:15 AM',
            completed: order.status === OrderStatus.DELIVERED,
            current: order.status === OrderStatus.SHIPPED,
        },
        {
            status: 'Out for Delivery',
            date: 'Expected April 14, 2025',
            completed: false,
        },
        {
            status: 'Delivered',
            date: 'Expected April 15, 2025',
            completed: order.status === OrderStatus.DELIVERED,
        },
    ];

    // Get current status for display
    const currentStatus =
        timeline.find((item) => item.current)?.status || order.status;

    // Estimated delivery (placeholder logic, adjust as needed)
    const estimatedDelivery = 'April 15, 2025';

    return (
        <div className='container mx-auto px-4 py-8 max-w-4xl'>
            <div className='mb-8'>
                <h1 className='text-3xl font-bold mb-2'>
                    <Trans>Track Your Order</Trans>
                </h1>
                <p className='text-muted-foreground'>
                    <Trans>Order</Trans> #{order.id} • <Trans>Placed on</Trans>{' '}
                    {new Date(order.created_at).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                    })}
                </p>
            </div>

            <div className='grid gap-6 md:grid-cols-3'>
                <div className='md:col-span-2'>
                    <Card>
                        <CardHeader>
                            <div className='flex justify-between items-center'>
                                <div>
                                    <CardTitle>
                                        <Trans>Shipment Status</Trans>
                                    </CardTitle>
                                    <CardDescription>
                                        <Trans>Tracking Number</Trans>: TRK-
                                        {order.id}
                                    </CardDescription>
                                </div>
                                <Badge className='px-3 py-1'>
                                    <Trans>{currentStatus}</Trans>
                                </Badge>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className='relative'>
                                {/* Timeline */}
                                <div className='space-y-8'>
                                    {timeline.map((event, index) => (
                                        <div key={index} className='flex gap-4'>
                                            <div className='flex flex-col items-center'>
                                                <div
                                                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                                                        event.completed
                                                            ? 'bg-green-100 text-green-600'
                                                            : event.current
                                                              ? 'bg-blue-100 text-blue-600'
                                                              : 'bg-gray-100 text-gray-400'
                                                    }`}
                                                >
                                                    {event.completed ? (
                                                        <CheckCircle2 className='w-5 h-5' />
                                                    ) : event.current ? (
                                                        <Truck className='w-5 h-5' />
                                                    ) : (
                                                        <Clock className='w-5 h-5' />
                                                    )}
                                                </div>
                                                {index <
                                                    timeline.length - 1 && (
                                                    <div
                                                        className={`w-0.5 h-12 ${event.completed ? 'bg-green-600' : 'bg-gray-200'}`}
                                                    />
                                                )}
                                            </div>
                                            <div className='flex-1 pt-1'>
                                                <h3 className='font-medium'>
                                                    <Trans>
                                                        {event.status}
                                                    </Trans>
                                                </h3>
                                                <p className='text-sm text-muted-foreground'>
                                                    {event.date}{' '}
                                                    {event.time &&
                                                        `• ${event.time}`}
                                                </p>
                                                {event.current && (
                                                    <p className='text-sm mt-1 text-blue-600'>
                                                        <Trans>
                                                            Your package is on
                                                            its way to you
                                                        </Trans>
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter className='flex justify-between'>
                            <div className='text-sm text-muted-foreground'>
                                <Trans>Carrier</Trans>: FastShip Express
                            </div>
                            <Button variant='outline' size='sm'>
                                <Trans>View Carrier Details</Trans>
                            </Button>
                        </CardFooter>
                    </Card>

                    <div className='mt-6'>
                        <Card>
                            <CardHeader className='pb-3'>
                                <div className='flex justify-between items-center'>
                                    <CardTitle>
                                        <Trans>Delivery Information</Trans>
                                    </CardTitle>
                                    <div className='flex items-center gap-2'>
                                        <Calendar className='w-4 h-4 text-muted-foreground' />
                                        <span className='text-sm font-medium'>
                                            <Trans>Estimated Delivery</Trans>:{' '}
                                            {estimatedDelivery}
                                        </span>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className='flex flex-col md:flex-row gap-6'>
                                    <div className='flex-1'>
                                        <h3 className='font-medium flex items-center gap-2 mb-2'>
                                            <MapPin className='w-4 h-4' />
                                            <Trans>Shipping Address</Trans>
                                        </h3>
                                        <div className='text-sm'>
                                            <p className='font-medium'>
                                                {order.shippingAddress?.name}
                                            </p>
                                            <p>
                                                {order.shippingAddress?.address}
                                            </p>
                                            <p>
                                                {
                                                    order.shippingAddress
                                                        ?.city_title
                                                }
                                                , {order.shippingAddress?.title}
                                            </p>
                                            <p>
                                                {order.shippingAddress
                                                    ?.country ||
                                                    'United States'}
                                            </p>
                                        </div>
                                    </div>
                                    <div className='flex-1'>
                                        <h3 className='font-medium flex items-center gap-2 mb-2'>
                                            <Phone className='w-4 h-4' />
                                            <Trans>Contact Information</Trans>
                                        </h3>
                                        <div className='text-sm'>
                                            <p>
                                                {order.shippingAddress?.phone}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                <div>
                    <Card>
                        <CardHeader>
                            <CardTitle>
                                <Trans>Order Summary</Trans>
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className='space-y-4'>
                                {order.items?.map((item) => (
                                    <div key={item.id} className='flex gap-3'>
                                        <div className='w-16 h-16 rounded-md overflow-hidden bg-muted flex-shrink-0'>
                                            <Image
                                                src={
                                                    item.product.images[0] || ''
                                                }
                                                alt={item.product.title}
                                                width={64}
                                                height={64}
                                                className='object-cover w-full h-full'
                                            />
                                        </div>
                                        <div className='flex-1'>
                                            <h4 className='font-medium text-sm'>
                                                <Trans>
                                                    {item.product.title}
                                                </Trans>
                                            </h4>
                                            <div className='flex justify-between mt-1'>
                                                <span className='text-sm'>
                                                    <Trans>Qty</Trans>:{' '}
                                                    {item.quantity}
                                                </span>
                                                <span className='font-medium'>
                                                    {parsePrice(
                                                        item.totals.total
                                                    )}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <Separator className='my-4' />

                            <button
                                className='flex w-full justify-between items-center text-sm py-2'
                                onClick={() => setIsDetailsOpen(!isDetailsOpen)}
                            >
                                <span className='font-medium'>
                                    <Trans>Price Details</Trans>
                                </span>
                                {isDetailsOpen ? (
                                    <ChevronUp className='w-4 h-4' />
                                ) : (
                                    <ChevronDown className='w-4 h-4' />
                                )}
                            </button>

                            {isDetailsOpen && (
                                <div className='space-y-2 mt-2 text-sm'>
                                    <div className='flex justify-between'>
                                        <span>
                                            <Trans>Subtotal</Trans>
                                        </span>
                                        <span>
                                            {parsePrice(order.totals.subtotal)}
                                        </span>
                                    </div>
                                    <div className='flex justify-between'>
                                        <span>
                                            <Trans>Shipping</Trans>
                                        </span>
                                        <span>
                                            {parsePrice(order.totals.shipping)}
                                        </span>
                                    </div>
                                    <div className='flex justify-between'>
                                        <span>
                                            <Trans>Taxes</Trans>
                                        </span>
                                        <span>
                                            {parsePrice(order.totals.taxes)}
                                        </span>
                                    </div>
                                </div>
                            )}

                            <Separator className='my-4' />

                            <div className='flex justify-between font-medium'>
                                <span>
                                    <Trans>Total</Trans>
                                </span>
                                <span>{parsePrice(order.totals.total)}</span>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button className='w-full'>
                                <Trans>Need Help?</Trans>
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </div>
    );
}

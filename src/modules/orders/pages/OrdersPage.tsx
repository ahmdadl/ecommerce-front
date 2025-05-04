import { Eye } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip';
import CopyToClipboard from '@/modules/core/components/CopyToClipboard';
import Link from '@/modules/core/components/LocalizedLink';
import { urls } from '@/modules/core/utils/urls';
import { Trans } from '@lingui/react/macro';
import { format } from 'date-fns';
import OrdersFilters from '../components/OrdersFilters';
import OrdersPagination from '../components/OrdersPagination';
import { useOrdersStore } from '../stores/orders-store';
import {
    getOrderPaymentStatusColor,
    getOrderStatusColor,
    parsePrice,
} from '../utils/methods';

export default function OrdersPage() {
    const orders = useOrdersStore.use.list();

    return (
        <div className='flex flex-col h-full min-h-full'>
            <div className='p-4'>
                <OrdersFilters />

                <div className='flex flex-col justify-between'>
                    <div className='rounded-md border'>
                        <div className='overflow-x-auto'>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className='max-w-[100px]'>
                                            <Trans>Order ID</Trans>
                                        </TableHead>
                                        <TableHead className='hidden md:table-cell'>
                                            <Trans>Date</Trans>
                                        </TableHead>
                                        <TableHead>
                                            <Trans>Status</Trans>
                                        </TableHead>
                                        <TableHead className='hidden md:table-cell'>
                                            <Trans>Payment Status</Trans>
                                        </TableHead>
                                        <TableHead className='hidden lg:table-cell'>
                                            <Trans>Payment Method</Trans>
                                        </TableHead>
                                        <TableHead className='hidden lg:table-cell'>
                                            <Trans>Items</Trans>
                                        </TableHead>
                                        <TableHead>
                                            <Trans>Total</Trans>
                                        </TableHead>
                                        <TableHead className='text-right'>
                                            <Trans>Actions</Trans>
                                        </TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {!orders?.length ? (
                                        <TableRow>
                                            <TableCell
                                                colSpan={8}
                                                className='h-24 text-center'
                                            >
                                                <Trans>No orders found.</Trans>
                                            </TableCell>
                                        </TableRow>
                                    ) : (
                                        orders.map((order) => (
                                            <TableRow key={order.id}>
                                                <TableCell className='text-sm text-wrap'>
                                                    <CopyToClipboard
                                                        copiedText={order.id}
                                                        viewableText={order.id?.substring(
                                                            0,
                                                            7
                                                        )}
                                                    />
                                                </TableCell>
                                                <TableCell className='hidden md:table-cell'>
                                                    {format(
                                                        new Date(
                                                            order.created_at
                                                        ),
                                                        'dd MMM yyyy'
                                                    )}
                                                </TableCell>
                                                <TableCell>
                                                    <Badge
                                                        className={`${getOrderStatusColor(order.status)}`}
                                                    >
                                                        {order.status}
                                                    </Badge>
                                                </TableCell>
                                                <TableCell className='hidden md:table-cell'>
                                                    <Badge
                                                        className={`${getOrderPaymentStatusColor(order.payment_status)}`}
                                                    >
                                                        {order.payment_status}
                                                    </Badge>
                                                </TableCell>
                                                <TableCell className='hidden lg:table-cell'>
                                                    {order.payment_method}
                                                </TableCell>
                                                <TableCell className='hidden lg:table-cell'>
                                                    {order.totals.items}
                                                </TableCell>
                                                <TableCell>
                                                    {parsePrice(
                                                        order.totals?.total
                                                    )}
                                                </TableCell>
                                                <TableCell className='text-right'>
                                                    <TooltipProvider>
                                                        <Tooltip>
                                                            <TooltipTrigger
                                                                asChild
                                                            >
                                                                <Button
                                                                    variant='ghost'
                                                                    size='icon'
                                                                    aria-label='View Details'
                                                                    asChild
                                                                >
                                                                    <Link
                                                                        to={urls.profile.orders.view(
                                                                            order
                                                                        )}
                                                                    >
                                                                        <Eye className='h-4 w-4' />
                                                                    </Link>
                                                                </Button>
                                                            </TooltipTrigger>
                                                            <TooltipContent>
                                                                <p>
                                                                    <Trans>
                                                                        View
                                                                        Details
                                                                    </Trans>
                                                                </p>
                                                            </TooltipContent>
                                                        </Tooltip>
                                                    </TooltipProvider>
                                                    {/* <TooltipProvider>
                                                        <Tooltip>
                                                            <TooltipTrigger
                                                                asChild
                                                            >
                                                                <Button
                                                                    variant='ghost'
                                                                    size='icon'
                                                                    aria-label='Track Order'
                                                                    asChild
                                                                >
                                                                    <Link
                                                                        to={urls.profile.orders.track(
                                                                            order
                                                                        )}
                                                                    >
                                                                        <MapPin className='h-4 w-4' />
                                                                    </Link>
                                                                </Button>
                                                            </TooltipTrigger>
                                                            <TooltipContent>
                                                                <p>
                                                                    <Trans>
                                                                        Track
                                                                        Order
                                                                    </Trans>
                                                                </p>
                                                            </TooltipContent>
                                                        </Tooltip>
                                                    </TooltipProvider> */}
                                                </TableCell>
                                            </TableRow>
                                        ))
                                    )}
                                </TableBody>
                            </Table>
                        </div>
                    </div>

                    <OrdersPagination />
                </div>
            </div>
        </div>
    );
}

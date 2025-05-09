import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { parsePrice } from '@/modules/orders/utils/methods';
import { Trans } from '@lingui/react/macro';
import { CreditCard, MinusCircleIcon, PlusCircleIcon } from 'lucide-react';
import { useWalletStore } from '../stores/wallet-store';
import { WalletTransactionEntity } from '../utils/types';

export default function MyWalletTransactionList() {
    const wallet = useWalletStore.use.record();
    const transactions = wallet.transactions;

    const renderTransactionIcon = (type: WalletTransactionEntity['type']) => {
        switch (type) {
            case 'credit':
                return <PlusCircleIcon className='text-green-600 w-4 h-4' />;
            case 'debit':
                return <MinusCircleIcon className='text-destructive w-4 h-4' />;
            default:
                return <CreditCard className='w-4 h-4' />;
        }
    };

    const renderStatusBadge = (status: WalletTransactionEntity['status']) => {
        switch (status) {
            case 'completed':
                return (
                    <Badge
                        variant='outline'
                        className='text-green-600 border-green-600'
                    >
                        <Trans>Completed</Trans>
                    </Badge>
                );
            case 'pending':
                return (
                    <Badge
                        variant='outline'
                        className='text-yellow-700 border-yellow-700'
                    >
                        <Trans>Pending</Trans>
                    </Badge>
                );
            case 'canceled':
                return (
                    <Badge
                        variant='outline'
                        className='text-destructive border-destructive'
                    >
                        <Trans>Canceled</Trans>
                    </Badge>
                );
            default:
                return null;
        }
    };

    if (!transactions?.length) {
        return null;
    }

    return (
        <Card id='transactions'>
            <CardHeader>
                <CardTitle>
                    <Trans>Recent Transactions</Trans>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <Tabs defaultValue='all'>
                    <TabsList className='mb-4'>
                        <TabsTrigger value='all'>
                            <Trans>All</Trans>
                        </TabsTrigger>
                        <TabsTrigger value='purchases'>
                            <Trans>Purchases</Trans>
                        </TabsTrigger>
                        <TabsTrigger value='deposits'>
                            <Trans>Deposits</Trans>
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value='all' className='space-y-4'>
                        {transactions.map((transaction) => (
                            <div
                                key={transaction.id}
                                className='flex justify-between items-center p-3 border rounded-lg hover:bg-gray-50 transition-colors'
                            >
                                <div className='flex items-center gap-3'>
                                    <div className='p-2 rounded-full bg-gray-100'>
                                        {renderTransactionIcon(
                                            transaction.type
                                        )}
                                    </div>
                                    <div>
                                        <p
                                            className={`font-medium ${transaction.type === 'debit' ? 'text-wallet-danger' : 'text-wallet-success'}`}
                                        >
                                            {transaction.type === 'debit'
                                                ? '-'
                                                : '+'}
                                            {parsePrice(transaction.amount)}
                                        </p>

                                        <p className='text-xs text-gray-500'>
                                            {transaction.formatted_date}
                                        </p>
                                    </div>
                                </div>
                                <div className='flex flex-col items-end'>
                                    <p className='font-medium'>
                                        {transaction.notes}
                                    </p>
                                    {renderStatusBadge(transaction.status)}
                                </div>
                            </div>
                        ))}
                    </TabsContent>

                    <TabsContent value='purchases' className='space-y-4'>
                        {transactions
                            .filter((t) => t.type === 'debit')
                            .map((transaction) => (
                                <div
                                    key={transaction.id}
                                    className='flex justify-between items-center p-3 border rounded-lg hover:bg-gray-50 transition-colors hover:shadow-lg'
                                >
                                    <div className='flex items-center gap-3'>
                                        <div className='p-2 rounded-full bg-gray-100'>
                                            {renderTransactionIcon(
                                                transaction.type
                                            )}
                                        </div>
                                        <div>
                                            <p className='font-medium text-wallet-danger'>
                                                -{' '}
                                                {parsePrice(transaction.amount)}
                                            </p>
                                            <p className='text-xs text-gray-500'>
                                                {transaction.formatted_date}
                                            </p>
                                        </div>
                                    </div>
                                    <div className='flex flex-col items-end'>
                                        <p className='font-medium'>
                                            {transaction.notes}
                                        </p>
                                        {renderStatusBadge(transaction.status)}
                                    </div>
                                </div>
                            ))}
                    </TabsContent>

                    <TabsContent value='deposits' className='space-y-4'>
                        {transactions
                            .filter((t) => t.type === 'credit')
                            .map((transaction) => (
                                <div
                                    key={transaction.id}
                                    className='flex justify-between items-center p-3 border rounded-lg hover:bg-gray-50 transition-colors'
                                >
                                    <div className='flex items-center gap-3'>
                                        <div className='p-2 rounded-full bg-gray-100'>
                                            {renderTransactionIcon(
                                                transaction.type
                                            )}
                                        </div>
                                        <div>
                                            <p className='font-medium text-wallet-success'>
                                                +
                                                {parsePrice(transaction.amount)}
                                            </p>

                                            <p className='text-xs text-gray-500'>
                                                {transaction.formatted_date}
                                            </p>
                                        </div>
                                    </div>
                                    <div className='flex flex-col items-end'>
                                        <p className='font-medium'>
                                            {transaction.notes}
                                        </p>
                                        {renderStatusBadge(transaction.status)}
                                    </div>
                                </div>
                            ))}
                    </TabsContent>
                </Tabs>
            </CardContent>
        </Card>
    );
}

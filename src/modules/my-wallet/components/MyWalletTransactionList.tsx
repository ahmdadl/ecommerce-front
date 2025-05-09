import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Trans } from '@lingui/react/macro';
import { ArrowDown, ArrowUp, CreditCard } from 'lucide-react';

export interface Transaction {
    id: string;
    type: 'purchase' | 'refund' | 'deposit' | 'withdrawal';
    amount: number;
    currency: string;
    date: string;
    description: string;
    status: 'completed' | 'pending' | 'failed';
}

const transactions: Transaction[] = [
    {
        id: '1',
        type: 'purchase',
        amount: 49.99,
        currency: '$',
        date: '2025-05-06',
        description: 'Premium Headphones',
        status: 'completed',
    },
    {
        id: '2',
        type: 'deposit',
        amount: 100.0,
        currency: '$',
        date: '2025-05-04',
        description: 'Deposit from Credit Card',
        status: 'completed',
    },
    {
        id: '3',
        type: 'refund',
        amount: 25.5,
        currency: '$',
        date: '2025-05-02',
        description: 'Refund: Smart Watch',
        status: 'completed',
    },
    {
        id: '4',
        type: 'purchase',
        amount: 129.99,
        currency: '$',
        date: '2025-04-28',
        description: 'Wireless Earbuds',
        status: 'completed',
    },
    {
        id: '5',
        type: 'purchase',
        amount: 89.99,
        currency: '$',
        date: '2025-04-25',
        description: 'Smart Watch',
        status: 'pending',
    },
];

export default function MyWalletTransactionList() {
    const renderTransactionIcon = (type: Transaction['type']) => {
        switch (type) {
            case 'purchase':
                return <ArrowUp className='text-destructive w-4 h-4' />;
            case 'refund':
                return <ArrowDown className='text-green-600 w-4 h-4' />;
            case 'deposit':
                return <ArrowDown className='text-green-600 w-4 h-4' />;
            case 'withdrawal':
                return <ArrowUp className='text-destructive w-4 h-4' />;
            default:
                return <CreditCard className='w-4 h-4' />;
        }
    };

    const renderStatusBadge = (status: Transaction['status']) => {
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
                        className='text-orange-600 border-orange-600'
                    >
                        <Trans>Pending</Trans>
                    </Badge>
                );
            case 'failed':
                return (
                    <Badge
                        variant='outline'
                        className='text-destructive border-destructive'
                    >
                        <Trans>Failed</Trans>
                    </Badge>
                );
            default:
                return null;
        }
    };

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
                                        <p className='font-medium'>
                                            {transaction.description}
                                        </p>
                                        <p className='text-xs text-gray-500'>
                                            {transaction.date}
                                        </p>
                                    </div>
                                </div>
                                <div className='flex flex-col items-end'>
                                    <p
                                        className={`font-medium ${transaction.type === 'purchase' || transaction.type === 'withdrawal' ? 'text-wallet-danger' : 'text-wallet-success'}`}
                                    >
                                        {transaction.type === 'purchase' ||
                                        transaction.type === 'withdrawal'
                                            ? '-'
                                            : '+'}
                                        {transaction.currency}
                                        {transaction.amount.toFixed(2)}
                                    </p>
                                    {renderStatusBadge(transaction.status)}
                                </div>
                            </div>
                        ))}
                    </TabsContent>

                    <TabsContent value='purchases' className='space-y-4'>
                        {transactions
                            .filter((t) => t.type === 'purchase')
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
                                            <p className='font-medium'>
                                                {transaction.description}
                                            </p>
                                            <p className='text-xs text-gray-500'>
                                                {transaction.date}
                                            </p>
                                        </div>
                                    </div>
                                    <div className='flex flex-col items-end'>
                                        <p className='font-medium text-wallet-danger'>
                                            -{transaction.currency}
                                            {transaction.amount.toFixed(2)}
                                        </p>
                                        {renderStatusBadge(transaction.status)}
                                    </div>
                                </div>
                            ))}
                    </TabsContent>

                    <TabsContent value='deposits' className='space-y-4'>
                        {transactions
                            .filter(
                                (t) =>
                                    t.type === 'deposit' || t.type === 'refund'
                            )
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
                                            <p className='font-medium'>
                                                {transaction.description}
                                            </p>
                                            <p className='text-xs text-gray-500'>
                                                {transaction.date}
                                            </p>
                                        </div>
                                    </div>
                                    <div className='flex flex-col items-end'>
                                        <p className='font-medium text-wallet-success'>
                                            +{transaction.currency}
                                            {transaction.amount.toFixed(2)}
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

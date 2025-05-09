import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { parsePrice } from '@/modules/orders/utils/methods';
import { Trans } from '@lingui/react/macro';
import { ArrowRight, Plus, Wallet } from 'lucide-react';
import { walletPopupStore } from '../stores/wallet-popup-store';
import { useWalletStore } from '../stores/wallet-store';

export default function MyWalletBalanceCard() {
    const wallet = useWalletStore.use.record();

    return (
        <Card className='relative overflow-hidden bg-gradient-to-br from-primary to-primary/60 text-white shadow-lg border-0'>
            <CardContent className='p-6'>
                <div className='flex justify-between items-center mb-6'>
                    <div className='flex items-center gap-2'>
                        <Wallet className='w-6 h-6' />
                        <h3 className='font-semibold'>
                            <Trans>My Wallet</Trans>
                        </h3>
                    </div>
                    <div className='text-xs opacity-80'>
                        {wallet.id.slice(0, 3)}...{wallet.id.slice(-4)}
                    </div>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6'>
                    <div className='flex flex-col'>
                        <span className='text-sm font-medium opacity-80'>
                            <Trans>Available Balance</Trans>
                        </span>
                        <span className='text-3xl font-bold'>
                            {parsePrice(wallet.balance.available)}
                        </span>
                    </div>

                    <div className='flex flex-col'>
                        <span className='text-sm font-medium opacity-80'>
                            <Trans>Pending</Trans>
                        </span>
                        <span className='text-2xl font-bold'>
                            {parsePrice(wallet.balance.pending)}
                        </span>
                    </div>

                    <div className='flex flex-col'>
                        <span className='text-sm font-medium opacity-80'>
                            <Trans>Total Balance</Trans>
                        </span>
                        <span className='text-2xl font-bold'>
                            {parsePrice(wallet.balance.total)}
                        </span>
                    </div>
                </div>

                <div className='flex gap-2'>
                    <Button
                        variant='secondary'
                        className='flex-1 bg-white text-primary hover:bg-opacity-90 hover:bg-white/70 transition-all duration-500'
                        onClick={() => {
                            walletPopupStore.setState({ isOpened: true });
                        }}
                    >
                        <Plus className='w-4 h-4 mr-1' />
                        <Trans>Add Funds</Trans>
                    </Button>
                    <Button
                        variant='outline'
                        className='flex-1 text-primary hover:bg-white/70 transition-all duration-500'
                        onClick={() => {
                            document
                                .getElementById('transactions')
                                ?.scrollIntoView({ behavior: 'smooth' });
                        }}
                    >
                        <Trans>Transactions</Trans>
                        <ArrowRight className='w-4 h-4 ml-1' />
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}

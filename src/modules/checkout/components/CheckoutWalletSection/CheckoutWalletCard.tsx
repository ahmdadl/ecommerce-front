import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import { useCartStore } from '@/modules/cart/stores/cart-store';
import { cartApi } from '@/modules/cart/utils/cart-api';
import loadingToast from '@/modules/core/utils/methods';
import { parsePrice } from '@/modules/orders/utils/methods';
import { Trans } from '@lingui/react/macro';
import { DialogTitle } from '@radix-ui/react-dialog';
import { Loader2, Wallet, X } from 'lucide-react';
import { useRef, useState } from 'react';
import CheckoutWalletAmountSlider from './CheckoutWalletAmountSlider';

export default function CheckoutWalletCard() {
    const wallet = useCartStore.use.wallet();
    const totals = useCartStore.use.cart().totals;

    const [isLoading, setIsLoading] = useState(false);
    const amountInput = useRef<HTMLInputElement>(null);

    const disabled = isLoading || totals.wallet > 0;

    const walletBalance = wallet?.balance.available || 0;
    const orderTotal = totals.total + (totals.wallet ?? 0);

    function handleApply() {
        if (disabled) return;

        setIsLoading(true);

        console.log(amountInput);

        loadingToast(cartApi.applyWallet(Number(amountInput.current?.value!)), {
            onFinally: () => {
                setIsLoading(false);
            },
        });
    }

    function handleClear() {
        if (isLoading) return;

        setIsLoading(true);

        loadingToast(cartApi.removeWallet(), {
            onFinally: () => {
                setIsLoading(false);
            },
        });
    }

    return (
        <Card className='w-full overflow-hidden bg-transparent shadow-none border-none'>
            <CardHeader className='pb-2'>
                <CardTitle className='text-lg text-wallet-dark flex justify-between items-center'>
                    <Trans>Pay with E-Wallet</Trans>
                    <span className='text-xs font-normal px-2 py-1 rounded-full'>
                        <Trans>Partial Payment</Trans>
                    </span>
                </CardTitle>
            </CardHeader>

            <CardContent className='space-y-6'>
                <DialogTitle>
                    <span className='sr-only'>
                        <Trans>Pay with E-Wallet</Trans>
                    </span>
                </DialogTitle>
                <div className={cn('flex flex-col items-center gap-2')}>
                    <div className='flex items-center gap-2 text-wallet-tertiary mb-1'>
                        <Wallet size={18} className='animate-pulse-slow' />
                        <span className='text-sm font-medium'>
                            <Trans>E-Wallet Balance</Trans>
                        </span>
                    </div>
                    <div className='text-3xl font-semibold text-wallet-primary'>
                        {parsePrice(walletBalance)}
                    </div>
                    <div className='text-xs text-muted-foreground mt-1'>
                        <Trans>Available for use in this purchase</Trans>
                    </div>
                </div>

                <div className='space-y-4'>
                    <CheckoutWalletAmountSlider
                        walletBalance={walletBalance}
                        orderTotal={orderTotal}
                        inputRef={amountInput}
                        disabled={disabled}
                        defaultAmount={totals.wallet ?? 0}
                    />

                    <Separator />

                    <div className='flex flex-row flex-nowrap gap-4'>
                        <Button
                            className='w-2/3'
                            onClick={handleApply}
                            disabled={disabled}
                        >
                            {isLoading ? (
                                <Loader2 className='h-4 w-4 animate-spin me-2' />
                            ) : (
                                <Wallet className='h-4 w-4 me-2' />
                            )}
                            <Trans>Apply</Trans>
                        </Button>

                        <Button
                            variant='destructive'
                            className='w-1/3'
                            onClick={handleClear}
                        >
                            {isLoading ? (
                                <Loader2 className='h-4 w-4 animate-spin me-2' />
                            ) : (
                                <X className='h-4 w-4 me-2' />
                            )}
                            <Trans>Clear</Trans>
                        </Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}

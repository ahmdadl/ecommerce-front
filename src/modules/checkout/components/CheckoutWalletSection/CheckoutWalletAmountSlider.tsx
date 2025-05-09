import { Slider } from '@/components/ui/slider';
import { cn } from '@/lib/utils';
import { parsePrice } from '@/modules/orders/utils/methods';
import { Trans } from '@lingui/react/macro';
import { useState } from 'react';

interface AmountSliderProps {
    walletBalance: number;
    orderTotal: number;
    className?: string;
    disabled?: boolean;
    defaultAmount: number;
    inputRef: any;
}

export default function CheckoutWalletAmountSlider({
    walletBalance,
    orderTotal,
    className,
    disabled,
    defaultAmount,
    inputRef,
}: AmountSliderProps) {
    const maxAmount = Math.min(walletBalance, orderTotal);
    const [amount, setAmount] = useState(defaultAmount);

    // Handle slider change
    const handleSliderChange = (value: number[]) => {
        setAmount(value[0]);
    };

    return (
        <div className={cn('w-full space-y-6', className)}>
            <input
                type='hidden'
                hidden
                name='wallet-slider-amount'
                ref={inputRef}
                value={amount}
            />
            <div className='space-y-2'>
                <div className='flex justify-between items-center'>
                    <span className='text-sm text-muted-foreground'>
                        <Trans>Amount to use</Trans>
                    </span>
                    <span className='font-medium'>{parsePrice(amount)}</span>
                </div>

                <Slider
                    value={[amount]}
                    max={maxAmount - 1}
                    step={1}
                    onValueChange={handleSliderChange}
                    className='py-2'
                    disabled={disabled}
                />

                <div className='flex justify-between text-xs text-muted-foreground'>
                    <span>EGP 0</span>
                    <span>{parsePrice(maxAmount - 1)}</span>
                </div>
            </div>

            <div className='bg-wallet-bg p-4 rounded-md'>
                <div className='flex justify-between items-center mb-2'>
                    <span className='text-sm'>
                        <Trans>From wallet</Trans>
                    </span>
                    <span className='font-medium text-wallet-primary'>
                        {parsePrice(amount)}
                    </span>
                </div>
                <div className='flex justify-between items-center'>
                    <span className='text-sm'>
                        <Trans>Remaining to pay</Trans>
                    </span>
                    <span className='font-medium'>
                        {parsePrice(orderTotal - amount)}
                    </span>
                </div>
            </div>
        </div>
    );
}

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { Trans } from '@lingui/react/macro';
import { useState } from 'react';
import { useWalletPopupStore } from '../../stores/wallet-popup-store';
import MyWalletAddFundForm from './MyWalletAddFundForm';

export default function MyWalletAddFundPopup() {
    const isOpened = useWalletPopupStore.use.isOpened();

    const [amount, setAmount] = useState('');
    const [selectedMethod, setSelectedMethod] = useState('');
    // const { toast } = useToast();

    const handleAddFunds = () => {
        const amountValue = parseFloat(amount);

        if (isNaN(amountValue) || amountValue <= 0) {
            // toast({
            //     title: 'Invalid amount',
            //     description: 'Please enter a valid amount.',
            //     variant: 'destructive',
            // });
            return;
        }

        if (!selectedMethod) {
            // toast({
            //     title: 'Payment method required',
            //     description: 'Please select a payment method.',
            //     variant: 'destructive',
            // });
            return;
        }

        // onAddFunds(amountValue, selectedMethod);
        setAmount('');
        setSelectedMethod('');
        // onOpenChange(false);

        // toast({
        //     title: 'Funds added successfully',
        //     description: `$${amountValue.toFixed(2)} has been added to your wallet.`,
        // });
    };

    return (
        <Dialog
            open={isOpened}
            onOpenChange={(opened) =>
                useWalletPopupStore.setState({ isOpened: opened })
            }
        >
            <DialogContent className='sm:max-w-[425px]'>
                <DialogHeader>
                    <DialogTitle>
                        <Trans>Add Funds to Your Wallet</Trans>
                    </DialogTitle>
                </DialogHeader>

                <MyWalletAddFundForm />
            </DialogContent>
        </Dialog>
    );
}

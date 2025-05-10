import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { Trans } from '@lingui/react/macro';
import { useWalletPopupStore } from '../../stores/wallet-popup-store';
import MyWalletAddFundForm from './MyWalletAddFundForm';

export default function MyWalletAddFundPopup() {
    const isOpened = useWalletPopupStore.use.isOpened();

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

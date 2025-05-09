import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import useUserStore from '@/modules/core/stores/userStore';
import { Trans } from '@lingui/react/macro';
import { Wallet2 } from 'lucide-react';
import CheckoutWalletCard from './CheckoutWalletCard';

export default function CheckoutWalletSection() {
    useUserStore.use.role();
    const isCustomer = useUserStore.use.isCustomer();

    if (!isCustomer()) return null;

    return (
        <div className='mt-5'>
            <Dialog>
                <DialogTrigger asChild>
                    <Button className='w-full bg-accent text-accent-foreground'>
                        <Wallet2 className='me-2 size-4' />
                        <Trans>Partial Pay with E-Wallet</Trans>
                    </Button>
                </DialogTrigger>
                <DialogContent>
                    <CheckoutWalletCard />
                </DialogContent>
            </Dialog>
        </div>
    );
}

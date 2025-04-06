import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
} from '@/components/ui/sheet';
import useLocaleStore from '@/modules/core/stores/localeStore';
import useNavbarStore from '@/modules/core/stores/navbar-store';
import { Trans } from '@lingui/react/macro';
import { ShoppingCart } from 'lucide-react';
import CartMenuContent from './CartMenuContent';

export default function CartSideMenu() {
    const isOpened = useNavbarStore.use.isCartOpened();

    const isRtl = useLocaleStore.getState().isRtl;

    return (
        <Sheet
            open={isOpened}
            onOpenChange={(opened: boolean) =>
                useNavbarStore.setState({ isCartOpened: opened })
            }
        >
            <SheetContent
                side={isRtl() ? 'left' : 'right'}
                className='flex w-full flex-col sm:max-w-md 2xl:max-w-lg'
            >
                <SheetHeader className='border-b pb-4'>
                    <SheetTitle className='flex items-center'>
                        <ShoppingCart className='mr-2 h-5 w-5' />
                        <Trans>Your Cart</Trans>
                    </SheetTitle>
                </SheetHeader>

                <CartMenuContent />
            </SheetContent>
        </Sheet>
    );
}

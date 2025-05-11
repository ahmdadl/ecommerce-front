import { Button } from '@/components/ui/button';
import { useCartStore } from '@/modules/cart/stores/cart-store';
import { Trans } from '@lingui/react/macro';
import { ShoppingCart } from 'lucide-react';
import useNavbarStore from '../../stores/navbar-store';

export default function BMenuCart() {
    const cart = useCartStore.use.cart();

    const cartCount = cart?.totals?.items;

    return (
        <Button
            variant='ghost'
            className='flex flex-col items-center justify-center h-full'
            onClick={() => useNavbarStore.setState({ isCartOpened: true })}
        >
            <div className='relative'>
                <ShoppingCart className='h-5 w-5' />
                {cartCount > 0 && (
                    <span className='absolute -top-2 ltr:-right-2 rtl:-left-2 bg-primary text-primary-foreground text-xs rounded-full h-4 w-4 flex items-center justify-center'>
                        {cartCount}
                    </span>
                )}
            </div>
            <span className='text-xs'>
                <Trans>Cart</Trans>
            </span>
        </Button>
    );
}

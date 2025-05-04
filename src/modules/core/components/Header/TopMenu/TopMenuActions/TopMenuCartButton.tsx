import { Button } from '@/components/ui/button';
import { useCartStore } from '@/modules/cart/stores/cart-store';
import useNavbarStore from '@/modules/core/stores/navbar-store';
import { Trans } from '@lingui/react/macro';
import { ShoppingCart } from 'lucide-react';

export default function TopMenuCartButton() {
    const cart = useCartStore.use.cart();

    const cartCount = cart?.totals?.items;

    return (
        <Button
            variant={'outline'}
            className='flex items-center hover:text-primary'
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
            <span className='ms-1 hidden xl:inline'>
                <Trans>Cart</Trans>
            </span>
        </Button>
    );
}

import { ShoppingBag, ShoppingCart } from 'lucide-react';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetFooter,
    SheetHeader,
    SheetTitle,
} from '@/components/ui/sheet';
import useLocaleStore from '@/modules/core/stores/localeStore';
import useNavbarStore from '@/modules/core/stores/navbar-store';
import { Trans } from '@lingui/react/macro';
import { Link } from 'react-router';
import CartItemQuantity from './CartItemQuantity';

// Fake product data
const cartItems = [
    {
        id: 1,
        name: 'Minimalist Leather Backpack',
        price: 129.99,
        discountedPrice: 99.99,
        isDiscounted: true,
        image: '/placeholder.svg?height=80&width=80',
        quantity: 1,
    },
    {
        id: 2,
        name: 'Wireless Noise-Cancelling Headphones',
        price: 249.99,
        discountedPrice: null,
        isDiscounted: false,
        image: '/placeholder.svg?height=80&width=80',
        quantity: 2,
    },
    {
        id: 3,
        name: 'Organic Cotton T-Shirt',
        price: 34.99,
        discountedPrice: 24.99,
        isDiscounted: true,
        image: '/placeholder.svg?height=80&width=80',
        quantity: 1,
    },
    {
        id: 4,
        name: 'Smart Water Bottle',
        price: 45.99,
        discountedPrice: null,
        isDiscounted: false,
        image: '/placeholder.svg?height=80&width=80',
        quantity: 1,
    },
];

export default function CartSideMenu() {
    const isRtl = useLocaleStore.use.isRtl();
    const isOpened = useNavbarStore.use.isCartOpened();

    const [items, setItems] = useState(cartItems);

    const updateQuantity = (id: number, newQuantity: number) => {
        if (newQuantity < 1) return;

        setItems(
            items.map((item) =>
                item.id === id ? { ...item, quantity: newQuantity } : item
            )
        );
    };

    const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

    const subtotal = items.reduce((sum, item) => {
        const price = item.isDiscounted ? item.discountedPrice! : item.price;
        return sum + price * item.quantity;
    }, 0);

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
                        Your Cart ({totalItems}{' '}
                        {totalItems === 1 ? 'item' : 'items'})
                    </SheetTitle>
                </SheetHeader>

                <div className='flex-1 overflow-y-auto py-4'>
                    {items.length === 0 ? (
                        <div className='flex h-full flex-col items-center justify-center space-y-2 text-center'>
                            <ShoppingBag className='h-12 w-12 text-muted-foreground' />
                            <div className='text-lg font-medium'>
                                <Trans>Your cart is empty</Trans>
                            </div>
                            <div className='text-sm text-muted-foreground'>
                                <Trans>
                                    {' '}
                                    Add items to your cart to see them here.
                                </Trans>
                            </div>
                        </div>
                    ) : (
                        <ul className='space-y-4 px-3'>
                            {items.map((item) => (
                                <li
                                    key={item.id}
                                    className='flex items-center space-x-3 border-b pb-4'
                                >
                                    <div className='h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border'>
                                        <img
                                            src={
                                                item.image || '/placeholder.svg'
                                            }
                                            alt={item.name}
                                            width={80}
                                            height={80}
                                            className='h-full w-full object-cover'
                                        />
                                    </div>
                                    <div className='flex flex-1 flex-col'>
                                        <div className='flex justify-between text-base font-medium'>
                                            <h3 className='line-clamp-2'>
                                                {item.name}
                                            </h3>
                                        </div>
                                        <div className='mt-1 flex items-end justify-between'>
                                            <div>
                                                {item.isDiscounted ? (
                                                    <div className='flex items-center gap-1.5'>
                                                        <span className='font-medium text-primary'>
                                                            $
                                                            {item.discountedPrice?.toFixed(
                                                                2
                                                            )}
                                                        </span>
                                                        <span className='text-sm text-muted-foreground line-through'>
                                                            $
                                                            {item.price.toFixed(
                                                                2
                                                            )}
                                                        </span>
                                                    </div>
                                                ) : (
                                                    <span className='font-medium'>
                                                        ${item.price.toFixed(2)}
                                                    </span>
                                                )}
                                            </div>
                                            <div className='flex items-center border rounded-md'>
                                                <CartItemQuantity
                                                    initialQuantity={
                                                        item.quantity
                                                    }
                                                    onChange={(quantity) =>
                                                        updateQuantity(
                                                            item.id,
                                                            quantity
                                                        )
                                                    }
                                                    onRemove={() =>
                                                        setItems(
                                                            items.filter(
                                                                (i) =>
                                                                    i.id !==
                                                                    item.id
                                                            )
                                                        )
                                                    }
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                <SheetFooter className='border-t pt-4'>
                    <div className='space-y-4 w-full'>
                        <div className='flex items-center justify-between text-base font-medium'>
                            <span>Subtotal</span>
                            <span>${subtotal.toFixed(2)}</span>
                        </div>
                        <div className='text-sm text-muted-foreground'>
                            Shipping and taxes calculated at checkout.
                        </div>
                        <div className='grid grid-cols-2 gap-2'>
                            <SheetClose asChild>
                                <Button variant='outline' asChild>
                                    <Link to='/cart'>View Cart</Link>
                                </Button>
                            </SheetClose>
                            <SheetClose asChild>
                                <Button asChild>
                                    <Link to='/checkout'>Checkout</Link>
                                </Button>
                            </SheetClose>
                        </div>
                    </div>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    );
}

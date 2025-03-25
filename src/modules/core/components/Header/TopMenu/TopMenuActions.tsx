import { Button } from '@/components/ui/button';
import { Trans } from '@lingui/macro';
import { BarChart2, Heart, Search, ShoppingCart } from 'lucide-react';

export default function TopMenuActions() {
    const cartCount = 2;
    const wishlistCount = 3;
    const compareCount = 5;

    return (
        <div className='hidden md:flex items-center space-x-4 rtl:space-x-reverse'>
            {/* Search Icon - Mobile */}
            <Button
                variant='outline'
                className='xl:hidden flex p-2 hover:text-primary'
                // onClick={() => setSearchOpen(!searchOpen)}
                aria-label='Search'
            >
                <Search className='h-5 w-5' />
            </Button>

            {/* Cart */}
            <Button
                variant={'outline'}
                className='flex items-center hover:text-primary'
            >
                <div className='relative'>
                    <ShoppingCart className='h-5 w-5' />
                    {cartCount > 0 && (
                        <span className='absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full h-4 w-4 flex items-center justify-center'>
                            {cartCount}
                        </span>
                    )}
                </div>
                <span className='ms-1 hidden xl:inline'>
                    <Trans>Cart</Trans>
                </span>
            </Button>

            {/* Wishlist */}
            <Button
                variant={'outline'}
                className='flex items-center hover:text-primary'
            >
                <div className='relative'>
                    <Heart className='h-5 w-5' />
                    {wishlistCount > 0 && (
                        <span className='absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full h-4 w-4 flex items-center justify-center'>
                            {wishlistCount}
                        </span>
                    )}
                </div>
                <span className='ms-1 hidden xl:inline'>
                    <Trans>Wishlist</Trans>
                </span>
            </Button>

            {/* Compare */}
            <Button
                variant={'outline'}
                className='flex items-center hover:text-primary'
            >
                <div className='relative'>
                    <BarChart2 className='h-5 w-5' />
                    {compareCount > 0 && (
                        <span className='absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full h-4 w-4 flex items-center justify-center'>
                            {compareCount}
                        </span>
                    )}
                </div>
                <span className='ms-1 hidden xl:inline'>
                    <Trans>Compare</Trans>
                </span>
            </Button>
        </div>
    );
}

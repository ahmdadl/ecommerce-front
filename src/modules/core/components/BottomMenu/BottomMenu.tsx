import { Button } from '@/components/ui/button';
import { Trans } from '@lingui/react/macro';
import { Home, LayoutGrid, Search, ShoppingCart, User } from 'lucide-react';
import { Link } from 'react-router';
import useNavbarStore from '../../stores/navbar-store';

export function BottomMenu() {
    const isLoggedIn = true;

    return (
        <div className='fixed bottom-0 left-0 z-50 w-full h-16 bg-background border-t md:hidden'>
            <div className='flex items-center align-center justify-between px-3'>
                <Button
                    variant='ghost'
                    className='flex flex-col items-center justify-center'
                    asChild
                >
                    <Link to='/shop' className='px-6'>
                        <Home className='h-5 w-5' />
                        <span className='text-xs'>
                            <Trans>Shop</Trans>
                        </span>
                    </Link>
                </Button>

                <Button
                    variant='ghost'
                    className='flex flex-col items-center justify-center h-full'
                    asChild
                >
                    <Link to='/Categories' className='px-6'>
                        <LayoutGrid className='h-5 w-5' />
                        <span className='text-xs'>
                            <Trans>Categories</Trans>
                        </span>
                    </Link>
                </Button>

                <Button
                    variant='ghost'
                    className='flex flex-col items-center justify-center h-full'
                    asChild
                >
                    <Link to='/search' className='px-6'>
                        <Search className='h-5 w-5' />
                        <span className='text-xs'>
                            <Trans>search</Trans>
                        </span>
                    </Link>
                </Button>

                <Button
                    variant='ghost'
                    className='flex flex-col items-center justify-center h-full'
                    asChild
                    onClick={() =>
                        useNavbarStore.setState({ isCartOpened: true })
                    }
                >
                    <Link to='/Cart' className='px-6'>
                        <ShoppingCart className='h-5 w-5' />
                        <span className='text-xs'>
                            <Trans>Cart</Trans>
                        </span>
                    </Link>
                </Button>

                <Button
                    variant='ghost'
                    className='flex flex-col items-center justify-center h-full'
                    asChild
                >
                    <Link to='/profile' className='px-6'>
                        <User className='h-5 w-5' />
                        <span className='text-xs'>
                            {isLoggedIn ? (
                                <Trans>Profile</Trans>
                            ) : (
                                <Trans>Login</Trans>
                            )}
                        </span>
                    </Link>
                </Button>
            </div>
        </div>
    );
}

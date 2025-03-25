import { Trans } from '@lingui/macro';
import { BarChart2, Heart, LogOut, ShoppingCart, User } from 'lucide-react';
import { Link } from 'react-router';

import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import useUserStore from '@/modules/core/stores/userStore';

export default function TopMenuUserSection() {
    const isCustomer = useUserStore.use.isCustomer();
    const userName = useUserStore.use.name();
    const userEmail = useUserStore.use.email();

    return (
        <>
            {isCustomer() ? (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button
                            variant='ghost'
                            className='flex items-center gap-2'
                        >
                            <User className='h-5 w-5' />
                            <span className='hidden lg:inline'>{userName}</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align='end'>
                        <DropdownMenuLabel>
                            <div className='font-medium'>{userName}</div>
                            <div className='text-xs text-muted-foreground'>
                                {userEmail}
                            </div>
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem asChild>
                            <Link
                                to='/profile'
                                className='flex items-center gap-2 cursor-pointer w-full'
                            >
                                <User className='h-4 w-4' />
                                <Trans>Profile</Trans>
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                            <Link
                                to='/wishlist'
                                className='flex items-center gap-2 cursor-pointer w-full'
                            >
                                <Heart className='h-4 w-4' />
                                <Trans>Wishlist</Trans>
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                            <Link
                                to='/cart'
                                className='flex items-center gap-2 cursor-pointer w-full'
                            >
                                <ShoppingCart className='h-4 w-4' />
                                <Trans>Cart</Trans>
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                            <Link
                                to='/compare'
                                className='flex items-center gap-2 cursor-pointer w-full'
                            >
                                <BarChart2 className='h-4 w-4' />
                                <Trans>Compare</Trans>
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem asChild>
                            <Link
                                to='/logout'
                                className='flex items-center gap-2 cursor-pointer w-full text-destructive'
                            >
                                <LogOut className='h-4 w-4' />
                                <Trans>Logout</Trans>
                            </Link>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            ) : (
                <div className='flex items-center space-x-2 rtl:space-x-reverse'>
                    <Button variant='outline' size='sm' asChild>
                        <Link to='/login'>
                            <Trans>Login</Trans>
                        </Link>
                    </Button>
                    <Button size='sm' asChild>
                        <Link to='/register'>
                            <Trans>Register</Trans>
                        </Link>
                    </Button>
                </div>
            )}
        </>
    );
}

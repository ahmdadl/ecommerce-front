import { Heart } from 'lucide-react';

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
import { urls } from '@/modules/core/utils/urls';
import Link from '@core/components/LocalizedLink';
import { Trans } from '@lingui/react/macro';
import WishlistSideMenuContent from './WishlistSideMenuContent';

export default function WishlistSideMenu() {
    const isOpened = useNavbarStore.use.isWishlistOpened();

    const isRtl = useLocaleStore.getState().isRtl;

    return (
        <Sheet
            open={isOpened}
            onOpenChange={(opened: boolean) =>
                useNavbarStore.setState({ isWishlistOpened: opened })
            }
        >
            <SheetContent
                side={isRtl() ? 'left' : 'right'}
                className='flex w-full flex-col sm:max-w-md 2xl:max-w-lg'
            >
                <SheetHeader className='border-b pb-4'>
                    <SheetTitle className='flex items-center'>
                        <Heart className='mr-2 h-5 w-5' />
                        <Trans>Your Wishlist</Trans>
                    </SheetTitle>
                </SheetHeader>

                <WishlistSideMenuContent />

                <SheetFooter className='border-t pt-4'>
                    <div className='space-y-4 w-full'>
                        <SheetClose asChild>
                            <Button
                                // variant='outline'
                                className='w-full'
                                asChild
                            >
                                <Link to={urls.profile.wishlist}>
                                    View Wishlist
                                </Link>
                            </Button>
                        </SheetClose>
                    </div>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    );
}

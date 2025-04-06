import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import loadingToast from '@/modules/core/utils/methods';
import { Trans } from '@lingui/react/macro';
import { Trash2 } from 'lucide-react';
import WishlistItemGrid from '../components/WishlistItemGrid';
import { useWishlistStore } from '../stores/wishlist-store';
import { wishlistApi } from '../utils/wishlist-api';

export default function WishlistPage() {
    const wishlist = useWishlistStore.use.wishlist();

    const wishlistItems = wishlist?.items || [];

    async function clearAll() {
        loadingToast(wishlistApi.clear(), {
            onFinally: () => {
                // @ts-ignore
                useWishlistStore.setState({ wishlist: { items: [] } });
            },
        });
    }

    return (
        <>
            <div className='flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4 px-6'>
                <div>
                    <p className='text-muted-foreground mt-1'>
                        {wishlistItems.length}{' '}
                        {wishlistItems.length === 1 ? (
                            <Trans>item</Trans>
                        ) : (
                            <Trans>items</Trans>
                        )}
                    </p>
                </div>

                {wishlistItems.length > 0 && (
                    <AlertDialog>
                        <AlertDialogTrigger asChild>
                            <Button
                                variant='outline'
                                className='flex items-center gap-2 text-destructive'
                            >
                                <Trash2 className='h-4 w-4' />
                                <Trans>Clear All</Trans>
                            </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                            <AlertDialogHeader>
                                <AlertDialogTitle>
                                    <Trans>Clear your wishlist?</Trans>
                                </AlertDialogTitle>
                                <AlertDialogDescription>
                                    <Trans>
                                        {' '}
                                        This will remove all items from your
                                        wishlist. This action cannot be undone.
                                    </Trans>
                                </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                                <AlertDialogCancel>
                                    <Trans>Cancel</Trans>
                                </AlertDialogCancel>
                                <AlertDialogAction
                                    className='bg-destructive text-white'
                                    onClick={clearAll}
                                >
                                    Clear All
                                </AlertDialogAction>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>
                )}
            </div>

            <WishlistItemGrid />
        </>
    );
}

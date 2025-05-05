import { Button } from '@/components/ui/button';
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
} from '@/components/ui/sheet';
import useLocaleStore from '@/modules/core/stores/localeStore';
import useNavbarStore from '@/modules/core/stores/navbar-store';
import { Trans } from '@lingui/react/macro';
import { X } from 'lucide-react';
import CategoriesSideMenuContent from './CategoriesSideMenuContent';
// import UserSideMenuContent from './UserSideMenuContent';

export default function CategoriesSideMenu() {
    const isOpened = useNavbarStore.use.isCategoriesOpened();
    const isRtl = useLocaleStore.getState().isRtl;

    return (
        <Sheet
            open={isOpened}
            onOpenChange={(opened: boolean) =>
                useNavbarStore.setState({ isCategoriesOpened: opened })
            }
        >
            <SheetContent
                side={isRtl() ? 'right' : 'left'}
                className='flex w-full flex-col sm:max-w-md 2xl:max-w-lg'
            >
                <SheetHeader className='pb-4'>
                    <SheetTitle>
                        <Trans>Categories</Trans>
                    </SheetTitle>
                    <SheetDescription>
                        <Trans>Browse all product categories</Trans>
                    </SheetDescription>
                </SheetHeader>

                <div className='px-4 py-3 overflow-y-auto w-full'>
                    <CategoriesSideMenuContent />
                </div>

                <SheetFooter>
                    <div className='flex flex-row justify-center items-center gap-4'>
                        <SheetClose asChild>
                            <Button variant='secondary'>
                                <X className='h-4 w-4 me-2' />
                                <Trans>Close</Trans>
                            </Button>
                        </SheetClose>
                    </div>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    );
}

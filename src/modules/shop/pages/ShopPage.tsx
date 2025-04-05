import { Separator } from '@/components/ui/separator';
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from '@/components/ui/sidebar';
import { shopRoute } from '@/routes/$locale/_catalog/shop';
import { ActiveFilters } from '../components/Filters/ActiveFilters';
import { ProductGrid } from '../components/Products/ProductGrid';
import { FiltersSidebar } from '../components/Shop/FiltersSidebar';
import ShopHero from '../components/Shop/ShopHero';
import { ProductPagination } from '../components/Shop/ShopPagination';
import ShopSortMenu from '../components/Shop/ShopSortMenu';

export default function ShopPage() {
    const searchParams = shopRoute.useSearch();

    return (
        <>
            <ShopHero />

            <div className='shop-page'>
                <SidebarProvider>
                    <FiltersSidebar />
                    <SidebarInset>
                        <header className='flex h-16 shrink-0 items-center gap-2 border-b'>
                            <div className='flex items-center gap-2 px-3 w-full'>
                                <SidebarTrigger />
                                <Separator
                                    orientation='vertical'
                                    className='mr-2 h-4'
                                />
                                <div className='flex justify-between w-full flex-row gap-4'>
                                    <div className=''>
                                        <ActiveFilters
                                            searchParams={searchParams}
                                        />
                                    </div>
                                    <div className='w-fit'>
                                        <ShopSortMenu />
                                    </div>
                                </div>
                            </div>
                        </header>
                        <div className='flex flex-col gap-4'>
                            <ProductGrid />

                            <ProductPagination />
                        </div>
                    </SidebarInset>
                </SidebarProvider>
            </div>
        </>
    );
}

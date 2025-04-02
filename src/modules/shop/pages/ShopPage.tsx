import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Separator } from '@/components/ui/separator';
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from '@/components/ui/sidebar';
import { shopRoute } from '@/routes/$locale/_catalog/shop';
import { ArrowUpDown } from 'lucide-react';
import { ActiveFilters } from '../components/Filters/ActiveFilters';
import { FiltersSidebarEWE } from '../components/Filters/FiltersSidebar';
import { FiltersSidebar } from '../components/FiltersSidebar';
import { ProductGrid } from '../components/ProductGrid';
import { ShopHero } from '../components/ShopHero';

export default function ShopPage() {
    const searchParams = shopRoute.useSearch();

    return (
        <>
            <ShopHero />

            <div className='shop-page'>
                <SidebarProvider>
                    <FiltersSidebar />
                    <FiltersSidebarEWE />
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
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button
                                                    variant='outline'
                                                    size='sm'
                                                    className='ml-auto flex'
                                                >
                                                    <ArrowUpDown className='mr-2 h-4 w-4' />
                                                    Sort
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align='end'>
                                                <DropdownMenuItem>
                                                    Price: Low to High
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    Price: High to Low
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    Newest First
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    Popularity
                                                </DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </div>
                                </div>
                            </div>
                        </header>
                        <ProductGrid />
                    </SidebarInset>
                </SidebarProvider>
            </div>
        </>
    );
}

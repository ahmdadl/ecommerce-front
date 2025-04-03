import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';
import { useIsMobile } from '@/hooks/use-mobile';
import { useEffect } from 'react';
import { useFilterStore } from '../../stores/filters-store';
import { BrandFilters } from './BrandFilters';
import { CategoryFilters } from './CategoryFilters';
import { PriceRangeFilter } from './PriceRangeFilter';

type FiltersSidebarProps = {
    className?: string;
};

export function FiltersSidebarEWE({ className }: FiltersSidebarProps) {
    const { filters, resetFilters, setFilters } = useFilterStore();
    const isMobile = useIsMobile();

    // Simulating API fetch
    useEffect(() => {
        const fetchFilters = async () => {
            // In a real app, you would fetch this from an API
            const filtersData = {
                categories: [
                    {
                        id: '01jqmtfera36zf2mew69zqjkv7',
                        title: 'Protein Powders',
                        slug: 'protein-powders',
                        products_count: 3,
                    },
                    {
                        id: '01jqmtferjfe1rvebnekhdf4dg',
                        title: 'Post-Workout',
                        slug: 'post-workout',
                        products_count: 2,
                    },
                    {
                        id: '01jqmtfersmt5s8r9xepx2bbee',
                        title: 'Minerals',
                        slug: 'minerals',
                        products_count: 2,
                    },
                    {
                        id: '01jqmtferwm73bt1ba03vs038f',
                        title: 'Amino Acids',
                        slug: 'amino-acids',
                        products_count: 2,
                    },
                    {
                        id: '01jqmtferzkb4fbr8vvpz9qskn',
                        title: 'Fat Burners',
                        slug: 'fat-burners',
                        products_count: 2,
                    },
                ],
                brands: [
                    {
                        id: '01jqmtfes5njtn43efav3vrzra',
                        title: 'Optimum Nutrition',
                        slug: 'optimum-nutrition',
                        products_count: 3,
                    },
                    {
                        id: '01jqmtfes8ehfna8qzs5he1hdn',
                        title: 'MuscleTech',
                        slug: 'muscletech',
                        products_count: 1,
                    },
                    {
                        id: '01jqmtfesg93jr41xjxjaz9qr4',
                        title: 'Dymatize',
                        slug: 'dymatize',
                        products_count: 2,
                    },
                    {
                        id: '01jqmtfespxmjafs0xfdvbfk6a',
                        title: 'Grenade',
                        slug: 'grenade',
                        products_count: 1,
                    },
                    {
                        id: '01jqmtfessmhajpk0p0xcf43x4',
                        title: 'RSP Nutrition',
                        slug: 'rsp-nutrition',
                        products_count: 1,
                    },
                    {
                        id: '01jqmtfesv0kap51ema19fnmtn',
                        title: 'JYM Supplement Science',
                        slug: 'jym-supplement-science',
                        products_count: 1,
                    },
                    {
                        id: '01jqmtfesyantd54p9wfyc7dsp',
                        title: 'Ghost Lifestyle',
                        slug: 'ghost-lifestyle',
                        products_count: 2,
                    },
                ],
                price_range: {
                    min: '9.19',
                    max: '460.47',
                },
            };

            setFilters(filtersData);
        };

        fetchFilters();
    }, [setFilters]);

    if (!filters) return null;

    const FiltersContent = () => (
        <div className='space-y-6'>
            <div className='flex items-center justify-between'>
                <h2 className='text-lg font-semibold'>Filters</h2>
                <Button variant='ghost' size='sm' onClick={resetFilters}>
                    Reset
                </Button>
            </div>
            <Separator />
            <ScrollArea className='h-[calc(100vh-120px)] pr-4'>
                <div className='space-y-6'>
                    <CategoryFilters />
                    <Separator />
                    <BrandFilters />
                    <Separator />
                    <PriceRangeFilter />
                </div>
            </ScrollArea>
        </div>
    );

    return null;

    if (isMobile) {
        return (
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant='outline' size='sm'>
                        Filters
                    </Button>
                </SheetTrigger>
                <SheetContent side='left' className='w-[300px] sm:w-[350px]'>
                    <SheetHeader>
                        <SheetTitle>Filters</SheetTitle>
                    </SheetHeader>
                    <div className='mt-6'>
                        <FiltersContent />
                    </div>
                </SheetContent>
            </Sheet>
        );
    }

    return (
        <div className={`w-full max-w-[280px] ${className}`}>
            <FiltersContent />
        </div>
    );
}

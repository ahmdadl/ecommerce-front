import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Trans } from '@lingui/react/macro';
import { useNavigate } from '@tanstack/react-router';
import { X } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { filtersStore } from '../../stores/filters-store';
import { getFilterSearchParams } from '../../utils/methods';

export function ActiveFilters({ route }: any) {
    const searchParams = route.useSearch();

    const {
        filters,
        selectedCategories,
        selectedBrands,
        currentPriceRange,
        currentPage,
        toggleCategory,
        toggleBrand,
        resetFilters,
        syncWithUrl,
    } = filtersStore();

    const navigate = useNavigate();
    const isMounted = useRef(false);
    const prevParams = useRef(searchParams); // Track previous searchParams

    // Sync store with URL params on mount or when searchParams change
    useEffect(() => {
        if (
            JSON.stringify(prevParams.current) !== JSON.stringify(searchParams)
        ) {
            syncWithUrl(searchParams);
            prevParams.current = searchParams;
        }
    }, [searchParams, syncWithUrl]);

    // Update URL when filter state changes (after user interaction)
    useEffect(() => {
        if (!isMounted.current) {
            isMounted.current = true;
            return; // Skip initial render
        }

        const params = getFilterSearchParams();
        console.log('Params:', params);

        navigate({
            search: (prev) => ({
                ...prev,
                categories: params.categories,
                brands: params.brands,
                price: params.price,
                page: Number(params.page ?? 1),
                sortBy: params.sortBy,
            }),
            replace: true,
        });
    }, [
        selectedCategories,
        selectedBrands,
        currentPriceRange,
        currentPage,
        filters,
        navigate,
    ]);

    if (!filters) return null;

    const hasActiveFilters =
        selectedCategories.length > 0 ||
        selectedBrands.length > 0 ||
        currentPriceRange[0] > Number.parseFloat(filters.price_range.min) ||
        currentPriceRange[1] < Number.parseFloat(filters.price_range.max);

    if (!hasActiveFilters) return null;

    const getCategoryTitle = (id: string) => {
        return filters.categories.find((cat) => cat.id === id)?.title || '';
    };

    const getBrandTitle = (id: string) => {
        return filters.brands.find((brand) => brand.id === id)?.title || '';
    };

    const isPriceRangeModified =
        currentPriceRange[0] > Number.parseFloat(filters.price_range.min) ||
        currentPriceRange[1] < Number.parseFloat(filters.price_range.max);

    return (
        <div className='flex flex-wrap gap-2 items-center'>
            {selectedCategories.map((id) => (
                <Badge
                    key={id}
                    variant='secondary'
                    className='flex items-center gap-1'
                >
                    <Trans>Category:</Trans> {getCategoryTitle(id)}
                    <Button
                        variant='ghost'
                        size='icon'
                        className='h-4 w-4 p-0 hover:bg-transparent'
                        onClick={() => toggleCategory(id)}
                    >
                        <X className='h-3 w-3' />
                        <span className='sr-only'>
                            Remove {getCategoryTitle(id)} filter
                        </span>
                    </Button>
                </Badge>
            ))}

            {selectedBrands.map((id) => (
                <Badge
                    key={id}
                    variant='secondary'
                    className='flex items-center gap-1'
                >
                    <Trans>Brand:</Trans> {getBrandTitle(id)}
                    <Button
                        variant='ghost'
                        size='icon'
                        className='h-4 w-4 p-0 hover:bg-transparent'
                        onClick={() => toggleBrand(id)}
                    >
                        <X className='h-3 w-3' />
                        <span className='sr-only'>
                            Remove {getBrandTitle(id)} filter
                        </span>
                    </Button>
                </Badge>
            ))}

            {isPriceRangeModified && (
                <Badge variant='secondary' className='flex items-center gap-1'>
                    ${currentPriceRange[0].toFixed(2)} - $
                    {currentPriceRange[1].toFixed(2)}
                </Badge>
            )}

            {hasActiveFilters && (
                <Button
                    variant='ghost'
                    size='sm'
                    className='h-7 text-xs'
                    onClick={resetFilters}
                >
                    <Trans>Clear All</Trans>
                </Button>
            )}
        </div>
    );
}

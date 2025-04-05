import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Trans } from '@lingui/react/macro';
import { useNavigate } from '@tanstack/react-router';
import { X } from 'lucide-react';
import { useEffect } from 'react';
import { filtersStore } from '../../stores/filters-store';
import { getFilterSearchParams } from '../../utils/methods';

export function ActiveFilters({ searchParams }: any) {
    const {
        filters,
        selectedCategories,
        selectedBrands,
        currentPriceRange,
        toggleCategory,
        toggleBrand,
        resetFilters,
        syncWithUrl,
    } = filtersStore();

    const navigate = useNavigate(); // For updating the URL

    useEffect(() => {
        syncWithUrl(searchParams);
    }, [searchParams, syncWithUrl]);

    // Sync store with URL search params on mount or when search changes
    useEffect(() => {
        syncWithUrl(searchParams);
    }, [searchParams, syncWithUrl]);

    // Update URL whenever store changes
    useEffect(() => {
        const params = getFilterSearchParams();
        navigate({
            // @ts-ignore
            search: (prev) => ({
                ...prev,
                categories: params.categories,
                brands: params.brands,
                price: params.price,
            }),
            replace: false,
        });
    }, [
        selectedCategories,
        selectedBrands,
        currentPriceRange,
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

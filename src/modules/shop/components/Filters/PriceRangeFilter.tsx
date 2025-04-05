import { Slider } from '@/components/ui/slider';
import { useEffect, useState } from 'react';
import { filtersStore } from '../../stores/filters-store';

export function PriceRangeFilter() {
    const { filters, currentPriceRange, setPriceRange } = filtersStore();
    const [localRange, setLocalRange] =
        useState<[number, number]>(currentPriceRange);

    useEffect(() => {
        setLocalRange(currentPriceRange);
    }, [currentPriceRange]);

    if (!filters) return null;

    const min = Number.parseFloat(filters.price_range.min);
    const max = Number.parseFloat(filters.price_range.max);

    const handleChange = (value: number[]) => {
        const newRange: [number, number] = [value[0], value[1]];
        setLocalRange(newRange);
    };

    const handleChangeCommitted = () => {
        setPriceRange(localRange);
    };

    return (
        <div className='space-y-4 w-full'>
            <div className='flex justify-between'>
                <div className='text-sm'>
                    ${localRange[0].toFixed(2)} - ${localRange[1].toFixed(2)}
                </div>
            </div>
            <Slider
                defaultValue={[min, max]}
                min={min}
                max={max}
                step={0.01}
                value={localRange}
                onValueChange={handleChange}
                onValueCommit={handleChangeCommitted}
                className='py-4'
            />
        </div>
    );
}

import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { filtersStore } from '../../stores/filters-store';

export function BrandFilters() {
    const { filters, selectedBrands, toggleBrand } = filtersStore();

    if (!filters) return null;

    return (
        <div className='space-y-3 w-full'>
            {filters.brands.map((brand) => (
                <div key={brand.id} className='flex items-center space-x-2'>
                    <Checkbox
                        id={`brand-${brand.id}`}
                        checked={selectedBrands.includes(brand.id)}
                        onCheckedChange={() => toggleBrand(brand.id)}
                    />
                    <Label
                        htmlFor={`brand-${brand.id}`}
                        className='flex-1 text-sm cursor-pointer flex justify-between'
                    >
                        <span>{brand.title}</span>
                        <span className='text-muted-foreground'>
                            ({brand.products_count})
                        </span>
                    </Label>
                </div>
            ))}
        </div>
    );
}

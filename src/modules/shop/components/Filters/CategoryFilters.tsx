import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { filtersStore } from '../../stores/filters-store';

export function CategoryFilters() {
    const { filters, selectedCategories, toggleCategory } = filtersStore();

    if (!filters) return null;

    return (
        <div className='space-y-3 w-full'>
            {filters.categories.map((category) => (
                <div key={category.id} className='flex items-center space-x-2'>
                    <Checkbox
                        id={`category-${category.id}`}
                        checked={selectedCategories.includes(category.id)}
                        onCheckedChange={() => toggleCategory(category.id)}
                    />
                    <Label
                        htmlFor={`category-${category.id}`}
                        className='flex-1 text-sm cursor-pointer flex justify-between'
                    >
                        <span>{category.title}</span>
                        <span className='text-muted-foreground'>
                            ({category.products_count})
                        </span>
                    </Label>
                </div>
            ))}
        </div>
    );
}

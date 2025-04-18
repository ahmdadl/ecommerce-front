import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { filtersStore } from '../../stores/filters-store';

export default function TagFilters() {
    const { filters, selectedTags, toggleTag } = filtersStore();

    if (!filters) return null;

    return (
        <div className='space-y-3 w-full'>
            {filters.tags.map((tag) => (
                <div key={tag.id} className='flex items-center space-x-2'>
                    <Checkbox
                        id={`tag-${tag.id}`}
                        checked={selectedTags.includes(tag.id)}
                        onCheckedChange={() => toggleTag(tag.id)}
                    />
                    <Label
                        htmlFor={`tag-${tag.id}`}
                        className='flex-1 text-sm cursor-pointer flex justify-between'
                    >
                        <span>{tag.title}</span>
                        <span className='text-muted-foreground'>
                            ({tag.products_count})
                        </span>
                    </Label>
                </div>
            ))}
        </div>
    );
}

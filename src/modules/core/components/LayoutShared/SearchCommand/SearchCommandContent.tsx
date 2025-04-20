import {
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from '@/components/ui/command';
import { Skeleton } from '@/components/ui/skeleton';
import { useDebounce } from '@/modules/core/hooks/use-debounce';
import loadingToast from '@/modules/core/utils/methods';
import { shopApi } from '@/modules/shop/utils/shopApi';
import { useLingui } from '@lingui/react/macro';
import { useEffect, useState } from 'react';
import SearchCommandResult from './SearchCommandResult';

export default function SearchCommandContent() {
    const { t } = useLingui();
    const [isLoading, setIsLoading] = useState(false);
    const [searchQuery, setSearchQuery] = useState<string | null>(null);
    const [results, setResults] = useState<string[]>([]);

    const debouncedSearchQuery = useDebounce(searchQuery, 500);

    async function searchForProduct(value: string) {
        console.log(value);
        if (isLoading) return;

        setIsLoading(true);

        loadingToast(shopApi.searchForProducts(value), {
            onFinally: () => {
                setIsLoading(false);
            },
        });
    }

    useEffect(() => {
        if (debouncedSearchQuery) {
            searchForProduct(debouncedSearchQuery);
        }
    }, [debouncedSearchQuery]);

    return (
        <>
            <div className='relative'>
                <CommandInput
                    placeholder={t`Search ...`}
                    onValueChange={setSearchQuery}
                    isloading={String(isLoading)}
                />
            </div>
            <CommandList>
                {isLoading &&
                    [...Array(4)].map((_, index) => (
                        <CommandGroup>
                            <CommandItem key={index}>
                                <Skeleton className='w-12 h-12 rounded-full' />
                                <Skeleton className='w-full h-8 rounded-xs' />
                            </CommandItem>
                        </CommandGroup>
                    ))}

                <SearchCommandResult />
            </CommandList>
        </>
    );
}

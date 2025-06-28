import { useEffect, useRef } from 'react';
import { filtersStore } from '../../stores/filters-store';
import { getFilterSearchParams } from '../../utils/methods';

export function AppendFiltersToUrl() {
    const {
        filters,
        selectedCategories,
        selectedBrands,
        currentPriceRange,
        currentPage,
        selectedTags,
    } = filtersStore();

    const isMounted = useRef(false);

    useEffect(() => {
        if (!isMounted.current) {
            isMounted.current = true;
            return; // Skip initial render
        }

        const params = getFilterSearchParams();

        const searchParams: any = {};
        for (const key in params) {
            if (params[key]) {
                searchParams[key] = params[key];
            }
        }

        if (new URLSearchParams(searchParams).size < 1) {
            return;
        }

        // console.log(
        //     params,
        //     `${window.location.pathname}?${new URLSearchParams(searchParams)}`
        // );
        // return;

        window.history.pushState(
            null,
            '',
            `${window.location.pathname}?${new URLSearchParams(searchParams)}`
        );

        let title = '';
        if (currentPage > 1) {
            title += `Page ${currentPage}`;
        }
        if (selectedCategories.length > 0) {
            title += ` - ${selectedCategories.map((id) => getCategoryTitle(id)).join(', ')}`;
        }
        if (selectedBrands.length > 0) {
            title += ` - ${selectedBrands.map((id) => getBrandTitle(id)).join(', ')}`;
        }
        if (selectedTags.length > 0) {
            title += ` - ${selectedTags.map((id) => getTagTitle(id)).join(', ')}`;
        }

        const titleIndex = document.title.indexOf(' __ ');
        const newTitle =
            titleIndex !== -1
                ? document.title.substring(0, titleIndex)
                : document.title;
        document.title = title ? `${newTitle} __ ${title}` : newTitle;
    }, [
        selectedCategories,
        selectedBrands,
        currentPriceRange,
        currentPage,
        selectedTags,
    ]);

    const getCategoryTitle = (id: string) => {
        return filters?.categories?.find((cat) => cat.id === id)?.title || '';
    };

    const getBrandTitle = (id: string) => {
        return filters?.brands?.find((brand) => brand.id === id)?.title || '';
    };

    const getTagTitle = (id: string) => {
        return filters?.tags?.find((tag) => tag.id === id)?.title || '';
    };

    if (!filters) return null;
}

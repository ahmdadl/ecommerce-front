import { CommandDialog } from '@/components/ui/command';
import useNavbarStore from '@/modules/core/stores/navbar-store';
import { useSearchResultStore } from '@/modules/shop/stores/search-results-store';
import SearchCommandContent from './SearchCommandContent';

export default function SearchCommand() {
    const isOpened = useNavbarStore.use.isSearchOpened();

    return (
        <>
            <CommandDialog
                open={isOpened}
                onOpenChange={(opened: boolean) => {
                    useNavbarStore.setState({ isSearchOpened: opened });
                    if (!opened) {
                        useSearchResultStore.getState().clear();
                    }
                }}
            >
                <SearchCommandContent />
            </CommandDialog>
        </>
    );
}

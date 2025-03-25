'use client';

import {
    Calculator,
    Calendar,
    CreditCard,
    Settings,
    Smile,
    User,
} from 'lucide-react';

import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
} from '@/components/ui/command';
import useNavbarStore from '../../stores/navbar-store';

export function SearchCommand() {
    const isOpened = useNavbarStore.use.isSearchOpened();

    return (
        <>
            <CommandDialog
                open={isOpened}
                onOpenChange={(opened: boolean) =>
                    useNavbarStore.setState({ isSearchOpened: opened })
                }
            >
                <CommandInput placeholder='Type a command or search...' />
                <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup heading='Suggestions'>
                        <CommandItem>
                            <Calendar />
                            <span>Calendar</span>
                        </CommandItem>
                        <CommandItem>
                            <Smile />
                            <span>Search Emoji</span>
                        </CommandItem>
                        <CommandItem>
                            <Calculator />
                            <span>Calculator</span>
                        </CommandItem>
                    </CommandGroup>
                    <CommandSeparator />
                    <CommandGroup heading='Settings'>
                        <CommandItem>
                            <User />
                            <span>Profile</span>
                            <CommandShortcut>⌘P</CommandShortcut>
                        </CommandItem>
                        <CommandItem>
                            <CreditCard />
                            <span>Billing</span>
                            <CommandShortcut>⌘B</CommandShortcut>
                        </CommandItem>
                        <CommandItem>
                            <Settings />
                            <span>Settings</span>
                            <CommandShortcut>⌘S</CommandShortcut>
                        </CommandItem>
                    </CommandGroup>
                </CommandList>
            </CommandDialog>
        </>
    );
}

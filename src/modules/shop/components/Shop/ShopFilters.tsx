import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import {
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
} from '@/components/ui/sidebar';
import { Trans } from '@lingui/react/macro';
import { DollarSign, List } from 'lucide-react';
import { BrandFilters } from '../Filters/BrandFilters';
import { CategoryFilters } from '../Filters/CategoryFilters';
import { PriceRangeFilter } from '../Filters/PriceRangeFilter';

export function ShopFilters() {
    return (
        <SidebarGroup>
            <SidebarGroupContent>
                <Accordion
                    type='multiple'
                    className='w-full'
                    defaultValue={['category', 'brand']}
                >
                    <AccordionItem value='category'>
                        <AccordionTrigger className='text-base'>
                            <List />
                            <Trans>Category</Trans>
                        </AccordionTrigger>
                        <AccordionContent>
                            <SidebarGroupLabel className='h-auto w-full'>
                                <CategoryFilters />
                            </SidebarGroupLabel>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value='brand'>
                        <AccordionTrigger className='text-base'>
                            <List />
                            <Trans>Brand</Trans>
                        </AccordionTrigger>
                        <AccordionContent>
                            <SidebarGroupLabel className='h-auto w-full'>
                                <BrandFilters />
                            </SidebarGroupLabel>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value='price'>
                        <AccordionTrigger className='text-base'>
                            <DollarSign />
                            <Trans>Price</Trans>
                        </AccordionTrigger>
                        <AccordionContent>
                            <SidebarGroupLabel className='h-auto w-full'>
                                <PriceRangeFilter />
                            </SidebarGroupLabel>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </SidebarGroupContent>
        </SidebarGroup>
    );
}

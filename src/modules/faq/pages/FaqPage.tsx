import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Trans } from '@lingui/react/macro';
import { Search } from 'lucide-react';
import { useState } from 'react';
import FaqHero from '../components/FaqHero';
import { useFaqStore } from '../stores/faqs-store';

export default function FaqPage() {
    const faqData = useFaqStore.use.faqCategories();

    const [searchQuery, setSearchQuery] = useState('');

    // Filter FAQs based on search query
    const filteredFAQs =
        searchQuery.trim() === ''
            ? faqData
            : faqData
                  .map((category) => ({
                      title: category.title,
                      faqs: category.faqs.filter(
                          (faq) =>
                              faq.question
                                  .toLowerCase()
                                  .includes(searchQuery.toLowerCase()) ||
                              faq.answer
                                  .toLowerCase()
                                  .includes(searchQuery.toLowerCase())
                      ),
                  }))
                  .filter((category) => category.faqs.length > 0);

    return (
        <>
            <FaqHero />

            <div className='w-full py-6'>
                <div className='mx-auto max-w-[90%] lg:max-w-5xl space-y-12'>
                    <div className='text-center mb-12'>
                        {/* <h1 className='text-3xl font-bold tracking-tight mb-4'>
                            <Trans>Frequently Asked Questions</Trans>
                        </h1> */}
                        <p className='text-muted-foreground max-w-2xl mx-auto'>
                            <Trans>
                                Find answers to common questions about our
                                products, shipping, returns, and more. If you
                                can't find what you're looking for, please
                                contact our customer support team.
                            </Trans>
                        </p>
                    </div>

                    <div className='relative mb-8'>
                        <div className='absolute inset-y-0 left-3 flex items-center pointer-events-none'>
                            <Search className='h-5 w-5 text-muted-foreground' />
                        </div>
                        <Input
                            type='search'
                            placeholder='Search FAQs...'
                            className='pl-10'
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>

                    {filteredFAQs.length === 0 ? (
                        <div className='text-center py-8'>
                            <p className='text-muted-foreground'>
                                <Trans>
                                    No FAQs found matching your search. Please
                                    try different keywords.
                                </Trans>
                            </p>
                        </div>
                    ) : (
                        filteredFAQs.map(
                            (category, categoryIndex) =>
                                category.faqs.length > 0 && (
                                    <div key={categoryIndex} className='mb-8'>
                                        <h2 className='text-xl font-semibold mb-4'>
                                            <Trans>{category.title}</Trans>
                                        </h2>
                                        <Accordion
                                            type='single'
                                            collapsible
                                            className='w-full'
                                        >
                                            {category.faqs.map(
                                                (faq, faqIndex) => (
                                                    <AccordionItem
                                                        key={faqIndex}
                                                        value={`${categoryIndex}-${faqIndex}`}
                                                    >
                                                        <AccordionTrigger className='text-left'>
                                                            <Trans>
                                                                {faq.question}
                                                            </Trans>
                                                        </AccordionTrigger>
                                                        <AccordionContent>
                                                            <div className='text-muted-foreground'>
                                                                <Trans>
                                                                    {faq.answer}
                                                                </Trans>
                                                            </div>
                                                        </AccordionContent>
                                                    </AccordionItem>
                                                )
                                            )}
                                        </Accordion>
                                    </div>
                                )
                        )
                    )}

                    <div className='mt-12 p-6 bg-muted rounded-lg text-center'>
                        <h3 className='text-lg font-medium mb-2'>
                            <Trans>Still have questions?</Trans>
                        </h3>
                        <p className='text-muted-foreground mb-4'>
                            <Trans>
                                Our customer support team is here to help you
                                with any questions or concerns.
                            </Trans>
                        </p>
                        <div className='flex flex-col sm:flex-row justify-center gap-4'>
                            <div className='flex flex-col items-center p-4'>
                                <Trans>Email us at:</Trans>
                                <a
                                    href='mailto:support@example.com'
                                    className='text-primary hover:underline'
                                >
                                    <Trans>support@example.com</Trans>
                                </a>
                            </div>
                            <div className='flex flex-col items-center p-4'>
                                <Trans>Call us at:</Trans>
                                <a
                                    href='tel:+18001234567'
                                    className='text-primary hover:underline'
                                >
                                    <Trans>1-800-123-4567</Trans>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

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

// FAQ data structure
type FAQItem = {
    question: string;
    answer: string;
};

type FAQCategory = {
    title: string;
    faqs: FAQItem[];
};

// Sample FAQ data
const faqData: FAQCategory[] = [
    {
        title: 'Orders & Shipping',
        faqs: [
            {
                question: 'How can I track my order?',
                answer: "You can track your order by logging into your account and visiting the 'Order History' section. Alternatively, you can use the tracking number provided in your shipping confirmation email.",
            },
            {
                question: 'What shipping methods do you offer?',
                answer: 'We offer standard shipping (3-5 business days), express shipping (1-2 business days), and next-day delivery options. Shipping costs vary based on your location and the selected shipping method.',
            },
            {
                question: 'Do you ship internationally?',
                answer: 'Yes, we ship to over 50 countries worldwide. International shipping typically takes 7-14 business days, depending on the destination and customs processing.',
            },
            {
                question: 'How long will it take to receive my order?',
                answer: 'Domestic orders typically arrive within 3-5 business days with standard shipping. Express shipping delivers within 1-2 business days. Please note that processing time (1-2 days) is not included in these estimates.',
            },
        ],
    },
    {
        title: 'Returns & Refunds',
        faqs: [
            {
                question: 'What is your return policy?',
                answer: 'We accept returns within 30 days of delivery. Items must be in their original condition with tags attached. Some products like intimate apparel and personalized items cannot be returned for hygiene and customization reasons.',
            },
            {
                question: 'How do I initiate a return?',
                answer: "To initiate a return, log into your account, go to 'Order History', select the order containing the item you wish to return, and follow the return instructions. You'll receive a return shipping label via email.",
            },
            {
                question: 'When will I receive my refund?',
                answer: "Once we receive and inspect your return (typically 2-3 business days after receipt), we'll process your refund. It may take an additional 5-10 business days for the refund to appear in your account, depending on your payment method.",
            },
            {
                question: 'Do you offer exchanges?',
                answer: "Yes, we offer exchanges for different sizes or colors of the same item. You can request an exchange through the return process by selecting 'Exchange' instead of 'Return' and specifying your preferred replacement.",
            },
        ],
    },
    {
        title: 'Product Information',
        faqs: [
            {
                question: 'How do I find my size?',
                answer: "We provide detailed size guides on each product page. You can find measurements and fit recommendations to help you select the right size. If you're between sizes, we generally recommend sizing up.",
            },
            {
                question: 'Are your products ethically sourced?',
                answer: 'Yes, we are committed to ethical sourcing. All our suppliers adhere to fair labor practices, and we regularly audit our supply chain to ensure compliance with our ethical standards.',
            },
            {
                question: 'Do you offer gift wrapping?',
                answer: 'Yes, we offer gift wrapping services for an additional $5 per item. You can select this option during checkout and include a personalized message for the recipient.',
            },
            {
                question: 'How do I care for my purchased items?',
                answer: 'Care instructions are provided on each product page and included with your purchase. Generally, we recommend following the specific care label attached to each item for best results.',
            },
        ],
    },
    {
        title: 'Account & Payment',
        faqs: [
            {
                question: 'How do I create an account?',
                answer: "You can create an account by clicking the 'Account' icon in the top right corner of our website and selecting 'Register'. You'll need to provide your email address and create a password.",
            },
            {
                question: 'What payment methods do you accept?',
                answer: 'We accept all major credit cards (Visa, Mastercard, American Express, Discover), PayPal, Apple Pay, Google Pay, and Shop Pay. We also offer installment payment options through Affirm and Klarna.',
            },
            {
                question: 'Is my payment information secure?',
                answer: 'Yes, we use industry-standard encryption and security measures to protect your payment information. We are PCI DSS compliant and never store your full credit card details on our servers.',
            },
            {
                question:
                    'Can I save my payment information for future purchases?',
                answer: "Yes, you can save your payment information securely in your account for faster checkout in the future. You can manage your saved payment methods in the 'Payment Methods' section of your account.",
            },
        ],
    },
];

export default function FaqPage() {
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
        <div className='container py-12 md:py-16'>
            <div className='mx-auto max-w-5xl space-y-12'>
                <div className='text-center mb-12'>
                    <h1 className='text-3xl font-bold tracking-tight mb-4'>
                        <Trans>Frequently Asked Questions</Trans>
                    </h1>
                    <p className='text-muted-foreground max-w-2xl mx-auto'>
                        <Trans>
                            Find answers to common questions about our products,
                            shipping, returns, and more. If you can't find what
                            you're looking for, please contact our customer
                            support team.
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
                                No FAQs found matching your search. Please try
                                different keywords.
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
                                        {category.faqs.map((faq, faqIndex) => (
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
                                        ))}
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
                            Our customer support team is here to help you with
                            any questions or concerns.
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
    );
}

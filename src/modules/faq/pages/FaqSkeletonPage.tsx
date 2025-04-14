import { Skeleton } from '@/components/ui/skeleton'; // Assuming a Skeleton component from Shadcn/UI or similar
import FaqHero from '../components/FaqHero';

export default function FaqPageSkeleton() {
    return (
        <>
            <FaqHero />

            <div className='w-full py-6'>
                <div className='mx-auto max-w-[90%] lg:max-w-5xl space-y-12'>
                    {/* Header Section */}
                    <div className='text-center mb-12'>
                        <Skeleton className='h-8 w-64 mx-auto mb-4' />{' '}
                        {/* Title placeholder */}
                        <Skeleton className='h-4 w-[70%] max-w-2xl mx-auto' />{' '}
                        {/* Description placeholder */}
                        <Skeleton className='h-4 w-[60%] max-w-2xl mx-auto mt-2' />{' '}
                        {/* Description line 2 */}
                    </div>

                    {/* Search Bar Section */}
                    <div className='relative mb-8'>
                        <Skeleton className='h-5 w-5 absolute left-3 top-1/2 -translate-y-1/2' />{' '}
                        {/* Search icon */}
                        <Skeleton className='h-10 w-full pl-10' />{' '}
                        {/* Search input */}
                    </div>

                    {/* FAQ Categories and Accordions */}
                    <div className='space-y-8'>
                        {/* Simulate 2 categories */}
                        {[...Array(2)].map((_, categoryIndex) => (
                            <div key={categoryIndex} className='mb-8'>
                                <Skeleton className='h-6 w-48 mb-4' />{' '}
                                {/* Category title */}
                                <div className='space-y-4'>
                                    {/* Simulate 3 FAQs per category */}
                                    {[...Array(3)].map((_, faqIndex) => (
                                        <div
                                            key={faqIndex}
                                            className='border-b'
                                        >
                                            <Skeleton className='h-5 w-[80%] py-4' />{' '}
                                            {/* Accordion question */}
                                            <Skeleton className='h-4 w-[90%] py-2' />{' '}
                                            {/* Accordion content placeholder */}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Contact Section */}
                    <div className='mt-12 p-6 bg-muted rounded-lg text-center'>
                        <Skeleton className='h-6 w-40 mx-auto mb-2' />{' '}
                        {/* Contact title */}
                        <Skeleton className='h-4 w-[70%] mx-auto mb-4' />{' '}
                        {/* Contact description */}
                        <div className='flex flex-col sm:flex-row justify-center gap-4'>
                            <div className='flex flex-col items-center p-4'>
                                <Skeleton className='h-4 w-24 mb-1' />{' '}
                                {/* Email label */}
                                <Skeleton className='h-4 w-36' />{' '}
                                {/* Email link */}
                            </div>
                            <div className='flex flex-col items-center p-4'>
                                <Skeleton className='h-4 w-24 mb-1' />{' '}
                                {/* Phone label */}
                                <Skeleton className='h-4 w-28' />{' '}
                                {/* Phone link */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

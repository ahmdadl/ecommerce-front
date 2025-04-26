import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';
import { ArrowLeft, Printer } from 'lucide-react';

export default function TermsAndConditionsSkeletonPage() {
    return (
        <div className='container py-12 md:py-16'>
            <div className='mx-auto max-w-5xl space-y-12'>
                <div className='flex items-center justify-between mb-8'>
                    <div className='flex items-center gap-2'>
                        <ArrowLeft className='h-4 w-4 text-muted-foreground' />
                        <Skeleton className='h-5 w-28' />
                    </div>
                    <Button
                        variant='outline'
                        size='sm'
                        disabled
                        className='flex items-center gap-2'
                    >
                        <Printer className='h-4 w-4' />
                        <Skeleton className='h-5 w-16' />
                    </Button>
                </div>

                <div className='space-y-8'>
                    <div>
                        <Skeleton className='h-9 w-64 mb-2' />
                        <Skeleton className='h-5 w-48' />
                    </div>

                    {[...Array(3)].map((_, index) => (
                        <div key={index}>
                            <section>
                                <Skeleton className='h-7 w-48 mb-4' />
                                <div className='space-y-4'>
                                    <Skeleton className='h-4 w-full' />
                                    <Skeleton className='h-4 w-3/4' />
                                    <Skeleton className='h-4 w-5/6' />
                                </div>
                            </section>
                            <Separator />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

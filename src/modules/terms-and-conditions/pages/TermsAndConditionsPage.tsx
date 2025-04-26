import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import Link from '@/modules/core/components/LocalizedLink';
import { urls } from '@/modules/core/utils/urls';
import { Trans } from '@lingui/react/macro';
import { format } from 'date-fns';
import { ArrowLeft, Printer } from 'lucide-react';
import { useTermsConditionsStore } from '../stores/terms-conditions-store';

export default function TermsAndConditionsPage() {
    const termsConditions = useTermsConditionsStore.use.records();

    function handlePrint() {
        window.print();
    }

    return (
        <div className=' py-12 px-3 md:py-16'>
            <div className='mx-auto max-w-5xl space-y-12'>
                <div className='flex items-center justify-between mb-8 print:hidden'>
                    <Link
                        to={urls.home}
                        className='flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors'
                    >
                        <ArrowLeft className='h-4 w-4' />
                        <span>
                            <Trans>Back to store</Trans>
                        </span>
                    </Link>
                    <Button
                        variant='outline'
                        size='sm'
                        onClick={handlePrint}
                        className='flex items-center gap-2'
                    >
                        <Printer className='h-4 w-4' />
                        <span>
                            <Trans>Print</Trans>
                        </span>
                    </Button>
                </div>

                <div className='space-y-8'>
                    <div>
                        <h1 className='text-3xl font-bold tracking-tight mb-2'>
                            <Trans>Terms and Conditions</Trans>
                        </h1>
                        <p className='text-muted-foreground'>
                            <Trans>
                                Last updated:{' '}
                                {format(new Date(), 'dd MMMM yyyy')}
                            </Trans>
                        </p>
                    </div>

                    {termsConditions.map((termsCondition) => (
                        <>
                            <section>
                                <h2 className='text-2xl font-semibold mb-4'>
                                    {termsCondition.title}
                                </h2>
                                <div className='space-y-4'>
                                    <span
                                        dangerouslySetInnerHTML={{
                                            __html: termsCondition.content,
                                        }}
                                    />
                                </div>
                            </section>

                            <Separator />
                        </>
                    ))}
                </div>
            </div>
        </div>
    );
}

import HeroSection from '@/modules/core/components/HeroSection';
import { urls } from '@/modules/core/utils/urls';
import { Trans } from '@lingui/react/macro';
import ContactForm from '../components/ContactForm';
import ContactInfo from '../components/ContactInfo';

export default function ContactUsPage() {
    return (
        <>
            <HeroSection
                title={<Trans>Contact Us</Trans>}
                breadcrumbs={[
                    { label: <Trans>Home</Trans>, path: urls.home },
                    { label: <Trans>Contact Us</Trans>, path: urls.contactUs },
                ]}
            />

            <div className='container py-6 md:py-6'>
                <div className='mx-auto max-w-5xl space-y-12'>
                    <div className='text-center'>
                        {/* <h1 className='text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl'>
                            <Trans>Contact Us</Trans>
                        </h1> */}
                        <p className='mt-4 text-muted-foreground'>
                            <Trans>
                                We're here to help! Fill out the form below or
                                use our contact information.
                            </Trans>
                        </p>
                    </div>

                    <div className='grid gap-8 md:grid-cols-2'>
                        <ContactForm />
                        <ContactInfo />
                    </div>
                </div>
            </div>
        </>
    );
}

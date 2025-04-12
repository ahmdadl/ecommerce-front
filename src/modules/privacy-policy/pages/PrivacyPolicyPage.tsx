import type React from 'react';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import Link from '@/modules/core/components/LocalizedLink';
import { urls } from '@/modules/core/utils/urls';
import { ArrowLeft, Printer } from 'lucide-react';

// Translation component for internationalization
function Trans({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}

export default function PrivacyPolicyPage() {
    const handlePrint = () => {
        window.print();
    };

    return (
        <div className='container py-12 md:py-16'>
            <div className='mx-auto max-w-5xl space-y-12'>
                <div className='flex items-center justify-between mb-8'>
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
                            <Trans>Privacy Policy</Trans>
                        </h1>
                        <p className='text-muted-foreground'>
                            <Trans>Last updated: April 12, 2025</Trans>
                        </p>
                    </div>

                    <div className='space-y-4'>
                        <p>
                            <Trans>
                                At StyleHub, we value your privacy and are
                                committed to protecting your personal
                                information. This Privacy Policy explains how we
                                collect, use, disclose, and safeguard your
                                information when you visit our website or make a
                                purchase.
                            </Trans>
                        </p>
                        <p>
                            <Trans>
                                Please read this Privacy Policy carefully. If
                                you do not agree with the terms of this Privacy
                                Policy, please do not access the site.
                            </Trans>
                        </p>
                    </div>

                    <section>
                        <h2 className='text-2xl font-semibold mb-4'>
                            <Trans>Information We Collect</Trans>
                        </h2>
                        <div className='space-y-4'>
                            <h3 className='text-xl font-medium'>
                                <Trans>Personal Information</Trans>
                            </h3>
                            <p>
                                <Trans>
                                    We may collect personal information that you
                                    voluntarily provide to us when you:
                                </Trans>
                            </p>
                            <ul className='list-disc pl-6 space-y-2'>
                                <li>
                                    <Trans>Register on our website</Trans>
                                </li>
                                <li>
                                    <Trans>Place an order</Trans>
                                </li>
                                <li>
                                    <Trans>Subscribe to our newsletter</Trans>
                                </li>
                                <li>
                                    <Trans>
                                        Participate in contests, surveys, or
                                        promotions
                                    </Trans>
                                </li>
                                <li>
                                    <Trans>
                                        Contact our customer service team
                                    </Trans>
                                </li>
                            </ul>
                            <p>
                                <Trans>
                                    This information may include your name,
                                    email address, postal address, phone number,
                                    and payment information.
                                </Trans>
                            </p>

                            <h3 className='text-xl font-medium'>
                                <Trans>
                                    Automatically Collected Information
                                </Trans>
                            </h3>
                            <p>
                                <Trans>
                                    When you visit our website, our servers may
                                    automatically log standard data provided by
                                    your web browser. This may include your
                                    device's IP address, browser type and
                                    version, pages you visit, time and date of
                                    your visit, time spent on each page, and
                                    other details about your visit.
                                </Trans>
                            </p>
                            <p>
                                <Trans>
                                    Additionally, if you use our website, we may
                                    collect information about your device
                                    including the type of device, unique device
                                    ID, operating system, and mobile network
                                    information.
                                </Trans>
                            </p>
                        </div>
                    </section>

                    <Separator />

                    <section>
                        <h2 className='text-2xl font-semibold mb-4'>
                            <Trans>How We Use Your Information</Trans>
                        </h2>
                        <div className='space-y-4'>
                            <p>
                                <Trans>
                                    We use the information we collect for
                                    various business purposes, including:
                                </Trans>
                            </p>
                            <ul className='list-disc pl-6 space-y-2'>
                                <li>
                                    <Trans>
                                        To provide and maintain our services
                                    </Trans>
                                </li>
                                <li>
                                    <Trans>
                                        To process and fulfill your orders
                                    </Trans>
                                </li>
                                <li>
                                    <Trans>
                                        To send you order confirmations and
                                        updates
                                    </Trans>
                                </li>
                                <li>
                                    <Trans>To provide customer support</Trans>
                                </li>
                                <li>
                                    <Trans>
                                        To communicate with you about products,
                                        services, promotions, and events
                                    </Trans>
                                </li>
                                <li>
                                    <Trans>
                                        To personalize your experience and
                                        deliver content relevant to your
                                        interests
                                    </Trans>
                                </li>
                                <li>
                                    <Trans>
                                        To improve our website and services
                                    </Trans>
                                </li>
                                <li>
                                    <Trans>
                                        To detect, prevent, and address
                                        technical issues or fraudulent
                                        activities
                                    </Trans>
                                </li>
                            </ul>
                        </div>
                    </section>

                    <Separator />

                    <section>
                        <h2 className='text-2xl font-semibold mb-4'>
                            <Trans>Cookies and Tracking Technologies</Trans>
                        </h2>
                        <div className='space-y-4'>
                            <p>
                                <Trans>
                                    We use cookies and similar tracking
                                    technologies to track activity on our
                                    website and store certain information.
                                    Cookies are files with a small amount of
                                    data which may include an anonymous unique
                                    identifier.
                                </Trans>
                            </p>
                            <p>
                                <Trans>
                                    You can instruct your browser to refuse all
                                    cookies or to indicate when a cookie is
                                    being sent. However, if you do not accept
                                    cookies, you may not be able to use some
                                    portions of our website.
                                </Trans>
                            </p>
                            <p>
                                <Trans>
                                    We use the following types of cookies:
                                </Trans>
                            </p>
                            <ul className='list-disc pl-6 space-y-2'>
                                <li>
                                    <Trans>
                                        Essential cookies: Necessary for the
                                        website to function properly
                                    </Trans>
                                </li>
                                <li>
                                    <Trans>
                                        Preference cookies: Enable the website
                                        to remember your preferences
                                    </Trans>
                                </li>
                                <li>
                                    <Trans>
                                        Analytics cookies: Help us understand
                                        how visitors interact with our website
                                    </Trans>
                                </li>
                                <li>
                                    <Trans>
                                        Marketing cookies: Used to track
                                        visitors across websites to display
                                        relevant advertisements
                                    </Trans>
                                </li>
                            </ul>
                        </div>
                    </section>

                    <Separator />

                    <section>
                        <h2 className='text-2xl font-semibold mb-4'>
                            <Trans>Third-Party Disclosure</Trans>
                        </h2>
                        <div className='space-y-4'>
                            <p>
                                <Trans>
                                    We may share your information with third
                                    parties in certain situations, including:
                                </Trans>
                            </p>
                            <ul className='list-disc pl-6 space-y-2'>
                                <li>
                                    <Trans>
                                        Business Partners: We may share your
                                        information with our business partners
                                        to offer you certain products, services,
                                        or promotions.
                                    </Trans>
                                </li>
                                <li>
                                    <Trans>
                                        Service Providers: We may share your
                                        information with third-party vendors,
                                        service providers, contractors, or
                                        agents who perform services for us or on
                                        our behalf.
                                    </Trans>
                                </li>
                                <li>
                                    <Trans>
                                        Legal Requirements: We may disclose your
                                        information where required to do so by
                                        law or in response to valid requests by
                                        public authorities.
                                    </Trans>
                                </li>
                                <li>
                                    <Trans>
                                        Business Transfers: We may share or
                                        transfer your information in connection
                                        with, or during negotiations of, any
                                        merger, sale of company assets,
                                        financing, or acquisition of all or a
                                        portion of our business.
                                    </Trans>
                                </li>
                            </ul>
                        </div>
                    </section>

                    <Separator />

                    <section>
                        <h2 className='text-2xl font-semibold mb-4'>
                            <Trans>Your Rights</Trans>
                        </h2>
                        <div className='space-y-4'>
                            <p>
                                <Trans>
                                    Depending on your location, you may have
                                    certain rights regarding your personal
                                    information, including:
                                </Trans>
                            </p>
                            <ul className='list-disc pl-6 space-y-2'>
                                <li>
                                    <Trans>
                                        The right to access the personal
                                        information we have about you
                                    </Trans>
                                </li>
                                <li>
                                    <Trans>
                                        The right to request correction of
                                        inaccurate personal information
                                    </Trans>
                                </li>
                                <li>
                                    <Trans>
                                        The right to request deletion of your
                                        personal information
                                    </Trans>
                                </li>
                                <li>
                                    <Trans>
                                        The right to object to processing of
                                        your personal information
                                    </Trans>
                                </li>
                                <li>
                                    <Trans>The right to data portability</Trans>
                                </li>
                                <li>
                                    <Trans>The right to withdraw consent</Trans>
                                </li>
                            </ul>
                            <p>
                                <Trans>
                                    To exercise these rights, please contact us
                                    using the information provided in the
                                    "Contact Us" section below.
                                </Trans>
                            </p>
                        </div>
                    </section>

                    <Separator />

                    <section>
                        <h2 className='text-2xl font-semibold mb-4'>
                            <Trans>Data Security</Trans>
                        </h2>
                        <div className='space-y-4'>
                            <p>
                                <Trans>
                                    We have implemented appropriate technical
                                    and organizational security measures
                                    designed to protect the security of any
                                    personal information we process. However,
                                    please also remember that we cannot
                                    guarantee that the internet itself is 100%
                                    secure.
                                </Trans>
                            </p>
                        </div>
                    </section>

                    <Separator />

                    <section>
                        <h2 className='text-2xl font-semibold mb-4'>
                            <Trans>Children's Privacy</Trans>
                        </h2>
                        <div className='space-y-4'>
                            <p>
                                <Trans>
                                    Our website is not intended for children
                                    under the age of 13. We do not knowingly
                                    collect personal information from children
                                    under 13. If you are a parent or guardian
                                    and you are aware that your child has
                                    provided us with personal information,
                                    please contact us.
                                </Trans>
                            </p>
                        </div>
                    </section>

                    <Separator />

                    <section>
                        <h2 className='text-2xl font-semibold mb-4'>
                            <Trans>Changes to This Privacy Policy</Trans>
                        </h2>
                        <div className='space-y-4'>
                            <p>
                                <Trans>
                                    We may update our Privacy Policy from time
                                    to time. We will notify you of any changes
                                    by posting the new Privacy Policy on this
                                    page and updating the "Last updated" date at
                                    the top of this Privacy Policy.
                                </Trans>
                            </p>
                            <p>
                                <Trans>
                                    You are advised to review this Privacy
                                    Policy periodically for any changes. Changes
                                    to this Privacy Policy are effective when
                                    they are posted on this page.
                                </Trans>
                            </p>
                        </div>
                    </section>

                    <Separator />

                    <section>
                        <h2 className='text-2xl font-semibold mb-4'>
                            <Trans>Contact Us</Trans>
                        </h2>
                        <div className='space-y-4'>
                            <p>
                                <Trans>
                                    If you have any questions about this Privacy
                                    Policy, please contact us:
                                </Trans>
                            </p>
                            <ul className='list-disc pl-6 space-y-2'>
                                <li>
                                    <Trans>
                                        By email: privacy@stylehub.example.com
                                    </Trans>
                                </li>
                                <li>
                                    <Trans>By phone: +1 (555) 123-4567</Trans>
                                </li>
                                <li>
                                    <Trans>
                                        By mail: StyleHub Inc., 123 Fashion
                                        Street, Suite 100, New York, NY 10001
                                    </Trans>
                                </li>
                            </ul>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

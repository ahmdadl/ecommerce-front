import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Trans } from '@lingui/react/macro';

export default function TermsAndConditionsPage() {
    return (
        <div className='container mx-auto py-8 px-4'>
            <Card className='w-full max-w-4xl mx-auto'>
                <CardHeader>
                    <CardTitle className='text-2xl font-bold'>
                        <Trans>Terms and Conditions</Trans>
                    </CardTitle>
                    {/* <CardDescription>
                        <Trans>Last updated: April 12, 2025</Trans>
                    </CardDescription> */}
                </CardHeader>
                <CardContent>
                    <ScrollArea className='h-[500px] pr-4'>
                        <Accordion
                            type='single'
                            collapsible
                            className='space-y-6'
                        >
                            <AccordionItem value='section1'>
                                <AccordionTrigger>
                                    <Trans>1. Introduction</Trans>
                                </AccordionTrigger>
                                <AccordionContent>
                                    <div className='text-sm text-muted-foreground space-y-2'>
                                        <p>
                                            <Trans>
                                                Welcome to ShopEase ("Company",
                                                "we", "our", "us"). These Terms
                                                and Conditions ("Terms", "Terms
                                                and Conditions") govern your
                                                relationship with the ShopEase
                                                website and services (the
                                                "Service") operated by ShopEase
                                                Inc.
                                            </Trans>
                                        </p>
                                        <p>
                                            <Trans>
                                                Please read these Terms and
                                                Conditions carefully before
                                                using our Service. Your access
                                                to and use of the Service is
                                                conditioned on your acceptance
                                                of and compliance with these
                                                Terms. These Terms apply to all
                                                visitors, users, and others who
                                                access or use the Service.
                                            </Trans>
                                        </p>
                                        <p>
                                            <Trans>
                                                By accessing or using the
                                                Service, you agree to be bound
                                                by these Terms. If you disagree
                                                with any part of the terms, then
                                                you may not access the Service.
                                            </Trans>
                                        </p>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>

                            <Separator />

                            <AccordionItem value='section2'>
                                <AccordionTrigger>
                                    <Trans>2. Purchases</Trans>
                                </AccordionTrigger>
                                <AccordionContent>
                                    <div className='text-sm text-muted-foreground space-y-2'>
                                        <p>
                                            <Trans>
                                                If you wish to purchase any
                                                product or service made
                                                available through the Service
                                                ("Purchase"), you may be asked
                                                to supply certain information
                                                relevant to your Purchase
                                                including, without limitation,
                                                your credit card number, the
                                                expiration date of your credit
                                                card, your billing address, and
                                                your shipping information.
                                            </Trans>
                                        </p>
                                        <p>
                                            <Trans>
                                                You represent and warrant that:
                                                (i) you have the legal right to
                                                use any credit card(s) or other
                                                payment method(s) in connection
                                                with any Purchase; and that (ii)
                                                the information you supply to us
                                                is true, correct, and complete.
                                            </Trans>
                                        </p>
                                        <p>
                                            <Trans>
                                                By submitting such information,
                                                you grant us the right to
                                                provide the information to third
                                                parties for purposes of
                                                facilitating the completion of
                                                Purchases.
                                            </Trans>
                                        </p>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>

                            <Separator />

                            <AccordionItem value='section3'>
                                <AccordionTrigger>
                                    <Trans>3. Refunds and Returns</Trans>
                                </AccordionTrigger>
                                <AccordionContent>
                                    <div className='text-sm text-muted-foreground space-y-2'>
                                        <p>
                                            <Trans>
                                                We issue refunds for Purchases
                                                within 30 days of the original
                                                purchase date. To be eligible
                                                for a return, your item must be
                                                unused and in the same condition
                                                that you received it. It must
                                                also be in the original
                                                packaging.
                                            </Trans>
                                        </p>
                                        <p>
                                            <Trans>
                                                Several types of goods are
                                                exempt from being returned.
                                                Perishable goods such as food,
                                                flowers, newspapers, or
                                                magazines cannot be returned. We
                                                also do not accept products that
                                                are intimate or sanitary goods,
                                                hazardous materials, or
                                                flammable liquids or gases.
                                            </Trans>
                                        </p>
                                        <p>
                                            <Trans>
                                                To complete your return, we
                                                require a receipt or proof of
                                                purchase. Please do not send
                                                your purchase back to the
                                                manufacturer. There are certain
                                                situations where only partial
                                                refunds are granted (if
                                                applicable).
                                            </Trans>
                                        </p>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>

                            <Separator />

                            <AccordionItem value='section4'>
                                <AccordionTrigger>
                                    <Trans>4. Intellectual Property</Trans>
                                </AccordionTrigger>
                                <AccordionContent>
                                    <div className='text-sm text-muted-foreground space-y-2'>
                                        <p>
                                            <Trans>
                                                The Service and its original
                                                content, features, and
                                                functionality are and will
                                                remain the exclusive property of
                                                ShopEase Inc. and its licensors.
                                                The Service is protected by
                                                copyright, trademark, and other
                                                laws of both the United States
                                                and foreign countries. Our
                                                trademarks and trade dress may
                                                not be used in connection with
                                                any product or service without
                                                the prior written consent of
                                                ShopEase Inc.
                                            </Trans>
                                        </p>
                                        <p>
                                            <Trans>
                                                All content included on this
                                                site, such as text, graphics,
                                                logos, button icons, images,
                                                audio clips, digital downloads,
                                                data compilations, and software,
                                                is the property of ShopEase Inc.
                                                or its content suppliers and
                                                protected by international
                                                copyright laws.
                                            </Trans>
                                        </p>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>

                            <Separator />

                            <AccordionItem value='section5'>
                                <AccordionTrigger>
                                    <Trans>5. Termination</Trans>
                                </AccordionTrigger>
                                <AccordionContent>
                                    <div className='text-sm text-muted-foreground space-y-2'>
                                        <p>
                                            <Trans>
                                                We may terminate or suspend your
                                                account immediately, without
                                                prior notice or liability, for
                                                any reason whatsoever, including
                                                without limitation if you breach
                                                the Terms.
                                            </Trans>
                                        </p>
                                        <p>
                                            <Trans>
                                                Upon termination, your right to
                                                use the Service will immediately
                                                cease. If you wish to terminate
                                                your account, you may simply
                                                discontinue using the Service.
                                            </Trans>
                                        </p>
                                        <p>
                                            <Trans>
                                                All provisions of the Terms
                                                which by their nature should
                                                survive termination shall
                                                survive termination, including,
                                                without limitation, ownership
                                                provisions, warranty
                                                disclaimers, indemnity, and
                                                limitations of liability.
                                            </Trans>
                                        </p>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </ScrollArea>
                </CardContent>
                <CardFooter className='flex flex-col items-start gap-4'>
                    <p className='text-xs text-muted-foreground mt-2'>
                        <Trans>
                            If you have any questions about these Terms, please
                            contact us at support@shopease.example.com
                        </Trans>
                    </p>
                </CardFooter>
            </Card>
        </div>
    );
}

import { Clock, Mail, MapPin, Phone } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Trans } from '@lingui/react/macro';

export default function ContactInfo() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>
                    <Trans>Contact Information</Trans>
                </CardTitle>
            </CardHeader>
            <CardContent className='space-y-6'>
                <div className='space-y-4'>
                    <div className='flex items-start space-x-3'>
                        <MapPin className='h-5 w-5 text-muted-foreground shrink-0 mt-0.5' />
                        <div>
                            <h3 className='font-medium'>
                                <Trans>Address</Trans>
                            </h3>
                            <p className='text-sm text-muted-foreground'>
                                123 Commerce Street
                                <br />
                                Suite 100
                                <br />
                                New York, NY 10001
                            </p>
                            <Button
                                variant='link'
                                className='h-auto p-0 text-sm'
                                asChild
                            >
                                <a
                                    href='https://maps.google.com'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <Trans>View on map</Trans>
                                </a>
                            </Button>
                        </div>
                    </div>

                    <div className='flex items-start space-x-3'>
                        <Phone className='h-5 w-5 text-muted-foreground shrink-0 mt-0.5' />
                        <div>
                            <h3 className='font-medium'>Phone</h3>
                            <p className='text-sm text-muted-foreground'>
                                <Trans>Customer Service</Trans>:{' '}
                                <a
                                    href='tel:+18001234567'
                                    className='hover:underline'
                                >
                                    +1 (800) 123-4567
                                </a>
                                <br />
                                <Trans>Orders & Returns</Trans>:{' '}
                                <a
                                    href='tel:+18009876543'
                                    className='hover:underline'
                                >
                                    +1 (800) 987-6543
                                </a>
                            </p>
                        </div>
                    </div>

                    <div className='flex items-start space-x-3'>
                        <Mail className='h-5 w-5 text-muted-foreground shrink-0 mt-0.5' />
                        <div>
                            <h3 className='font-medium'>
                                <Trans>Email</Trans>
                            </h3>
                            <p className='text-sm text-muted-foreground'>
                                <Trans>Customer Support</Trans>:{' '}
                                <a
                                    href='mailto:support@yourstore.com'
                                    className='hover:underline'
                                >
                                    support@yourstore.com
                                </a>
                                <br />
                                <Trans>Sales Inquiries</Trans>:{' '}
                                <a
                                    href='mailto:sales@yourstore.com'
                                    className='hover:underline'
                                >
                                    sales@yourstore.com
                                </a>
                            </p>
                        </div>
                    </div>

                    <div className='flex items-start space-x-3'>
                        <Clock className='h-5 w-5 text-muted-foreground shrink-0 mt-0.5' />
                        <div>
                            <h3 className='font-medium'>
                                <Trans>Business Hours</Trans>
                            </h3>
                            <p className='text-sm text-muted-foreground'>
                                Monday - Friday: 9:00 AM - 6:00 PM EST
                                <br />
                                Saturday: 10:00 AM - 4:00 PM EST
                                <br />
                                Sunday: Closed
                            </p>
                        </div>
                    </div>
                </div>

                <div className='pt-4 border-t'>
                    <h3 className='font-medium mb-2'>
                        <Trans>Connect With Us</Trans>
                    </h3>
                    <div className='flex space-x-4'>
                        <Button variant='outline' size='icon' asChild>
                            <a
                                href='https://facebook.com'
                                target='_blank'
                                rel='noopener noreferrer'
                                aria-label='Facebook'
                            >
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    width='24'
                                    height='24'
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    stroke='currentColor'
                                    strokeWidth='2'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    className='h-5 w-5'
                                >
                                    <path d='M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z'></path>
                                </svg>
                            </a>
                        </Button>
                        <Button variant='outline' size='icon' asChild>
                            <a
                                href='https://twitter.com'
                                target='_blank'
                                rel='noopener noreferrer'
                                aria-label='Twitter'
                            >
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    width='24'
                                    height='24'
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    stroke='currentColor'
                                    strokeWidth='2'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    className='h-5 w-5'
                                >
                                    <path d='M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z'></path>
                                </svg>
                            </a>
                        </Button>
                        <Button variant='outline' size='icon' asChild>
                            <a
                                href='https://instagram.com'
                                target='_blank'
                                rel='noopener noreferrer'
                                aria-label='Instagram'
                            >
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    width='24'
                                    height='24'
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    stroke='currentColor'
                                    strokeWidth='2'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    className='h-5 w-5'
                                >
                                    <rect
                                        x='2'
                                        y='2'
                                        width='20'
                                        height='20'
                                        rx='5'
                                        ry='5'
                                    ></rect>
                                    <path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z'></path>
                                    <line
                                        x1='17.5'
                                        y1='6.5'
                                        x2='17.51'
                                        y2='6.5'
                                    ></line>
                                </svg>
                            </a>
                        </Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}

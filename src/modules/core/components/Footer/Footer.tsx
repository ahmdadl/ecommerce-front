import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from '@core/components/LocalizedLink';
import { Trans, useLingui } from '@lingui/react/macro';
import {
    Facebook,
    Instagram,
    Mail,
    MapPin,
    Phone,
    Twitter,
    Youtube,
} from 'lucide-react';
import { urls } from '../../utils/urls';

export function Footer() {
    const { t } = useLingui();

    return (
        <footer className='bg-muted/50 border-t'>
            <div className='container px-4 md:px-6 py-12'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                    <div>
                        <h3 className='text-lg font-semibold mb-4'>
                            <Trans>About ShopHub</Trans>
                        </h3>
                        <p className='text-muted-foreground mb-4'>
                            <Trans>
                                ShopHub is your one-stop destination for all
                                your shopping needs. We offer a wide range of
                                products at competitive prices.
                            </Trans>
                        </p>
                        <div className='flex space-x-4'>
                            <Button
                                variant='ghost'
                                size='icon'
                                className='rounded-full'
                            >
                                <Facebook className='h-5 w-5' />
                                <span className='sr-only'>
                                    <Trans>Facebook</Trans>
                                </span>
                            </Button>
                            <Button
                                variant='ghost'
                                size='icon'
                                className='rounded-full'
                            >
                                <Instagram className='h-5 w-5' />
                                <span className='sr-only'>
                                    <Trans>Instagram</Trans>
                                </span>
                            </Button>
                            <Button
                                variant='ghost'
                                size='icon'
                                className='rounded-full'
                            >
                                <Twitter className='h-5 w-5' />
                                <span className='sr-only'>
                                    <Trans>Twitter</Trans>
                                </span>
                            </Button>
                            <Button
                                variant='ghost'
                                size='icon'
                                className='rounded-full'
                            >
                                <Youtube className='h-5 w-5' />
                                <span className='sr-only'>
                                    <Trans>YouTube</Trans>
                                </span>
                            </Button>
                        </div>
                    </div>
                    <div>
                        <h3 className='text-lg font-semibold mb-4'>
                            <Trans>Quick Links</Trans>
                        </h3>
                        <ul className='space-y-2'>
                            <li>
                                <Link
                                    to={urls.home}
                                    className='text-muted-foreground hover:text-foreground'
                                >
                                    <Trans>Home</Trans>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={urls.shop}
                                    className='text-muted-foreground hover:text-foreground'
                                >
                                    <Trans>Shop</Trans>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={urls.categories.index}
                                    className='text-muted-foreground hover:text-foreground'
                                >
                                    <Trans>Categories</Trans>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={urls.brands.index}
                                    className='text-muted-foreground hover:text-foreground'
                                >
                                    <Trans>Brands</Trans>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={urls.shop}
                                    className='text-muted-foreground hover:text-foreground'
                                >
                                    <Trans>Offers</Trans>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='text-lg font-semibold mb-4'>
                            <Trans>Customer Service</Trans>
                        </h3>
                        <ul className='space-y-2'>
                            <li>
                                <Link
                                    to={urls.contactUs}
                                    className='text-muted-foreground hover:text-foreground'
                                >
                                    <Trans>Contact Us</Trans>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={urls.faq}
                                    className='text-muted-foreground hover:text-foreground'
                                >
                                    <Trans>FAQs</Trans>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={urls.privacyPolicy}
                                    className='text-muted-foreground hover:text-foreground'
                                >
                                    <Trans>Privacy Policy</Trans>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={urls.termsAndConditions}
                                    className='text-muted-foreground hover:text-foreground'
                                >
                                    <Trans>Terms & Conditions</Trans>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='text-lg font-semibold mb-4'>
                            <Trans>Contact Information</Trans>
                        </h3>
                        <ul className='space-y-3'>
                            <li className='flex items-start'>
                                <MapPin className='h-5 w-5 mr-2 mt-0.5 text-muted-foreground' />
                                <span className='text-muted-foreground'>
                                    <Trans>
                                        123 Commerce Street, Shopville, SV 12345
                                    </Trans>
                                </span>
                            </li>
                            <li className='flex items-center'>
                                <Phone className='h-5 w-5 mr-2 text-muted-foreground' />
                                <span className='text-muted-foreground'>
                                    <Trans>+1 (555) 123-4567</Trans>
                                </span>
                            </li>
                            <li className='flex items-center'>
                                <Mail className='h-5 w-5 mr-2 text-muted-foreground' />
                                <span className='text-muted-foreground'>
                                    <Trans>support@shophub.com</Trans>
                                </span>
                            </li>
                        </ul>
                        <div className='mt-6'>
                            <h4 className='font-medium mb-2'>
                                <Trans>Subscribe to our newsletter</Trans>
                            </h4>
                            <div className='flex gap-2'>
                                <Input
                                    placeholder={t`Your email`}
                                    type='email'
                                />
                                <Button>
                                    <Trans>Subscribe</Trans>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='border-t mt-8 pt-8 text-center text-muted-foreground'>
                    <p>
                        <Trans>
                            &copy; {new Date().getFullYear()} ShopHub. All
                            rights reserved.
                        </Trans>
                    </p>
                </div>
            </div>
        </footer>
    );
}

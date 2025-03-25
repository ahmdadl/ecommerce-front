import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
    Facebook,
    Instagram,
    Mail,
    MapPin,
    Phone,
    Twitter,
    Youtube,
} from 'lucide-react';
import { Link } from 'react-router';

export function Footer() {
    return (
        <footer className='bg-muted/50 border-t'>
            <div className='container px-4 md:px-6 py-12'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                    <div>
                        <h3 className='text-lg font-semibold mb-4'>
                            About ShopHub
                        </h3>
                        <p className='text-muted-foreground mb-4'>
                            ShopHub is your one-stop destination for all your
                            shopping needs. We offer a wide range of products at
                            competitive prices.
                        </p>
                        <div className='flex space-x-4'>
                            <Button
                                variant='ghost'
                                size='icon'
                                className='rounded-full'
                            >
                                <Facebook className='h-5 w-5' />
                                <span className='sr-only'>Facebook</span>
                            </Button>
                            <Button
                                variant='ghost'
                                size='icon'
                                className='rounded-full'
                            >
                                <Instagram className='h-5 w-5' />
                                <span className='sr-only'>Instagram</span>
                            </Button>
                            <Button
                                variant='ghost'
                                size='icon'
                                className='rounded-full'
                            >
                                <Twitter className='h-5 w-5' />
                                <span className='sr-only'>Twitter</span>
                            </Button>
                            <Button
                                variant='ghost'
                                size='icon'
                                className='rounded-full'
                            >
                                <Youtube className='h-5 w-5' />
                                <span className='sr-only'>YouTube</span>
                            </Button>
                        </div>
                    </div>
                    <div>
                        <h3 className='text-lg font-semibold mb-4'>
                            Quick Links
                        </h3>
                        <ul className='space-y-2'>
                            <li>
                                <Link
                                    href='#'
                                    className='text-muted-foreground hover:text-foreground'
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href='#'
                                    className='text-muted-foreground hover:text-foreground'
                                >
                                    Shop
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href='#'
                                    className='text-muted-foreground hover:text-foreground'
                                >
                                    Categories
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href='#'
                                    className='text-muted-foreground hover:text-foreground'
                                >
                                    Deals
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href='#'
                                    className='text-muted-foreground hover:text-foreground'
                                >
                                    New Arrivals
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href='#'
                                    className='text-muted-foreground hover:text-foreground'
                                >
                                    Brands
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='text-lg font-semibold mb-4'>
                            Customer Service
                        </h3>
                        <ul className='space-y-2'>
                            <li>
                                <Link
                                    href='#'
                                    className='text-muted-foreground hover:text-foreground'
                                >
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href='#'
                                    className='text-muted-foreground hover:text-foreground'
                                >
                                    FAQs
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href='#'
                                    className='text-muted-foreground hover:text-foreground'
                                >
                                    Shipping & Returns
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href='#'
                                    className='text-muted-foreground hover:text-foreground'
                                >
                                    Track Order
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href='#'
                                    className='text-muted-foreground hover:text-foreground'
                                >
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href='#'
                                    className='text-muted-foreground hover:text-foreground'
                                >
                                    Terms & Conditions
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='text-lg font-semibold mb-4'>
                            Contact Information
                        </h3>
                        <ul className='space-y-3'>
                            <li className='flex items-start'>
                                <MapPin className='h-5 w-5 mr-2 mt-0.5 text-muted-foreground' />
                                <span className='text-muted-foreground'>
                                    123 Commerce Street, Shopville, SV 12345
                                </span>
                            </li>
                            <li className='flex items-center'>
                                <Phone className='h-5 w-5 mr-2 text-muted-foreground' />
                                <span className='text-muted-foreground'>
                                    +1 (555) 123-4567
                                </span>
                            </li>
                            <li className='flex items-center'>
                                <Mail className='h-5 w-5 mr-2 text-muted-foreground' />
                                <span className='text-muted-foreground'>
                                    support@shophub.com
                                </span>
                            </li>
                        </ul>
                        <div className='mt-6'>
                            <h4 className='font-medium mb-2'>
                                Subscribe to our newsletter
                            </h4>
                            <div className='flex gap-2'>
                                <Input placeholder='Your email' type='email' />
                                <Button>Subscribe</Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='border-t mt-8 pt-8 text-center text-muted-foreground'>
                    <p>
                        &copy; {new Date().getFullYear()} ShopHub. All rights
                        reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Link from '@/modules/core/components/LocalizedLink';
import { urls } from '@/modules/core/utils/urls';
import { parsePrice } from '@/modules/orders/utils/methods';
import { Trans } from '@lingui/react/macro';

export default function HomeSpecialOffers() {
    return (
        <>
            <section className='py-16 bg-gradient-to-r from-primary to-purple-600'>
                <div className='container mx-auto px-4'>
                    <div className='text-center text-white mb-12'>
                        <h2 className='text-3xl font-bold mb-4'>
                            <Trans>Limited Time Offers</Trans>
                        </h2>
                        <p className='text-xl opacity-90'>
                            <Trans>
                                Don't miss out on these amazing deals!
                            </Trans>
                        </p>
                    </div>
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
                        <Card className='bg-white/10 backdrop-blur border-white/20'>
                            <CardContent className='p-6 text-white text-center'>
                                <h3 className='text-2xl font-bold mb-2'>
                                    <Trans>Free Shipping</Trans>
                                </h3>
                                <p className='mb-4'>
                                    <Trans>
                                        On orders over {parsePrice(50000)}
                                    </Trans>
                                </p>
                                <Button variant='secondary' asChild>
                                    <Link to={urls.shop}>
                                        <Trans>Shop Now</Trans>
                                    </Link>
                                </Button>
                            </CardContent>
                        </Card>
                        <Card className='bg-white/10 backdrop-blur border-white/20'>
                            <CardContent className='p-6 text-white text-center'>
                                <h3 className='text-2xl font-bold mb-2'>
                                    <Trans>Trade-In Program</Trans>
                                </h3>
                                <p className='mb-4'>
                                    <Trans>
                                        Get up to {parsePrice(5000)} EGP off
                                        your new device
                                    </Trans>
                                </p>
                                <Button variant='secondary' asChild>
                                    <Link to={urls.contactUs}>
                                        <Trans>Learn More</Trans>
                                    </Link>
                                </Button>
                            </CardContent>
                        </Card>
                        <Card className='bg-white/10 backdrop-blur border-white/20'>
                            <CardContent className='p-6 text-white text-center'>
                                <h3 className='text-2xl font-bold mb-2'>
                                    <Trans>Extended Warranty</Trans>
                                </h3>
                                <p className='mb-4'>
                                    <Trans>
                                        2 years protection for peace of mind
                                    </Trans>
                                </p>
                                <Button variant='secondary' asChild>
                                    <Link to={urls.shop}>
                                        <Trans>Shop Now</Trans>
                                    </Link>
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
        </>
    );
}

import { Card, CardContent } from '@/components/ui/card';
import Image from '@/modules/core/components/Image';
import { cachedData } from '@/modules/core/utils/cached-data';
import { getCurrentLocaleKey } from '@/modules/core/utils/methods';
import { urls } from '@/modules/core/utils/urls';
import Link from '@core/components/LocalizedLink';
import { Trans } from '@lingui/react/macro';
import { ArrowRight } from 'lucide-react';

export default function HomeCategories() {
    const categories = cachedData.categories.filter((c) => c.id);

    return (
        <section className='py-12 md:py-16 lg:py-20'>
            <div className='container mx-auto px-4 md:px-6'>
                {/* Section Header */}
                <div className='text-center mb-8 md:mb-12'>
                    <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-4'>
                        <Trans>Shop by Category</Trans>
                    </h2>
                    <p className='text-muted-foreground text-sm md:text-base max-w-2xl mx-auto'>
                        <Trans>
                            Discover our wide range of tech products across
                            different categories. Find exactly what you're
                            looking for with our curated collections.
                        </Trans>
                    </p>
                </div>

                {/* Categories Grid */}
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6'>
                    {categories.map((category) => (
                        <Link
                            key={category.id}
                            to={urls.categories.view(category)}
                            className='group block'
                        >
                            <Card className='overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 group-hover:scale-[1.02] py-0 my-0'>
                                <CardContent className='p-0'>
                                    <div className='relative aspect-square overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100'>
                                        <Image
                                            src={
                                                category.image ||
                                                '/placeholder.svg'
                                            }
                                            alt={
                                                category.title[
                                                    getCurrentLocaleKey()
                                                ]
                                            }
                                            className='object-cover h-full transition-transform duration-300 group-hover:scale-110'
                                        />
                                        <div className='absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />

                                        {/* Category Info Overlay */}
                                        <div className='absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent'>
                                            <div className='text-white'>
                                                <h3 className='font-semibold text-lg md:text-xl mb-1'>
                                                    {
                                                        category.title[
                                                            getCurrentLocaleKey()
                                                        ]
                                                    }
                                                </h3>
                                                <p className='text-sm text-gray-200 mb-2'>
                                                    {category.products_count}
                                                </p>
                                                <div className='flex items-center text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                                                    <span>
                                                        <Trans>Shop Now</Trans>
                                                    </span>
                                                    <ArrowRight className='ml-1 h-4 w-4 transition-transform group-hover:translate-x-1' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>

                {/* View All Categories Link */}
                <div className='text-center mt-8 md:mt-12'>
                    <Link
                        to={urls.categories.index}
                        className='inline-flex items-center px-6 py-3 text-sm font-medium text-primary border border-primary rounded-md hover:bg-primary hover:text-primary-foreground transition-colors duration-200'
                    >
                        <Trans>View All Categories</Trans>
                        <ArrowRight className='ml-2 h-4 w-4' />
                    </Link>
                </div>
            </div>
        </section>
    );
}

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';

// Fake data for brands
const brands = [
    {
        id: 1,
        name: 'TechGiant',
        imageUrl: '/placeholder.svg?height=100&width=200',
        description: 'Leading technology innovator',
    },
    {
        id: 2,
        name: 'FashionHub',
        imageUrl: '/placeholder.svg?height=100&width=200',
        description: 'Premium clothing and accessories',
    },
    {
        id: 3,
        name: 'HomeStyle',
        imageUrl: '/placeholder.svg?height=100&width=200',
        description: 'Quality home furnishings',
    },
    {
        id: 4,
        name: 'BeautyGlow',
        imageUrl: '/placeholder.svg?height=100&width=200',
        description: 'Luxury beauty products',
    },
    {
        id: 5,
        name: 'SportsPro',
        imageUrl: '/placeholder.svg?height=100&width=200',
        description: 'Professional sports equipment',
    },
    {
        id: 6,
        name: 'BookWorm',
        imageUrl: '/placeholder.svg?height=100&width=200',
        description: 'Extensive book collection',
    },
    {
        id: 7,
        name: 'GadgetWorld',
        imageUrl: '/placeholder.svg?height=100&width=200',
        description: 'Innovative gadgets and accessories',
    },
    {
        id: 8,
        name: 'EcoFriendly',
        imageUrl: '/placeholder.svg?height=100&width=200',
        description: 'Sustainable and eco-friendly products',
    },
];

export default function HomeBrands() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: -300,
                behavior: 'smooth',
            });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: 300,
                behavior: 'smooth',
            });
        }
    };

    return (
        <section className='py-12 px-4 md:px-6 lg:px-8 bg-muted/30'>
            <div className='container mx-auto'>
                <div className='flex items-center justify-between mb-8'>
                    <h2 className='text-3xl font-bold tracking-tight'>
                        Featured Brands
                    </h2>
                    <div className='flex gap-2'>
                        <Button
                            variant='outline'
                            size='icon'
                            onClick={scrollLeft}
                        >
                            <ChevronLeft className='h-4 w-4' />
                            <span className='sr-only'>Scroll left</span>
                        </Button>
                        <Button
                            variant='outline'
                            size='icon'
                            onClick={scrollRight}
                        >
                            <ChevronRight className='h-4 w-4' />
                            <span className='sr-only'>Scroll right</span>
                        </Button>
                    </div>
                </div>
                <div
                    ref={scrollContainerRef}
                    className='flex overflow-x-auto space-x-4 pb-4 scrollbar-hide snap-x'
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {brands.map((brand) => (
                        <Card
                            key={brand.id}
                            className='min-w-[250px] snap-start hover:shadow-md transition-shadow'
                        >
                            <CardContent className='p-6 flex flex-col items-center text-center'>
                                <div className='h-20 flex items-center justify-center mb-4'>
                                    <img
                                        src={
                                            brand.imageUrl || '/placeholder.svg'
                                        }
                                        alt={brand.name}
                                        width={200}
                                        height={100}
                                        className='object-contain max-h-full'
                                    />
                                </div>
                                <h3 className='font-medium text-lg'>
                                    {brand.name}
                                </h3>
                                <p className='text-sm text-muted-foreground'>
                                    {brand.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}

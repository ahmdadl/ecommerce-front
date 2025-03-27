import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';

const banners = [
    {
        id: 1,
        imageUrl: '/placeholder.svg?height=600&width=1600',
        title: 'Summer Collection 2025',
        subtitle: 'Up to 50% off on selected items',
        buttonText: 'Shop Now',
        buttonLink: '#',
    },
    {
        id: 2,
        imageUrl: '/placeholder.svg?height=600&width=1600',
        title: 'New Arrivals',
        subtitle: 'Check out our latest products',
        buttonText: 'Discover',
        buttonLink: '#',
    },
    {
        id: 3,
        imageUrl: '/placeholder.svg?height=600&width=1600',
        title: 'Limited Time Offer',
        subtitle: 'Free shipping on orders over $50',
        buttonText: 'Get Started',
        buttonLink: '#',
    },
];

export default function HomeBanners() {
    const [currentBanner, setCurrentBanner] = useState(0);

    const nextBanner = () => {
        setCurrentBanner((prev) =>
            prev === banners.length - 1 ? 0 : prev + 1
        );
    };

    const prevBanner = () => {
        setCurrentBanner((prev) =>
            prev === 0 ? banners.length - 1 : prev - 1
        );
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextBanner();
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const banner = banners[currentBanner];

    return (
        <section className='relative w-full h-[600px] overflow-hidden'>
            <div
                className='absolute inset-0 bg-cover bg-center transition-opacity duration-500'
                style={{ backgroundImage: `url(${banner.imageUrl})` }}
            />
            <div className='absolute inset-0 bg-black/40' />
            <div className='absolute inset-0 flex items-center justify-center'>
                <div className='text-center text-white px-4 max-w-4xl'>
                    <h1 className='text-4xl md:text-6xl font-bold mb-4'>
                        {banner.title}
                    </h1>
                    <p className='text-xl md:text-2xl mb-8'>
                        {banner.subtitle}
                    </p>
                    <Button
                        size='lg'
                        className='bg-primary hover:bg-primary/90'
                    >
                        {banner.buttonText}
                    </Button>
                </div>
            </div>
            <Button
                variant='ghost'
                size='icon'
                className='absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 text-white hover:bg-black/50 h-12 w-12 rounded-full'
                onClick={prevBanner}
            >
                <ChevronLeft className='h-8 w-8' />
                <span className='sr-only'>Previous banner</span>
            </Button>
            <Button
                variant='ghost'
                size='icon'
                className='absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 text-white hover:bg-black/50 h-12 w-12 rounded-full'
                onClick={nextBanner}
            >
                <ChevronRight className='h-8 w-8' />
                <span className='sr-only'>Next banner</span>
            </Button>
            <div className='absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2'>
                {banners.map((_, index) => (
                    <button
                        key={index}
                        className={`w-3 h-3 rounded-full ${
                            index === currentBanner ? 'bg-white' : 'bg-white/50'
                        }`}
                        onClick={() => setCurrentBanner(index)}
                    />
                ))}
            </div>
        </section>
    );
}

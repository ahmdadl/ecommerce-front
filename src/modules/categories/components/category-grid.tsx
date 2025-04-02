import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { urls } from '@/modules/core/utils/urls';
import { Trans } from '@lingui/react/macro';
import { Link } from '@tanstack/react-router';

// Sample category data - in a real app, this would come from an API or database
const categories = [
    {
        id: 1,
        name: 'Electronics',
        description: 'Gadgets, devices, and tech accessories',
        image: '/placeholder.svg?height=300&width=400',
        itemCount: 128,
        slug: 'electronics',
    },
    {
        id: 2,
        name: 'Clothing',
        description: 'Fashion for men, women, and children',
        image: '/placeholder.svg?height=300&width=400',
        itemCount: 256,
        slug: 'clothing',
    },
    {
        id: 3,
        name: 'Home & Kitchen',
        description: 'Furniture, appliances, and decor',
        image: '/placeholder.svg?height=300&width=400',
        itemCount: 192,
        slug: 'home-kitchen',
    },
    {
        id: 4,
        name: 'Beauty & Personal Care',
        description: 'Skincare, makeup, and grooming products',
        image: '/placeholder.svg?height=300&width=400',
        itemCount: 164,
        slug: 'beauty-personal-care',
    },
    {
        id: 5,
        name: 'Sports & Outdoors',
        description: 'Equipment, apparel, and accessories',
        image: '/placeholder.svg?height=300&width=400',
        itemCount: 145,
        slug: 'sports-outdoors',
    },
    {
        id: 6,
        name: 'Books & Media',
        description: 'Books, movies, music, and games',
        image: '/placeholder.svg?height=300&width=400',
        itemCount: 210,
        slug: 'books-media',
    },
    {
        id: 7,
        name: 'Toys & Games',
        description: 'For children and adults alike',
        image: '/placeholder.svg?height=300&width=400',
        itemCount: 178,
        slug: 'toys-games',
    },
    {
        id: 8,
        name: 'Automotive',
        description: 'Parts, accessories, and tools',
        image: '/placeholder.svg?height=300&width=400',
        itemCount: 132,
        slug: 'automotive',
    },
];

export function CategoryGrid() {
    return (
        <div className='grid grid-cols-1 gap-4 py-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            {categories.map((category) => (
                <Link
                    key={category.id}
                    to={'/en/' + urls.categories.view(category)}
                    className='group transition-transform hover:scale-[1.02]'
                >
                    <Card className='h-full overflow-hidden py-0'>
                        <div className='relative aspect-[4/3] w-full overflow-hidden'>
                            <img
                                src={`https://picsum.photos/seed/${category.slug}/200/300`}
                                alt={category.name}
                                className='object-cover transition-transform group-hover:scale-105 w-full max-w-full'
                            />
                        </div>
                        <CardContent className='p-4'>
                            <h3 className='text-xl font-semibold'>
                                {category.name}
                            </h3>
                            <p className='mt-1 text-sm text-muted-foreground'>
                                {category.description}
                            </p>
                        </CardContent>
                        <CardFooter className='border-t p-4 pt-3'>
                            <p className='text-sm text-muted-foreground'>
                                {category.itemCount} <Trans>products</Trans>
                            </p>
                        </CardFooter>
                    </Card>
                </Link>
            ))}
        </div>
    );
}

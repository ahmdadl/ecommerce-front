import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router';

// Fake data for categories
const categories = [
    {
        id: 1,
        name: 'Electronics',
        imageUrl: '/placeholder.svg?height=200&width=200',
        itemCount: 1243,
    },
    {
        id: 2,
        name: 'Clothing',
        imageUrl: '/placeholder.svg?height=200&width=200',
        itemCount: 856,
    },
    {
        id: 3,
        name: 'Home & Kitchen',
        imageUrl: '/placeholder.svg?height=200&width=200',
        itemCount: 732,
    },
    {
        id: 4,
        name: 'Beauty',
        imageUrl: '/placeholder.svg?height=200&width=200',
        itemCount: 498,
    },
    {
        id: 5,
        name: 'Sports',
        imageUrl: '/placeholder.svg?height=200&width=200',
        itemCount: 325,
    },
    {
        id: 6,
        name: 'Books',
        imageUrl: '/placeholder.svg?height=200&width=200',
        itemCount: 1089,
    },
];

export default function HomeCategories() {
    return (
        <section className='py-12 px-4 md:px-6 lg:px-8'>
            <div className='container mx-auto'>
                <h2 className='text-3xl font-bold tracking-tight mb-8'>
                    Shop by Category
                </h2>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4'>
                    {categories.map((category) => (
                        <Link key={category.id} to='#' className='block'>
                            <Card className='overflow-hidden h-full transition-all hover:shadow-md'>
                                <CardContent className='p-4 flex flex-col items-center text-center'>
                                    <div className='rounded-full overflow-hidden bg-muted mb-4 p-2'>
                                        <img
                                            src={
                                                category.imageUrl ||
                                                '/placeholder.svg'
                                            }
                                            alt={category.name}
                                            width={100}
                                            height={100}
                                            className='object-cover'
                                        />
                                    </div>
                                    <h3 className='font-medium text-lg'>
                                        {category.name}
                                    </h3>
                                    <p className='text-sm text-muted-foreground'>
                                        {category.itemCount} items
                                    </p>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}

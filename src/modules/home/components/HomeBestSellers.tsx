import ProductCard from '@/modules/shop/components/ProductCard';
import Link from '@core/components/LocalizedLink';

// Fake data for best sellers
const bestSellers = [
    {
        id: 1,
        name: 'Ultra HD Smart TV',
        description: '55-inch 4K display with smart features and voice control',
        price: 699.99,
        rating: 4.8,
        reviewCount: 245,
        imageUrl: '/placeholder.svg?height=300&width=300',
        category: 'Electronics',
    },
    {
        id: 2,
        name: 'Premium Blender',
        description: 'High-performance blender with multiple speed settings',
        price: 129.99,
        rating: 4.7,
        reviewCount: 189,
        imageUrl: '/placeholder.svg?height=300&width=300',
        category: 'Kitchen',
    },
    {
        id: 3,
        name: 'Wireless Earbuds',
        description: 'True wireless earbuds with noise cancellation',
        price: 89.99,
        rating: 4.6,
        reviewCount: 312,
        imageUrl: '/placeholder.svg?height=300&width=300',
        category: 'Audio',
    },
    {
        id: 4,
        name: 'Designer Sunglasses',
        description: 'Polarized sunglasses with UV protection',
        price: 159.99,
        rating: 4.5,
        reviewCount: 98,
        imageUrl: '/placeholder.svg?height=300&width=300',
        category: 'Fashion',
    },
    {
        id: 5,
        name: 'Fitness Tracker',
        description: 'Advanced fitness tracker with heart rate monitoring',
        price: 79.99,
        rating: 4.4,
        reviewCount: 276,
        imageUrl: '/placeholder.svg?height=300&width=300',
        category: 'Wearables',
    },
    {
        id: 6,
        name: 'Portable Speaker',
        description: 'Waterproof portable speaker with 20-hour battery life',
        price: 69.99,
        rating: 4.7,
        reviewCount: 154,
        imageUrl:
            'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80',
        category: 'Audio',
    },
    {
        id: 7,
        name: 'Robot Vacuum',
        description: 'Smart robot vacuum with mapping technology',
        price: 299.99,
        rating: 4.6,
        reviewCount: 203,
        imageUrl:
            'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80',
        category: 'Home',
    },
    {
        id: 8,
        name: 'Gaming Controller',
        description: 'Wireless gaming controller with customizable buttons',
        price: 59.99,
        rating: 4.8,
        reviewCount: 321,
        imageUrl:
            'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80',
        category: 'Gaming',
    },
];

export default function HomeBestSellers() {
    return (
        <section className='py-12 px-4 md:px-6 lg:px-8'>
            <div className='container mx-auto'>
                <div className='flex items-center justify-between mb-8'>
                    <h2 className='text-3xl font-bold tracking-tight'>
                        Best Sellers
                    </h2>
                    <Link to='#' className='text-primary hover:underline'>
                        View all
                    </Link>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                    {bestSellers.map((product) => (
                        <ProductCard product={product} key={product.id} />
                    ))}
                </div>
            </div>
        </section>
    );
}

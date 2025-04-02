import ProductCard from './ProductCard';

// Sample product data
const products = [
    {
        id: 1,
        name: 'Cotton T-Shirt',
        price: 29.99,
        image: '/placeholder.svg?height=300&width=300',
        category: 'Clothing',
        discountedPrice: 19.99,
        discountPercentage: 30,
    },
    {
        id: 2,
        name: 'Slim Fit Jeans',
        price: 59.99,
        image: '/placeholder.svg?height=300&width=300',
        category: 'Clothing',
        isNew: true,
    },
    {
        id: 3,
        name: 'Leather Sneakers',
        price: 89.99,
        image: '/placeholder.svg?height=300&width=300',
        category: 'Shoes',
        isWishlisted: true,
        inStock: true,
        stock: 5,
    },
    {
        id: 4,
        name: 'Wool Sweater',
        price: 79.99,
        image: '/placeholder.svg?height=300&width=300',
        category: 'Clothing',
        inStock: true,
        stock: 5,
    },
    {
        id: 5,
        name: 'Canvas Backpack',
        price: 49.99,
        image: '/placeholder.svg?height=300&width=300',
        category: 'Bags',
    },
    {
        id: 6,
        name: 'Leather Watch',
        price: 129.99,
        image: '/placeholder.svg?height=300&width=300',
        category: 'Accessories',
    },
    {
        id: 7,
        name: 'Denim Jacket',
        price: 99.99,
        image: '/placeholder.svg?height=300&width=300',
        category: 'Clothing',
    },
    {
        id: 8,
        name: 'Sunglasses',
        price: 39.99,
        image: '/placeholder.svg?height=300&width=300',
        category: 'Accessories',
    },
];

export function ProductGrid() {
    return (
        <div className='space-y-4 py-3 px-3'>
            <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3'>
                {products.map((product) => (
                    <ProductCard product={product} key={product.id} />
                ))}
            </div>
        </div>
    );
}

export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    category: string;
    brand: string;
    image: string;
}

export const categories = [
    'Electronics',
    'Clothing',
    'Home & Kitchen',
    'Beauty',
    'Sports',
];

export const brands = [
    'Apple',
    'Samsung',
    'Nike',
    'Adidas',
    'Sony',
    'LG',
    'Philips',
];

export const products: Product[] = [
    {
        id: 1,
        name: 'Wireless Headphones',
        description:
            'Premium noise-cancelling wireless headphones with 30-hour battery life and comfortable over-ear design.',
        price: 249.99,
        category: 'Electronics',
        brand: 'Sony',
        image: '/placeholder.svg?height=400&width=400',
    },
    {
        id: 2,
        name: 'Smartphone Pro',
        description:
            'Latest flagship smartphone with 6.7-inch OLED display, 5G connectivity, and professional-grade camera system.',
        price: 999.99,
        category: 'Electronics',
        brand: 'Apple',
        image: '/placeholder.svg?height=400&width=400',
    },
    {
        id: 3,
        name: 'Running Shoes',
        description:
            'Lightweight running shoes with responsive cushioning and breathable mesh upper for maximum comfort.',
        price: 129.99,
        category: 'Sports',
        brand: 'Nike',
        image: '/placeholder.svg?height=400&width=400',
    },
    {
        id: 4,
        name: 'Smart Watch',
        description:
            'Advanced fitness tracker and smartwatch with heart rate monitoring, GPS, and 7-day battery life.',
        price: 349.99,
        category: 'Electronics',
        brand: 'Samsung',
        image: '/placeholder.svg?height=400&width=400',
    },
    {
        id: 5,
        name: 'Wireless Earbuds',
        description:
            'True wireless earbuds with active noise cancellation and premium sound quality.',
        price: 179.99,
        category: 'Electronics',
        brand: 'Apple',
        image: '/placeholder.svg?height=400&width=400',
    },
    {
        id: 6,
        name: 'Performance T-Shirt',
        description:
            'Moisture-wicking athletic t-shirt designed for comfort during intense workouts.',
        price: 34.99,
        category: 'Clothing',
        brand: 'Adidas',
        image: '/placeholder.svg?height=400&width=400',
    },
    {
        id: 7,
        name: 'Smart Speaker',
        description:
            'Voice-controlled smart speaker with premium sound and built-in virtual assistant.',
        price: 199.99,
        category: 'Electronics',
        brand: 'Sony',
        image: '/placeholder.svg?height=400&width=400',
    },
    {
        id: 8,
        name: 'Coffee Maker',
        description:
            'Programmable coffee maker with thermal carafe and customizable brewing options.',
        price: 149.99,
        category: 'Home & Kitchen',
        brand: 'Philips',
        image: '/placeholder.svg?height=400&width=400',
    },
    {
        id: 9,
        name: 'Moisturizing Cream',
        description:
            'Hydrating face cream with natural ingredients for all skin types.',
        price: 24.99,
        category: 'Beauty',
        brand: 'Philips',
        image: '/placeholder.svg?height=400&width=400',
    },
    {
        id: 10,
        name: '4K Smart TV',
        description:
            '55-inch 4K Ultra HD smart TV with HDR and built-in streaming apps.',
        price: 699.99,
        category: 'Electronics',
        brand: 'LG',
        image: '/placeholder.svg?height=400&width=400',
    },
    {
        id: 11,
        name: 'Yoga Mat',
        description:
            'Non-slip yoga mat with alignment markings and carrying strap.',
        price: 49.99,
        category: 'Sports',
        brand: 'Nike',
        image: '/placeholder.svg?height=400&width=400',
    },
    {
        id: 12,
        name: 'Blender',
        description:
            'High-performance blender with multiple speed settings and durable stainless steel blades.',
        price: 129.99,
        category: 'Home & Kitchen',
        brand: 'Philips',
        image: '/placeholder.svg?height=400&width=400',
    },
];

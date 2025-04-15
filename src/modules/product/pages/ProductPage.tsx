import { ChevronRight, Minus, Plus, ShoppingCart } from 'lucide-react';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Image from '@/modules/core/components/Image';
import Link from '@/modules/core/components/LocalizedLink';
import { parsePrice } from '@/modules/orders/utils/methods';
import { Trans } from '@lingui/react/macro';

// Product type definition
type Product = {
    id: string;
    name: string;
    description: string;
    price: number;
    originalPrice: number;
    images: string[];
    details: string;
    specifications: Record<string, string>;
};

// Sample product data
const product: Product = {
    id: '1',
    name: 'Premium Comfort Sneakers',
    description:
        'Lightweight, breathable, and stylish sneakers perfect for everyday wear. Made with sustainable materials and designed for maximum comfort.',
    price: 129.99,
    originalPrice: 179.99,
    images: [
        '/placeholder.svg?height=600&width=600',
        '/placeholder.svg?height=600&width=600',
        '/placeholder.svg?height=600&width=600',
        '/placeholder.svg?height=600&width=600',
    ],
    details:
        'Our Premium Comfort Sneakers are designed with your comfort in mind. The breathable mesh upper keeps your feet cool, while the cushioned insole provides support for all-day wear. The durable rubber outsole offers excellent traction on various surfaces.',
    specifications: {
        Material: 'Recycled polyester, natural rubber',
        Sole: 'Rubber',
        Closure: 'Lace-up',
        'Care Instructions': 'Wipe with a clean, damp cloth',
        Origin: 'Made in Portugal',
    },
};

// Related products
const relatedProducts = [
    {
        id: '2',
        name: 'Running Performance Shoes',
        price: 149.99,
        originalPrice: 199.99,
        image: '/placeholder.svg?height=300&width=300',
    },
    {
        id: '3',
        name: 'Casual Canvas Sneakers',
        price: 79.99,
        originalPrice: 99.99,
        image: '/placeholder.svg?height=300&width=300',
    },
    {
        id: '4',
        name: 'Hiking Trail Boots',
        price: 189.99,
        originalPrice: 249.99,
        image: '/placeholder.svg?height=300&width=300',
    },
    {
        id: '5',
        name: 'Slip-on Comfort Loafers',
        price: 99.99,
        originalPrice: 129.99,
        image: '/placeholder.svg?height=300&width=300',
    },
];

export default function ProductPage() {
    const [quantity, setQuantity] = useState(1);
    const [activeImage, setActiveImage] = useState(0);

    const incrementQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    // Calculate discount percentage
    const discountPercentage = Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100
    );
    const amountSaved = product.originalPrice - product.price;

    return (
        <div className='container mx-auto px-4 py-8'>
            {/* Breadcrumb */}
            <div className='mb-6 flex items-center text-sm'>
                <Link
                    href='/'
                    className='text-muted-foreground hover:text-foreground'
                >
                    <Trans>Home</Trans>
                </Link>
                <ChevronRight className='mx-2 h-4 w-4 text-muted-foreground' />
                <Link
                    href='/products'
                    className='text-muted-foreground hover:text-foreground'
                >
                    <Trans>Products</Trans>
                </Link>
                <ChevronRight className='mx-2 h-4 w-4 text-muted-foreground' />
                <span className='font-medium'>
                    <Trans>{product.name}</Trans>
                </span>
            </div>

            {/* Product Section */}
            <div className='grid gap-8 md:grid-cols-2'>
                {/* Product Images */}
                <div className='space-y-4'>
                    <div className='overflow-hidden rounded-lg border'>
                        <Image
                            src={
                                product.images[activeImage] ||
                                '/placeholder.svg'
                            }
                            alt={product.name}
                            width={600}
                            height={600}
                            className='h-full w-full object-cover'
                        />
                    </div>
                    <div className='flex space-x-2'>
                        {product.images.map((image, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveImage(index)}
                                className={`relative h-20 w-20 overflow-hidden rounded-md border ${
                                    activeImage === index
                                        ? 'ring-2 ring-primary'
                                        : ''
                                }`}
                            >
                                <Image
                                    src={image || '/placeholder.svg'}
                                    alt={`${product.name} - Image ${index + 1}`}
                                    width={80}
                                    height={80}
                                    className='h-full w-full object-cover'
                                />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Product Details */}
                <div className='space-y-6'>
                    <div>
                        <h1 className='text-3xl font-bold'>
                            <Trans>{product.name}</Trans>
                        </h1>
                        <div className='mt-2 flex items-center gap-2'>
                            <span className='text-2xl font-semibold'>
                                {parsePrice(product.price)}
                            </span>
                            <span className='text-lg text-muted-foreground line-through'>
                                {parsePrice(product.originalPrice)}
                            </span>
                            <span className='rounded-md bg-green-100 px-2 py-1 text-sm font-medium text-green-800'>
                                <Trans>{discountPercentage}% OFF</Trans>
                            </span>
                        </div>
                        <p className='mt-1 text-sm text-green-700'>
                            <Trans>You save: {parsePrice(amountSaved)}</Trans>
                        </p>
                    </div>

                    <p className='text-muted-foreground'>
                        <Trans>{product.description}</Trans>
                    </p>

                    {/* Quantity */}
                    <div>
                        <h3 className='mb-3 text-sm font-medium'>
                            <Trans>Quantity</Trans>
                        </h3>
                        <div className='flex items-center'>
                            <Button
                                variant='outline'
                                size='icon'
                                onClick={decrementQuantity}
                                disabled={quantity <= 1}
                            >
                                <Minus className='h-4 w-4' />
                            </Button>
                            <span className='mx-4 w-8 text-center'>
                                {quantity}
                            </span>
                            <Button
                                variant='outline'
                                size='icon'
                                onClick={incrementQuantity}
                            >
                                <Plus className='h-4 w-4' />
                            </Button>
                        </div>
                    </div>

                    {/* Add to Cart Button */}
                    <Button className='w-full' size='lg'>
                        <ShoppingCart className='mr-2 h-5 w-5' />
                        <Trans>Add to Cart</Trans>
                    </Button>

                    {/* Product Information Tabs */}
                    <Tabs defaultValue='details' className='mt-8'>
                        <TabsList className='grid w-full grid-cols-3'>
                            <TabsTrigger value='details'>
                                <Trans>Details</Trans>
                            </TabsTrigger>
                            <TabsTrigger value='specifications'>
                                <Trans>Specifications</Trans>
                            </TabsTrigger>
                            <TabsTrigger value='shipping'>
                                <Trans>Shipping</Trans>
                            </TabsTrigger>
                        </TabsList>
                        <TabsContent value='details' className='mt-4'>
                            <p className='text-muted-foreground'>
                                <Trans>{product.details}</Trans>
                            </p>
                        </TabsContent>
                        <TabsContent value='specifications' className='mt-4'>
                            <div className='space-y-2'>
                                {Object.entries(product.specifications).map(
                                    ([key, value]) => (
                                        <div
                                            key={key}
                                            className='flex justify-between border-b pb-2'
                                        >
                                            <span className='font-medium'>
                                                <Trans>{key}</Trans>
                                            </span>
                                            <span className='text-muted-foreground'>
                                                <Trans>{value}</Trans>
                                            </span>
                                        </div>
                                    )
                                )}
                            </div>
                        </TabsContent>
                        <TabsContent value='shipping' className='mt-4'>
                            <div className='space-y-4'>
                                <p className='text-muted-foreground'>
                                    <Trans>
                                        Free standard shipping on orders over
                                        $100. Delivery typically takes 3-5
                                        business days.
                                    </Trans>
                                </p>
                                <p className='text-muted-foreground'>
                                    <Trans>
                                        Express shipping available at checkout
                                        for $12.99. Delivery in 1-2 business
                                        days.
                                    </Trans>
                                </p>
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>
            </div>

            {/* Related Products */}
            <div className='mt-16'>
                <h2 className='mb-6 text-2xl font-bold'>
                    <Trans>You might also like</Trans>
                </h2>
                <Carousel className='w-full'>
                    <CarouselContent>
                        {relatedProducts.map((item) => (
                            <CarouselItem
                                key={item.id}
                                className='md:basis-1/3 lg:basis-1/4'
                            >
                                <Card className='h-full'>
                                    <CardContent className='p-4'>
                                        <Link href={`/products/${item.id}`}>
                                            <div className='overflow-hidden rounded-md'>
                                                <Image
                                                    src={
                                                        item.image ||
                                                        '/placeholder.svg'
                                                    }
                                                    alt={item.name}
                                                    width={300}
                                                    height={300}
                                                    className='h-48 w-full object-cover transition-transform hover:scale-105'
                                                />
                                            </div>
                                            <div className='mt-4'>
                                                <h3 className='font-medium'>
                                                    <Trans>{item.name}</Trans>
                                                </h3>
                                                <div className='mt-1 flex items-center gap-2'>
                                                    <span className='font-semibold'>
                                                        {parsePrice(item.price)}
                                                    </span>
                                                    <span className='text-sm text-muted-foreground line-through'>
                                                        {parsePrice(
                                                            item.originalPrice
                                                        )}
                                                    </span>
                                                </div>
                                            </div>
                                        </Link>
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className='left-2' />
                    <CarouselNext className='right-2' />
                </Carousel>
            </div>
        </div>
    );
}

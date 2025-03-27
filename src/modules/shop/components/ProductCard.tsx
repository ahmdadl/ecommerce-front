import { Heart } from 'lucide-react';
import { useState } from 'react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

// Define the Product interface
interface Product {
    id: string;
    name: string;
    category: string;
    price: number;
    discountedPrice?: number;
    discountPercentage?: number;
    isNew?: boolean;
    inStock: boolean;
    image: string;
}

// Sample product data
const sampleProduct: Product = {
    id: '1',
    name: 'Premium Wireless Headphones',
    category: 'Electronics',
    price: 299.99,
    discountedPrice: 249.99,
    discountPercentage: 17,
    isNew: true,
    inStock: true,
    image: '/placeholder.svg?height=300&width=300',
};

interface ProductCardProps {
    product?: Product;
}

export default function ProductCard({
    product = sampleProduct,
}: ProductCardProps) {
    const [isWishlisted, setIsWishlisted] = useState(false);

    // Calculate if there's a discount
    const hasDiscount =
        product.discountedPrice && product.discountedPrice < product.price;

    return (
        <Card className='overflow-hidden h-full flex flex-col pb-6 pt-0'>
            <div className='relative'>
                {/* Product image */}
                <div className='aspect-square overflow-hidden'>
                    <img
                        src={
                            product.image ||
                            'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80'
                        }
                        alt={product.name}
                        width={300}
                        height={300}
                        className='object-cover w-full h-full transition-transform hover:scale-105'
                    />
                </div>

                {/* Badges container - positioned absolutely */}
                <div className='absolute top-2 left-2 flex flex-col gap-1'>
                    {/* New product badge */}
                    {product.isNew && (
                        <Badge className='bg-primary text-primary-foreground'>
                            New
                        </Badge>
                    )}

                    {/* Discount badge */}
                    {hasDiscount && product.discountPercentage && (
                        <Badge variant='destructive'>
                            -{product.discountPercentage}%
                        </Badge>
                    )}
                </div>

                {/* Wishlist button - positioned absolutely */}
                <Button
                    variant='outline'
                    size='icon'
                    className={`absolute top-2 right-2 rounded-full bg-background/80 backdrop-blur-sm ${
                        isWishlisted ? 'text-destructive' : ''
                    }`}
                    onClick={() => setIsWishlisted(!isWishlisted)}
                >
                    <Heart className={isWishlisted ? 'fill-destructive' : ''} />
                    <span className='sr-only'>Add to wishlist</span>
                </Button>
            </div>

            <CardContent className='flex-grow pt-4'>
                {/* Product category */}
                <p className='text-sm text-muted-foreground'>
                    {product.category}
                </p>

                {/* Product name */}
                <h3 className='font-medium mt-1 line-clamp-2 min-h-[2.5rem]'>
                    {product.name}
                </h3>

                {/* Product price */}
                <div className='mt-2 flex items-center gap-2'>
                    {hasDiscount ? (
                        <>
                            <span className='font-bold'>
                                ${product.discountedPrice?.toFixed(2)}
                            </span>
                            <span className='text-muted-foreground line-through text-sm'>
                                ${product.price.toFixed(2)}
                            </span>
                        </>
                    ) : (
                        <span className='font-bold'>
                            ${product.price.toFixed(2)}
                        </span>
                    )}
                </div>
            </CardContent>

            <CardFooter className='pt-0'>
                {/* Add to cart button */}
                <Button className='w-full' disabled={!product.inStock}>
                    {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                </Button>
            </CardFooter>
        </Card>
    );
}

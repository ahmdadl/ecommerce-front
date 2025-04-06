import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import ProductCardSkeleton from '@/modules/shop/components/Products/ProductCard/ProductCardSkeleton';
import { Trash2 } from 'lucide-react';

export default function WishlistSkeletonPage() {
    return (
        <>
            <div className='flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4 px-6'>
                <div>
                    <Skeleton className='h-6 w-32 mt-1' />
                </div>

                <div>
                    <Button
                        variant='outline'
                        className='flex items-center gap-2 text-destructive'
                        disabled
                    >
                        <Trash2 className='h-4 w-4' />
                        <Skeleton className='h-4 w-20' />{' '}
                    </Button>
                </div>
            </div>

            <div className='space-y-4 py-3 px-3'>
                <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3'>
                    {Array.from({ length: 8 }).map((_, index) => (
                        <ProductCardSkeleton key={index} />
                    ))}
                </div>
            </div>
        </>
    );
}

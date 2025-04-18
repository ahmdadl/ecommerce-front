import ProductsSidebarGridSkeleton from '@/modules/shop/components/Products/ProductsSidebarGridSkeleton';
import TagProductsHero from '../components/TagProductsHero';

export default function TagProductsSkeletonPage() {
    return (
        <>
            <TagProductsHero />

            <div>
                <ProductsSidebarGridSkeleton />
            </div>
        </>
    );
}

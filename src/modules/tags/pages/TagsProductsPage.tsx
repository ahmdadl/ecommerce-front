import ProductsSidebarGrid from '@/modules/shop/components/Products/ProductsSidebarGrid';
import { useAllowedSidebarFilters } from '@/modules/shop/stores/allowed-sidebar-filters';
import { tagRoute } from '@/routes/$locale/_catalog/tags/$slug';
import TagProductsHero from '../components/TagProductsHero';

export default function TagsProductsPage() {
    useAllowedSidebarFilters.getState().enableForTag();

    return (
        <>
            <TagProductsHero />

            <div className='tag-products-page'>
                <ProductsSidebarGrid route={tagRoute} />
            </div>
        </>
    );
}

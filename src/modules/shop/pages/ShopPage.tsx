import { shopRoute } from '@/routes/$locale/_catalog/shop';
import ProductsSidebarGrid from '../components/Products/ProductsSidebarGrid';
import ShopHero from '../components/Shop/ShopHero';
import { useAllowedSidebarFilters } from '../stores/allowed-sidebar-filters';

export default function ShopPage() {
    const searchParams = shopRoute.useSearch();

    useAllowedSidebarFilters.getState().enableForShop();

    return (
        <>
            <ShopHero />

            <div className='shop-page'>
                <ProductsSidebarGrid searchParams={searchParams} />
            </div>
        </>
    );
}

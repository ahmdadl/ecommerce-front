import { urls } from '@/modules/core/utils/urls';
import HomeBanners from '@/modules/home/components/HomeBanner';
import HomeBestSellers from '@/modules/home/components/HomeBestSellers';
import HomeBrands from '@/modules/home/components/Homebrands';
import HomeCategories from '@/modules/home/components/HomeCategories';
import { createFileRoute, FileRoutesByPath } from '@tanstack/react-router';

export const Route = createFileRoute(urls.home as keyof FileRoutesByPath)({
    component: Index,
});

function Index() {
    return (
        <div className='flex flex-col gap-6'>
            <HomeBanners />

            <HomeCategories />

            <HomeBrands />

            <HomeBestSellers />
        </div>
    );
}

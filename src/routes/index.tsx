import HomeBanners from '@/modules/home/components/HomeBanner';
import HomeBestSellers from '@/modules/home/components/HomeBestSellers';
import HomeBrands from '@/modules/home/components/Homebrands';
import HomeCategories from '@/modules/home/components/HomeCategories';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
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

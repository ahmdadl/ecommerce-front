import useLocaleStore from '@/modules/core/stores/localeStore';
import { env } from '@/modules/core/utils/env';
import { getPageMetaData } from '@/modules/core/utils/methods';
import HomeBanners from '@/modules/home/components/HomeBanner';
import HomeBestSellers from '@/modules/home/components/HomeBestSellers';
import HomeBrands from '@/modules/home/components/HomeBrands';
import HomeCategories from '@/modules/home/components/HomeCategories';
import HomeSkeletonPage from '@/modules/home/pages/HomeSkeletonPage';
import { homeApi } from '@/modules/home/utils/home-api';
import { createFileRoute, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/$locale/')({
    head: () => ({
        ...getPageMetaData('home'),
    }),

    loader: () => homeApi.load(),

    component: Index,

    beforeLoad: ({ params, location }) => {
        const { locale } = params;

        if (!env.supportedLocales.includes(locale)) {
            throw redirect({
                to: `/${useLocaleStore.getState().locale}/` + location.href,
            });
        }
    },

    pendingComponent: HomeSkeletonPage,
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

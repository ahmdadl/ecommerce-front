import { Button } from '@/components/ui/button';
import { authApi } from '@/modules/auth/utils/auth-api';
import useUserStore from '@/modules/core/stores/userStore';
import HomeBanners from '@/modules/home/components/HomeBanner';
import HomeBestSellers from '@/modules/home/components/HomeBestSellers';
import HomeBrands from '@/modules/home/components/Homebrands';
import HomeCategories from '@/modules/home/components/HomeCategories';
import { Trans } from '@lingui/react/macro';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/$locale/')({
    head: () => ({
        meta: [
            {
                charSet: 'utf-8',
            },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            {
                title: 'TanStack Start Starter',
            },
        ],
    }),
    component: Index,
});

export const homeRoute = Route;

function Index() {
    const accessToken = useUserStore.use.access_token;
    const isCustomer = useUserStore.use.isCustomer();

    // console.log({ accessToken: accessToken(), isCustomer: isCustomer() });

    async function fetchUserData() {
        await authApi.guest.login();

        // useUserStore.getState().login({
        //     ...response.data.record,
        //     role: 'guest',
        // });
    }

    return (
        <div className='flex flex-col gap-6'>
            <Button onClick={fetchUserData}>
                <Trans>login as guest</Trans>
            </Button>

            <HomeBanners />

            <HomeCategories />

            <HomeBrands />

            <HomeBestSellers />
        </div>
    );
}

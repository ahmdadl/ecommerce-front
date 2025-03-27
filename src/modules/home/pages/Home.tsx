import useUserStore from '../../core/stores/userStore';
import http from '../../core/utils/http';
import HomeBanner from '../components/HomeBanner';
import HomeBestSellers from '../components/HomeBestSellers';
import HomeBrands from '../components/Homebrands';
import HomeCategories from '../components/HomeCategories';

export default function Home() {
    const accessToken = useUserStore.use.access_token();

    async function fetchUserData() {
        const response = await http.post('login/guests');

        console.log(response, response.data.record);

        useUserStore.setState({
            ...response.data.record,
            role: 'guest',
        });
    }

    function logUser() {
        console.log(useUserStore.getState());
    }

    return (
        <div className='flex flex-col gap-6'>
            {/* <h1 className='text-3xl font-bold underline'>
                <Trans>Home</Trans>
            </h1>

            <Button onClick={fetchUserData}>
                <Trans>fetch user data</Trans>
            </Button>

            <h2>{accessToken}</h2>

            <Button onClick={logUser}>
                <Trans>log user data</Trans>
            </Button> */}

            <HomeBanner />

            <HomeCategories />

            <HomeBrands />

            <HomeBestSellers />
        </div>
    );
}

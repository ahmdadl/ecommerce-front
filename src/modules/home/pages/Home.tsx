import { Trans } from '@lingui/react/macro';
import HomeBanner from '../components/HomeBanner';

export default function Home() {
    return (
        <>
            <h1 className='text-3xl font-bold underline'>
                <Trans>Home</Trans>
            </h1>
            <HomeBanner />
        </>
    );
}

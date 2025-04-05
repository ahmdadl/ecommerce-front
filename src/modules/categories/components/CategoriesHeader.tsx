import HeroSection from '@/modules/core/components/HeroSection';
import { Trans } from '@lingui/react/macro';

export default function CategoriesHeader() {
    return (
        <>
            <HeroSection
                title={<Trans>Categories</Trans>}
                breadcrumbs={[
                    {
                        label: <Trans>Home</Trans>,
                        path: '/',
                    },
                    {
                        label: <Trans>Categories</Trans>,
                        path: '/categories',
                    },
                ]}
            />

            <p className='my-4 text-center w-full text-muted-foreground'>
                <Trans>Browse all product categories in our store</Trans>
            </p>
        </>
    );
}

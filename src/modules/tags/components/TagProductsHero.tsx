import HeroSection from '@/modules/core/components/HeroSection';
import { urls } from '@/modules/core/utils/urls';
import { useProductsStore } from '@/modules/shop/stores/products-store';
import { Trans } from '@lingui/react/macro';

export default function TagProductsHero() {
    const tag = useProductsStore.use.tag();

    return (
        <>
            <HeroSection
                title={tag?.title}
                breadcrumbs={[
                    { label: <Trans>Home</Trans>, path: urls.home },
                    {
                        label: <Trans>Shop</Trans>,
                        path: urls.shop,
                    },
                    {
                        label: <Trans>Tags</Trans>,
                    },
                    { label: tag?.title },
                ]}
            />
        </>
    );
}

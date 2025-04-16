import HeroSection from '@/modules/core/components/HeroSection';
import { urls } from '@/modules/core/utils/urls';
import { Trans } from '@lingui/react/macro';
import { useProductStore } from '../stores/product-store';

export default function ProductHero() {
    const product = useProductStore.use.record();

    return (
        <>
            <HeroSection
                title={product?.title}
                breadcrumbs={[
                    { label: <Trans>Home</Trans>, path: urls.home },
                    { label: <Trans>Shop</Trans>, path: urls.shop },
                    { label: product?.title },
                ]}
            />
        </>
    );
}

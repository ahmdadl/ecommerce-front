import HeroSection from '@/modules/core/components/HeroSection';
import { urls } from '@/modules/core/utils/urls';
import { Trans } from '@lingui/react/macro';

export default function CompareListHero() {
    return (
        <HeroSection
            title={<Trans>Compare List</Trans>}
            breadcrumbs={[
                { label: <Trans>Home</Trans>, path: urls.home },
                { label: <Trans>Compare List</Trans>, path: urls.compareList },
            ]}
        />
    );
}

import HeroSection from '@/modules/core/components/HeroSection';
import { urls } from '@/modules/core/utils/urls';
import { Trans } from '@lingui/react/macro';

export default function FaqHero() {
    return (
        <HeroSection
            title={<Trans>Frequently Asked Questions</Trans>}
            breadcrumbs={[
                { label: <Trans>Home</Trans>, path: urls.home },
                {
                    label: <Trans>Frequently Asked Questions</Trans>,
                    path: urls.faq,
                },
            ]}
        />
    );
}

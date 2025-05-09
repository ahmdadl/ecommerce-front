import HeroSection from '@/modules/core/components/HeroSection';
import { urls } from '@/modules/core/utils/urls';
import { Trans } from '@lingui/react/macro';

export default function MyWalletHero() {
    return (
        <HeroSection
            title={<Trans>My Wallet</Trans>}
            breadcrumbs={[
                { label: <Trans>Home</Trans>, path: urls.home },
                { label: <Trans>Profile</Trans>, path: urls.profile.index },
                { label: <Trans>My Wallet</Trans> },
            ]}
        />
    );
}

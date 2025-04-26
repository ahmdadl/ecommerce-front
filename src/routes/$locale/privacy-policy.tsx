import { getPageMetaData } from '@/modules/core/utils/methods';
import PrivacyPolicyPage from '@/modules/privacy-policy/pages/PrivacyPolicyPage';
import PrivacyPolicySkeletonPage from '@/modules/privacy-policy/pages/PrivacyPolicySkeletonPage';
import { privacyPolicyApi } from '@/modules/privacy-policy/utils/privacy-poicy-api';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/$locale/privacy-policy')({
    head: () => ({
        ...getPageMetaData('privacy-policy'),
    }),

    loader: () => privacyPolicyApi.load(),

    component: PrivacyPolicyPage,

    pendingComponent: PrivacyPolicySkeletonPage,
});

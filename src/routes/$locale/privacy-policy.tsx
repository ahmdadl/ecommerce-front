import { getPageMetaData } from '@/modules/core/utils/methods';
import PrivacyPolicyPage from '@/modules/privacy-policy/pages/PrivacyPolicyPage';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/$locale/privacy-policy')({
    head: () => ({
        ...getPageMetaData('privacy-policy'),
    }),

    component: PrivacyPolicyPage,
});

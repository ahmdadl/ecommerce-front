import { getPageMetaData } from '@/modules/core/utils/methods';
import TermsAndConditionsPage from '@/modules/terms-and-conditions/pages/TermsAndConditionsPage';
import TermsAndConditionsSkeletonPage from '@/modules/terms-and-conditions/pages/TermsAndConditionsSkeletonPage';
import { termsConditionsApi } from '@/modules/terms-and-conditions/utils/terms-conditions-api';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/$locale/terms-and-conditions')({
    head: () => ({
        ...getPageMetaData('terms-and-conditions'),
    }),

    component: TermsAndConditionsPage,

    loader: () => termsConditionsApi.load(),

    pendingComponent: TermsAndConditionsSkeletonPage,
});

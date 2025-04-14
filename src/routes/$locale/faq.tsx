import FaqPage from '@/modules/faq/pages/FaqPage';
import FaqPageSkeleton from '@/modules/faq/pages/FaqSkeletonPage';
import { faqsApi } from '@/modules/faq/utils/faqs-api';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/$locale/faq')({
    component: FaqPage,

    loader: () => faqsApi.load(),

    pendingComponent: FaqPageSkeleton,
});

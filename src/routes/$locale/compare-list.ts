import CompareListPage from '@/modules/compare-list/pages/CompareListPage';
import CompareListSkeletonPage from '@/modules/compare-list/pages/CompareListSkeletonPage';
import { compareApi } from '@/modules/compare-list/utils/compare-api';
import { getPageMetaData } from '@/modules/core/utils/methods';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/$locale/compare-list')({
    head: () => ({
        ...getPageMetaData('compare-list'),
    }),

    component: CompareListPage,

    loader: compareApi.load,

    pendingComponent: CompareListSkeletonPage,
});

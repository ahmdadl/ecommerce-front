import CompareListPage from '@/modules/compare-list/pages/CompareListPage';
import CompareListSkeletonPage from '@/modules/compare-list/pages/CompareListSkeletonPage';
import { compareApi } from '@/modules/compare-list/utils/compare-api';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/$locale/compare-list')({
    component: CompareListPage,

    loader: compareApi.load,

    pendingComponent: CompareListSkeletonPage,
});

import CategoriesPage from '@/modules/categories/pages/CategoriesPage';
import { CategorySkeletonPage } from '@/modules/categories/pages/CategoriesSkeletonPage';
import { categoriesApi } from '@/modules/categories/utils/categories-api';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/$locale/_catalog/categories/')({
    component: CategoriesPage,

    loader: () => categoriesApi.load(),

    pendingComponent: CategorySkeletonPage,
});

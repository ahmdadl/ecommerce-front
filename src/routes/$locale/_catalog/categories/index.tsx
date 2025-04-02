import CategoriesPage from '@/modules/categories/pages/CategoriesPage';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/$locale/_catalog/categories/')({
    component: CategoriesPage,
});

// function RouteComponent() {
//     return <div>Hello "/$locale/_catalog/categories/"!</div>;
// }

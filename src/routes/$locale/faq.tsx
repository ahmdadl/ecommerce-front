import FaqPage from '@/modules/faq/pages/FaqPage';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/$locale/faq')({
    component: FaqPage,
});

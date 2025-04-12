import ContactUsPage from '@/modules/contact-us/pages/ContactUsPage';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/$locale/contact-us')({
    component: ContactUsPage,
});

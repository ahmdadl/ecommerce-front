import ContactUsPage from '@/modules/contact-us/pages/ContactUsPage';
import { getPageMetaData } from '@/modules/core/utils/methods';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/$locale/contact-us')({
    head: () => ({
        ...getPageMetaData('contact-us'),
    }),

    component: ContactUsPage,
});

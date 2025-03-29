import { i18n } from '@lingui/core';
import { I18nProvider } from '@lingui/react';
import {
    RouterProvider,
    createRouteMask,
    createRouter,
} from '@tanstack/react-router';
import ReactDOM from 'react-dom/client';
import { messages as arMessages } from './locales/ar/messages.po';
import { messages as enMessages } from './locales/en/messages.po';
import './main.css';
import { routeTree } from './routeTree.gen';

const withoutLocaleToLocalizedMask = createRouteMask({
    routeTree,
    from: '/',
    // @ts-ignore
    to: '/en',
    params: true,
});

const router = createRouter({
    routeTree,
    defaultPreload: 'intent',
    scrollRestoration: true,
    routeMasks: [withoutLocaleToLocalizedMask],
});
declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router;
    }
}

i18n.load({
    en: enMessages,
    ar: arMessages,
});
i18n.activate('en');

const root = document.getElementById('root')!;
ReactDOM.createRoot(root).render(
    <I18nProvider i18n={i18n}>
        <RouterProvider router={router} />
    </I18nProvider>
);

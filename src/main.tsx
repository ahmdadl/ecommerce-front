import { i18n } from '@lingui/core';
import { I18nProvider } from '@lingui/react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes } from 'react-router';
import { messages as arMessages } from './locales/ar/messages.po';
import { messages as enMessages } from './locales/en/messages.po';
import './main.css';
import { homeRoutes } from './modules/home/routes';

i18n.load({
    en: enMessages,
    ar: arMessages,
});
i18n.activate('ar');

const root = document.getElementById('root')!;

ReactDOM.createRoot(root).render(
    <I18nProvider i18n={i18n}>
        <BrowserRouter>
            <Routes>{homeRoutes}</Routes>
        </BrowserRouter>
    </I18nProvider>
);

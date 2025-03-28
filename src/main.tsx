import { i18n } from '@lingui/core';
import { I18nProvider } from '@lingui/react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import { messages as arMessages } from './locales/ar/messages.po';
import { messages as enMessages } from './locales/en/messages.po';
import './main.css';
import { authRoutes } from './modules/auth/routes';
import CoreLayout from './modules/core/layout/CoreLayout';
import { homeRoutes } from './modules/home/routes';

i18n.load({
    en: enMessages,
    ar: arMessages,
});
i18n.activate('en');

const root = document.getElementById('root')!;

ReactDOM.createRoot(root).render(
    <I18nProvider i18n={i18n}>
        <BrowserRouter>
            <Routes>
                <Route path=':locale' element={<CoreLayout />}>
                    {homeRoutes}
                    {authRoutes}
                </Route>
                {/* redirect to the default locale */}
            </Routes>
        </BrowserRouter>
    </I18nProvider>
);

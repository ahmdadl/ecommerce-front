import { Outlet, useParams } from 'react-router';
import { BottomMenu } from '../components/BottomMenu/BottomMenu';
import Header from '../components/Header';
import { default as useLocaleStore } from '../stores/localeStore';

export default function CoreLayout() {
    const { locale } = useParams();
    const setLocale = useLocaleStore.use.setLocale();

    setLocale(locale || 'en');

    return (
        <main>
            <Header />

            <Outlet />

            <BottomMenu />
        </main>
    );
}

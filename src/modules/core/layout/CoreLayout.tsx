import { Outlet, useParams } from 'react-router';
import { BottomMenu } from '../components/BottomMenu/BottomMenu';
import { Footer } from '../components/Footer/Footer';
import Header from '../components/Header';
import LayoutShared from '../components/LayoutShared/LayoutShared';
import useLocaleStore from '../stores/localeStore';

export default function CoreLayout() {
    const { locale } = useParams();
    const setLocale = useLocaleStore.use.setLocale();

    setLocale(locale || 'en');

    return (
        <main className='min-h-screen max-w-[1440px] mx-auto'>
            <Header />

            <Outlet />

            <BottomMenu />

            <Footer />

            <LayoutShared />
        </main>
    );
}

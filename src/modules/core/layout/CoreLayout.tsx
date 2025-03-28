import { Outlet } from '@tanstack/react-router';
import { BottomMenu } from '../components/BottomMenu/BottomMenu';
import { Footer } from '../components/Footer/Footer';
import Header from '../components/Header';
import LayoutShared from '../components/LayoutShared/LayoutShared';

export default function CoreLayout() {
    // const { locale } = useParams();
    // // const { i18n } = useLingui();
    // const setLocale = useLocaleStore.use.setLocale();

    // setLocale(locale || 'en');
    // i18n.activate(locale || 'en');

    return (
        <main className='min-h-screen  mx-auto'>
            <Header />

            <Outlet />

            <BottomMenu />

            <Footer />

            <LayoutShared />
        </main>
    );
}

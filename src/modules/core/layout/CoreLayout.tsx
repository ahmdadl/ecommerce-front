import { Outlet, useParams } from 'react-router';
import { default as useLocaleStore } from '../stores/localeStore';

export default function CoreLayout() {
    const { locale } = useParams();
    const setLocale = useLocaleStore((store) => store.setLocale);

    setLocale(locale || 'en');

    return <Outlet />;
}

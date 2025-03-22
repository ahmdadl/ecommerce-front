import { Outlet, useParams } from 'react-router';

export default function CoreLayout() {
    const { locale } = useParams();

    console.log(locale);

    return <Outlet />;
}

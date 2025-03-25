import { Trans } from '@lingui/react/macro';
import { Link } from 'react-router';

export default function TopMenuLinks() {
    return (
        <nav className='hidden md:flex space-x-4 rtl:space-x-reverse'>
            <Link to='/shop' className='px-3 py-2 hover:text-primary'>
                <Trans>Shop</Trans>
            </Link>
            <Link to='/categories' className='px-3 py-2 hover:text-primary'>
                <Trans>Categories</Trans>
            </Link>
            <Link to='/contact' className='px-3 py-2 hover:text-primary'>
                <Trans>Contact</Trans>
            </Link>
        </nav>
    );
}

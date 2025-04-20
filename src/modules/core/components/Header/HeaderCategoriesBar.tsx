import { Trans } from '@lingui/react/macro';
import { localeStore } from '../../stores/localeStore';
import { cachedData } from '../../utils/cached-data';
import { urls } from '../../utils/urls';
import Link from '../LocalizedLink';

export default function HeaderCategoriesBar() {
    return (
        <div className='flex h-10 items-center justify-center border-b bg-background px-4'>
            <nav className='flex items-center gap-6 overflow-x-auto'>
                <Link
                    to={urls.categories.index}
                    className='whitespace-nowrap text-sm font-medium transition-colors hover:text-primary'
                >
                    <Trans>All Categories</Trans>
                </Link>
                {cachedData.categories.map((category) => (
                    <Link
                        key={category.id}
                        to={urls.categories.view(category)}
                        className='whitespace-nowrap text-sm font-medium transition-colors hover:text-primary'
                        preload={false}
                    >
                        {category.title[localeStore.getState().localeKey()]}
                    </Link>
                ))}
            </nav>
        </div>
    );
}

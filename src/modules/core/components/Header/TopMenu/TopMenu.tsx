import { Trans } from '@lingui/react/macro';

import { Link } from '@tanstack/react-router';
import TopMenuActions from './TopMenuActions';
import TopMenuLangSwitch from './TopMenuLangSwitch';
import TopMenuLinks from './TopMenuLinks';
import TopMenuSearch from './TopMenuSearch';
import TopMenuUserSection from './TopMenuUserSection';

export default function TopMenu() {
    return (
        <header className={`w-full bg-background border-b`}>
            <div className='container mx-auto px-4'>
                <div className='flex items-center justify-between gap-3 h-16'>
                    {/* Logo */}
                    <div className='flex-shrink-0'>
                        <Link to='/' className='flex items-center'>
                            <svg
                                className='h-8 w-8 text-primary'
                                viewBox='0 0 24 24'
                                fill='none'
                                stroke='currentColor'
                                strokeWidth='2'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                            >
                                <circle cx='12' cy='12' r='10' />
                                <path d='M8 14s1.5 2 4 2 4-2 4-2' />
                                <line x1='9' y1='9' x2='9.01' y2='9' />
                                <line x1='15' y1='9' x2='15.01' y2='9' />
                            </svg>
                            <span className='ms-2 text-xl font-bold'>
                                <Trans>Brand</Trans>
                            </span>
                        </Link>
                    </div>

                    <TopMenuLinks />

                    {/* Search - Desktop */}
                    <TopMenuSearch />

                    <TopMenuLangSwitch />

                    {/* Actions */}
                    <TopMenuActions />

                    <TopMenuUserSection />
                </div>
            </div>
        </header>
    );
}

import { Button } from '@/components/ui/button';
import useLocaleStore from '@/modules/core/stores/localeStore';
import { Trans } from '@lingui/macro';
import { LanguagesIcon } from 'lucide-react';
import { Link } from 'react-router';

export default function TopMenuLangSwitch() {
    const otherLocale = useLocaleStore.use.otherLocale();

    return (
        <Button
            variant={'outline'}
            className='flex items-center hover:text-primary'
            asChild
        >
            <Link to={`/${otherLocale()}`}>
                <div className='relative'>
                    <LanguagesIcon className='h-5 w-5' />
                </div>
                <span className='ms-1 hidden lg:inline'>
                    <Trans>{`${otherLocale()}Locale`}</Trans>
                </span>
            </Link>
        </Button>
    );
}

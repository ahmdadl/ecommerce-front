import { Button } from '@/components/ui/button';
import useUserStore from '@/modules/core/stores/userStore';
import { urls } from '@/modules/core/utils/urls';
import { Trans } from '@lingui/react/macro';
import { BarChart2 } from 'lucide-react';
import Link from '../../../LocalizedLink';

export default function TopMenuCompareButton() {
    const totals = useUserStore.use.totals();

    const compareCount = totals?.compareItems;

    return (
        <Button
            variant={'outline'}
            className='flex items-center hover:text-primary'
            asChild
        >
            <Link to={urls.compareList}>
                <div className='relative'>
                    <BarChart2 className='h-5 w-5' />
                    {compareCount > 0 && (
                        <span className='absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full h-4 w-4 flex items-center justify-center'>
                            {compareCount}
                        </span>
                    )}
                </div>
                <span className='ms-1 hidden xl:inline'>
                    <Trans>Compare</Trans>
                </span>
            </Link>
        </Button>
    );
}

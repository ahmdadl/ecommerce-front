import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useIsMobile } from '@/hooks/use-mobile';
import { Trans } from '@lingui/react/macro';
import CompareListDesktopView from '../components/CompareListDesktopView';
import CompareListHero from '../components/CompareListHero';
import CompareListMobileView from '../components/CompareListMobileView';
import { useCompareListStore } from '../stores/compare-list-store';

export default function CompareListPage() {
    const { items: comparedProducts } = useCompareListStore.use.compareList();
    const isMobile = useIsMobile();

    return (
        <>
            <CompareListHero />

            {!Boolean(comparedProducts?.length) && (
                <div className='container mx-auto px-4 py-8'>
                    <h1 className='text-2xl font-bold mb-6'>
                        <Trans>Product Comparison</Trans>
                    </h1>
                    <Card className='p-8 text-center'>
                        <p className='text-muted-foreground mb-4'>
                            <Trans>No products to compare</Trans>
                        </p>
                        <Button>
                            <Trans>Continue Shopping</Trans>
                        </Button>
                    </Card>
                </div>
            )}

            {Boolean(comparedProducts?.length) && (
                <>
                    {isMobile ? (
                        <CompareListMobileView
                            comparedProducts={comparedProducts}
                        />
                    ) : (
                        <CompareListDesktopView
                            comparedProducts={comparedProducts}
                        />
                    )}
                </>
            )}
        </>
    );
}

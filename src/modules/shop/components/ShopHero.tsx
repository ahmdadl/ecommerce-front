import { Trans } from '@lingui/react/macro';

export function ShopHero() {
    return (
        <div className='relative bg-zinc-950 text-white w-full py-6 flex flex-col gap-6 px-6'>
            <h1 className='text-xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none'>
                <Trans>Shop</Trans>
            </h1>
            <p className='text-sm'>
                <Trans>Home</Trans> / <Trans>Shop</Trans>
            </p>
        </div>
    );
}

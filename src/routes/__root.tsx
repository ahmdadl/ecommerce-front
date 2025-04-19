import { BottomMenu } from '@/modules/core/components/BottomMenu/BottomMenu';
import { Footer } from '@/modules/core/components/Footer/Footer';
import { Header } from '@/modules/core/components/Header/Header';
import LayoutShared from '@/modules/core/components/LayoutShared/LayoutShared';
import { createRootRoute, Outlet } from '@tanstack/react-router';

export const Route = createRootRoute({
    component: () => (
        <>
            <main className='min-h-screen  mx-auto'>
                <Header />

                <Outlet />

                <BottomMenu />

                <Footer />

                <LayoutShared />
            </main>
            {/* <TanStackRouterDevtools /> */}
        </>
    ),
});

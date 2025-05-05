import { useIsMobile } from '@/hooks/use-mobile';
import { useEffect, useState } from 'react';
import { cachedData } from '../../utils/cached-data';
import HeaderCategoriesBar from './HeaderCategoriesBar';
import { TopHeader } from './TopHeader';
import TopMenu from './TopMenu';

export default function Header() {
    // const [scrollDirection, setScrollDirection] = useState('up');
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isAtTop, setIsAtTop] = useState(true);
    const isMobile = useIsMobile();

    const topHeader = cachedData?.settings?.top_header;

    // Debounce the scroll direction to prevent rapid changes
    // const debouncedScrollDirection = useDebounce(scrollDirection, 100);

    useEffect(() => {
        let timeoutId: any = 0;
        const handleScroll = () => {
            // Throttle scroll events
            if (timeoutId) return;

            timeoutId = setTimeout(() => {
                const currentScrollY = window.scrollY;

                // Determine if we're at the top of the page
                if (currentScrollY <= 0) {
                    setIsAtTop(true);
                    // setScrollDirection('up');
                    timeoutId = null;
                    return;
                } else {
                    setIsAtTop(false);
                }

                // Determine scroll direction
                if (currentScrollY > lastScrollY && currentScrollY > 0) {
                    // setScrollDirection('down');
                } else if (currentScrollY < lastScrollY) {
                    // setScrollDirection('up');
                }

                setLastScrollY(currentScrollY);
                timeoutId = null;
            }, 50); // Throttle to 50ms
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (timeoutId) clearTimeout(timeoutId);
        };
    }, []); // Empty dependency array to prevent re-registration

    const promotionBarHeight = topHeader?.is_active ? (isMobile ? 100 : 60) : 0; // px
    const mainNavbarHeight = 70; // px

    return (
        <div className='sticky top-0 left-0 right-0 z-50 print:hidden'>
            <div
                className={`transition-transform duration-300 ease-in-out ${!isAtTop ? '-translate-y-full -z-10 opacity-0' : 'translate-y-0'}`}
                style={{ height: `${isAtTop ? promotionBarHeight : 0}px` }}
            >
                <TopHeader />
            </div>

            <div
                className='transition-transform duration-300 ease-in-out z-10'
                style={{
                    height: `${mainNavbarHeight}px`,
                }}
            >
                <TopMenu />
            </div>

            {!isMobile && (
                <div
                    className={`transition-transform duration-300 ease-in-out ${!isAtTop && 'relative -z-1'}`}
                    style={{
                        transform: isAtTop
                            ? 'translateY(0)'
                            : `translateY(-${promotionBarHeight + mainNavbarHeight}px)`,
                    }}
                >
                    <HeaderCategoriesBar />
                </div>
            )}
        </div>
    );
}

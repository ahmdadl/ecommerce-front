import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';
import { localeStore } from '../../stores/localeStore';
import { cachedData } from '../../utils/cached-data';
import Image from '../Image';

interface CountdownProps {
    targetDate: Date;
}

interface TopHeaderProps {
    className?: string;
}

const Countdown = ({ targetDate }: CountdownProps) => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const calculateTimeLeft = () => {
            const difference = targetDate.getTime() - new Date().getTime();

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60),
                });
            } else {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        };

        calculateTimeLeft();
        const timer = setInterval(calculateTimeLeft, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    return (
        <div className='flex items-center space-x-2 text-sm font-medium'>
            <div className='flex flex-col items-center'>
                <span className='text-md font-bold'>{timeLeft.days}</span>
                <span className='text-xs'>Days</span>
            </div>
            <span>:</span>
            <div className='flex flex-col items-center'>
                <span className='text-md font-bold'>{timeLeft.hours}</span>
                <span className='text-xs'>Hours</span>
            </div>
            <span>:</span>
            <div className='flex flex-col items-center'>
                <span className='text-md font-bold'>{timeLeft.minutes}</span>
                <span className='text-xs'>Mins</span>
            </div>
            <span>:</span>
            <div className='flex flex-col items-center'>
                <span className='text-md font-bold'>{timeLeft.seconds}</span>
                <span className='text-xs'>Secs</span>
            </div>
        </div>
    );
};

export function TopHeader({ className }: TopHeaderProps) {
    const topHeader = cachedData.settings.top_header;

    if (!topHeader.is_active) {
        return null;
    }

    const targetDate = new Date(topHeader.end_time);

    return (
        <div
            className={cn(
                'bg-red-600 text-primary-foreground h-full px-2 lg:px-4',
                className
            )}
        >
            <div className='2xl:max-w-7xl mx-auto flex items-center flex-col lg:flex-row space-x-4 flex-1 justify-evenly h-full'>
                {topHeader.image && (
                    <div className='hidden sm:block'>
                        <Image
                            src={topHeader.image || '/placeholder.svg'}
                            alt={'Promotion'}
                            width={40}
                            height={40}
                            className='rounded-md object-cover'
                        />
                    </div>
                )}

                <p className='text-sm sm:text-base font-sm'>
                    {topHeader.body[localeStore.getState().localeKey()]}
                </p>

                {targetDate && (
                    <div className=''>
                        <Countdown targetDate={targetDate} />
                    </div>
                )}
            </div>
        </div>
    );
}

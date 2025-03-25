import React from 'react';

export default function TopHeader() {
    return (
        <div className='flex flex-row gap-3 align-center justify-evenly'>
            <img
                src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
                alt='Your Company'
            />
            <p>This is the Topheader component in the core module.</p>
            <Countdown />
        </div>
    );
}

function Countdown() {
    const [countdown, setCountdown] = React.useState(7);

    React.useEffect(() => {
        const timer = setInterval(() => {
            if (countdown <= 0) {
                clearInterval(timer);
                return;
            }

            setCountdown(countdown - 1);
        }, 1000);
        return () => clearInterval(timer);
    }, [countdown]);

    return (
        <div className='flex items-center justify-center space-x-2'>
            <p className='font-bold'>{countdown} seconds</p>
        </div>
    );
}

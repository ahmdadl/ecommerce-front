import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CreditCard, Wallet } from 'lucide-react';

export default function MyWalletSkeletonPage() {
    return (
        <>
            <div className='mx-auto 2xl:max-w-5xl px-4 sm:px-6 lg:px-8 py-12 flex flex-col gap-6 w-full'>
                <Card className='relative overflow-hidden bg-gradient-to-br from-primary to-primary/60 text-white shadow-lg border-0 animate-pulse'>
                    <CardContent className='p-6'>
                        <div className='flex justify-between items-center mb-6'>
                            <div className='flex items-center gap-2'>
                                <Wallet className='w-6 h-6' />
                                <div className='h-6 w-24 bg-white/20 rounded'></div>
                            </div>
                            <div className='h-4 w-16 bg-white/20 rounded'></div>
                        </div>

                        <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6'>
                            <div className='flex flex-col'>
                                <div className='h-4 w-24 bg-white/20 rounded mb-2'></div>
                                <div className='h-8 w-32 bg-white/20 rounded'></div>
                            </div>
                            <div className='flex flex-col'>
                                <div className='h-4 w-16 bg-white/20 rounded mb-2'></div>
                                <div className='h-7 w-28 bg-white/20 rounded'></div>
                            </div>
                            <div className='flex flex-col'>
                                <div className='h-4 w-20 bg-white/20 rounded mb-2'></div>
                                <div className='h-7 w-28 bg-white/20 rounded'></div>
                            </div>
                        </div>

                        <div className='flex gap-2'>
                            <div className='flex-1 h-10 bg-white/20 rounded'></div>
                            <div className='flex-1 h-10 bg-white/20 rounded'></div>
                        </div>
                    </CardContent>
                </Card>

                <Card className='animate-pulse'>
                    <CardHeader>
                        <div className='h-6 w-48 bg-gray-200 rounded'></div>
                    </CardHeader>
                    <CardContent>
                        <Tabs defaultValue='all'>
                            <TabsList className='mb-4'>
                                <TabsTrigger value='all'>
                                    <Skeleton className='h-4 w-16' />
                                </TabsTrigger>
                                <TabsTrigger value='purchases'>
                                    <Skeleton className='h-4 w-16' />
                                </TabsTrigger>
                                <TabsTrigger value='deposits'>
                                    <Skeleton className='h-4 w-16' />
                                </TabsTrigger>
                            </TabsList>

                            <div className='space-y-4'>
                                {[...Array(5)].map((_, index) => (
                                    <div
                                        key={index}
                                        className='flex justify-between items-center p-3 border rounded-lg'
                                    >
                                        <div className='flex items-center gap-3'>
                                            <div className='p-2 rounded-full bg-gray-200'>
                                                <CreditCard className='w-4 h-4 text-gray-400' />
                                            </div>
                                            <div>
                                                <div className='h-5 w-40 bg-gray-200 rounded mb-2'></div>
                                                <div className='h-4 w-24 bg-gray-200 rounded'></div>
                                            </div>
                                        </div>
                                        <div className='flex flex-col items-end'>
                                            <div className='h-5 w-20 bg-gray-200 rounded mb-2'></div>
                                            <div className='h-4 w-16 bg-gray-200 rounded'></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Tabs>
                    </CardContent>
                </Card>
            </div>
        </>
    );
}

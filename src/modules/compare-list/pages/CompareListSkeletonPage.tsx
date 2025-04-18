import { Skeleton } from '@/components/ui/skeleton';
import { useIsMobile } from '@/hooks/use-mobile';
import CompareListHero from '../components/CompareListHero';
import { comparisonAttributes } from '../utils/methods';

export default function CompareListSkeletonPage() {
    const isMobile = useIsMobile();

    const productCount = isMobile ? 1 : 3;

    return (
        <>
            <CompareListHero />

            <div className='mx-auto px-4 py-8 2xl:max-w-7xl'>
                <div className='overflow-x-auto'>
                    <div className='inline-block min-w-full align-middle'>
                        <div className='overflow-hidden border rounded-lg'>
                            <table className='min-w-full divide-y divide-gray-200'>
                                <thead className='bg-muted/50'>
                                    <tr>
                                        <th
                                            scope='col'
                                            className='p-4 text-left font-medium text-muted-foreground w-[200px]'
                                        >
                                            <Skeleton className='h-6 w-24' />
                                        </th>
                                        {Array.from({
                                            length: productCount,
                                        }).map((_, index) => (
                                            <th
                                                key={index}
                                                scope='col'
                                                className='p-4 text-center min-w-[250px]'
                                            >
                                                <div className='flex flex-col items-center space-y-2'>
                                                    <Skeleton className='h-30 w-30 rounded-md' />
                                                    <Skeleton className='h-6 w-32' />
                                                    <Skeleton className='h-4 w-20' />
                                                </div>
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody className='divide-y divide-gray-200 bg-white'>
                                    {comparisonAttributes.map((_, rowIndex) => (
                                        <tr
                                            key={rowIndex}
                                            className={
                                                rowIndex % 2 === 0
                                                    ? 'bg-white'
                                                    : 'bg-muted/30'
                                            }
                                        >
                                            <td className='p-4 font-medium'>
                                                {_.label}
                                            </td>
                                            {Array.from({
                                                length: productCount,
                                            }).map((_, colIndex) => (
                                                <td
                                                    key={colIndex}
                                                    className='p-4'
                                                >
                                                    <Skeleton className='h-6 w-3/4 mx-auto' />
                                                </td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

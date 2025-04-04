import { Skeleton } from '@/components/ui/skeleton';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';

export default function OrdersSkeletonPage() {
    return (
        <div className='flex flex-col h-full min-h-full'>
            <div className='p-4'>
                {/* Search and Filter Section */}
                <div className='flex flex-col md:flex-row gap-4 mb-6'>
                    <div className='relative w-full md:w-64'>
                        <Skeleton className='h-10 w-full' />
                    </div>
                    <Skeleton className='h-10 w-full md:w-40' />
                </div>

                {/* Table Section */}
                <div className='flex flex-col justify-between'>
                    <div className='rounded-md border'>
                        <div className='overflow-x-auto'>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className='max-w-[100px]'>
                                            <Skeleton className='h-4 w-20' />
                                        </TableHead>
                                        <TableHead className='hidden md:table-cell'>
                                            <Skeleton className='h-4 w-16' />
                                        </TableHead>
                                        <TableHead>
                                            <Skeleton className='h-4 w-16' />
                                        </TableHead>
                                        <TableHead className='hidden md:table-cell'>
                                            <Skeleton className='h-4 w-24' />
                                        </TableHead>
                                        <TableHead className='hidden lg:table-cell'>
                                            <Skeleton className='h-4 w-24' />
                                        </TableHead>
                                        <TableHead className='hidden lg:table-cell'>
                                            <Skeleton className='h-4 w-12' />
                                        </TableHead>
                                        <TableHead>
                                            <Skeleton className='h-4 w-16' />
                                        </TableHead>
                                        <TableHead className='text-right'>
                                            <Skeleton className='h-4 w-20' />
                                        </TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {Array(5)
                                        .fill(0)
                                        .map((_, index) => (
                                            <TableRow key={index}>
                                                <TableCell>
                                                    <Skeleton className='h-6 w-24' />
                                                </TableCell>
                                                <TableCell className='hidden md:table-cell'>
                                                    <Skeleton className='h-6 w-20' />
                                                </TableCell>
                                                <TableCell>
                                                    <Skeleton className='h-6 w-16' />
                                                </TableCell>
                                                <TableCell className='hidden md:table-cell'>
                                                    <Skeleton className='h-6 w-20' />
                                                </TableCell>
                                                <TableCell className='hidden lg:table-cell'>
                                                    <Skeleton className='h-6 w-24' />
                                                </TableCell>
                                                <TableCell className='hidden lg:table-cell'>
                                                    <Skeleton className='h-6 w-12' />
                                                </TableCell>
                                                <TableCell>
                                                    <Skeleton className='h-6 w-16' />
                                                </TableCell>
                                                <TableCell className='text-right'>
                                                    <Skeleton className='h-6 w-6' />
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                </TableBody>
                            </Table>
                        </div>
                    </div>

                    {/* Pagination Section */}
                    <div className='flex items-center justify-between space-x-2 py-4'>
                        <Skeleton className='h-5 w-40' />
                        <div className='flex items-center space-x-2'>
                            <Skeleton className='h-8 w-8' />
                            <Skeleton className='h-8 w-8' />
                            <Skeleton className='h-5 w-20' />
                            <Skeleton className='h-8 w-8' />
                            <Skeleton className='h-8 w-8' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

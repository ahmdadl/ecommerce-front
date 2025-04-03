import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Trans } from '@lingui/react/macro';
import { Edit, Trash2 } from 'lucide-react';
import { AddressEntity } from '../utils/types';

export default function AddressCard({ address }: { address: AddressEntity }) {
    function onEdit() {}

    function onDelete() {}

    return (
        <Card className='h-full flex flex-col'>
            <CardHeader>
                <CardTitle className='flex justify-between items-center'>
                    <span>{address.title}</span>
                </CardTitle>
            </CardHeader>
            <CardContent className='flex-grow'>
                <div className='space-y-2'>
                    <p className='font-medium'>
                        {address.first_name} {address.last_name}
                    </p>
                    <p className='text-sm text-muted-foreground'>
                        {address.address}
                    </p>
                    <p className='text-sm text-muted-foreground'>
                        {address.city.title}, {address.government.title}
                    </p>
                    <p className='text-sm'>{address.phone}</p>
                </div>
            </CardContent>
            <CardFooter className='flex justify-end gap-2 border-t pt-4'>
                <Button variant='outline' size='sm' onClick={onEdit}>
                    <Edit className='h-4 w-4 mr-2' />
                    <Trans>Edit</Trans>
                </Button>
                <Button variant='destructive' size='sm' onClick={onDelete}>
                    <Trash2 className='h-4 w-4 mr-2' />
                    <Trans>Delete</Trans>
                </Button>
            </CardFooter>
        </Card>
    );
}

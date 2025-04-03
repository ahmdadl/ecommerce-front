import { Button } from '@/components/ui/button';
import { Trans } from '@lingui/react/macro';
import { PlusCircle } from 'lucide-react';
import AddressCard from '../components/AddressCard';
import CreateAddressModal from '../components/CreateAddressModal';
import EditAddressModal from '../components/EditAddressModal';
import { useAddressesStore } from '../stores/addresses-store';

export default function AddressesPage() {
    const addresses = useAddressesStore.use.list();
    const openCreateModal = useAddressesStore.use.openCreateModal();

    return (
        <>
            <div className='container mx-auto py-6 px-4 md:px-6'>
                <div className='flex justify-between items-center mb-6'>
                    <h1 className='text-2xl font-bold'>
                        <Trans>My Addresses</Trans>
                    </h1>
                    <Button onClick={() => openCreateModal()}>
                        <PlusCircle className='mr-2 h-4 w-4' />
                        <Trans>Add New Address</Trans>
                    </Button>
                </div>

                {addresses.length === 0 ? (
                    <div className='text-center py-12'>
                        <h3 className='text-lg font-medium'>
                            <Trans>No addresses found</Trans>
                        </h3>
                        <p className='text-muted-foreground mt-2'>
                            <Trans>Add a new address to get started</Trans>
                        </p>
                    </div>
                ) : (
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                        {addresses.map((address) => (
                            <AddressCard key={address.id} address={address} />
                        ))}
                    </div>
                )}
            </div>

            <CreateAddressModal />
            <EditAddressModal />
        </>
    );
}

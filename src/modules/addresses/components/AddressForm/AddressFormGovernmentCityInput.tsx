import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'; // shadcn form components
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Trans } from '@lingui/react/macro';
import { useEffect, useState } from 'react';
import { useGovernmentsStore } from '../../stores/goverments-store';
import { addressApi } from '../../utils/addresses-api';
import AddressFormCityInput from './AddressFormCity';

export default function AddressFormGovernmentCityInput({
    form,
    isLoading,
}: any) {
    const governments = useGovernmentsStore.use.records();
    const [isLoadingCities, setIsLoadingCities] = useState(true);

    const governmentId = form.watch('government_id');

    useEffect(() => {
        addressApi.loadGovernments().finally(() => setIsLoadingCities(false));
    }, []);

    useEffect(() => {
        if (governmentId) {
            setIsLoadingCities(true);
            addressApi
                .loadCities(governmentId)
                .finally(() => setIsLoadingCities(false));
        }
    }, [governmentId]);

    return (
        <div className='grid grid-cols-2 gap-4'>
            <FormField
                control={form.control}
                name='government_id'
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>
                            <Trans>Government</Trans>
                        </FormLabel>
                        <Select
                            onValueChange={field.onChange}
                            value={field.value}
                            disabled={isLoading}
                        >
                            <FormControl>
                                <SelectTrigger>
                                    <SelectValue placeholder='Select government' />
                                </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                                {governments?.map((government) => (
                                    <SelectItem
                                        key={government.id}
                                        value={government.id}
                                    >
                                        {government.title}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        <FormMessage />
                    </FormItem>
                )}
            />

            <AddressFormCityInput
                form={form}
                isLoading={isLoading}
                governmentId={governmentId}
                isLoadingCities={isLoadingCities}
            />
        </div>
    );
}

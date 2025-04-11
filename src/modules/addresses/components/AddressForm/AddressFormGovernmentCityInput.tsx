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
import loadingToast from '@/modules/core/utils/methods';
import { Trans } from '@lingui/react/macro';
import { useEffect } from 'react';
import { useCitiesStore } from '../../stores/cities-store';
import { useGovernmentsStore } from '../../stores/goverments-store';
import { addressApi } from '../../utils/addresses-api';

export default function AddressFormGovernmentCityInput({
    form,
    isLoading,
}: any) {
    const governments = useGovernmentsStore.use.records();
    const cities = useCitiesStore.use.currentGovernmentCities();

    // const [filteredCities, setFilteredCities] = useState<CityEntity[]>(cities);

    const governmentId = form.watch('government_id');

    useEffect(() => {
        addressApi.loadGovernments();
    }, []);

    useEffect(() => {
        if (governmentId) {
            loadingToast(addressApi.loadCities(governmentId));
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
            <FormField
                control={form.control}
                name='city_id'
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>
                            <Trans>City</Trans>
                        </FormLabel>
                        <Select
                            onValueChange={field.onChange}
                            value={field.value}
                            disabled={!governmentId || isLoading}
                        >
                            <FormControl>
                                <SelectTrigger>
                                    <SelectValue placeholder='Select city' />
                                </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                                {cities(governmentId).map((city) => (
                                    <SelectItem key={city.id} value={city.id}>
                                        {city.title}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        <FormMessage />
                    </FormItem>
                )}
            />
        </div>
    );
}

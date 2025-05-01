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
import { Loader2 } from 'lucide-react';
import { useCitiesStore } from '../../stores/cities-store';

export default function AddressFormCityInput({
    form,
    isLoading,
    governmentId,
    isLoadingCities,
}: any) {
    const records = useCitiesStore.use.records();
    const cities = useCitiesStore.use.currentGovernmentCities();

    return (
        <FormField
            control={form.control}
            name='city_id'
            render={({ field }) => (
                <FormItem>
                    <FormLabel>
                        {isLoadingCities && (
                            <Loader2 className='animate-spin size-4' />
                        )}
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
    );
}

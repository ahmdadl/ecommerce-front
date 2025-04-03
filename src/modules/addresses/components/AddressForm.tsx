import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'; // shadcn form components
import { Input } from '@/components/ui/input';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { userStore } from '@/modules/core/stores/userStore';
import { zodResolver } from '@hookform/resolvers/zod';
import { i18n } from '@lingui/core';
import { Trans, useLingui } from '@lingui/react/macro';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { useAddressesStore } from '../stores/addresses-store';
import { AddressEntity, CityEntity } from '../utils/types';

const addressSchema = z.object({
    title: z.string().min(1, i18n._('Address title is required')),
    first_name: z.string().min(1, i18n._('First name is required')),
    last_name: z.string().min(1, i18n._('Last name is required')),
    address: z.string().min(1, i18n._('Detailed address is required')),
    phone: z.string().min(1, i18n._('Phone number is required')),
    government_id: z
        .string()
        .min(1, i18n._('Government selection is required')),
    city_id: z.string().min(1, i18n._('City selection is required')),
});

export type AddressFormData = z.infer<typeof addressSchema>;

export default function AddressForm({
    address,
    onSave,
    isLoading,
}: {
    address?: AddressEntity;
    onSave: SubmitHandler<AddressFormData>;
    isLoading?: boolean;
}) {
    const governments = useAddressesStore.use.governments();
    const cities = useAddressesStore.use.cities();

    const { t } = useLingui();
    const user = userStore.getState();

    const [filteredCities, setFilteredCities] = useState<CityEntity[]>([]);
    const [firstName, lastName] = user.name.split(' ');

    const defaultAddressValues: AddressFormData = {
        title: address?.title || '',
        first_name: address?.first_name || firstName,
        last_name: address?.last_name || lastName,
        address: address?.address || '',
        phone: address?.phone || user.phone || '',
        government_id: address?.government_id || '',
        city_id: address?.city_id || '',
    };
    const form = useForm<AddressFormData>({
        resolver: zodResolver(addressSchema),
        defaultValues: defaultAddressValues,
    });

    const governmentId = form.watch('government_id');
    useEffect(() => {
        if (governmentId) {
            setFilteredCities(
                cities.filter((city) => city.government_id === governmentId)
            );
        } else {
            setFilteredCities([]);
        }
    }, [governmentId]);

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSave)}
                className='space-y-4'
                id='address-form'
                noValidate
            >
                <div className='grid grid-cols-2 gap-4'>
                    <FormField
                        control={form.control}
                        name='first_name'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>
                                    <Trans>First Name</Trans>
                                </FormLabel>
                                <FormControl>
                                    <Input {...field} required />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name='last_name'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>
                                    <Trans>Last Name</Trans>
                                </FormLabel>
                                <FormControl>
                                    <Input {...field} required />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <FormField
                    control={form.control}
                    name='title'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>
                                <Trans>Address Title</Trans>
                            </FormLabel>
                            <FormControl>
                                <Input
                                    {...field}
                                    placeholder={t`e.g. Home, Work`}
                                    required
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name='phone'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>
                                <Trans>Phone Number</Trans>
                            </FormLabel>
                            <FormControl>
                                <Input {...field} required />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

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
                                        {filteredCities?.map((city) => (
                                            <SelectItem
                                                key={city.id}
                                                value={city.id}
                                            >
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

                <FormField
                    control={form.control}
                    name='address'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>
                                <Trans>Detailed Address</Trans>
                            </FormLabel>
                            <FormControl>
                                <Input {...field} required />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </form>
        </Form>
    );
}

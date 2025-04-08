import CheckoutAddresses from '../components/CheckoutAddresses';
import CheckoutHero from '../components/CheckoutHero';
import CheckoutOrderSummary from '../components/CheckoutOrderSummary';
import CheckoutPaymentMethods from '../components/CheckoutPaymentMethods';

export default function CheckoutPage() {
    return (
        <>
            <CheckoutHero />

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 py-6 px-5'>
                <div className='lg:col-span-2 space-y-6'>
                    <CheckoutAddresses />

                    <CheckoutPaymentMethods />
                </div>

                <CheckoutOrderSummary />
            </div>
        </>
    );
}

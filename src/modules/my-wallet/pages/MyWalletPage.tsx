import MyWalletAddFundPopup from '../components/MyWalletAddFundPopup';
import MyWalletBalanceCard from '../components/MyWalletBalanceCard';
import MyWalletTransactionList from '../components/MyWalletTransactionList';

export default function MyWalletPage() {
    return (
        <>
            <div className='mx-auto 2xl:max-w-5xl px-4 sm:px-6 lg:px-8 py-12 flex flex-col gap-6 w-full'>
                <MyWalletBalanceCard />

                <MyWalletTransactionList />
            </div>

            <MyWalletAddFundPopup />
        </>
    );
}

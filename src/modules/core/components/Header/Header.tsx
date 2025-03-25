import TopHeader from './TopHeader';
import TopMenu from './TopMenu';

export default function Header() {
    return (
        <div className='flex flex-col gap-0 m-0 p-0 w-full'>
            <TopHeader />

            <TopMenu />
        </div>
    );
}

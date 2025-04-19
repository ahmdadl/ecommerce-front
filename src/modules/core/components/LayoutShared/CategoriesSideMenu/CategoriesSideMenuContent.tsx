import { cn } from '@/lib/utils'; // Shadcn utility for className merging
import useNavbarStore from '@/modules/core/stores/navbar-store';
import { cachedData } from '@/modules/core/utils/cached-data';
import { getCurrentLocaleKey } from '@/modules/core/utils/methods';
import { urls } from '@/modules/core/utils/urls';
import { Trans } from '@lingui/react/macro';
import Image from '../../Image';
import Link from '../../LocalizedLink';

export default function CategoriesSideMenuContent() {
    const categories = cachedData.categories;

    return (
        <nav className='w-full max-w-full justify-start'>
            <div className='flex flex-col items-start space-y-2 w-full max-w-xs'>
                {categories.map((category) => (
                    <Link
                        key={category.id}
                        to={urls.categories.view(category)}
                        activeProps={{
                            className: `bg-accent text-accent-foreground font-bold`,
                        }}
                        className={cn(
                            'flex items-center gap-3 rounded-md p-3 text-sm font-medium transition-colors',
                            'hover:bg-accent hover:text-accent-foreground w-full'
                        )}
                        onClick={() =>
                            useNavbarStore.setState({
                                isCategoriesOpened: false,
                            })
                        }
                    >
                        <Image
                            src={category.image}
                            alt={category.title[getCurrentLocaleKey()]}
                            width={50}
                            height={50}
                            className='object-cover rounded-full'
                        />
                        <span>
                            <Trans>
                                {category.title[getCurrentLocaleKey()]}
                            </Trans>
                        </span>
                    </Link>
                ))}
            </div>
        </nav>
    );
}

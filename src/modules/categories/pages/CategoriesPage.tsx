import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Trans } from '@lingui/react/macro';
import { CategoryGrid } from '../components/category-grid';

export default function CategoriesPage() {
    return (
        <div className='container px-4 py-6 md:py-10'>
            <Breadcrumb className='mb-6'>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href='/'>Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>Categories</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            <div className='flex flex-col gap-4 md:flex-row md:items-center md:justify-between'>
                <div>
                    <h1 className='text-3xl font-bold tracking-tight'>
                        <Trans>Categories</Trans>
                    </h1>
                    <p className='mt-1 text-muted-foreground'>
                        <Trans>
                            Browse all product categories in our store
                        </Trans>
                    </p>
                </div>
            </div>

            <CategoryGrid />
        </div>
    );
}

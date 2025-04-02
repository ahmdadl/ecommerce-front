import { GalleryVerticalEnd } from 'lucide-react';
import * as React from 'react';

import {
    Sidebar,
    SidebarContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarRail,
} from '@/components/ui/sidebar';
import { ShopFilters } from './ShopFilters';

// This is sample data.
const data = {
    navMain: [
        {
            title: 'Getting Started',
            url: '#',
            items: [
                {
                    title: 'Installation',
                    url: '#',
                },
                {
                    title: 'Project Structure',
                    url: '#',
                },
            ],
        },
        {
            title: 'Building Your Application',
            url: '#',
            items: [
                {
                    title: 'Routing',
                    url: '#',
                },
                {
                    title: 'Data Fetching',
                    url: '#',
                    isActive: true,
                },
                {
                    title: 'Rendering',
                    url: '#',
                },
                {
                    title: 'Caching',
                    url: '#',
                },
                {
                    title: 'Styling',
                    url: '#',
                },
                {
                    title: 'Optimizing',
                    url: '#',
                },
                {
                    title: 'Configuring',
                    url: '#',
                },
                {
                    title: 'Testing',
                    url: '#',
                },
                {
                    title: 'Authentication',
                    url: '#',
                },
                {
                    title: 'Deploying',
                    url: '#',
                },
                {
                    title: 'Upgrading',
                    url: '#',
                },
                {
                    title: 'Examples',
                    url: '#',
                },
            ],
        },
        {
            title: 'API Reference',
            url: '#',
            items: [
                {
                    title: 'Components',
                    url: '#',
                },
                {
                    title: 'File Conventions',
                    url: '#',
                },
                {
                    title: 'Functions',
                    url: '#',
                },
                {
                    title: 'next.config.js Options',
                    url: '#',
                },
                {
                    title: 'CLI',
                    url: '#',
                },
                {
                    title: 'Edge Runtime',
                    url: '#',
                },
            ],
        },
        {
            title: 'Architecture',
            url: '#',
            items: [
                {
                    title: 'Accessibility',
                    url: '#',
                },
                {
                    title: 'Fast Refresh',
                    url: '#',
                },
                {
                    title: 'Next.js Compiler',
                    url: '#',
                },
                {
                    title: 'Supported Browsers',
                    url: '#',
                },
                {
                    title: 'Turbopack',
                    url: '#',
                },
            ],
        },
        {
            title: 'Community',
            url: '#',
            items: [
                {
                    title: 'Contribution Guide',
                    url: '#',
                },
            ],
        },
    ],
};

export function FiltersSidebar({
    ...props
}: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar {...props} collapsible='icon'>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size='lg' asChild>
                            <div>
                                <div className='flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground'>
                                    <GalleryVerticalEnd className='size-4' />
                                </div>
                                <div className='flex flex-col gap-0.5 leading-none'>
                                    <span className='font-semibold'>
                                        Filters
                                    </span>
                                </div>
                            </div>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <ShopFilters />
            </SidebarContent>
            <SidebarRail />
        </Sidebar>
    );
}

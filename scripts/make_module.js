#!/usr/bin/env node

import { promises as fs } from 'fs';
import { join } from 'path';
import { createInterface } from 'readline/promises';

// Create readline interface
const readline = createInterface({
    input: process.stdin,
    output: process.stdout,
});

async function createModule() {
    // Prompt for module name
    const moduleName = await readline.question('Enter the module name: ');
    const camelCaseName = moduleName.toLowerCase().replace(/\s+/g, '');
    const studlyCaseName =
        camelCaseName.charAt(0).toUpperCase() + camelCaseName.slice(1);

    // Define paths
    const moduleDir = join('src', 'modules', camelCaseName);
    const pagesDir = join(moduleDir, 'pages');
    const componentsDir = join(moduleDir, 'components');
    const routesFile = join(moduleDir, 'routes.tsx');
    const pageFile = join(pagesDir, `${studlyCaseName}.tsx`);

    try {
        // Create directories
        await fs.mkdir(moduleDir, { recursive: true });
        await fs.mkdir(pagesDir);
        await fs.mkdir(componentsDir);

        // Write page file
        const pageContent = `
export default function ${studlyCaseName}() {
    return (
        <>
            <h1 className='text-3xl font-bold'>${studlyCaseName}</h1>
        </>
    );
}
        `;
        await fs.writeFile(pageFile, pageContent.trim());

        // Write routes file
        const routesContent = `
import { Route } from 'react-router';
import ${studlyCaseName} from './pages/${studlyCaseName}';

export const ${camelCaseName}Routes = (
    <>
        <Route path='/' index element={<${studlyCaseName} />} />
        // add more routes
    </>
);
        `;
        await fs.writeFile(routesFile, routesContent.trim());

        console.log(
            `Module '${camelCaseName}' created successfully at ${moduleDir}!`
        );
    } catch (error) {
        console.error('Error creating module:', error);
    } finally {
        readline.close();
    }
}

// Run the script
createModule();

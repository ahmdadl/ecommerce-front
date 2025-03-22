import { Route } from 'react-router';
import Core from './pages/Core';

export const coreRoutes = (
    <>
        <Route path='/' index element={<Core />} />
        // add more routes
    </>
);
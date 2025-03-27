import { Route } from 'react-router';
import Shop from './pages/Shop';

export const shopRoutes = (
    <>
        <Route path='/' index element={<Shop />} />
        // add more routes
    </>
);
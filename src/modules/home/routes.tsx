import { Route } from 'react-router';
import Home from './pages/Home';

export const homeRoutes = <Route path='/:locale' index element={<Home />} />;

import { Route } from 'react-router';
import Resetpasswordpage from './pages/Resetpasswordpage';
import Forgetpasswordpage from './pages/Forgetpasswordpage';
import Registerpage from './pages/Registerpage';
import Loginpage from './pages/Loginpage';
import Auth from './pages/Auth';

export const authRoutes = (
    <>
        <Route path='/' index element={<Auth />} />
        <Route path='/loginpage' element={<Loginpage />} />
        <Route path='/registerpage' element={<Registerpage />} />
        <Route path='/forgetpasswordpage' element={<Forgetpasswordpage />} />
        <Route path='/resetpasswordpage' element={<Resetpasswordpage />} />
        // add more routes
    </>
);
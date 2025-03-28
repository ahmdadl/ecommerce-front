import { Route } from 'react-router';
import Auth from './pages/Auth';
import ForgetPasswordPage from './pages/ForgetPasswordPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ResetPasswordPage from './pages/ResetPasswordPage';

export const authRoutes = (
    <>
        <Route path='/:locale/auth/login' element={<LoginPage />} />
        <Route path='/:locale/auth' element={<Auth />}>
            <Route path='/:locale/auth/register' element={<RegisterPage />} />
            <Route
                path='/:locale/auth/forget-password'
                element={<ForgetPasswordPage />}
            />
            <Route
                path='/:locale/auth/reset-password'
                element={<ResetPasswordPage />}
            />
        </Route>
        // add more routes
    </>
);

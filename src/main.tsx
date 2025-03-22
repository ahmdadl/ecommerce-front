import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes } from 'react-router';
import './main.css';
import { homeRoutes } from './modules/home/routes';

const root = document.getElementById('root')!;

ReactDOM.createRoot(root).render(
    <BrowserRouter>
        <Routes>{homeRoutes}</Routes>
    </BrowserRouter>
);

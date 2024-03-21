import { createBrowserRouter } from 'react-router-dom';
import {
    HomePage,
    RootLayout,
    NotFound,
} from '../pages/_index';


const RouterConfig = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        errorElement: <NotFound />,
        children: [
            { index: true, element: <HomePage /> },
        ],
    },
]);

export default RouterConfig;
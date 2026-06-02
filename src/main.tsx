import { StrictMode } from 'react';
import HomePage from '@pages/home/page';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './globals.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
]);

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
}

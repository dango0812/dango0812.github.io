import { StrictMode } from 'react';
import NotFoundPage from '@pages/not-found/NotFoundPage';
import { VIDEO_DEMO_ITEMS } from '@shared/model/video';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, redirect, RouterProvider } from 'react-router-dom';

import HomePage from '@/pages/home/HomePage';
import VideoPlayerPage from '@/pages/video-player/VideoPlayerPage';

import './globals.css';

const getVideoItemBySlug = (slug: string) => {
  return VIDEO_DEMO_ITEMS.find(item => item.slug === slug);
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/video-player/:slug',
    element: <VideoPlayerPage />,
    loader: ({ params }) => {
      const videoItem = getVideoItemBySlug(params.slug ?? '');
      if (!videoItem) {
        return redirect('/404');
      }
      return videoItem;
    },
  },
  {
    path: '*',
    element: <NotFoundPage />,
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

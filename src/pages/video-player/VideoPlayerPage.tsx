import { lazy, Suspense } from 'react';
import { PageLoader } from '@shared/feature/PageLoader';
import { useLoaderData } from 'react-router-dom';

const VideoPlayerPageContent = lazy(() => import('./VideoPlayerPageContent'));

export default function VideoPlayerPage() {
  const videoItem = useLoaderData();

  return (
    <Suspense fallback={<PageLoader />}>
      <VideoPlayerPageContent videoItem={videoItem} />
    </Suspense>
  );
}

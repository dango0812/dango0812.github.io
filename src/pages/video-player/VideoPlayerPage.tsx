import { lazy, Suspense } from 'react';
import { PageLoader } from '@shared/feature/PageLoader';

const VideoPlayerPageContent = lazy(() => import('./VideoPlayerPageContent'));

export default function VideoPlayerPage() {
  return (
    <Suspense fallback={<PageLoader />}>
      <VideoPlayerPageContent />
    </Suspense>
  );
}

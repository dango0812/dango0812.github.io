import { lazy, Suspense } from 'react';
import { ErrorBoundary } from '@shared/ErrorBoundary';
import { PageLoader } from '@shared/PageLoader';

const VideoPlayerPageContent = lazy(() => import('./VideoPlayerPageContent'));

export default function VideoPlayerPage() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<PageLoader />}>
        <VideoPlayerPageContent />
      </Suspense>
    </ErrorBoundary>
  );
}

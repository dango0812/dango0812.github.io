import { lazy, Suspense } from 'react';
import { ErrorBoundary } from '@shared/ErrorBoundary';
import { PageLoader } from '@shared/PageLoader';

const HomePageContent = lazy(() => import('./HomePageContent'));

export default function HomePage() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<PageLoader />}>
        <HomePageContent />
      </Suspense>
    </ErrorBoundary>
  );
}

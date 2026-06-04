import { lazy, Suspense } from 'react';
import { PageLoader } from '@shared/feature/PageLoader';

const HomePageContent = lazy(() => import('./HomePageContent'));

export default function HomePage() {
  return (
    <Suspense fallback={<PageLoader />}>
      <HomePageContent />
    </Suspense>
  );
}

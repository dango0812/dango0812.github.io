import { lazy, Suspense } from 'react';
import { PageLoader } from '@shared/feature/PageLoader';
import { useParams } from 'react-router-dom';

import { getDemoById } from '@/shared/utils/getDemoVideoById';

import { DEMOS } from './config';

const VideoPlayerPageContent = lazy(() => import('./VideoPlayerPageContent'));

export default function VideoPlayerPage() {
  const { id } = useParams<{ id: string }>();
  const demo = id ? getDemoById(DEMOS, id) : undefined;

  return (
    <Suspense fallback={<PageLoader />}>
      <VideoPlayerPageContent demo={demo} />
    </Suspense>
  );
}

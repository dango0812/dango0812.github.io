import { useVideoMetadata } from '@shared/hooks/useVideoMetadata';
import { Skeleton } from '@shared/ui/Skeleton';
import { cn } from '@shared/lib/tailwind';

import type { Demo } from './config';

interface VideoPlayerPageContentProps {
  demo: Demo | undefined;
}

export function VideoPlayerPageContent({ demo }: VideoPlayerPageContentProps) {
  const { videoRef, isReady, onLoadedMetadata } = useVideoMetadata();

  if (!demo) {
    return (
      <main className="flex h-screen items-center justify-center">
        <p className="text-gray-600">데모를 찾을 수 없습니다.</p>
      </main>
    );
  }

  const isPortrait = demo.orientation === 'portrait';

  return (
    <main className="flex min-h-screen items-center justify-center px-8 py-16">
      <article
        aria-labelledby="demo-title"
        className={cn(
          'flex w-full flex-col gap-10',
          isPortrait ? 'max-w-4xl md:flex-row md:items-center md:gap-16' : 'max-w-5xl'
        )}
      >
        <header className={cn('flex flex-col gap-2', isPortrait && 'md:w-48 md:shrink-0')}>
          <span className="text-sm font-medium tracking-widest text-gray-500">DEMO</span>
          <h1 id="demo-title" className="text-3xl font-bold text-gray-900">
            {demo.title}
          </h1>
        </header>

        <section className="relative flex flex-1 justify-center" aria-label="데모 영상">
          {!isReady && (
            <Skeleton className={cn('rounded-3xl', isPortrait ? 'aspect-9/16 w-64' : 'aspect-video w-full')} />
          )}

          <video
            ref={videoRef}
            src={demo.videoSrc}
            controls
            playsInline
            preload="metadata"
            onLoadedMetadata={onLoadedMetadata}
            title={`${demo.title} 구현 영상`}
            aria-label={`${demo.title} 구현 영상`}
            className={cn(
              !isReady && 'absolute aspect-9/16 w-64 opacity-0 pointer-events-none',
              isReady && 'rounded-3xl shadow-2xl',
              isReady && isPortrait && 'h-[75vh] w-auto',
              isReady && !isPortrait && 'w-full'
            )}
          />
        </section>
      </article>
    </main>
  );
}

export default VideoPlayerPageContent;

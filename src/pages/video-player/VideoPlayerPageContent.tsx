import { useVideoMetadata } from '@shared/hooks/useVideoMetadata';
import { cn } from '@shared/lib/tailwind';
import { Skeleton } from '@shared/ui/Skeleton';

import { VideoDemoItem } from '@/shared/model/video';

interface VideoPlayerPageContentProps {
  videoItem: VideoDemoItem;
}

export function VideoPlayerPageContent({ videoItem }: VideoPlayerPageContentProps) {
  const { videoRef, isReady } = useVideoMetadata();

  const { description, videoSrc, orientation } = videoItem;

  const isPortrait = orientation === 'portrait';

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
            {description}
          </h1>
        </header>

        <section className="relative flex flex-1 justify-center" aria-label="데모 영상">
          {!isReady && (
            <Skeleton className={cn('rounded-3xl', isPortrait ? 'aspect-9/16 w-64' : 'aspect-video w-full')} />
          )}

          <video
            ref={videoRef}
            src={videoSrc}
            controls
            playsInline
            preload="metadata"
            title={`${description} 구현 영상`}
            aria-label={`${description} 구현 영상`}
            className={cn(
              !isReady && 'absolute aspect-9/16 w-64 opacity-0 pointer-events-none',
              isReady && 'rounded-3xl shadow-2xl',
              isReady && isPortrait && 'h-[85vh] w-auto',
              isReady && !isPortrait && 'w-full'
            )}
          />
        </section>
      </article>
    </main>
  );
}

export default VideoPlayerPageContent;

import { cn } from '@shared/lib/tailwind';
import { useLoaderData } from 'react-router-dom';

export function VideoPlayerPageContent() {
  const videoItems = useLoaderData();
  const { description, videoSrc, orientation } = videoItems;

  const isVertical = orientation === 'vertical';
  const isHorizontal = orientation === 'horizontal';

  return (
    <main className="flex min-h-screen items-center justify-center px-8 py-16">
      <article
        aria-labelledby="demo-title"
        className={cn(
          'flex w-full flex-col gap-10',
          isVertical ? 'max-w-4xl md:flex-row md:items-center md:gap-16' : 'max-w-5xl'
        )}
      >
        <div
          className={cn('flex flex-col gap-2', {
            'md:w-48 md:shrink-0': isVertical,
          })}
        >
          <span className="text-sm font-medium tracking-widest text-gray-500">DEMO</span>
          <h1 id="demo-title" className="wrap-break-word text-3xl font-bold text-gray-900">
            {description}
          </h1>
        </div>

        <section className="flex flex-1 justify-center" aria-label="데모 영상">
          <video
            controls
            playsInline
            preload="metadata"
            title={description}
            aria-label={description}
            className={cn('rounded-3xl', {
              'h-[85vh] w-auto': isVertical,
              'h-full w-full': isHorizontal,
            })}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </section>
      </article>
    </main>
  );
}

export default VideoPlayerPageContent;

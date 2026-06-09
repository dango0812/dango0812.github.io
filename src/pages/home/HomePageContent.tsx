import { useRef } from 'react';
import GithubIcon from '@assets/icons/github.svg?react';
import { useParticleText } from '@shared/hooks/useParticleText';
import { Mail, Rss } from 'lucide-react';

const PARTICLE_TEXT = ['Frontend developer', 'Donggyu'];

const SOCIAL_LINKS = [
  { href: 'https://github.com/dango0812', label: 'GitHub', icon: GithubIcon },
  { href: 'https://blog.dong-gyu.com', label: 'Blog', icon: Rss },
  { href: 'mailto:contact@dong-gyu.com', label: 'Email', icon: Mail },
] as const;

export function HomePageContent() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useParticleText(canvasRef, {
    text: PARTICLE_TEXT,
    color: getComputedStyle(document.documentElement).getPropertyValue('--color-green-500').trim(),
  });

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <main className="w-full">
        <canvas ref={canvasRef} role="img" aria-label="Frontend developer, Donggyu" className="aspect-3/1 w-full" />
      </main>

      <nav aria-label="소셜 링크" className="flex gap-10">
        {SOCIAL_LINKS.map(({ href, label, icon: Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="text-gray-500 transition-colors hover:text-gray-800"
          >
            <Icon className="size-6" />
          </a>
        ))}
      </nav>
    </div>
  );
}

export default HomePageContent;

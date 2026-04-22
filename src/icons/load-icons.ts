import { createIcons, Github, Rss, Mail } from 'lucide';

export function loadIcons(): void {
  createIcons({
    icons: {
      Github,
      Rss,
      Mail,
    },
  });
}

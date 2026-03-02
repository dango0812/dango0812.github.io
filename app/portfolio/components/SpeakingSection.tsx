'use client';

import { ExternalLink } from 'lucide-react';
import { m } from 'motion/react';

import type { SpeakingItem } from '@/types/portfolio';

import SectionTitle from './SectionTitle';

interface SpeakingSectionProps {
  items: SpeakingItem[];
}

export default function SpeakingSection({ items }: SpeakingSectionProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <section className="py-12 px-6">
      <div className="max-w-3xl mx-auto">
        <SectionTitle>Other Activities</SectionTitle>

        <ul className="space-y-4">
          {items.map((item, index) => (
            <m.li
              key={`${item.date}-${item.title}`}
              className="flex items-start gap-2.5 text-[15px] text-gray-600 leading-7"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{
                duration: 0.4,
                delay: index * 0.05,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              <span className="mt-3 w-1 h-1 rounded-full bg-gray-400 shrink-0" aria-hidden="true" />
              <span className="flex flex-col sm:flex-row sm:items-center gap-2">
                <span className="text-gray-400 shrink-0">{item.date}</span>
                <span className="flex items-center flex-wrap gap-2">
                  {item.url ? (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-800 hover:text-blue-600 transition-colors duration-200 underline underline-offset-2 decoration-gray-300 hover:decoration-blue-400"
                    >
                      {item.title}
                      <ExternalLink size={12} className="inline ml-1 text-gray-400" />
                    </a>
                  ) : (
                    <span className="text-gray-800">{item.title}</span>
                  )}
                  {item.githubUrl && (
                    <a
                      href={item.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-2 py-0.5 text-xs text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors duration-200"
                    >
                      GitHub
                      <ExternalLink size={10} />
                    </a>
                  )}
                </span>
              </span>
            </m.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

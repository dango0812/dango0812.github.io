'use client';

import { ExternalLink } from 'lucide-react';
import { m } from 'motion/react';

import type { ContactItem } from '@/types/portfolio';

import SectionTitle from './SectionTitle';

interface ContactSectionProps {
  items: ContactItem[];
}

export default function ContactSection({ items }: ContactSectionProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <section className="py-12 px-6">
      <div className="max-w-3xl mx-auto">
        <SectionTitle>Contact</SectionTitle>

        <ul className="space-y-3">
          {items.map((item, index) => (
            <m.li
              key={item.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{
                duration: 0.4,
                delay: index * 0.05,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              <span className="text-gray-400 mr-2">•</span>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-blue-600 transition-colors duration-200 underline underline-offset-2 decoration-gray-300 hover:decoration-blue-400"
              >
                {item.label}
                <ExternalLink size={12} className="inline ml-1 text-gray-400" />
              </a>
            </m.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

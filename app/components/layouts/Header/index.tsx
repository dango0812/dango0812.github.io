'use client';

import { useOffSetTop } from '@/hooks/queries/useOffSetTop';
import { m } from 'motion/react';

import HeaderLogo from './HeaderLogo';
import HeaderNavList from './HeaderNavList';

const headerVariants = {
  hidden: { y: -100, opacity: 0 },
  visible: { y: 0, opacity: 1 },
} as const;

const springTransition = {
  type: 'spring',
  damping: 20,
  stiffness: 300,
} as const;

export default function Header() {
  const isOffsetTop = useOffSetTop();

  return (
    <m.header
      variants={headerVariants}
      initial="hidden"
      animate={isOffsetTop ? 'hidden' : 'visible'}
      transition={springTransition}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50"
    >
      <nav className="flex items-center gap-5 px-6 py-3 bg-white/80 backdrop-blur-xl rounded-full shadow-lg shadow-black/5 border border-gray-200/50">
        <HeaderLogo />
        {/* Divider */}
        <div className="w-px h-5 bg-gray-200" aria-hidden="true" />
        <HeaderNavList />
      </nav>
    </m.header>
  );
}

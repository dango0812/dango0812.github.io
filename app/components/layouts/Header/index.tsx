'use client';

import { useOffSetTop } from '@/hooks/useOffSetTop';
import { m } from 'motion/react';
import { type Transition } from 'motion/react';

import HeaderLogo from './HeaderLogo';
import HeaderNavList from './HeaderNavList';
import { RowFlex } from '@/components/base';
import { fadeInDown } from '@/constants/animations';

const springTransition: Transition = {
  type: 'spring',
  damping: 20,
  stiffness: 300,
};

export default function Header() {
  const isOffsetTop = useOffSetTop();

  return (
    <m.header
      variants={fadeInDown}
      initial="hidden"
      animate={isOffsetTop ? 'hidden' : 'visible'}
      transition={springTransition}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50"
    >
      <nav className="px-6 py-3 bg-white/80 backdrop-blur-xl rounded-full shadow-lg shadow-black/5 border border-gray-200/50">
        <RowFlex align={'center'} className="gap-5">
          <HeaderLogo />
          {/* Divider */}
          <div className="w-px h-5 bg-gray-200" aria-hidden="true" />
          <HeaderNavList />
        </RowFlex>
      </nav>
    </m.header>
  );
}

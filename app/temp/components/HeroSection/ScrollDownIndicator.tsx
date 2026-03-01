'use client';

import { useCallback } from 'react';
import { ChevronDown } from 'lucide-react';
import { m } from 'motion/react';
import { type Variants } from 'motion/react';

import { ColumnFlex, Typography } from '@/components/base';
import { fadeInUp } from '@/constants/animations';

const scrollIndicator: Variants = {
  animate: {
    y: [0, 8, 0],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

export default function ScrollDownIndicator() {
  const handleScrollDown = useCallback(() => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  }, []);

  return (
    <m.button
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      custom={0.5}
      onClick={handleScrollDown}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500 hover:text-gray-600 transition-colors cursor-pointer"
      aria-label="스크롤 다운"
    >
      <ColumnFlex align={'center'} className="gap-2">
        <Typography as="span" size={'sm'} color={'inherit'} className="uppercase sm:block">
          Scroll
        </Typography>

        <m.div variants={scrollIndicator} animate="animate">
          <ChevronDown size={24} strokeWidth={1.5} />
        </m.div>
      </ColumnFlex>
    </m.button>
  );
}

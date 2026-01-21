import type { Variants } from 'motion';

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
};

export const fadeInDown: Variants = {
  hidden: { y: -100, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

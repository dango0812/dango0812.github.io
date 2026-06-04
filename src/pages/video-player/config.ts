export interface Demo {
  id: string;
  title: string;
  videoSrc: string;
  orientation: 'portrait' | 'landscape';
}

export const DEMOS: Demo[] = [
  {
    id: 'bottom-sheet',
    title: 'Bottom Sheet',
    videoSrc: 'https://res.cloudinary.com/dong-gyu/video/upload/v1775151135/bottom-sheet_vc8skq.mp4',
    orientation: 'portrait',
  },
  {
    id: 'mouse-tracking-gradient',
    title: 'Mouse Tracking Gradient',
    videoSrc: 'https://res.cloudinary.com/dong-gyu/video/upload/v1775151135/mouse-tracking-gradient_nt28e0.mp4',
    orientation: 'landscape',
  },
  {
    id: 'firecracker',
    title: 'Firecracker',
    videoSrc: 'https://res.cloudinary.com/dong-gyu/video/upload/v1775151135/firecracker_inufob.mp4',
    orientation: 'landscape',
  },
];

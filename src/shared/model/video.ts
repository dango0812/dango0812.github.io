export interface VideoDemoItem {
  slug: string;
  description: string;
  /** 비디오 URL */
  videoSrc: string;
  /** 영상 방향 */
  orientation: 'vertical' | 'horizontal';
}

export const VIDEO_DEMO_ITEMS: VideoDemoItem[] = [
  {
    slug: 'bottom-sheet',
    description: 'Bottom Sheet 구현 영상',
    videoSrc: 'https://res.cloudinary.com/dong-gyu/video/upload/v1775151135/bottom-sheet_vc8skq.mp4',
    orientation: 'vertical',
  },
  {
    slug: 'mouse-tracking-gradient',
    description: 'Mouse Tracking Gradient 구현 영상',
    videoSrc: 'https://res.cloudinary.com/dong-gyu/video/upload/v1775151135/mouse-tracking-gradient_nt28e0.mp4',
    orientation: 'horizontal',
  },
  {
    slug: 'firecracker',
    description: 'Firecracker 구현 영상',
    videoSrc: 'https://res.cloudinary.com/dong-gyu/video/upload/v1775151135/firecracker_inufob.mp4',
    orientation: 'horizontal',
  },
];

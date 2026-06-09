export interface VideoDemoItem {
  slug: string;
  description: string;
  /** 비디오 URL */
  videoSrc: string;
  /** portrait = 세로 영상, landscape = 가로 영상 */
  orientation: 'portrait' | 'landscape';
}

export const VIDEO_DEMO_ITEMS: VideoDemoItem[] = [
  {
    slug: 'bottom-sheet',
    description: 'Bottom Sheet 인터랙션 데모',
    videoSrc: 'https://res.cloudinary.com/dong-gyu/video/upload/v1775151135/bottom-sheet_vc8skq.mp4',
    orientation: 'portrait',
  },
  {
    slug: 'mouse-tracking-gradient',
    description: 'Mouse Tracking Gradient 구현 영상',
    videoSrc: 'https://res.cloudinary.com/dong-gyu/video/upload/v1775151135/mouse-tracking-gradient_nt28e0.mp4',
    orientation: 'landscape',
  },
  {
    slug: 'firecracker',
    description: 'Firecracker 인터랙션 데모',
    videoSrc: 'https://res.cloudinary.com/dong-gyu/video/upload/v1775151135/firecracker_inufob.mp4',
    orientation: 'landscape',
  },
];

import { Code2, Lightbulb, Palette, Users, Zap } from 'lucide-react';

import type { IconCardData } from '@/types';

export const ABOUT_CARDS: IconCardData[] = [
  {
    icon: Zap,
    title: '성능 최적화',
    description:
      'GTmetrix와 Lighthouse로 성능을 분석하며 최적화를 지속해왔습니다. 이를 통해 렌더링 속도를 높이고 SEO 지표를 개선한 경험이 있습니다.',
    bgColor: 'bg-amber-50',
    iconColor: 'text-amber-600',
  },
  {
    icon: Palette,
    title: 'UI/UX',
    description: `서비스를 직접 사용하며 불편한 점을 개선하고, 디자이너와 협업하며 디자인 시스템, 접근성 개선, 인터랙션 디자인을 만든 경험이 있습니다.`,
    bgColor: 'bg-purple-50',
    iconColor: 'text-purple-600',
  },
  {
    icon: Code2,
    title: '클린 코드',
    description: `넓은 시야의 관점에서 바라보고, 유지보수 하기 쉬운 클린 코드를 작성하려 노력합니다.`,
    bgColor: 'bg-blue-50',
    iconColor: 'text-blue-600',
  },
  {
    icon: Users,
    title: '협업 능력',
    description: `Pnpm Monorepo 협업 환경을 구축한 경험이 있습니다. 내가 겪은 문제를 동료들이 반복하지 않도록 문서화하여 공유해왔습니다.`,
    bgColor: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
  },
  {
    icon: Lightbulb,
    title: '문제 해결',
    description: `정답이 없는 문제에도 가설을 세워 검증하며, 상황에 맞는 최선의 선택지를 찾아냅니다.`,
    bgColor: 'bg-cyan-50',
    iconColor: 'text-cyan-600',
  },
] as const;

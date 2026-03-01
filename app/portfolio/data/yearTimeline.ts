import type { YearTimelineItem } from '@/types/portfolio';

/** 타임라인 연도 */
export const YEAR_TIMELINE_YEAR = 2026;

/**
 * ✏️ 2026년 타임라인
 * month(1~12), title, description(선택), category, done(완료 여부) 를 작성하세요.
 *
 * category:
 *  - 'work'      : 업무/프로젝트 관련
 *  - 'study'     : 학습/교육 관련
 *  - 'personal'  : 개인 활동
 *  - 'milestone' : 주요 이정표/목표
 *
 * @example
 * { month: 3, title: '포트폴리오 완성', category: 'work', done: true }
 */
export const yearTimelineItems: YearTimelineItem[] = [
  {
    month: 1,
    title: '포트폴리오 기획 & 디자인',
    description: '레퍼런스 조사 및 포트폴리오 구조 설계',
    category: 'work',
    done: true,
  },
  {
    month: 2,
    title: '포트폴리오 개발',
    description: 'Next.js + Tailwind CSS 기반 포트폴리오 구현',
    category: 'work',
    done: true,
  },
  {
    month: 3,
    title: '포트폴리오 배포 & 개선',
    description: 'GitHub Pages 배포, 피드백 반영 및 최적화',
    category: 'work',
    done: false,
  },
  {
    month: 3,
    title: '한양사이버대학교 1학기 시작',
    category: 'study',
    done: true,
  },
  {
    month: 4,
    title: '이력서 업데이트 & 구직 활동',
    description: '채용 공고 탐색 및 지원',
    category: 'milestone',
    done: false,
  },
  {
    month: 6,
    title: '오픈소스 기여',
    description: '관심 프로젝트에 PR 기여',
    category: 'personal',
    done: false,
  },
  {
    month: 9,
    title: '한양사이버대학교 2학기 시작',
    category: 'study',
    done: false,
  },
  {
    month: 12,
    title: '연간 회고 작성',
    description: '2026년 한 해 돌아보기',
    category: 'personal',
    done: false,
  },
];

/** 경력 카테고리 */
export type CareerCategory = 'company' | 'education';

/** 경력 사항 */
export interface CareerItem {
  /** 회사/학교명 */
  company: string;
  /** 직무/역할 또는 학과 */
  role: string;
  /** 카테고리 (회사 / 교육) */
  category: CareerCategory;
  /** 회사 로고 이미지 경로 */
  logo?: string;
  /** 타임라인 바 색상 (Tailwind 클래스, 예: 'bg-orange-400') */
  color?: string;
  /** 공백기 여부 (true면 회색으로 표시) */
  isGap?: boolean;
  /** 시작일 (예: "2022.06") */
  startDate: string;
  /** 종료일 (예: "2022.10", 현재 상태이면 undefined) */
  endDate?: string;
}

/** 프로젝트 증거/근거 자료 */
export interface WorkEvidence {
  /** 증거 유형 */
  type: 'image' | 'link';
  /** 라벨/이름 */
  label: string;
  /** URL 경로 */
  url: string;
}

/** 개별 프로젝트/작업물 */
export interface WorkItem {
  /** 프로젝트 제목 */
  title: string;
  /** 기간 (예: "2024 – Present") */
  period: string;
  /** 상세 설명 목록 */
  descriptions: string[];
  /** 증거/근거 자료 */
  evidences?: WorkEvidence[];
  /** 관련 링크 */
  links?: Array<{ label: string; url: string }>;
  /** 관련 이미지 */
  images?: Array<{ src: string; alt: string; caption?: string }>;
}

/** 회사별 프로젝트 그룹 */
export interface CompanyWork {
  /** 회사명 */
  company: string;
  /** 해당 회사에서 수행한 프로젝트 목록 */
  projects: WorkItem[];
}

/** 발표/강연 */
export interface SpeakingItem {
  /** 날짜 (예: "2024.10") */
  date: string;
  /** 발표 제목 */
  title: string;
  /** 관련 링크 */
  url?: string;
  /** GitHub PR/이슈 링크 */
  githubUrl?: string;
}

/** 연락처 */
export interface ContactItem {
  /** 라벨 (예: "GitHub") */
  label: string;
  /** URL */
  url: string;
}

/** 포트폴리오 프로필 */
export interface PortfolioProfile {
  /** 이름 */
  name: string;
  /** 영문 이름 또는 별명 */
  nameEn?: string;
  /** 자기소개 (여러 줄 가능) */
  bio: string;
  /** PDF용 자기소개 (격식있는 문구) */
  pdfBio?: string;
}

/** 연간 타임라인 아이템 카테고리 */
export type YearTimelineCategory = 'work' | 'study' | 'personal' | 'milestone';

/** 연간 타임라인 아이템 */
export interface YearTimelineItem {
  /** 월 (1~12) */
  month: number;
  /** 제목 */
  title: string;
  /** 상세 설명 */
  description?: string;
  /** 카테고리 */
  category: YearTimelineCategory;
  /** 완료 여부 */
  done?: boolean;
}

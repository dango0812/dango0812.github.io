import type { LucideIcon } from 'lucide-react';

/**
 * 아이콘이 포함된 카드 데이터 타입
 * AboutSection, SkillSection 등에서 재사용
 */
export interface IconCardData {
  readonly icon: LucideIcon;
  readonly title: string;
  readonly description: string;
  readonly bgColor: string;
  readonly iconColor: string;
}

/**
 * 카드 위치 및 회전 정보 (애니메이션용)
 */
export interface CardPosition {
  readonly x: number;
  readonly y: number;
  readonly rotate: number;
  readonly zIndex: number;
}

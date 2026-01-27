import type { NavItem } from '@/types';

export const HEADER_NAV_CONFIG: NavItem[] = [
  { label: '역량', href: '#about' },
  { label: '경력', href: '#career' },
  { label: '블로그', href: '#blog' },
  { label: '프로필', href: '#profile' },
] as const;

import type { CareerItem } from '@/types/portfolio';

/**
 * ✏️ 경력 사항 (Career Overview)
 * 새로운 경력을 추가하려면 배열에 새 항목을 추가하세요.
 * endDate를 생략하면 현재 상태로 표시됩니다.
 * isGap: true로 설정하면 공백기(구직 활동)로 표시됩니다.
 *
 * @example
 * {
 *   company: '회사명',
 *   role: '직무/역할',
 *   logo: '/assets/company-logo.png',  // optional
 *   color: 'bg-orange-400',            // optional
 *   isGap: false,                      // optional - 공백기 여부
 *   startDate: '2022.06',
 *   endDate: '2023.12',                // optional - 생략 시 현재
 * }
 */
export const careers: CareerItem[] = [
  {
    company: '자라소프트',
    role: 'Frontend Engineer',
    category: 'company',
    color: 'bg-purple-500',
    startDate: '2021.06',
    endDate: '2025.11',
  },
  {
    company: '이노벤터',
    role: 'Game Systems Designer',
    category: 'company',
    color: 'bg-blue-400',
    startDate: '2021.04',
    endDate: '2021.05',
  },
  {
    company: '한양사이버대학교',
    role: '컴퓨터공학부 (4년제)',
    category: 'education',
    color: 'bg-gray-300',
    startDate: '2026.02',
    // endDate 생략 → 현재까지
  },
  {
    company: '수원과학대학교',
    role: '컴퓨터정보과 (2년제)',
    category: 'education',
    color: 'bg-[#F4B221]',
    startDate: '2017.03',
    endDate: '2021.02',
  },
];

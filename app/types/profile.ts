/** 학력 */
export type EducationState = 'GRADUATED' | 'ATTENDING';
export interface Education {
  school: string;
  startYear: string;
  endYear?: string;
  state: EducationState;
  description?: string;
}

/** 자격증 */
export interface Certification {
  name: string;
  issuer: string;
  passedDate: string;
}

/** 2026 독서 기록 */
export interface Book {
  title: string;
  author: string;
  startDate: string;
  state: 'READING' | 'COMPLETED';
}

/** 수상 내역 */
export interface Award {
  title: string;
  issuer: string;
  awardedDate: string;
}

/** 활동 내역 */
export interface Activity {
  organization: string;
  startDate: string;
  endDate?: string;
}

/** 오픈 소스 기여 내역 */
export interface OpenSourceContribution {
  title: string;
  url: string;
  date: string;
}

/** 프로필 응답 */
export interface ProfileResponse {
  education: Education[];
  certification: Certification[];
  book: Book[];
  award: Award[];
  activities: Activity[];
  openSourceContributions: OpenSourceContribution[];
}

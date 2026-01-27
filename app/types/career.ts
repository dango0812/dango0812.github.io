/** 경력 공용 타입 정의 */
export interface Career {
  company: string;
  description: string;
  location: string;
  position: string;
  startDate: string;
  endDate?: string;
  summary?: string[];
  details?: CareerDetails;
}

/** 경력 상세 */
export interface CareerDetails {
  overview: string;
  responsibilities: string[];
  achievements: CareerAchievement[];
  techStack: string[];
}

export interface CareerAchievement {
  title: string;
  description: string;
  value?: string /** 수치나 성과 값 */;
}

/** 경력 응답 */
export type CareersResponse = {
  careers: Career[];
};

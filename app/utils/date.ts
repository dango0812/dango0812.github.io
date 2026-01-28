import dayjs from 'dayjs';

type DateInput = string | Date;

/**
 * dayjs Safari 호환 문제로 추가
 * https://github.com/iamkun/dayjs/issues/254
 */
const parseDate = (date: DateInput) => {
  if (!date) {
    return dayjs('');
  }

  if (date instanceof Date) {
    return dayjs(date);
  }

  // 문자열 파싱 (Safari 호환)
  if (typeof date === 'string') {
    // ^(\d{4}) : 앞의 4자리는 연도
    // [-./]    : 구분자는 -, ., / 중 하나
    // (\d{1,2}): 1~2자리는 월
    // (?: ... )?: 뒤에 일(Day) 부분은 있을 수도 있고 없을 수도 있음 ('2026.02')
    const match = date.match(/^(\d{4})[-./](\d{1,2})(?:[-./](\d{1,2}))?/);

    if (match) {
      const year = parseInt(match[1], 10);
      const month = parseInt(match[2], 10) - 1; // javascript 월은 0부터 시작하므로 -1
      const day = match[3] ? parseInt(match[3], 10) : 1; // day 없으면 1일로 강제 설정

      // new Date(숫자, 숫자, 숫자)를 쓰면 브라우저는 무조건 '로컬 시간 00시'로 만들기에 Safari 타임존/밀림 버그가 발생할 수 없음
      // 일단 이렇게 하지만.. dayjs 코드 분석하고 오픈소스 기여하거나 방법좀 생각해봐야할듯
      return dayjs(new Date(year, month, day));
    }
  }

  // 매칭되지 않는 형식은 기본 dayjs 처리에 맡김
  return dayjs(date);
};

/**
 * 날짜를 지정 형식으로 포맷
 *
 * @param date - 포맷할 날짜
 * @param format - 출력 형식
 *
 * @Example
 * formatDate('2017-02-01', 'dot');
 *
 * @Example
 * formatDate(new Date(), 'dash');
 */
export const formatDate = (date: DateInput, format = 'YYYY.MM.DD'): string => {
  const d = parseDate(date);
  return d.isValid() ? d.format(format) : '';
};

/**
 * start-end 날짜를 지정 형식으로 포멧
 *
 * @param start - 시작 날짜
 * @param end - 종료 날짜
 * @param format - 출력 형식
 * @param separator - 날짜 사이를 이을 구분자
 *
 * @Example
 * formatRange('2017-02-01', '2021-02-01', 'dot');
 *
 * @Example
 * formatRange('2017-02-01', null, 'dot');
 *
 * @Example
 * formatRange('2017-02-01', '2021-02-01', 'dash');
 */
export const formatDateRange = (
  start: DateInput,
  end?: DateInput | null,
  options: { format?: string; separator?: string } = {}
): string => {
  const { format = 'YYYY.MM.DD', separator = ' - ' } = options;
  const startDate = formatDate(start, format);
  if (!end) {
    return startDate;
  }
  const endDate = formatDate(end, format);
  return `${startDate}${separator}${endDate}`;
};

/**
 * start-end 기간을 계산하여 근속연수 계산 (년, 월 단위)
 * 1개월 미만은 '1개월'로 표시하며, 종료일이 없으면 현재 날짜를 기준으로 계산
 *
 * @param start - 시작 날짜
 * @param end - 종료 날짜
 *
 * @Example
 * calculateDuration('2023-01-01', '2024-07-01'); // '1년 6개월'
 *
 * calculateDuration('2024-01-01', '2024-02-01'); // '1개월'
 *
 * calculateDuration('2025-01-01'); // '1년 1개월'
 */
export const calculateDuration = (start: DateInput, end?: DateInput): string => {
  const startDate = parseDate(start);
  // end 값이 없으면 현재 날짜 기준
  const endDate = end ? parseDate(end).endOf('month') : dayjs().endOf('month');
  // 월 단위 차이 계산
  const totalMonths = endDate.diff(startDate, 'month');

  // 1개월 미만인 경우
  if (totalMonths < 1) {
    return '1개월';
  }

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  const parts: string[] = [];
  if (years > 0) {
    parts.push(`${years}년`);
  }

  if (months > 0) {
    parts.push(`${months}개월`);
  }

  return parts.join(' ');
};

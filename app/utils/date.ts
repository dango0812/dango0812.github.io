import dayjs from 'dayjs';

type DateInput = string | Date;

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
  const d = dayjs(date);
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
  const startDate = dayjs(start);
  // end 값이 없으면 현재 날짜 기준
  const endDate = end ? dayjs(end).endOf('month') : dayjs().endOf('month');
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

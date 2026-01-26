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

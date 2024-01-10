type InputValue = Date | string | number;

export function fUtcToKstDate(date: InputValue) {

    let utcTime = new Date();

    if (date instanceof Date) {
        utcTime = date;

    } else {
        utcTime = new Date(date);
    }

    const kstTime = new Intl.DateTimeFormat('ko-KR').format(utcTime);
    const ret = kstTime.slice(0, -1);
    return ret;
}

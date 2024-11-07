export const getFormattedUTCtoKST = (utcTime: string) => {
    const datetime = new Date(utcTime);
    datetime.setHours(datetime.getHours() + 9);

    const year = datetime.getFullYear();
    const month = datetime.getMonth() + 1;
    const day = datetime.getDay();

    return `${year}년 ${month}월 ${day}일`;
};
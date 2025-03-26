// utc -> kst
export const convertUTCtoKSTDate = (datetime: string | Date) => {
    const utcDate = new Date(datetime);
    return new Date(utcDate.getTime() + 9 * 60 * 60 * 1000);
}

// format date
export const formatDateTime = (datetime: string | Date) => {
    const date = new Date(datetime);
    
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}년 ${month}월 ${day}일`;
}
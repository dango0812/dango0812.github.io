import { http, HttpResponse } from "msw";

const getAge = () => {
	const today = new Date();
	const birthDate = new Date(1998, 8, 12);
	
	return `${today.getFullYear()-birthDate.getFullYear()}`
};

const getBirthDate = () => {
	const date = new Date(1998, 8, 12)
	const year = date.getFullYear();
	const month = date.getMonth();
	const day = date.getDate();

	return `${year}-0${month}-${day}`;
};

export const handlers = [
	http.get('/api/v1/getProfile', () =>
		HttpResponse.json([
			{
				label: '이름',
				value: '김동규 (Donggyu Kim)'
			},
			{
				label: '나이',
				value: getAge()
			},
			{
				label: '생년월일',
				value: getBirthDate()
			},
			{
				label: '주소',
				value: '경기도 광주시 거주'
			},
			{
				label: '이메일',
				value: 'ehdrbsla12000@gmail.com'
			}
		])
	)
];
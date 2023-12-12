import { memo } from 'react'

// components
import Card from "src/components/card"

function ResumeCarrerExperience() {

    const CARRER_EXPERIENCE_DATA = [
        {
            title: 'Blur.Me (Jarasoft)',
            description: `웹 사이트에서 사진과 동영상을 업로드하면 AI가 얼굴을 인식하여 모자이크 처리되는 서비스입니다.\n작업한 업무 내용은 'Projects' Tab에서 확인할 수 있습니다. `,
            type: '정규직',
            date: '2022.06.01 ~ (재직중)'
        },
        {
            title: 'Innoventor',
            description: '아프리카 TV로 부터 외주받은 웹 페이지 기획과 자사서비스로 준비중이던 게임의 시스템 기획 업무를 진행했습니다.',
            type: '정규직',
            date: '2022.04.01~2022.05.01'
        },
        {
            title: '펄어비스 FGT',
            description: `'섀도우 아레나' 게임의 콘텐츠, 밸런스, 편의성 등을 구체적으로 테스트하여 개선되어야 할 부분을 전달하는 업무를 진행했습니다.`,
            type: '아르바이트',
            date: '2021.03.23'
        }
    ]

    return (
        <Card className='lg:ml-4'>
            <h1 className="text-xl font-bold tracking-tighter text-gray-700">
                Career & Experience 🏢
            </h1>

            <ol className="relative border-s border-gray-200 mt-3 pt-4">
                {CARRER_EXPERIENCE_DATA.map((data) => (
                    <li className="mb-6 ms-4">
                        {/* dot */}
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border" />

                        <h4 className='text-gray-400 text-sm'>{data.date}</h4>
                        <h3 className="text-base font-semibold text-gray-700">{data.title}</h3>
                        <p className="text-base font-normal text-gray-500 whitespace-pre-line">
                            {data.description}
                        </p>
                    </li>
                ))}
            </ol>
        </Card>
    )
}

export default memo(ResumeCarrerExperience);
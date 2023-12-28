import { memo } from 'react'

// components
import Card from 'src/components/card'
import Stack from 'src/components/stack'
import Typography from 'src/components/typography'

function HomeCarrerExperience() {

    const CARRER_EXPERIENCE_DATA = [
        {
            title: 'Blur.Me (Jarasoft)',
            description: `웹 사이트에서 사진과 동영상을 업로드하면 AI가 얼굴을 인식하여 모자이크 처리되는 서비스입니다.\n작업한 업무 내용은 'Projects' Tab에서 확인할 수 있습니다. `,
            date: '2021.06 ~ (재직중)',
            color: 'orange-400'
        },
        {
            title: 'Innoventor',
            description: '아프리카 TV로 부터 외주받은 웹 페이지 기획과 자사서비스로 준비중이던 게임의 시스템 기획 업무를 진행했습니다.',
            date: '2021.04~2021.05',
            color: 'gray-200'
        },
        {
            title: '펄어비스 FGT',
            description: `'섀도우 아레나' 게임의 콘텐츠, 밸런스, 편의성 등을 구체적으로 테스트하여 개선되어야 할 부분을 전달하는 업무를 진행했습니다.`,
            date: '2021.03',
            color: 'gray-200'
        }
    ]

    return (
        <>
            <Typography variant='h6'>
                Career & Experience 🏢
            </Typography>

            <Card>
                <ol className="relative border-s mt-3">
                    {CARRER_EXPERIENCE_DATA.map((data) => (
                        <li className="pb-6 ms-4">
                            <div className={`absolute w-3 h-3 bg-${data.color} rounded-full mt-2 -start-1.5`}/>
                                <Stack direction='vertical' align='center' justify='between'>
                                    <Typography variant='subtitle2' className='font-medium'>
                                        {data.title}
                                    </Typography>
                                    <Typography variant='body2' color='black'>
                                        {data.date}
                                    </Typography>
                                </Stack>
                                <Typography variant='body1' className='whitespace-pre-line'>
                                    {data.description}
                                </Typography>
                        </li>
                    ))}
                </ol>
            </Card>
        </>
    )
}

export default memo(HomeCarrerExperience);
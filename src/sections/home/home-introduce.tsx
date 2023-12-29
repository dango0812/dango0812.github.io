import { memo } from 'react'

// components
import Card from 'src/components/card'
import Container from 'src/components/container'
import Typography from 'src/components/typography'

function HomeIntroduce() {
    return (
        <section className='animate-fadeInUp'>
            <Container size='md' className='flex flex-col gap-4'>
                <Typography variant='h6' className='dark:text-white'>
                    Introduce 🐙
                </Typography>
                <hr className="w-full h-px border bg-red-500 dark:bg-gray-500" />
                <Card>
                    <Typography variant='body1' className='whitespace-pre-line dark:text-white'>
                        {`안녕하세요 ! 끊임없는 성장을 추구하는 개발자 김동규입니다.
                            👨‍👩‍👧‍👦 팀에 소속되어 함께 일하며 서로의 아이디어와 관점을 공유하며 성장하는 것을 좋아합니다.
                            🏋️‍♂️ 가독성 좋은 코드를 작성하기 위해 노력하고 있습니다.
                            🎖️ 기술적인 측면과 아울러 사용자 시각에서의 UI/UX를 개선하는데 관심이 많습니다.
                        `}
                    </Typography>
                </Card>
            </Container>                
        </section>
    )
}

export default memo(HomeIntroduce)
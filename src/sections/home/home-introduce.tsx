import { memo } from 'react'

// components
import Card from 'src/components/card'
import Container from 'src/components/container'
import Typography from 'src/components/typography'

function HomeIntroduce() {
    return (
        <section>
            <Container size='lg' className='flex flex-col gap-4'>
                <Typography variant='h6' className='dark:text-white'>
                    Introduce 🐙
                </Typography>
                <Card>
                    <Typography variant='body1' className='whitespace-pre-line'>
                        {`안녕하세요! 끊임없는 성장을 추구하는 개발자 김동규입니다.
                            
                            👨‍👩‍👧‍👦 팀에 소속되어 함께 일하며 서로의 아이디어와 관점을 공유하며 성장하는 것을 좋아합니다.
                            🏋️‍♂️ 가독성 높은 코드를 작성하기 위해 노력하고 있습니다.
                            🎖️ 기술적인 측면과 아울러 사용자 시각에서의 UI/UX를 개선하는데 관심이 많습니다.

                            개발하기 전에 시스템 기획을 했었습니다. 
                            기획했던 경험은 개발자로서 저에게 많은 도움이 되었습니다.
                            시스템을 설계하고 문제를 예측하며 사용자 관점에서의 경험을 고민해 봄으로써,
                            개발 단계에서도 더 나은 결과물을 만들 수 있다고 생각하기 때문입니다.
                            이러한 경험을 바탕으로 개발자로 전향하였고, 기획과 개발의 조화로 사용자에게 더 좋은 제품을 제공하고 싶습니다.
                        `}
                    </Typography>
                </Card>
            </Container>                
        </section>
    )
}

export default memo(HomeIntroduce)
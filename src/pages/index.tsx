// emotion
import styled from "@emotion/styled";
// components
import { ColumnFlex } from "@components/common/FlexBox";

const Wrapper = styled.section`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;

    padding-top: 80px;
`;

const Avatar = styled.img`
    width: 160px;
    height: 160px;
    object-fit: cover;
    box-sizing: border-box;
    border-radius: 9999px;
    box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
`;

const H1 = styled.h1`
    margin: 0px;
`;

export default function MainPage() {
    return (
        <Wrapper>
            <ColumnFlex
                alignItems="center"
                justifyContent="center"
                gap={20}
            >
                <Avatar
                    src="/assets/profile.png"
                    alt="profile"
                    width={160}
                    height={160}
                    loading="lazy"
                />

                <H1>
                    김동규
                </H1>

                <ColumnFlex>
                    <p>
                        누구나 쉽게 사용할 수 있는 사용자 인터페이스를 만드는 것을 선호하며 사용자의 관점에서 개선점을 찾고 발전시키는 것을 좋아합니다.
                    </p>
                    <p>
                        GTA3 멀티 서버 운영/개발 및 다양한 프로젝트 경험을 통해 세심하게 설계된 인터페이스가 사용자에게 서비스에 대한 기대감과 신뢰를 줄 수 있다는 것을 깨달았습니다.
                        이를 통해 단순히 기능을 제공하는 것이 아닌 사용자가 편리하고 직관적으로 이용할 수 있는 인터페이스를 만드는 것이 왜 중요한지 알고 있습니다.
                    </p>
                    <p>
                        팀에 소속되어 함께 일하며 주어진 업무의 목적을 이해하고 이를 바탕으로 논의와 개선을 이어가는 과정을 즐깁니다. 팀원들과 협업하며 최고의 퍼포먼스를 이끌어낼 때 가장 큰 보람을 느낍니다.
                    </p>
                    <p>
                        가독성 좋은 코드를 작성하기 위해 노력하며 새로운 기술이나 지식에 도전할 때 두려움보다는 호기심과 열정으로 임하기 때문에 특정 분야에 한정되지 않고 끊임없이 배우고 성장하며 다양한 경험을 통해 넓은 시야를 가지려고 노력하고 있습니다.
                    </p>
                    <p>
                        현재 자라소프트에서 AI 기술을 활용하여 얼굴을 자동으로 인식하고 블러·모자이크 처리를 지원하는 블러미 서비스를 만들고 있습니다.
                    </p>
                </ColumnFlex>
            </ColumnFlex>
        </Wrapper>
    )
}
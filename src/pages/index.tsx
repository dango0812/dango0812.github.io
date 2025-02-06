// components
import { RootStyle, Profile } from "@pages/page.styles";
import InfoList from "@components/common/InfoList";
import { ColumnFlex } from "@components/common/FlexBox";
// routes
import { routes, paths } from "@constants/paths";

const awardsConfig = [
    { text: "경찰행정 발전표창", date: "2019. 10" },
    { text: "대학교 UCC 공모전 대상", date: "2017. 07" },
    { text: "봉사활동 소감문 쓰기 대회 대상", date: "2014. 12" },
    { text: "언어순화 캠페인 글짓기 대회 은상", date: "2014. 10" }
];

const readBooksConfig = [
    { text: "어쩌면 별들이 너의 슬픔을 가져갈지도 몰라" },
    { text: "봉제인형 살인사건" }
];

const contactConfig = [
    { text: "이메일", link: routes.mail },
    { text: "깃허브", link: routes.github },
    { text: "블로그", link: paths.blog },
];

export default function MainPage() {
    return (
        <RootStyle>
            <ColumnFlex
                gap={40}
            >
                <ColumnFlex
                    as="section"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Profile
                        src="/assets/profile.png"
                        alt="profile"
                        width={160}
                        height={160}
                        loading="lazy"
                    />

                    <h1>
                        김동규
                    </h1>

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
                            현재 자라소프트에서 AI 기술을 활용한 얼굴 인식하여 빠르게 블러·모자이크 처리해주는 블러미 서비스를 만들고 있습니다.
                        </p>
                    </ColumnFlex>
                </ColumnFlex>

                <InfoList
                    as="section"
                    title="수상 내역"
                    list={awardsConfig}
                    gap={20}
                />
                
                <InfoList
                    as="section"
                    title="2025 독서"
                    list={readBooksConfig}
                    gap={20}
                />

                <InfoList
                    as="section"
                    title="연락처"
                    list={contactConfig}
                    gap={20}
                />
            </ColumnFlex>
        </RootStyle>
    )
}
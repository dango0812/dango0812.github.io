export const _HeroSection = {
    title: "김동규",
    subtitle: "프론트엔드 개발자 / 3년차",
    description: "누구나 쉽게 사용할 수 있는 사용자 인터페이스를 만드는 것을 선호하며 사용자의 관점에서 개선점을 찾고 발전시키는 것을 좋아합니다.\n팀에 소속되어 함께 일하며 주어진 업무의 목적을 이해하고 이를 바탕으로 논의와 개선을 이어가는 과정을 즐깁니다. 팀원들과 협업하며 최고의 퍼포먼스를 이끌어낼 때 가장 큰 보람을 느낍니다.\n가독성 좋은 코드를 작성하기 위해 노력하며 새로운 기술이나 지식에 도전할 때 두려움보다는 호기심과 열정으로 임하기 때문에 특정 분야에 한정되지 않고 끊임없이 배우고 성장하며 다양한 경험을 통해 넓은 시야를 가지려고 노력하고 있습니다.\n"
};

export const _CoreCompetenciesSection = {
    title: "핵심 역량",
    subtitle: "유연하게 소통하고 견고하게 개발합니다.",
    details: [
        {
            icon: "🌐",
            title: "모던 프론트엔드 개발",
            description: "React, Next.js를 이용한 프론트엔드 개발경험이 있으며, Javascript와 Typescript 에 능숙합니다."
        },
        {
            icon: "🔎",
            title: "글로벌 서비스 경험 & SEO 최적화",
            description: "글로벌 서비스의 초기 기획부터 참여하여 개발과 서비스 운영한 경험이 있습니다. 성능을 측정하고 유지보수하며, SEO 최적화 기법을 활용해 사이트 유입률 22% 증가시킨 경험이 있습니다."
        },
        {
            icon: "🚀",
            title: "협업과 커뮤니케이션",
            description: "Github와ㄴ Bitbucket을 활용한 협업 경험이 있으며, Jira 등 다양한 협업 도구를 사용해 애자일 방식으로 업무를 진행한 경험이 있습니다. 또한, 백엔드 개발자와 협업하여 Rest API를 연동하고, 모노레포 환경에서 공용 컴포넌트를 개발한 경험이 있습니다."
        }
    ]
};

export const _CareerSection = {
    title: "경력 사항",
    subtitle: "다양한 업무와 프로젝트를 통해\n경험과 노하우를 쌓고 있습니다.",
    experience: "업무 경험",
    workExperience: [
        {
            date: "2024 - 현재",
            company: "자라소프트",
            description: "홈페이지 제작 외주 UI/UX 디자이너 및 Frontend 개발자",
            currentEmployed: true,
            link: "#"
        },
        {
            date: "2021.04 - 05",
            company: "이노벤터",
            description: "게임 시스템 기획 및 아프리카 TV 외주 업무 진행",
            currentEmployed: false,
        }
    ]
}

export const _BlogPostSection = {
    title: "블로그",
    subtitle: "다양한 업무와 프로젝트를 통해 경험과 노하우를 쌓고 있습니다.",
    loadError: "게시글을 읽어오다 오류가 발생했어요. 😭\n다음에 다시 시도해주세요. 🥺"
}

export const _HomeTimelineSection = {
    title: "기록",
    subtitle: "나의 기록을 통해 성장합니다.",
    details: [
        {
            title: "교육",
            iconSrc: "/icons/icon-graduation-cap.svg",
            items: [
                { icon: "🏫", title: "수원과학대학교", date: "2017.03-2021.02"},
                { icon: "🏫", title: "야탑고등학교", date: "2014.03-2017.02"}
            ]
        },
        {
            title: "자격증",
            iconSrc: "/icons/icon-certificate-medal.svg",
            items: [
                { icon: "🪪", title: "워드프로세서 1급", date: "2019.09"}
            ]
        },
        {
            title: "2025 독서",
            iconSrc: "/icons/icon-open-book.svg",
            items: [
                { icon: "📖", title: "Clean Code 애자일 소프트웨어 장인 정신", date: "03.24-독서중"},
                { icon: "📙", title: "봉제인형 살인사건", date: "02.04-02.22"},
                { icon: "📙", title: "어쩌면 별들이 너의 슬픔을 가져갈지도 몰라", date: "01. 24-02.14"},
            ]
        },
        {
            title: "수상",
            iconSrc: "/icons/icon-sports-medal.svg",
            items: [
                { icon: "🎖️", title: "경찰행정 발전표창", date: "2019.10"},
                { icon: "🥇", title: "대학교 UCC 공모전 대상", date: "2017.07"},
                { icon: "🥇", title: "봉사활동 소감문 쓰기 대회 대상", date: "2014.12"},
                { icon: "🥈", title: "언어순화 캠페인 글짓기 대회 은상", date: "2014.10"}
            ]
        }
    ]
}

export const _TableOfContentSection = {
    title: "목차"
}

export const _TableOfContent = [
    { link: `#hero`, content: _HeroSection.title },
    { link: `#coreCompetencies`, content: _CoreCompetenciesSection.title },
    { link: `#career`, content: _CareerSection.title },
    { link: `#blogPosts`, content: _BlogPostSection.title },
    { link: `#timeline`, content: _HomeTimelineSection.title },
];
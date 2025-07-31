// constants
import { paths } from "@constants/paths";
import { domains } from "@constants/domains";

export const _HeroSection = {
    title: "김동규",
    subtitle: "프론트엔드 개발자",
    description: "사용자를 위한 따뜻한 경험에 가치를 두고, 작은 불편함도 놓치지 않고 개선합니다.\n주어진 업무의 본질을 명확히 파악하고, 기대하는 결과에 정확히 도달하는 것을 중요하게 생각합니다.\n단 한 줄의 코드에도 의미를 담아내며, 사용자를 위한 최고의 프론트엔드 개발자가 되고자 합니다.",
    resumeDownload: "이력서 다운로드"
};

export const _CoreCompetenciesSection = {
    title: "핵심 역량",
    subtitle: "소통으로 다듬고 기술로 완성합니다.",
    details: [
        {
            icon: "💻",
            title: "모던 프론트엔드 개발",
            description: "React.js, Next.js를 이용한 프론트엔드 개발 경험이 있으며, JavaScript와 TypeScript에 능숙합니다."
        },
        {
            icon: "⚡",
            title: "웹사이트 개선 및 최적화",
            description: "글로벌 서비스의 초기 기획부터 참여하여 개발과 서비스 운영한 경험이 있습니다. 성능을 측정하고 유지보수하며, SEO 최적화 기법을 활용해 사이트 유입률 22% 증가시킨 경험이 있습니다 경험이 있습니다."
        },
        {
            icon: "🤝",
            title: "협업과 커뮤니케이션",
            description: "애자일 환경에서 Github, Confluence, Jira 등을 활용해 협업한 경험이 있으며, 디자이너와 소통하며 인터랙티브한 공용 컴포넌트와 CMS 컴포넌트를 개발한 경험이 있습니다."
        }
    ]
};

export const _CareerSection = {
    title: "경력 사항",
    subtitle: "끊임없이 학습하고 성장하며, 소중한 경험과 노하우를 쌓아왔습니다.",
    companyExperience: "업무 경험",
    project: "프로젝트",
    moreInfo: "주요 업무 내용 보기",
    github: "Github",
    details: [
        {
            type: "company",
            date: "2021.06 - 현재",
            title: "자라소프트",
            description: "동영상, 사진 비식별화 글로벌 서비스 블러미와 공공기관 및 폐쇄망 기업에 특화된 엔터프라이즈 솔루션을 함께 만들어가고 있습니다.",
            isActive: true,
            link: paths.career.jarasoft
        },
        {
            type: "company",
            date: "2021.04 - 05",
            title: "이노벤터",
            description: "게임 시스템 기획과 아프리카 TV의 웹 페이지 개선 외주 업무를 경험했습니다.",
            isActive: false
        },
        {
            type: "project",
            date: "2025.07 - 진행중",
            title: "Tanstack Virtual Grid",
            description: "@tanstack/virtual을 사용하여 가상화된 그리드를 구현하는 방법과 그리드 항목의 종횡비를 유지하면서 구현하는 방법에 대한 블로그 게시글과 코드를 제공합니다.",
            isActive: true,
            link: domains.github.tanstackVirtualGrid
        },
        {
            type: "project",
            date: "2025.07 - 진행중",
            title: "Social Share Urls",
            description: "웹 환경 내에서 라이브러리 도움없이 소셜 미디어에 컨텐츠를 공유할 때 어떻게 접근해야하는지 도움을 주기 위해 만들어졌습니다",
            isActive: true,
            link: domains.github.socialShareUrls
        },
        {
            type: "project",
            date: "2025.01 - 2025.04",
            title: "Portfolio Website",
            description: "Next.js 기반의 포트폴리오 웹 페이지입니다.",
            isActive: false,
            link: domains.github.portfolio
        },
        {
            type: "project",
            date: "2024.08 - 2024.10",
            title: "NextAuth with AWS Cognito",
            description: "NextAuth와 AWS Cognito를 사용한 로그인 연동 프로젝트입니다. AWS Cognito를 사용한 구글 로그인 방법의 정보가 부족해 도움을 주고자 시작했습니다.",
            isActive: false,
            link: domains.github.nextAuth
        }
    ]
};

export const _BlogPostSection = {
    title: "블로그",
    subtitle: "단순한 기록이 아닌, 실용적인 경험과 정보를 공유합니다.",
    loadError: "게시글을 읽어오다 오류가 발생했어요. 😭\n다음에 다시 시도해주세요. 🥺"
};

export const _HomeTimelineSection = {
    title: "기록",
    subtitle: "나의 기록을 통해 성장합니다.",
    details: [
        {
            title: "교육",
            iconSrc: "/icons/icon-graduation-cap.svg",
            items: [
                { icon: "🎯", title: "프로그래밍 Catch Up 동아리" },
                { icon: "🏫", title: "수원과학대학교" },
                { icon: "🏫", title: "야탑고등학교" }
            ]
        },
        {
            title: "자격증",
            iconSrc: "/icons/icon-certificate-medal.svg",
            items: [
                { icon: "🪪", title: "워드프로세서 1급" },
                { icon: "🪪", title: "정보기술자격 ITQ 인터넷" },
                { icon: "🪪", title: "Google Analytics Certification" }
            ]
        },
        {
            title: "2025 독서",
            iconSrc: "/icons/icon-open-book.svg",
            items: [
                { icon: "📖", title: "Clean Code 애자일 소프트웨어 장인 정신" },
                { icon: "📙", title: "봉제인형 살인사건" },
                { icon: "📙", title: "어쩌면 별들이 너의 슬픔을 가져갈지도 몰라" }
            ]
        },
        {
            title: "수상",
            iconSrc: "/icons/icon-sports-medal.svg",
            items: [
                { icon: "🎖️", title: "경찰행정 발전표창" },
                { icon: "🥇", title: "대학교 UCC 공모전 대상" },
                { icon: "🥇", title: "봉사활동 소감문 쓰기 대회 대상" },
                { icon: "🥈", title: "언어순화 캠페인 글짓기 대회 은상" }
            ]
        }
    ]
};

export const _HomeContactSection = {
    title: "연락처",
    subtitle: "궁금한 점이 있으시면 언제든지 편하게 연락 주세요, 감사합니다.",
    contactInfo: [
        {
            title: "Github",
            content: "@dango0812",
            link: domains.github.root
        },
        {
            title: "전화번호",
            content: "010-2527-1731",
            link: domains.contact.phone
        },
        {
            title: "이메일",
            content: "ehdrbsla12000@gmail.com",
            link: domains.contact.mail
        }
    ]
};

export const _TableOfContents = {
    title: "목차",
    details: [
        { link: `#hero`, content: _HeroSection.title },
        { link: `#coreCompetencies`, content: _CoreCompetenciesSection.title },
        { link: `#career`, content: _CareerSection.title },
        { link: `#blogPosts`, content: _BlogPostSection.title },
        { link: `#timeline`, content: _HomeTimelineSection.title },
        { link: `#contact`, content: _HomeContactSection.title },
    ]
};
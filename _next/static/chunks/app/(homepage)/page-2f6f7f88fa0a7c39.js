(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[424],{71:(e,t,r)=>{"use strict";r.d(t,{cn:()=>n});var l=r(5398),a=r(6790);let n=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,a.QP)((0,l.$)(t))}},2331:(e,t,r)=>{"use strict";r.d(t,{default:()=>c});var l=r(5474),a=r(1530),n=r(7019),i=r(5410),s=r(71);function c(){let e=(0,a.useRef)([]),[t,r]=(0,a.useState)(n.vF.details[0].link.replace("#",""));(0,a.useEffect)(()=>{e.current=n.vF.details.map(e=>{let{link:t}=e;return document.querySelector(t)}).filter(Boolean);let l=()=>{let l=t;e.current.forEach((t,r)=>{let a=t.getBoundingClientRect(),n=r===e.current.length-1,i=a.top<=0,s=a.bottom>0,c=n&&a.bottom<=window.innerHeight;(i&&s||c)&&(l=t.id)}),l!==t&&r(l)};return window.addEventListener("scroll",l),()=>{window.removeEventListener("scroll",l)}},[t]);let c=(e,t)=>{let l=document.querySelector(t);l&&(l.scrollIntoView({behavior:"smooth",block:"start"}),r(e))};return(0,l.jsx)("div",{className:"hidden xl:block fixed xl:right-5 2xl:right-10 top-1/2 -translate-y-1/2",children:(0,l.jsx)(i.mc,{maxWidth:"md",className:"w-full min-w-52 border border-gray-200 backdrop-blur-md bg-white/70 rounded-3xl shadow-xl p-5",children:(0,l.jsxs)(i.Om,{className:"gap-3",children:[(0,l.jsxs)(i.Om,{className:"gap-1.5",children:[(0,l.jsx)(i.o5,{as:"h2",fontSize:"xl",fontWeight:500,color:"primary",children:n.vF.title}),(0,l.jsx)(i.cG,{color:"primary"})]}),(0,l.jsx)(i.Om,{children:n.vF.details.map(e=>{let{link:r,content:a}=e,n=r.replace("#",""),i=n===t;return(0,l.jsx)("a",{href:r,onClick:e=>{e.preventDefault(),c(n,r)},className:(0,s.cn)("py-2 px-3 rounded-md hover:text-yellow-500",{"text-yellow-500 font-semibold":i,"text-gray-500":!i}),children:a},a)})})]})})})}},4081:(e,t,r)=>{"use strict";r.d(t,{default:()=>h});var l=r(5474),a=r(1583),n=r(4662),i=r(7019);let s=async()=>{let e=new URLSearchParams({username:"dango0812",api_keys:"fDwtyzQ7BU8gb9MEjzt3CB4a",per_page:"4"}),t="".concat("".concat("https://dev.to","/api/articles"),"?").concat(e.toString()),r=await fetch(t);if(!r.ok)throw Error("Failed to fetch blog posts");return(await r.json()).map(e=>({url:e.url,title:e.title,description:e.description,cover_image:e.cover_image,published_at:e.published_at}))};var c=r(5410);let o=e=>new Date(new Date(e).getTime()+324e5),d=e=>{let t=new Date(e),r=t.getFullYear(),l=String(t.getMonth()+1).padStart(2,"0"),a=String(t.getDate()).padStart(2,"0");return"".concat(r,".").concat(l,".").concat(a)};var m=r(5947);function h(){let e=(0,m.J)(),{data:t=[],isLoading:r,isFetching:h,isError:f}=(0,n.I)({queryKey:["blog_posts"],queryFn:()=>s(),refetchOnWindowFocus:!1});return(0,l.jsx)("section",{id:"blogPosts",ref:e,className:"py-15 px-5 lg:px-0 bg-gray-50",children:(0,l.jsxs)(c.mc,{maxWidth:"fullWidth",className:"flex flex-col items-center justify-center gap-10",children:[(0,l.jsxs)(c.Om,{className:"text-center gap-2.5",children:[(0,l.jsx)(c.o5,{as:"h2",fontSize:"xl",fontWeight:700,color:"primary",children:i.r6.title}),(0,l.jsx)(c.o5,{as:"em",fontSize:"lg",fontWeight:700,className:"not-italic",children:i.r6.subtitle})]}),r&&h?(0,l.jsx)(c.aj,{}):f?(0,l.jsx)(c.o5,{as:"em",whiteSpace:"prewrap",className:"not-italic text-center",children:i.r6.loadError}):(0,l.jsx)(c.mc,{maxWidth:"lg",children:(0,l.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full h-full",children:t.map(e=>{let{url:t,title:r,description:n,cover_image:i,published_at:s}=e;return(0,l.jsxs)("a",{href:t,target:"_blank",className:"bg-white border border-gray-100 rounded-3xl shadow-md",children:[(0,l.jsx)(a.default,{className:"w-full h-44 rounded-tl-3xl rounded-tr-3xl object-cover",src:i,width:326,height:176,alt:"cover_image.png"}),(0,l.jsxs)(c.Om,{className:"p-5 gap-5",children:[(0,l.jsx)(c.o5,{className:"h-14 line-clamp-2",as:"h2",fontSize:"xl",fontWeight:700,children:r}),(0,l.jsx)(c.o5,{className:"h-[72px] line-clamp-3",as:"p",color:"gray",children:n}),(0,l.jsx)(c.o5,{as:"p",fontSize:"sm",children:d(o(s))})]})]},r)})})})]})})}},5410:(e,t,r)=>{"use strict";r.d(t,{Om:()=>m,mc:()=>s,cG:()=>u,aj:()=>j,st:()=>d,o5:()=>f});var l=r(5474),a=r(280),n=r(71);let i=(0,a.F)(["w-full flex items-start justify-stretch"],{variants:{maxWidth:{xs:"max-w-2xl mx-auto",sm:"max-w-3xl mx-auto",md:"max-w-4xl mx-auto",lg:"max-w-5xl mx-auto",xl:"max-w-7xl mx-auto",fullWidth:"max-w-full",auto:"container"}}});function s(e){let{children:t,className:r,maxWidth:a="md"}=e;return(0,l.jsx)("div",{className:(0,n.cn)(i({maxWidth:a}),r),children:t})}var c=r(1530);let o=(0,a.F)(["w-full flex"],{variants:{wrap:{noWrap:"flex-nowrap",wrap:"flex-wrap",reverse:"flex-wrap-reverse"},alignItems:{"flex-start":"items-start","flex-end":"items-end",center:"items-center",stretch:"items-stretch"},justifyContent:{"flex-start":"justify-start","flex-end":"justify-end",center:"justify-center","space-between":"justify-between","space-around":"justify-around","space-evenly":"justify-evenly",stretch:"justify-stretch"}}}),d=(0,c.forwardRef)((e,t)=>{let{children:r,className:a,wrap:i,alignItems:s="stretch",justifyContent:c="flex-start"}=e;return(0,l.jsx)("div",{ref:t,className:(0,n.cn)("flex-row",o({wrap:i,alignItems:s,justifyContent:c}),a),children:r})});d.displayName="RowFlex";let m=(0,c.forwardRef)((e,t)=>{let{children:r,className:a,wrap:i,alignItems:s="stretch",justifyContent:c="flex-start"}=e;return(0,l.jsx)("div",{ref:t,className:(0,n.cn)("flex-col",o({wrap:i,alignItems:s,justifyContent:c}),a),children:r})});m.displayName="ColumnFlex";let h=(0,a.F)("antialiased",{variants:{fontSize:{xs:"text-xs",sm:"text-sm",base:"text-base",lg:"text-lg",xl:"text-xl","2xl":"text-3xl"},fontWeight:{100:"font-thin",200:"font-extralight",300:"font-light",400:"font-normal",500:"font-medium",600:"font-semibold",700:"font-bold",800:"font-extrabold"},whiteSpace:{normal:"whitespace-normal",nowrap:"whitespace-nowrap",pre:"whitespace-pre",preline:"whitespace-pre-line",prewrap:"whitespace-pre-wrap",breakspaces:"whitespace-break-spaces"},color:{primary:"text-yellow-500",white:"text-white",black:"text-gray-800",gray:"text-gray-500",danger:"text-danger-500"}}});function f(e){let{as:t,children:r,className:l,fontSize:a="base",fontWeight:i=500,whiteSpace:s,color:o="black",noWrap:d=!1}=e;return(0,c.createElement)(t,{className:(0,n.cn)(h({fontSize:a,fontWeight:i,whiteSpace:s,color:o}),{"truncate whitespace-nowrap":d},l)},r)}let x="before:content-[''] before:flex-1 before:h-0.5",g="after:content-[''] after:flex-1 after:h-0.5",p=(0,a.F)("flex flex-row items-center self-stretch",{variants:{color:{primary:"before:bg-gradient-to-r before:from-yellow-800/0 before:to-yellow-800/15 after:bg-gradient-to-r after:from-yellow-800/15 after:to-yellow-800/0",black:"before:bg-gradient-to-r before:from-gray-800/0 before:to-gray-800/15 after:bg-gradient-to-r after:from-gray-800/15 after:to-gray-800/0",gray:"before:bg-gradient-to-r before:from-gray-800/0 before:to-gray-800/15 after:bg-gradient-to-r after:from-gray-800/15 after:to-gray-800/0",danger:"before:bg-gradient-to-r before:from-danger-800/0 before:to-danger-800/15 after:bg-gradient-to-r after:from-danger-800/15 after:to-danger-800/0"},align:{left:g,center:"".concat(x," ").concat(g),right:x},hasContent:{true:"gap-5",false:"gap-0"}}});function u(e){let{children:t,className:r,color:a="black",align:i="center",...s}=e;return(0,l.jsx)("div",{className:(0,n.cn)(p({color:a,align:i,hasContent:!!t}),r),...s,children:t})}let b=[{color:"bg-amber-100",delay:"-0.3s"},{color:"bg-amber-300",delay:"-0.15s"},{color:"bg-amber-500",delay:"0s"}];function j(){return(0,l.jsx)("div",{className:"flex items-center justify-center space-x-2",children:b.map((e,t)=>{let{color:r,delay:a}=e;return(0,l.jsx)("div",{className:(0,n.cn)(r,"w-4 h-4 rounded-full animate-bounce [animation-delay:".concat(a,"]"))},t)})})}},5563:(e,t,r)=>{"use strict";r.d(t,{default:()=>c});var l=r(5474),a=r(1583),n=r(7019),i=r(5410),s=r(5947);function c(){let e=(0,s.J)();return(0,l.jsx)("section",{id:"timeline",className:"py-15 px-5 xl:px-0 ",children:(0,l.jsx)(i.mc,{maxWidth:"lg",children:(0,l.jsxs)(i.Om,{alignItems:"center",justifyContent:"center",className:"gap-15",children:[(0,l.jsxs)(i.Om,{className:"text-center gap-2.5",children:[(0,l.jsx)(i.o5,{as:"h2",fontSize:"xl",fontWeight:700,color:"primary",children:n.t2.title}),(0,l.jsx)(i.o5,{as:"em",fontSize:"lg",fontWeight:700,className:"not-italic",children:n.t2.subtitle})]}),(0,l.jsx)(i.mc,{maxWidth:"sm",children:(0,l.jsx)(i.st,{justifyContent:"space-between",className:"w-full flex-wrap gap-10 md:gap-20",children:n.t2.details.map(t=>{let{title:r,iconSrc:n,items:s}=t;return(0,l.jsxs)(i.Om,{className:"w-full max-w-80 gap-2.5",ref:e,children:[(0,l.jsx)(a.default,{src:n,width:40,height:40,alt:r}),(0,l.jsx)(i.o5,{as:"h3",fontSize:"xl",fontWeight:700,className:"px-0.5",children:r}),(0,l.jsx)(i.Om,{className:"gap-1",children:s.map(e=>{let{icon:t,title:r}=e;return(0,l.jsxs)(i.st,{className:"gap-1.5",children:[(0,l.jsx)(i.o5,{as:"span",children:t}),(0,l.jsx)(i.o5,{as:"h4",children:r})]},r)})})]},r)})})})]})})})}},5947:(e,t,r)=>{"use strict";r.d(t,{J:()=>i});var l=r(1530),a=r(3633),n=r(7101);function i(e){let t=(0,l.useRef)([]),{y:r=50,duration:n=1,stagger:i=.5,scrub:s=!1,markers:c=!1,ease:o="power3.out",start:d="top 90%",end:m="bottom 20%"}=e||{};return(0,l.useEffect)(()=>{t.current&&0!==t.current.length&&a.os.fromTo(t.current,{opacity:0,y:r},{opacity:1,y:0,duration:n,ease:o,stagger:i,scrollTrigger:{trigger:t.current[0],start:d,end:m,scrub:s,markers:c}})},[r,n,i,o,d,m,s,c]),e=>{e&&!t.current.includes(e)&&t.current.push(e)}}a.os.registerPlugin(n.u)},7019:(e,t,r)=>{"use strict";r.d(t,{r6:()=>c,re:()=>s,tT:()=>i,t2:()=>o,vF:()=>m});let l="https://github.com",a="dango0812",n={github:{root:"".concat(l,"/").concat(a),portfolio:"".concat(l,"/").concat(a,"/dango0812.github.io"),frontend_study:"".concat(l,"/").concat(a,"/frontend-study"),next_auth:"".concat(l,"/").concat(a,"/next-auth")},contact:{phone:"tel:010-2527-1731",mail:"mailto:ehdrbsla12000@gmail.com"}},i={title:"핵심 역량",subtitle:"소통으로 다듬고 기술로 완성합니다.",details:[{icon:"\uD83D\uDCBB",title:"모던 프론트엔드 개발",description:"React.js, Next.js를 이용한 프론트엔드 개발 경험이 있으며, JavaScript와 TypeScript에 능숙합니다."},{icon:"⚡",title:"웹사이트 개선 및 최적화",description:"글로벌 서비스의 초기 기획부터 참여하여 개발과 서비스 운영한 경험이 있습니다. 성능을 측정하고 유지보수하며, SEO 최적화 기법을 활용해 사이트 유입률 22% 증가시킨 경험이 있습니다 경험이 있습니다."},{icon:"\uD83E\uDD1D",title:"협업과 커뮤니케이션",description:"애자일 환경에서 Github, Confluence, Jira 등을 활용해 협업한 경험이 있으며, 디자이너와 소통하며 인터랙티브한 공용 컴포넌트와 CMS 컴포넌트를 개발한 경험이 있습니다."}]},s={title:"경력 사항",subtitle:"끊임없이 학습하고 성장하며, 소중한 경험과 노하우를 쌓아왔습니다.",companyExperience:"업무 경험",project:"프로젝트",moreInfo:"주요 업무 내용 보기",github:"Github",details:[{type:"company",date:"2021.06 - 현재",title:"자라소프트",description:"동영상, 사진 비식별화 글로벌 서비스 블러미와 공공기관 및 폐쇄망 기업에 특화된 엔터프라이즈 솔루션을 함께 만들어가고 있습니다.",isActive:!0,link:"".concat("/career","/jarasoft")},{type:"company",date:"2021.04 - 05",title:"이노벤터",description:"게임 시스템 기획과 아프리카 TV의 웹 페이지 개선 외주 업무를 경험했습니다.",isActive:!1},{type:"project",date:"2025.01 - 진행중",title:"Frontend Study",description:"실무 경험이 쌓일수록 더 넓은 시야에서 개발의 본질을 바라보고 싶었습니다. 2025년 목표로 탄탄한 기본기와 지식을 바탕으로 한층 더 깊이 있는 개발자로 나아가고자 시작한 정리형 프로젝트입니다.",isActive:!0,link:n.github.frontend_study},{type:"project",date:"2025.01 - 2025.04",title:"Portfolio Website",description:"Next.js 기반의 포트폴리오 웹 페이지입니다.",isActive:!1,link:n.github.portfolio},{type:"project",date:"2024.08 - 2024.10",title:"NextAuth with AWS Cognito",description:"NextAuth와 AWS Cognito를 사용한 로그인 연동 프로젝트입니다. 구글 로그인 관련 정보가 부족해 도움을 주고자 시작했으며, 블로그는 4,000회 이상 조회되었습니다.",isActive:!1,link:n.github.next_auth}]},c={title:"블로그",subtitle:"단순한 기록이 아닌, 실용적인 경험과 정보를 공유합니다.",loadError:"게시글을 읽어오다 오류가 발생했어요. \uD83D\uDE2D\n다음에 다시 시도해주세요. \uD83E\uDD7A"},o={title:"기록",subtitle:"나의 기록을 통해 성장합니다.",details:[{title:"교육",iconSrc:"/icons/icon-graduation-cap.svg",items:[{icon:"\uD83C\uDFEB",title:"수원과학대학교"},{icon:"\uD83C\uDFEB",title:"야탑고등학교"}]},{title:"자격증",iconSrc:"/icons/icon-certificate-medal.svg",items:[{icon:"\uD83E\uDEAA",title:"워드프로세서 1급"}]},{title:"2025 독서",iconSrc:"/icons/icon-open-book.svg",items:[{icon:"\uD83D\uDCD6",title:"Clean Code 애자일 소프트웨어 장인 정신"},{icon:"\uD83D\uDCD9",title:"봉제인형 살인사건"},{icon:"\uD83D\uDCD9",title:"어쩌면 별들이 너의 슬픔을 가져갈지도 몰라"}]},{title:"수상",iconSrc:"/icons/icon-sports-medal.svg",items:[{icon:"\uD83C\uDF96️",title:"경찰행정 발전표창"},{icon:"\uD83E\uDD47",title:"대학교 UCC 공모전 대상"},{icon:"\uD83E\uDD47",title:"봉사활동 소감문 쓰기 대회 대상"},{icon:"\uD83E\uDD48",title:"언어순화 캠페인 글짓기 대회 은상"}]}]},d={title:"연락처",subtitle:"궁금한 점이 있으시면 언제든지 편하게 연락 주세요, 감사합니다.",contactInfo:[{title:"Github",content:"@dango0812",link:n.github.root},{title:"전화번호",content:"010-2527-1731",link:n.contact.phone},{title:"이메일",content:"ehdrbsla12000@gmail.com",link:n.contact.mail}]},m={title:"목차",details:[{link:"#hero",content:"김동규"},{link:"#coreCompetencies",content:i.title},{link:"#career",content:s.title},{link:"#blogPosts",content:c.title},{link:"#timeline",content:o.title},{link:"#contact",content:d.title}]}},7432:(e,t,r)=>{"use strict";r.d(t,{default:()=>h});var l=r(5474),a=r(1530),n=r(1583),i=r(7019),s=r(5410);let c=(0,a.memo)(function(e){let{className:t,width:r,height:a}=e;return(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:r,height:a,viewBox:"0 0 48 48",fill:"currentColor",className:t,children:(0,l.jsx)("path",{d:"M24 2l6.9 14 15.1 2.2-11 10.7 2.6 15.1L24 36.6 10.4 44l2.6-15.1L2 18.2 17.1 16z"})})});var o=r(71),d=r(5947);let m=[{type:"company",label:i.re.companyExperience},{type:"project",label:i.re.project}];function h(){let e=(0,d.J)();return(0,l.jsx)("section",{id:"career",ref:e,className:"py-15 px-5 lg:px-0",children:(0,l.jsxs)(s.mc,{maxWidth:"xs",className:"flex flex-col gap-10",children:[(0,l.jsxs)(s.Om,{className:"text-center gap-2.5",children:[(0,l.jsx)(s.o5,{as:"h2",fontSize:"xl",fontWeight:700,color:"primary",children:i.re.title}),(0,l.jsx)(s.o5,{as:"em",fontSize:"lg",fontWeight:600,className:"not-italic",children:i.re.subtitle})]}),m.map(e=>{let{type:t,label:r}=e;return(0,l.jsxs)(s.Om,{alignItems:"center",justifyContent:"center",className:"gap-10",children:[(0,l.jsx)(s.cG,{color:"black",children:(0,l.jsx)(s.o5,{as:"span",color:"gray",children:r})}),(0,l.jsx)("div",{className:"w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10",children:i.re.details.filter(e=>e.type===t).map((e,r)=>{let{date:d,title:m,description:h,isActive:f,link:x}=e;return(0,l.jsxs)(a.Fragment,{children:[(0,l.jsx)("div",{className:"col-span-1",children:(0,l.jsxs)(s.st,{alignItems:"center",className:"gap-2",children:[(0,l.jsx)(c,{className:(0,o.cn)({"fill-yellow-500":f,"fill-zinc-300":!f}),width:18,height:18}),(0,l.jsx)(s.o5,{as:"h3",fontWeight:600,children:d})]})}),(0,l.jsx)("div",{className:"col-span-2",children:(0,l.jsxs)(s.Om,{className:"gap-2.5",children:[(0,l.jsxs)(s.Om,{className:"gap-2",children:[(0,l.jsx)(s.o5,{as:"span",fontSize:"lg",fontWeight:600,children:m}),(0,l.jsx)(s.o5,{as:"p",color:"gray",className:"leading-7",children:h})]}),(()=>{if(x){if("company"===t)return(0,l.jsxs)("a",{href:x,className:"flex items-center text-yellow-500 max-w-max",children:[(0,l.jsx)("span",{className:"underline",children:i.re.moreInfo}),(0,l.jsx)("span",{className:"ml-1 inline-block animate-rocket no-underline",children:"\uD83D\uDE80"})]});if("project"===t)return(0,l.jsxs)("a",{href:x,target:"_blank",rel:"noopener noreferrer",className:"w-max flex items-center gap-1.5 hover:underline",children:[(0,l.jsx)(n.default,{src:"/icons/icon-github.svg",alt:"icon-github",width:16,height:16,priority:!0}),(0,l.jsx)(s.o5,{as:"span",fontSize:"sm",children:i.re.github})]})}return null})()]})})]},r)})})]},t)})]})})}},8909:(e,t,r)=>{"use strict";r.d(t,{default:()=>c});var l=r(5474),a=r(7019),n=r(5410),i=r(71),s=r(5947);function c(){let e=(0,s.J)();return(0,l.jsx)("section",{id:"coreCompetencies",className:"py-15 px-5 lg:px-0",children:(0,l.jsxs)(n.mc,{className:"flex flex-col items-center justify-center gap-10",children:[(0,l.jsxs)(n.Om,{className:"text-center gap-2.5",children:[(0,l.jsx)(n.o5,{as:"h2",fontSize:"xl",fontWeight:700,color:"primary",children:a.tT.title}),(0,l.jsx)(n.o5,{as:"em",fontSize:"lg",fontWeight:700,className:"not-italic",children:a.tT.subtitle})]}),(0,l.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full",children:a.tT.details.map((t,r,a)=>{let{icon:s,title:c,description:o}=t;return(0,l.jsx)("div",{ref:e,className:(0,i.cn)("block rounded-3xl bg-gray-100 border border-gray-100",{"md:col-span-2 lg:col-span-1":r===a.length-1}),children:(0,l.jsxs)("article",{className:"p-5",children:[(0,l.jsx)(n.st,{alignItems:"center",justifyContent:"center",className:"rounded-xl w-12 h-12 bg-gray-200 cursor-default",children:s}),(0,l.jsx)(n.o5,{as:"h3",fontSize:"lg",fontWeight:600,className:"mt-5",children:c}),(0,l.jsx)(n.o5,{as:"p",color:"gray",className:"mt-2.5",children:o})]})},r)})})]})})}},9154:(e,t,r)=>{Promise.resolve().then(r.bind(r,4081)),Promise.resolve().then(r.bind(r,7432)),Promise.resolve().then(r.bind(r,8909)),Promise.resolve().then(r.bind(r,2331)),Promise.resolve().then(r.bind(r,5563))}},e=>{var t=t=>e(e.s=t);e.O(0,[267,155,227,968,80,77,358],()=>t(9154)),_N_E=e.O()}]);
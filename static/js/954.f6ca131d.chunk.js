"use strict";(self.webpackChunkdango0812_github_io=self.webpackChunkdango0812_github_io||[]).push([[954],{954:(e,a,t)=>{t.r(a),t.d(a,{default:()=>S});var s=t(649),r=t(935),n=t(170);function i(e){let{className:a,size:t="full",children:s,...i}=e,l="";switch(t){case"sm":l+="max-w-screen-sm";break;case"md":l+="max-w-screen-md";break;case"lg":l+="max-w-screen-lg";break;case"xl":l+="max-w-screen-xl";break;default:l+="max-w-full"}return(0,n.jsx)("div",{className:(0,r.m6)("mx-auto ".concat(l),a),...i,children:s})}const l={vertical:"flex flex-row",horizontal:"flex flex-col"},c={start:"items-start",end:"items-end",center:"items-center",baseline:"items-baseline",between:"items-stretch"},o={start:"justify-start",end:"justify-end",center:"justify-center",between:"justify-between",around:"justify-around",stretch:"justify-stretch"},d={0:"gap-0",2:"gap-0.5",4:"gap-1",8:"gap-2",12:"gap-3",16:"gap-4",24:"gap-6"};function m(e){let{className:a,direction:t,align:s,justify:i,spacing:m=0,children:h,...x}=e;return(0,n.jsx)("div",{className:(0,r.m6)("".concat(l[t]," ").concat(c[s]," ").concat(o[i]," ").concat(d[m]),a),...x,children:h})}const h={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p"};function x(e){let{className:a,variant:t="body2",noWrap:n=!1,color:i="black",children:l,...c}=e;const o={root:"".concat(n?"truncate":""," font-default"),color:"",size:""};switch(t){case"h1":o.size="text-7xl font-bold leading-snug";break;case"h2":o.size="text-6xl font-bold leading-none";break;case"h3":o.size="text-5xl font-semibold leading-none";break;case"h4":o.size="text-4xl font-semibold leading-none";break;case"h5":o.size="text-3xl font-medium leading-9";break;case"h6":o.size="text-2xl font-medium leading-8";break;case"subtitle1":o.size="text-xl font-medium leading-8";break;case"subtitle2":o.size="text-lg font-medium leading-7";break;case"body1":o.size="text-md font-normal leading-7";break;default:o.size="text-sm font-normal leading-none"}n&&(o.root=(0,r.m6)(o.root,"truncate")),o.color="black"===i?"text-black":"white"===i?"text-white":"text-".concat(i,"-500");const d={className:(0,r.m6)("".concat(o.root," ").concat(o.color," ").concat(o.size),a),variant:t,noWrap:n,color:i,...c};return(0,s.createElement)(h[t],d,l)}function g(){return(0,n.jsx)("section",{className:"animate-fadeInUp",children:(0,n.jsxs)(i,{size:"md",className:"flex flex-col gap-4",children:[(0,n.jsx)(x,{variant:"h6",className:"dark:text-white",children:"Awards \ud83c\udfc6"}),(0,n.jsx)("hr",{className:"w-full h-px bg-slate-500"}),(0,n.jsx)(m,{direction:"horizontal",align:"center",justify:"center",className:"md:flex-row gap-16",children:["award_1.jpg","award_2.jpg"].map(((e,a)=>(0,n.jsx)("img",{loading:"lazy",src:"/assets/awards/".concat(e),alt:"",className:"w-auto md:w-[35%] h-24"},a)))})]})})}const u=(0,s.memo)(g);var b=t(507);function f(e){let{children:a,className:t,...s}=e;return(0,n.jsx)("div",{className:(0,r.m6)("block py-4 px-6 bg-white dark:bg-[#212b36] border border-gray-200 dark:border-[#202b37] rounded-lg shadow-2xl",t),...s,children:a})}function p(e){let a=new Date;a=e instanceof Date?e:new Date(e);return new Intl.DateTimeFormat("ko-KR").format(a).slice(0,-1)}const j=function(){const{data:e,isLoading:a,isFetching:t,error:r}=(0,b.a)({queryKey:["id"],queryFn:()=>c(),refetchOnWindowFocus:!1}),l=(0,s.useMemo)((()=>({data:a?[]:e,loading:a,fetching:t,error:r||null,empty:!a&&0===e.length})),[e,a,t,r]),c=async()=>{const e=await fetch("https://dev.to/api/articles?username=dango0812&api_key=fDwtyzQ7BU8gb9MEjzt3CB4a");if(!e.ok)throw new Error("Network response was not ok.");return await e.json()};return(0,n.jsx)("section",{id:"blog",className:"animate-fadeInUp",children:(0,n.jsxs)(i,{size:"md",className:"flex flex-col gap-4",children:[(0,n.jsx)(x,{variant:"h6",className:"dark:text-white",children:"Blog Posts \ud83d\udcda"}),(0,n.jsx)("hr",{className:"w-full h-px bg-slate-500"}),(0,n.jsx)(m,{direction:"horizontal",align:"start",justify:"start",spacing:16,children:l.data.map((e=>(0,n.jsx)("a",{href:"#",children:(0,n.jsx)(f,{className:"px-0 py-0 md:flex-row min-h-[160px] border-none hover:bg-transparent dark:md:hover:bg-gray-700",children:(0,n.jsxs)(m,{direction:"horizontal",align:"start",justify:"start",className:"md:flex md:flex-row",spacing:4,children:[(0,n.jsx)("img",{className:"w-full md:w-56 h-48 object-cover rounded-t-lg md:rounded-l-lg md:rounded-r-none",src:e.cover_image,alt:"blog cover"}),(0,n.jsxs)(m,{direction:"horizontal",align:"start",justify:"start",spacing:16,className:"p-4",children:[(0,n.jsx)(x,{variant:"h6",color:"black",className:"font-bold  dark:text-white",children:e.title}),(0,n.jsx)(x,{variant:"body1",className:"text-gray-400",children:e.description}),(0,n.jsx)(x,{variant:"body2",className:"text-gray-400 leading-10",children:p(e.created_at)})]})]})})},e.id)))})]})})};function w(){return(0,n.jsx)("section",{children:(0,n.jsx)(i,{size:"md",children:(0,n.jsxs)("div",{className:"grid grid-flow-row md:grid-cols-2 gap-8",children:[(0,n.jsx)("div",{className:"flex justify-center md:justify-start items-center",children:(0,n.jsx)("img",{className:"h-48 md:h-64",src:"/assets/profile.jpg",alt:"profile"})}),(0,n.jsxs)("div",{className:"flex flex-col justify-center gap-8 animate-fadeIn",children:[(0,n.jsxs)(m,{direction:"horizontal",align:"center",justify:"start",className:"items-center md:items-start",spacing:8,children:[(0,n.jsx)(x,{variant:"h4",className:"dark:text-white",children:"\uae40 \ub3d9 \uaddc"}),(0,n.jsx)(x,{variant:"h6",className:"font-normal dark:text-white",children:"Web Frontend Developer \ud83e\udee0"})]}),(0,n.jsxs)(m,{direction:"horizontal",justify:"start",align:"start",spacing:8,className:"animate-fadeInUp",children:[(0,n.jsx)("hr",{className:"w-full h-px border bg-red-500 dark:bg-gray-500"}),[{icon:"\u2709\ufe0f",value:"ehdrbsla12000@gmail.com",link:"mailto:ehdrbsla12000@gmail.com"},{icon:"\ud83e\uddd1\u200d\ud83d\udcbb",value:"Github",link:"https://github.com/dango0812"},{icon:"\ud83d\udcda",value:"Study Log",link:"#blog"}].map((e=>(0,n.jsx)("a",{className:"max-w-max md:hover:scale-110 transition-transform ease-in-out duration-300",href:e.link,target:"".concat(e.link.startsWith("#")?"_self":"_blank"),rel:"noreferrer noopener",children:(0,n.jsxs)(x,{variant:"subtitle1",className:"dark:text-white",children:[e.icon," ",e.value]})}))),(0,n.jsx)("hr",{className:"w-full h-px border bg-red-500 dark:bg-gray-500"})]})]})]})})})}const y=(0,s.memo)(w);function k(){return(0,n.jsx)("section",{className:"animate-fadeInUp",children:(0,n.jsxs)(i,{size:"md",className:"flex flex-col gap-4",children:[(0,n.jsx)(x,{variant:"h6",className:"dark:text-white",children:"Introduce \ud83d\udc19"}),(0,n.jsx)("hr",{className:"w-full h-px border bg-red-500 dark:bg-gray-500"}),(0,n.jsx)(f,{children:(0,n.jsx)(x,{variant:"subtitle2",className:"whitespace-pre-line font-normal leading-8 dark:text-white",children:"\uc548\ub155\ud558\uc138\uc694 \ud83d\udc4b \ub04a\uc784\uc5c6\ub294 \uc131\uc7a5\uc744 \ucd94\uad6c\ud558\ub294 \uac1c\ubc1c\uc790 \uae40\ub3d9\uaddc\uc608\uc694.\n                            \ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc66 \ud300\uc5d0 \uc18c\uc18d\ub418\uc5b4 \ud568\uaed8 \uc77c\ud558\uba70 \uc11c\ub85c\uc758 \uc544\uc774\ub514\uc5b4\uc640 \uad00\uc810\uc744 \uacf5\uc720\ud558\uba70 \uc131\uc7a5\ud558\ub294 \uac83\uc744 \uc88b\uc544\ud574\uc694.\n                            \ud83c\udfcb\ufe0f\u200d\u2642\ufe0f \uac00\ub3c5\uc131 \uc88b\uc740 \ucf54\ub4dc\ub97c \uc791\uc131\ud558\uae30 \uc704\ud574 \ub178\ub825\ud574\uc694.\n                            \ud83c\udf96\ufe0f \uae30\uc220\uc801\uc778 \uce21\uba74\uacfc \uc544\uc6b8\ub7ec \uc0ac\uc6a9\uc790 \uc2dc\uac01\uc5d0\uc11c\uc758 UI/UX\ub97c \uac1c\uc120\ud558\ub294\ub370 \uad00\uc2ec\uc774 \ub9ce\uc544\uc694.\n                        "})})]})})}const N=(0,s.memo)(k);function v(e){let{children:a,title:t,expanded:r,className:i,...l}=e;const{value:c,onToggle:o}=function(e){const[a,t]=(0,s.useState)(e||!1);return{value:a,onTrue:(0,s.useCallback)((()=>{t(!0)}),[]),onFalse:(0,s.useCallback)((()=>{t(!1)}),[]),onToggle:(0,s.useCallback)((()=>{t((e=>!e))}),[]),setValue:t}}(r);return(0,n.jsxs)(m,{direction:"horizontal",align:"start",justify:"start",spacing:0,children:[(0,n.jsxs)("button",{type:"button",className:"flex items-center justify-between ".concat(c?"rounded-t-xl border-b-0 border border-slate-700 bg-[#212b36]":"border-b border-slate-700"," px-6 py-4 shadow-2xl w-full"),onClick:o,...l,children:[(0,n.jsx)(x,{variant:"subtitle2",className:"dark:text-white",children:t}),(0,n.jsx)("div",{className:"w-4 h-4",children:(0,n.jsx)("img",{src:"".concat(c?"/assets/icons/caret-down.svg":"/assets/icons/caret.svg"),alt:""})})]}),c&&(0,n.jsx)("div",{className:"py-6 px-8 border text-white border-slate-700 rounded-b-xl",children:a})]})}const z={dark:"bg-gray-200 text-gray-800",red:"bg-red-200 text-red-800",green:"bg-green-200 text-green-800",orange:"bg-orange-200 text-orange-800",yellow:"bg-yellow-200 text-yellow-800",blue:"bg-sky-200 text-blue-800",purple:"bg-purple-200 text-purple-800",pink:"bg-pink-200 text-pink-800"};function F(e){let{children:a,color:t="dark",className:s,...i}=e;return(0,n.jsx)("span",{className:(0,r.m6)("inline-block px-1.5 py-1 text-xs font-bold rounded-lg ".concat(z[t]),s),...i,children:a})}function I(e){let{icon:a,color:t,className:s,...i}=e;return(0,n.jsx)("img",{src:"https://img.shields.io/badge/".concat(a,"-").concat("white"===t?"FFFFFF":"212b36","?style=for-the-badge&logo=").concat(a),alt:"".concat(a,"-badge"),className:(0,r.m6)("rounded-md",s),...i})}const _=[{title:"Portfolio Web \ud83d\udc2f",description:"\ud398\uc774\uc9c0 \ud55c \uc7a5\uc73c\ub85c \ubaa8\ub4e0 \ubaa8\uc2b5\uc744 \ubcf4\uc5ec\uc904 \uc218 \uc5c6\uc9c0\ub9cc,\nUI\ub97c \uc5b4\ub5bb\uac8c \uc124\uacc4\ud558\uba74 \ub098\uc5d0 \ub300\ud574 \ube60\ub974\uac8c \ud30c\uc545\ud560 \uc218 \uc788\uc744\uae4c? \uace0\ubbfc\uc744 \ub9ce\uc774 \ud560 \uc218 \uc788\uc5b4\uc11c \uc88b\uc558\ub358 \ud504\ub85c\uc81d\ud2b8\uc600\uc5b4\uc694.\n\ud504\ub85c\uc81d\ud2b8\ub97c \ud1b5\ud574 \uac1c\ubc1c\uc5d0 \ub300\ud55c \ub098\uc758 \ub9c8\uc74c\uac00\uc9d0, \uae30\uc220\uc801\uc778 \uc5ed\ub7c9, \uc218\uc0c1 \ub0b4\uc5ed, \ud504\ub85c\uc81d\ud2b8, \ube14\ub85c\uadf8\ub97c \ud655\uc778\ud560 \uc218 \uc788\uc5b4\uc694.",image:"portfolio.jpg",tags:["react","typescript","tailwind-css","react-query","eslint","prettierrc","pnpm","github-actions"],expanded:!0,url:"https://github.com/dango0812/dango0812.github.io",startDate:"2023. 12. 13",endDate:"2024. 01. 24"}];function D(){return(0,n.jsx)("section",{className:"animate-fadeInUp",children:(0,n.jsxs)(i,{size:"md",className:"flex flex-col gap-4",children:[(0,n.jsx)(x,{variant:"h6",className:"dark:text-white",children:"Projects \u2728"}),(0,n.jsx)("hr",{className:"w-full h-px border bg-red-500 dark:bg-gray-500"}),_.map((e=>(0,n.jsx)(v,{title:e.title,expanded:e.expanded,children:(0,n.jsxs)("div",{className:"grid grid-flow-row grid-cols-1 md:grid-cols-2 gap-6",children:[(0,n.jsx)("div",{className:"w-full h-full flex items-center justify-center",children:(0,n.jsx)("img",{className:"rounded-xl",src:"assets/projects/".concat(e.image),alt:""})}),(0,n.jsxs)(m,{direction:"horizontal",align:"start",justify:"between",spacing:24,children:[(0,n.jsx)(x,{variant:"body1",className:"whitespace-pre-wrap dark:text-white",children:e.description}),(0,n.jsx)(m,{className:"flex-wrap",direction:"vertical",align:"start",justify:"start",spacing:16,children:e.tags.map((e=>(0,n.jsx)(F,{color:"blue",children:e})))}),(0,n.jsxs)(m,{className:"w-full",direction:"vertical",align:"center",justify:"between",children:[(0,n.jsx)("a",{href:e.url,target:"_blank",rel:"noreferrer noopener",children:(0,n.jsx)(I,{icon:"github",color:"black"})}),(0,n.jsxs)("div",{className:"text-gray-300",children:[e.startDate," ~ ",e.endDate]})]})]})]})})))]})})}var U=t(298);const C=[{id:"core",title:"\ucf54\uc5b4",list:["react","next.js","javascript","typescript"]},{id:"state-management",title:"\uc0c1\ud0dc \uad00\ub9ac",list:["recoil","reactquery","swr"]},{id:"style",title:"\uc2a4\ud0c0\uc77c\ub9c1",list:["css3","emotion","styledcomponents","mui","tailwindcss"]},{id:"action",title:"CI/CD",list:["githubactions"]},{id:"aws",title:"AWS",list:["awslambda","amazonapigateway","amazons3","amazondynamodb","awsamplify","awscognito"]}];function T(){const{currentTheme:e}=(0,U.T)();return(0,n.jsx)("section",{className:"animate-fadeInUp",children:(0,n.jsxs)(i,{size:"md",className:"flex flex-col gap-4",children:[(0,n.jsx)(x,{variant:"h6",className:"dark:text-white",children:"Tech Stack \ud83d\udc68\u200d\ud83d\udd27"}),(0,n.jsx)("hr",{className:"w-full h-px bg-slate-500"}),(0,n.jsx)(m,{direction:"horizontal",align:"start",justify:"start",spacing:8,children:C.map((a=>(0,n.jsxs)(m,{direction:"horizontal",align:"start",justify:"start",spacing:4,children:[(0,n.jsx)(x,{variant:"body1",className:"dark:text-white",children:a.title}),(0,n.jsx)("div",{className:"flex flex-wrap gap-4 ",children:a.list.map((a=>(0,n.jsx)(I,{icon:a,color:"".concat("dark"===e?"black":"white")})))})]},a.id)))})]})})}const W=(0,s.memo)(T),q="bg-gradient-to-r from-blue-100 to-blue-100 dark:bg-none dark:bg-[#161c24] min-h-screen p-6";function S(){return(0,n.jsx)("main",{className:q,children:(0,n.jsxs)("article",{className:"flex flex-col justify-center gap-14 md:gap-16 py-16",children:[(0,n.jsx)(y,{}),(0,n.jsx)(N,{}),(0,n.jsx)(W,{}),(0,n.jsx)(u,{}),(0,n.jsx)(D,{}),(0,n.jsx)(j,{})]})})}}}]);
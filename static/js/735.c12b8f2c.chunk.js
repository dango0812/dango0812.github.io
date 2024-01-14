"use strict";(self.webpackChunkdango0812_github_io=self.webpackChunkdango0812_github_io||[]).push([[735],{735:(e,a,s)=>{s.r(a),s.d(a,{default:()=>T});var t=s(649),l=s(935),r=s(170);function i(e){let{className:a,size:s="full",children:t,...i}=e,n="";switch(s){case"sm":n+="max-w-screen-sm";break;case"md":n+="max-w-screen-md";break;case"lg":n+="max-w-screen-lg";break;case"xl":n+="max-w-screen-xl";break;default:n+="max-w-full"}return(0,r.jsx)("div",{className:(0,l.m6)("mx-auto ".concat(n),a),...i,children:t})}const n={vertical:"flex flex-row",horizontal:"flex flex-col"},c={start:"items-start",end:"items-end",center:"items-center",baseline:"items-baseline",between:"items-stretch"},o={start:"justify-start",end:"justify-end",center:"justify-center",between:"justify-between",around:"justify-around",stretch:"justify-stretch"},d={0:"gap-0",2:"gap-0.5",4:"gap-1",8:"gap-2",12:"gap-3",16:"gap-4",24:"gap-6"};function m(e){let{className:a,direction:s,align:t,justify:i,spacing:m=0,children:h,...x}=e;return(0,r.jsx)("div",{className:(0,l.m6)("".concat(n[s]," ").concat(c[t]," ").concat(o[i]," ").concat(d[m]),a),...x,children:h})}const h={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p"};function x(e){let{className:a,variant:s="body2",noWrap:r=!1,color:i="black",children:n,...c}=e;const o={root:"".concat(r?"truncate":""," font-default"),color:"",size:""};switch(s){case"h1":o.size="text-7xl font-bold leading-snug";break;case"h2":o.size="text-6xl font-bold leading-none";break;case"h3":o.size="text-5xl font-semibold leading-none";break;case"h4":o.size="text-4xl font-semibold leading-none";break;case"h5":o.size="text-3xl font-medium leading-9";break;case"h6":o.size="text-2xl font-medium leading-8";break;case"subtitle1":o.size="text-xl font-medium leading-8";break;case"subtitle2":o.size="text-lg font-medium leading-7";break;case"body1":o.size="text-md font-normal leading-7";break;default:o.size="text-sm font-normal leading-none"}r&&(o.root=(0,l.m6)(o.root,"truncate")),o.color="black"===i?"text-black":"white"===i?"text-white":"text-".concat(i,"-500");const d={className:(0,l.m6)("".concat(o.root," ").concat(o.color," ").concat(o.size),a),variant:s,noWrap:r,color:i,...c};return(0,t.createElement)(h[s],d,n)}function g(){return(0,r.jsx)("section",{className:"animate-fadeInUp",children:(0,r.jsxs)(i,{size:"md",className:"flex flex-col gap-4",children:[(0,r.jsx)(x,{variant:"h6",className:"dark:text-white",children:"Awards \ud83c\udfc6"}),(0,r.jsx)("hr",{className:"w-full h-px bg-slate-500"}),(0,r.jsx)(m,{direction:"horizontal",align:"center",justify:"center",className:"md:flex-row gap-16",children:["award_1.jpg","award_2.jpg"].map(((e,a)=>(0,r.jsx)("img",{loading:"lazy",src:"/assets/awards/".concat(e),alt:"",className:"w-[35%] h-24"},a)))})]})})}const u=(0,t.memo)(g);var f=s(507);function b(e){let{children:a,className:s,...t}=e;return(0,r.jsx)("div",{className:(0,l.m6)("block py-4 px-6 bg-white dark:bg-[#212b36] border border-gray-200 dark:border-[#202b37] rounded-lg shadow-2xl",s),...t,children:a})}function j(e){let a=new Date;a=e instanceof Date?e:new Date(e);return new Intl.DateTimeFormat("ko-KR").format(a).slice(0,-1)}const p=function(){const{data:e,isLoading:a,isFetching:s,error:l}=(0,f.a)({queryKey:["id"],queryFn:()=>c(),refetchOnWindowFocus:!1}),n=(0,t.useMemo)((()=>({data:a?[]:e,loading:a,fetching:s,error:l||null,empty:!a&&0===e.length})),[e,a,s,l]),c=async()=>{const e=await fetch("https://dev.to/api/articles?username=dango0812&api_key=fDwtyzQ7BU8gb9MEjzt3CB4a");if(!e.ok)throw new Error("Network response was not ok.");return await e.json()};return(0,r.jsx)("section",{id:"blog",className:"animate-fadeInUp",children:(0,r.jsxs)(i,{size:"md",className:"flex flex-col gap-4",children:[(0,r.jsx)(x,{variant:"h6",className:"dark:text-white",children:"Blog Posts \ud83d\udcda"}),(0,r.jsx)("hr",{className:"w-full h-px bg-slate-500"}),(0,r.jsx)(m,{direction:"horizontal",align:"start",justify:"start",spacing:16,children:n.data.map((e=>(0,r.jsx)("a",{href:"#",children:(0,r.jsx)(b,{className:"px-0 py-0 md:flex-row min-h-[160px] border-none hover:bg-transparent dark:md:hover:bg-gray-700",children:(0,r.jsxs)(m,{direction:"horizontal",align:"start",justify:"start",className:"md:flex md:flex-row",spacing:4,children:[(0,r.jsx)("img",{className:"w-full md:w-56 h-48 object-cover rounded-t-lg md:rounded-l-lg md:rounded-r-none",src:e.cover_image,alt:"blog cover"}),(0,r.jsxs)(m,{direction:"horizontal",align:"start",justify:"start",spacing:16,className:"p-4",children:[(0,r.jsx)(x,{variant:"h6",color:"black",className:"font-bold  dark:text-white",children:e.title}),(0,r.jsx)(x,{variant:"body1",className:"text-gray-400",children:e.description}),(0,r.jsx)(x,{variant:"body2",className:"text-gray-400 leading-10",children:j(e.created_at)})]})]})})},e.id)))})]})})};function w(){return(0,r.jsx)("section",{children:(0,r.jsx)(i,{size:"md",children:(0,r.jsxs)("div",{className:"grid grid-flow-row md:grid-cols-2 gap-8",children:[(0,r.jsx)("div",{className:"flex justify-center md:justify-start items-center",children:(0,r.jsx)("img",{className:"h-48 md:h-64",src:"/assets/profile.jpg",alt:"profile"})}),(0,r.jsxs)("div",{className:"flex flex-col justify-center gap-8 animate-fadeIn",children:[(0,r.jsxs)(m,{direction:"horizontal",align:"center",justify:"start",className:"items-center md:items-start",spacing:8,children:[(0,r.jsx)(x,{variant:"h4",className:"dark:text-white",children:"\uae40 \ub3d9 \uaddc"}),(0,r.jsx)(x,{variant:"h6",className:"font-normal dark:text-white",children:"Web Frontend Developer \ud83e\udee0"})]}),(0,r.jsxs)(m,{direction:"horizontal",justify:"start",align:"start",spacing:8,className:"animate-fadeInUp",children:[(0,r.jsx)("hr",{className:"w-full h-px border bg-red-500 dark:bg-gray-500"}),[{icon:"\u2709\ufe0f",value:"ehdrbsla12000@gmail.com",link:"mailto:ehdrbsla12000@gmail.com"},{icon:"\ud83e\uddd1\u200d\ud83d\udcbb",value:"Github",link:"https://github.com/dango0812"},{icon:"\ud83d\udcda",value:"Study Log",link:"#blog"}].map((e=>(0,r.jsx)("a",{className:"max-w-max md:hover:scale-110 transition-transform ease-in-out duration-300",href:e.link,target:"".concat(e.link.startsWith("#")?"_self":"_blank"),rel:"noreferrer noopener",children:(0,r.jsxs)(x,{variant:"subtitle1",className:"dark:text-white",children:[e.icon," ",e.value]})}))),(0,r.jsx)("hr",{className:"w-full h-px border bg-red-500 dark:bg-gray-500"})]})]})]})})})}const y=(0,t.memo)(w);function N(){return(0,r.jsx)("section",{className:"animate-fadeInUp",children:(0,r.jsxs)(i,{size:"md",className:"flex flex-col gap-4",children:[(0,r.jsx)(x,{variant:"h6",className:"dark:text-white",children:"Introduce \ud83d\udc19"}),(0,r.jsx)("hr",{className:"w-full h-px border bg-red-500 dark:bg-gray-500"}),(0,r.jsx)(b,{children:(0,r.jsx)(x,{variant:"subtitle2",className:"whitespace-pre-line font-normal leading-8 dark:text-white",children:"\uc548\ub155\ud558\uc138\uc694 ! \ub04a\uc784\uc5c6\ub294 \uc131\uc7a5\uc744 \ucd94\uad6c\ud558\ub294 \uac1c\ubc1c\uc790 \uae40\ub3d9\uaddc\uc785\ub2c8\ub2e4.\n                            \ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc66 \ud300\uc5d0 \uc18c\uc18d\ub418\uc5b4 \ud568\uaed8 \uc77c\ud558\uba70 \uc11c\ub85c\uc758 \uc544\uc774\ub514\uc5b4\uc640 \uad00\uc810\uc744 \uacf5\uc720\ud558\uba70 \uc131\uc7a5\ud558\ub294 \uac83\uc744 \uc88b\uc544\ud569\ub2c8\ub2e4.\n                            \ud83c\udfcb\ufe0f\u200d\u2642\ufe0f \uac00\ub3c5\uc131 \uc88b\uc740 \ucf54\ub4dc\ub97c \uc791\uc131\ud558\uae30 \uc704\ud574 \ub178\ub825\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4.\n                            \ud83c\udf96\ufe0f \uae30\uc220\uc801\uc778 \uce21\uba74\uacfc \uc544\uc6b8\ub7ec \uc0ac\uc6a9\uc790 \uc2dc\uac01\uc5d0\uc11c\uc758 UI/UX\ub97c \uac1c\uc120\ud558\ub294\ub370 \uad00\uc2ec\uc774 \ub9ce\uc2b5\ub2c8\ub2e4.\n                        "})})]})})}const k=(0,t.memo)(N);function v(e){let{children:a,value:s,fullWidth:t,size:i="medium",color:n,className:c,...o}=e;const d={root:"border rounded-full px-5 py-2.5 me-3 mb-4 flex-grow md:flex-grow-0",color:"",size:""};switch(t?d.size="w-full md:w-auto":d.size+="w-auto","blue"===n?d.color="border-blue-600 bg-blue-600":"dark"===n&&(d.color+="border-[#212b36] bg-[#212b36] hover:bg-slate-700 outline-none"),i){case"small":d.size+=(0,l.m6)(d.size,"h-[36px]");break;case"large":d.size+=(0,l.m6)(d.size,"h-[48px]");break;default:d.size+=(0,l.m6)(d.size,"h-[46px]")}return(0,r.jsx)("button",{type:"button",value:s,className:(0,l.m6)("".concat(d.root," ").concat(d.color," ").concat(d.size),c),...o,children:(0,r.jsx)(x,{variant:"body1",color:"white",children:a})})}const z=["\uc804\uccb4","\uc18c\uc2a4\ucf54\ub4dc \ud3ec\ud568","\uc18c\uc2a4\ucf54\ub4dc \ubbf8\ud3ec\ud568"];function F(){const[e,a]=(0,t.useState)(z[0]),s=(0,t.useCallback)((e=>{a(e.currentTarget.value)}),[]);return(0,r.jsx)("section",{className:"animate-fadeInUp",children:(0,r.jsxs)(i,{size:"md",className:"flex flex-col gap-4",children:[(0,r.jsx)(x,{variant:"h6",className:"dark:text-white",children:"Projects \u2728"}),(0,r.jsx)("hr",{className:"w-full h-px border bg-red-500 dark:bg-gray-500"}),(0,r.jsx)(m,{direction:"vertical",justify:"start",align:"center",className:"flex-wrap w-full md:justify-center mt-4",children:z.map((a=>(0,r.jsx)(v,{value:a,color:e===a?"blue":"dark",fullWidth:a===z[0],size:"medium",onClick:s,children:a},a)))}),(0,r.jsxs)("div",{className:"grid grid-cols-2 md:grid-cols-2 gap-4",children:[(0,r.jsxs)("div",{className:"grid gap-4",children:[(0,r.jsx)("div",{children:(0,r.jsx)("img",{className:"h-auto max-w-full rounded-lg",src:"https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg",alt:"t"})}),(0,r.jsx)("div",{children:(0,r.jsx)("img",{className:"h-auto max-w-full rounded-lg",src:"https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg",alt:"s"})})]}),(0,r.jsxs)("div",{className:"grid gap-4",children:[(0,r.jsx)("div",{children:(0,r.jsx)("img",{className:"h-auto max-w-full rounded-lg",src:"https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg",alt:""})}),(0,r.jsx)("div",{children:(0,r.jsx)("img",{className:"h-auto max-w-full rounded-lg",src:"https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg",alt:""})})]})]})]})})}function I(e){let{icon:a,color:s,className:t,...i}=e;return(0,r.jsx)("img",{src:"https://img.shields.io/badge/".concat(a,"-").concat("white"===s?"FFFFFF":"212b36","?style=for-the-badge&logo=").concat(a),alt:"".concat(a,"-badge"),className:(0,l.m6)("rounded-md",t),...i})}var _=s(298);const U=[{id:"core",title:"\ucf54\uc5b4",list:["react","next.js","javascript","typescript"]},{id:"state-management",title:"\uc0c1\ud0dc \uad00\ub9ac",list:["recoil","reactquery","swr"]},{id:"style",title:"\uc2a4\ud0c0\uc77c\ub9c1",list:["css3","emotion","styledcomponents","mui","tailwindcss"]},{id:"action",title:"CI/CD",list:["githubactions"]},{id:"aws",title:"AWS",list:["awslambda","amazonapigateway","amazons3","amazondynamodb","awsamplify","awscognito"]}];function W(){const{currentTheme:e}=(0,_.T)();return(0,r.jsx)("section",{className:"animate-fadeInUp",children:(0,r.jsxs)(i,{size:"md",className:"flex flex-col gap-4",children:[(0,r.jsx)(x,{variant:"h6",className:"dark:text-white",children:"Tech Stack \ud83d\udc68\u200d\ud83d\udd27"}),(0,r.jsx)("hr",{className:"w-full h-px bg-slate-500"}),(0,r.jsx)(m,{direction:"horizontal",align:"start",justify:"start",spacing:8,children:U.map((a=>(0,r.jsxs)(m,{direction:"horizontal",align:"start",justify:"start",spacing:4,children:[(0,r.jsx)(x,{variant:"body1",className:"dark:text-white",children:a.title}),(0,r.jsx)("div",{className:"flex flex-wrap gap-4 ",children:a.list.map((a=>(0,r.jsx)(I,{icon:a,color:"".concat("dark"===e?"black":"white")})))})]},a.id)))})]})})}const C=(0,t.memo)(W),D="bg-gradient-to-r from-blue-100 to-blue-100 dark:bg-none dark:bg-[#161c24] min-h-screen p-6";function T(){return(0,r.jsx)("main",{className:D,children:(0,r.jsxs)("article",{className:"flex flex-col justify-center gap-14 md:gap-16 py-16",children:[(0,r.jsx)(y,{}),(0,r.jsx)(k,{}),(0,r.jsx)(C,{}),(0,r.jsx)(u,{}),(0,r.jsx)(F,{}),(0,r.jsx)(p,{})]})})}}}]);
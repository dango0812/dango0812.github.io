!function(){let t,e,s,i,n,r,a,o,h,l=t=>t;function c(t,e,s){u(t,e),e.set(t,s)}function u(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}function d(t,e){return t.get(f(t,e))}function p(t,e,s){return t.set(f(t,e),s),s}function f(t,e,s){if("function"==typeof t?t===e:t.has(e))return arguments.length<3?e:s;throw new TypeError("Private element is not present on this object")}System.register(["./mediaQuery-legacy-CTOI7Obx.js","./main-legacy-aj14CQBz.js","./FlexBox-legacy-ViE1Pp05.js","./modulepreload-polyfill-legacy-thrsW4a0.js"],(function(v,g){"use strict";var y,b,m,w,R,x,k,O,C,M,E,S,W,j,U,F,Q,_,D,I;return{setters:[t=>{y=t.r,b=t.n,m=t.a,w=t.b},t=>{R=t.S,x=t.a,k=t.b,O=t.s,C=t.d,M=t.n,E=t.i,S=t.e,W=t.t,j=t.f,U=t.g,F=t.h,Q=t.j,_=t.k},t=>{D=t.C,I=t.R},null],execute:function(){var g,T,q,P,z,L,$,B,H,A,K,Y,G,J,N,V;v("default",(function(){const{data:t,isLoading:e,isFetching:s}=(a={initialData:[],queryKey:["blog_posts"],queryFn:()=>i(),refetchOnWindowFocus:!1},function(t,e){var s,i,n,r;const a=_(),o=pt(),h=vt(),l=a.defaultQueryOptions(t);null===(s=a.getDefaultOptions().queries)||void 0===s||null===(i=s._experimental_beforeQuery)||void 0===i||i.call(s,l),l._optimisticResults=o?"isRestoring":"optimistic",wt(l),yt(l,h),bt(h);const c=!a.getQueryCache().get(l.queryHash),[u]=y.useState((()=>new e(a,l))),d=u.getOptimisticResult(l),p=!o&&!1!==t.subscribed;if(y.useSyncExternalStore(y.useCallback((t=>{const e=p?u.subscribe(Q.batchCalls(t)):gt;return u.updateResult(),e}),[u,p]),(()=>u.getCurrentResult()),(()=>u.getCurrentResult())),y.useEffect((()=>{u.setOptions(l,{listeners:!1})}),[l,u]),xt(l,d))throw kt(l,u,h);if(mt({result:d,errorResetBoundary:h,throwOnError:l.throwOnError,query:a.getQueryCache().get(l.queryHash),suspense:l.suspense}))throw d.error;if(null===(n=a.getDefaultOptions().queries)||void 0===n||null===(r=n._experimental_afterQuery)||void 0===r||r.call(n,l,d),l.experimental_prefetchInRender&&!E&&Rt(d,o)){var f;const t=c?kt(l,u,h):null===(f=a.getQueryCache().get(l.queryHash))||void 0===f?void 0:f.promise;null==t||t.catch(gt).finally((()=>{u.updateResult()}))}return l.notifyOnChangeProps?d:u.trackResult(d)}(a,X)),i=y.useCallback((async()=>{const t=await fetch(`${Dt}/api/articles?username=${It}&api_key=${Tt}`);return await t.json()}),[]),n=e&&s,r=y.useCallback((t=>t<10?`0${t}`:t),[]);var a;return m(Ot,{children:[w("h1",{children:"블로그"}),n?m(D,{children:[w(Qt,{}),w("p",{children:"게시글을 불러오고 있어요."})]}):w(Ct,{children:t.map(((t,e)=>w(Et,{children:w(Mt,{href:t.url,target:"_blank",rel:"noreferrer noopener",children:m(I,{alignItems:"center",gap:20,children:[w(St,{children:r(e+1)}),w(Wt,{children:t.title}),w(jt,{children:_t(t.created_at)})]})})},t.id)))})]})}));var X=(g=new WeakMap,T=new WeakMap,q=new WeakMap,P=new WeakMap,z=new WeakMap,L=new WeakMap,$=new WeakMap,B=new WeakMap,H=new WeakMap,A=new WeakMap,K=new WeakMap,Y=new WeakMap,G=new WeakMap,J=new WeakMap,N=new WeakMap,V=new WeakSet,class extends R{constructor(t,e){var s,i;super(),u(s=this,i=V),i.add(s),c(this,g,void 0),c(this,T,void 0),c(this,q,void 0),c(this,P,void 0),c(this,z,void 0),c(this,L,void 0),c(this,$,void 0),c(this,B,void 0),c(this,H,void 0),c(this,A,void 0),c(this,K,void 0),c(this,Y,void 0),c(this,G,void 0),c(this,J,void 0),c(this,N,new Set),this.options=e,p(g,this,t),p(B,this,null),p($,this,x()),this.options.experimental_prefetchInRender||d($,this).reject(new Error("experimental_prefetchInRender feature flag is not enabled")),this.bindMethods(),this.setOptions(e)}bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){1===this.listeners.size&&(d(T,this).addObserver(this),ht(d(T,this),this.options)?f(V,this,Z).call(this):this.updateResult(),f(V,this,it).call(this))}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return lt(d(T,this),this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return lt(d(T,this),this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,f(V,this,nt).call(this),f(V,this,rt).call(this),d(T,this).removeObserver(this)}setOptions(t,e){const s=this.options,i=d(T,this);if(this.options=d(g,this).defaultQueryOptions(t),void 0!==this.options.enabled&&"boolean"!=typeof this.options.enabled&&"function"!=typeof this.options.enabled&&"boolean"!=typeof k(this.options.enabled,d(T,this)))throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");f(V,this,at).call(this),d(T,this).setOptions(this.options),s._defaulted&&!O(this.options,s)&&d(g,this).getQueryCache().notify({type:"observerOptionsUpdated",query:d(T,this),observer:this});const n=this.hasListeners();n&&ct(d(T,this),i,this.options,s)&&f(V,this,Z).call(this),this.updateResult(e),!n||d(T,this)===i&&k(this.options.enabled,d(T,this))===k(s.enabled,d(T,this))&&C(this.options.staleTime,d(T,this))===C(s.staleTime,d(T,this))||f(V,this,tt).call(this);const r=f(V,this,et).call(this);!n||d(T,this)===i&&k(this.options.enabled,d(T,this))===k(s.enabled,d(T,this))&&r===d(J,this)||f(V,this,st).call(this,r)}getOptimisticResult(t){const e=d(g,this).getQueryCache().build(d(g,this),t),s=this.createResult(e,t);return function(t,e){if(!O(t.getCurrentResult(),e))return!0;return!1}(this,s)&&(p(P,this,s),p(L,this,this.options),p(z,this,d(T,this).state)),s}getCurrentResult(){return d(P,this)}trackResult(t,e){const s={};return Object.keys(t).forEach((i=>{Object.defineProperty(s,i,{configurable:!1,enumerable:!0,get:()=>(this.trackProp(i),null==e||e(i),t[i])})})),s}trackProp(t){d(N,this).add(t)}getCurrentQuery(){return d(T,this)}refetch({...t}={}){return this.fetch({...t})}fetchOptimistic(t){const e=d(g,this).defaultQueryOptions(t),s=d(g,this).getQueryCache().build(d(g,this),e);return s.fetch().then((()=>this.createResult(s,e)))}fetch(t){var e;return f(V,this,Z).call(this,{...t,cancelRefetch:null===(e=t.cancelRefetch)||void 0===e||e}).then((()=>(this.updateResult(),d(P,this))))}createResult(t,e){const s=d(T,this),i=this.options,n=d(P,this),r=d(z,this),a=d(L,this),o=t!==s?t.state:d(q,this),{state:h}=t;let l,c={...h},u=!1;if(e._optimisticResults){const n=this.hasListeners(),r=!n&&ht(t,e),a=n&&ct(t,s,e,i);(r||a)&&(c={...c,...U(h.data,t.options)}),"isRestoring"===e._optimisticResults&&(c.fetchStatus="idle")}let{error:f,errorUpdatedAt:v,status:g}=c;if(e.select&&void 0!==c.data)if(n&&c.data===(null==r?void 0:r.data)&&e.select===d(H,this))l=d(A,this);else try{p(H,this,e.select),l=e.select(c.data),l=F(null==n?void 0:n.data,l,e),p(A,this,l),p(B,this,null)}catch(C){p(B,this,C)}else l=c.data;if(void 0!==e.placeholderData&&void 0===l&&"pending"===g){let t;var y;if(null!=n&&n.isPlaceholderData&&e.placeholderData===(null==a?void 0:a.placeholderData))t=n.data;else if(t="function"==typeof e.placeholderData?e.placeholderData(null===(y=d(K,this))||void 0===y?void 0:y.state.data,d(K,this)):e.placeholderData,e.select&&void 0!==t)try{t=e.select(t),p(B,this,null)}catch(C){p(B,this,C)}void 0!==t&&(g="success",l=F(null==n?void 0:n.data,t,e),u=!0)}d(B,this)&&(f=d(B,this),l=d(A,this),v=Date.now(),g="error");const b="fetching"===c.fetchStatus,m="pending"===g,w="error"===g,R=m&&b,k=void 0!==l,O={status:g,fetchStatus:c.fetchStatus,isPending:m,isSuccess:"success"===g,isError:w,isInitialLoading:R,isLoading:R,data:l,dataUpdatedAt:c.dataUpdatedAt,error:f,errorUpdatedAt:v,failureCount:c.fetchFailureCount,failureReason:c.fetchFailureReason,errorUpdateCount:c.errorUpdateCount,isFetched:c.dataUpdateCount>0||c.errorUpdateCount>0,isFetchedAfterMount:c.dataUpdateCount>o.dataUpdateCount||c.errorUpdateCount>o.errorUpdateCount,isFetching:b,isRefetching:b&&!m,isLoadingError:w&&!k,isPaused:"paused"===c.fetchStatus,isPlaceholderData:u,isRefetchError:w&&k,isStale:ut(t,e),refetch:this.refetch,promise:d($,this)};if(this.options.experimental_prefetchInRender){const e=t=>{"error"===O.status?t.reject(O.error):void 0!==O.data&&t.resolve(O.data)},i=()=>{const t=p($,this,O.promise=x());e(t)},n=d($,this);switch(n.status){case"pending":t.queryHash===s.queryHash&&e(n);break;case"fulfilled":"error"!==O.status&&O.data===n.value||i();break;case"rejected":"error"===O.status&&O.error===n.reason||i()}}return O}updateResult(t){const e=d(P,this),s=this.createResult(d(T,this),this.options);if(p(z,this,d(T,this).state),p(L,this,this.options),void 0!==d(z,this).data&&p(K,this,d(T,this)),O(s,e))return;p(P,this,s);const i={};!1!==(null==t?void 0:t.listeners)&&(()=>{if(!e)return!0;const{notifyOnChangeProps:t}=this.options,s="function"==typeof t?t():t;if("all"===s||!s&&!d(N,this).size)return!0;const i=new Set(null!=s?s:d(N,this));return this.options.throwOnError&&i.add("error"),Object.keys(d(P,this)).some((t=>{const s=t;return d(P,this)[s]!==e[s]&&i.has(s)}))})()&&(i.listeners=!0),f(V,this,ot).call(this,{...i,...t})}onQueryUpdate(){this.updateResult(),this.hasListeners()&&f(V,this,it).call(this)}});function Z(t){f(V,this,at).call(this);let e=d(T,this).fetch(this.options,t);return null!=t&&t.throwOnError||(e=e.catch(M)),e}function tt(){f(V,this,nt).call(this);const t=C(this.options.staleTime,d(T,this));if(E||d(P,this).isStale||!S(t))return;const e=W(d(P,this).dataUpdatedAt,t);p(Y,this,setTimeout((()=>{d(P,this).isStale||this.updateResult()}),e+1))}function et(){var t;return null!==(t="function"==typeof this.options.refetchInterval?this.options.refetchInterval(d(T,this)):this.options.refetchInterval)&&void 0!==t&&t}function st(t){f(V,this,rt).call(this),p(J,this,t),!E&&!1!==k(this.options.enabled,d(T,this))&&S(d(J,this))&&0!==d(J,this)&&p(G,this,setInterval((()=>{(this.options.refetchIntervalInBackground||j.isFocused())&&f(V,this,Z).call(this)}),d(J,this)))}function it(){f(V,this,tt).call(this),f(V,this,st).call(this,f(V,this,et).call(this))}function nt(){d(Y,this)&&(clearTimeout(d(Y,this)),p(Y,this,void 0))}function rt(){d(G,this)&&(clearInterval(d(G,this)),p(G,this,void 0))}function at(){const t=d(g,this).getQueryCache().build(d(g,this),this.options);if(t===d(T,this))return;const e=d(T,this);p(T,this,t),p(q,this,t.state),this.hasListeners()&&(null==e||e.removeObserver(this),t.addObserver(this))}function ot(t){Q.batch((()=>{t.listeners&&this.listeners.forEach((t=>{t(d(P,this))})),d(g,this).getQueryCache().notify({query:d(T,this),type:"observerResultsUpdated"})}))}function ht(t,e){return function(t,e){return!1!==k(e.enabled,t)&&void 0===t.state.data&&!("error"===t.state.status&&!1===e.retryOnMount)}(t,e)||void 0!==t.state.data&&lt(t,e,e.refetchOnMount)}function lt(t,e,s){if(!1!==k(e.enabled,t)){const i="function"==typeof s?s(t):s;return"always"===i||!1!==i&&ut(t,e)}return!1}function ct(t,e,s,i){return(t!==e||!1===k(i.enabled,t))&&(!s.suspense||"error"!==t.state.status)&&ut(t,s)}function ut(t,e){return!1!==k(e.enabled,t)&&t.isStaleByTime(C(e.staleTime,t))}var dt=y.createContext(!1),pt=()=>y.useContext(dt);dt.Provider;var ft=y.createContext(function(){let t=!1;return{clearReset:()=>{t=!1},reset:()=>{t=!0},isReset:()=>t}}()),vt=()=>y.useContext(ft);function gt(){}var yt=(t,e)=>{(t.suspense||t.throwOnError||t.experimental_prefetchInRender)&&(e.isReset()||(t.retryOnMount=!1))},bt=t=>{y.useEffect((()=>{t.clearReset()}),[t])},mt=({result:t,errorResetBoundary:e,throwOnError:s,query:i,suspense:n})=>{return t.isError&&!e.isReset()&&!t.isFetching&&i&&(n&&void 0===t.data||(r=s,a=[t.error,i],"function"==typeof r?r(...a):!!r));var r,a},wt=t=>{const e=t.staleTime;t.suspense&&(t.staleTime="function"==typeof e?(...t)=>Math.max(e(...t),1e3):Math.max(null!=e?e:1e3,1e3),"number"==typeof t.gcTime&&(t.gcTime=Math.max(t.gcTime,1e3)))},Rt=(t,e)=>t.isLoading&&t.isFetching&&!e,xt=(t,e)=>(null==t?void 0:t.suspense)&&e.isPending,kt=(t,e,s)=>e.fetchOptimistic(t).catch((()=>{s.clearReset()}));const Ot=b.section(t||(t=l`
    width: 100%;
    height: 100%;
    padding: 100px 0px;
`)),Ct=b.ul(e||(e=l`
    width: 100%;
    list-style-type: none;
`)),Mt=b.a(s||(s=l`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`)),Et=b.li(i||(i=l`
    display: flex;
    align-items: center;
    padding: 0.625rem 0px; // 12px 0px
    border-bottom: 1px solid var(--white400);
    transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
    :hover {
        transform: scale(1.01);
    }
`)),St=b.div(n||(n=l`
    width: 40px;
    height: 40px;
    min-width: 40px;
    min-height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--font-size-small);
    border-radius: var(--border-radius-md);
    background-color: var(--white200);
`)),Wt=b.p(r||(r=l`
    width: 100%;
    padding: 0px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`)),jt=b.span(a||(a=l`
    min-width: 100px;
    width: 100px;
    font-size: var(--font-size-small);
    letter-spacing: 0;
    color: var(--grey);
    white-space: nowrap;
`)),Ut=b.div(o||(o=l`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 24px;
    gap: 8px;
`)),Ft=b.span(h||(h=l`
    width: 10px;
    height: 10px;
    border-radius: var(--border-radius-full);
    background-color: inherit;
    animation: bounce 1.5s linear infinite;
    animation-delay: ${0};

    @keyframes bounce {
        0% {
            margin-bottom: 0;
        }
        25% {
            margin-bottom: 12px;
            background-color: var(--pink);
        }
        50% {
            margin-bottom: 0
        }
        100% {
            margin-bottom: 0
        }
    }
`),(({delay:t})=>t||0));function Qt(){return m(Ut,{children:[w(Ft,{delay:"0s"}),w(Ft,{delay:"0.3s"}),w(Ft,{delay:"0.6s"})]})}const _t=t=>{const e=new Date(t);e.setHours(e.getHours()+9);return`${e.getFullYear()}년 ${e.getMonth()+1}월 ${e.getDay()}일`},Dt="https://dev.to",It="dango0812",Tt="fDwtyzQ7BU8gb9MEjzt3CB4a"}}}))}();

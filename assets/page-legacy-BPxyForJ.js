!function(){let t,e,i,s,n,r,a,o,h,l=t=>t;function c(t,e,i){u(t,e),e.set(t,i)}function u(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}function d(t,e){return t.get(f(t,e))}function p(t,e,i){return t.set(f(t,e),i),i}function f(t,e,i){if("function"==typeof t?t===e:t.has(e))return arguments.length<3?e:i;throw new TypeError("Private element is not present on this object")}System.register(["./index-legacy-Dg07Li6_.js","./FlexBox-legacy-JxK1Ek8g.js"],(function(v,g){"use strict";var y,b,m,w,R,x,k,O,C,M,E,S,W,F,U,_,j,Q,q,D;return{setters:[t=>{y=t.S,b=t.d,m=t.e,w=t.s,R=t.f,x=t.g,k=t.i,O=t.h,C=t.t,M=t.k,E=t.l,S=t.o,W=t.q,F=t.b,U=t.v,_=t.n,j=t.j,Q=t.a},t=>{q=t.C,D=t.R}],execute:function(){var g,I,T,P,L,z,$,H,A,B,K,Y,G,J,N,V;v("default",(function(){const{data:t,isLoading:e,isFetching:i}=(a={initialData:[],queryKey:["blog_posts"],queryFn:()=>s(),refetchOnWindowFocus:!1},function(t,e){var i,s,n,r;const a=U(),o=pt(),h=vt(),l=a.defaultQueryOptions(t);null===(i=a.getDefaultOptions().queries)||void 0===i||null===(s=i._experimental_beforeQuery)||void 0===s||s.call(i,l),l._optimisticResults=o?"isRestoring":"optimistic",wt(l),yt(l,h),bt(h);const c=!a.getQueryCache().get(l.queryHash),[u]=F.useState((()=>new e(a,l))),d=u.getOptimisticResult(l);if(F.useSyncExternalStore(F.useCallback((t=>{const e=o?()=>{}:u.subscribe(W.batchCalls(t));return u.updateResult(),e}),[u,o]),(()=>u.getCurrentResult()),(()=>u.getCurrentResult())),F.useEffect((()=>{u.setOptions(l,{listeners:!1})}),[l,u]),xt(l,d))throw kt(l,u,h);if(mt({result:d,errorResetBoundary:h,throwOnError:l.throwOnError,query:a.getQueryCache().get(l.queryHash)}))throw d.error;if(null===(n=a.getDefaultOptions().queries)||void 0===n||null===(r=n._experimental_afterQuery)||void 0===r||r.call(n,l,d),l.experimental_prefetchInRender&&!k&&Rt(d,o)){var p;const t=c?kt(l,u,h):null===(p=a.getQueryCache().get(l.queryHash))||void 0===p?void 0:p.promise;null==t||t.catch(gt).finally((()=>{u.updateResult()}))}return l.notifyOnChangeProps?d:u.trackResult(d)}(a,X)),s=F.useCallback((async()=>{const t=await fetch(`${qt}/api/articles?username=${Dt}&api_key=${It}`);return await t.json()}),[]),n=e&&i,r=F.useCallback((t=>t<10?`0${t}`:t),[]);var a;return j(Ot,{children:[Q("h1",{children:"블로그"}),n?j(q,{children:[Q(jt,{}),Q("p",{children:"게시글을 불러오고 있어요."})]}):Q(Ct,{children:t.map(((t,e)=>Q(Et,{children:Q(Mt,{href:t.url,target:"_blank",rel:"noreferrer noopener",children:j(D,{alignItems:"center",gap:20,children:[Q(St,{children:r(e+1)}),Q(Wt,{children:t.title}),Q(Ft,{children:Qt(t.created_at)})]})})},t.id)))})]})}));var X=(g=new WeakMap,I=new WeakMap,T=new WeakMap,P=new WeakMap,L=new WeakMap,z=new WeakMap,$=new WeakMap,H=new WeakMap,A=new WeakMap,B=new WeakMap,K=new WeakMap,Y=new WeakMap,G=new WeakMap,J=new WeakMap,N=new WeakMap,V=new WeakSet,class extends y{constructor(t,e){var i,s;super(),u(i=this,s=V),s.add(i),c(this,g,void 0),c(this,I,void 0),c(this,T,void 0),c(this,P,void 0),c(this,L,void 0),c(this,z,void 0),c(this,$,void 0),c(this,H,void 0),c(this,A,void 0),c(this,B,void 0),c(this,K,void 0),c(this,Y,void 0),c(this,G,void 0),c(this,J,void 0),c(this,N,new Set),this.options=e,p(g,this,t),p(H,this,null),p($,this,b()),this.options.experimental_prefetchInRender||d($,this).reject(new Error("experimental_prefetchInRender feature flag is not enabled")),this.bindMethods(),this.setOptions(e)}bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){1===this.listeners.size&&(d(I,this).addObserver(this),ht(d(I,this),this.options)?f(V,this,Z).call(this):this.updateResult(),f(V,this,st).call(this))}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return lt(d(I,this),this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return lt(d(I,this),this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,f(V,this,nt).call(this),f(V,this,rt).call(this),d(I,this).removeObserver(this)}setOptions(t,e){const i=this.options,s=d(I,this);if(this.options=d(g,this).defaultQueryOptions(t),void 0!==this.options.enabled&&"boolean"!=typeof this.options.enabled&&"function"!=typeof this.options.enabled&&"boolean"!=typeof m(this.options.enabled,d(I,this)))throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");f(V,this,at).call(this),d(I,this).setOptions(this.options),i._defaulted&&!w(this.options,i)&&d(g,this).getQueryCache().notify({type:"observerOptionsUpdated",query:d(I,this),observer:this});const n=this.hasListeners();n&&ct(d(I,this),s,this.options,i)&&f(V,this,Z).call(this),this.updateResult(e),!n||d(I,this)===s&&m(this.options.enabled,d(I,this))===m(i.enabled,d(I,this))&&R(this.options.staleTime,d(I,this))===R(i.staleTime,d(I,this))||f(V,this,tt).call(this);const r=f(V,this,et).call(this);!n||d(I,this)===s&&m(this.options.enabled,d(I,this))===m(i.enabled,d(I,this))&&r===d(J,this)||f(V,this,it).call(this,r)}getOptimisticResult(t){const e=d(g,this).getQueryCache().build(d(g,this),t),i=this.createResult(e,t);return function(t,e){if(!w(t.getCurrentResult(),e))return!0;return!1}(this,i)&&(p(P,this,i),p(z,this,this.options),p(L,this,d(I,this).state)),i}getCurrentResult(){return d(P,this)}trackResult(t,e){const i={};return Object.keys(t).forEach((s=>{Object.defineProperty(i,s,{configurable:!1,enumerable:!0,get:()=>(this.trackProp(s),null==e||e(s),t[s])})})),i}trackProp(t){d(N,this).add(t)}getCurrentQuery(){return d(I,this)}refetch({...t}={}){return this.fetch({...t})}fetchOptimistic(t){const e=d(g,this).defaultQueryOptions(t),i=d(g,this).getQueryCache().build(d(g,this),e);return i.fetch().then((()=>this.createResult(i,e)))}fetch(t){var e;return f(V,this,Z).call(this,{...t,cancelRefetch:null===(e=t.cancelRefetch)||void 0===e||e}).then((()=>(this.updateResult(),d(P,this))))}createResult(t,e){const i=d(I,this),s=this.options,n=d(P,this),r=d(L,this),a=d(z,this),o=t!==i?t.state:d(T,this),{state:h}=t;let l,c={...h},u=!1;if(e._optimisticResults){const n=this.hasListeners(),r=!n&&ht(t,e),a=n&&ct(t,i,e,s);(r||a)&&(c={...c,...E(h.data,t.options)}),"isRestoring"===e._optimisticResults&&(c.fetchStatus="idle")}let{error:f,errorUpdatedAt:v,status:g}=c;if(e.select&&void 0!==c.data)if(n&&c.data===(null==r?void 0:r.data)&&e.select===d(A,this))l=d(B,this);else try{p(A,this,e.select),l=e.select(c.data),l=S(null==n?void 0:n.data,l,e),p(B,this,l),p(H,this,null)}catch(C){p(H,this,C)}else l=c.data;if(void 0!==e.placeholderData&&void 0===l&&"pending"===g){let t;var y;if(null!=n&&n.isPlaceholderData&&e.placeholderData===(null==a?void 0:a.placeholderData))t=n.data;else if(t="function"==typeof e.placeholderData?e.placeholderData(null===(y=d(K,this))||void 0===y?void 0:y.state.data,d(K,this)):e.placeholderData,e.select&&void 0!==t)try{t=e.select(t),p(H,this,null)}catch(C){p(H,this,C)}void 0!==t&&(g="success",l=S(null==n?void 0:n.data,t,e),u=!0)}d(H,this)&&(f=d(H,this),l=d(B,this),v=Date.now(),g="error");const m="fetching"===c.fetchStatus,w="pending"===g,R="error"===g,x=w&&m,k=void 0!==l,O={status:g,fetchStatus:c.fetchStatus,isPending:w,isSuccess:"success"===g,isError:R,isInitialLoading:x,isLoading:x,data:l,dataUpdatedAt:c.dataUpdatedAt,error:f,errorUpdatedAt:v,failureCount:c.fetchFailureCount,failureReason:c.fetchFailureReason,errorUpdateCount:c.errorUpdateCount,isFetched:c.dataUpdateCount>0||c.errorUpdateCount>0,isFetchedAfterMount:c.dataUpdateCount>o.dataUpdateCount||c.errorUpdateCount>o.errorUpdateCount,isFetching:m,isRefetching:m&&!w,isLoadingError:R&&!k,isPaused:"paused"===c.fetchStatus,isPlaceholderData:u,isRefetchError:R&&k,isStale:ut(t,e),refetch:this.refetch,promise:d($,this)};if(this.options.experimental_prefetchInRender){const e=t=>{"error"===O.status?t.reject(O.error):void 0!==O.data&&t.resolve(O.data)},s=()=>{const t=p($,this,O.promise=b());e(t)},n=d($,this);switch(n.status){case"pending":t.queryHash===i.queryHash&&e(n);break;case"fulfilled":"error"!==O.status&&O.data===n.value||s();break;case"rejected":"error"===O.status&&O.error===n.reason||s()}}return O}updateResult(t){const e=d(P,this),i=this.createResult(d(I,this),this.options);if(p(L,this,d(I,this).state),p(z,this,this.options),void 0!==d(L,this).data&&p(K,this,d(I,this)),w(i,e))return;p(P,this,i);const s={};!1!==(null==t?void 0:t.listeners)&&(()=>{if(!e)return!0;const{notifyOnChangeProps:t}=this.options,i="function"==typeof t?t():t;if("all"===i||!i&&!d(N,this).size)return!0;const s=new Set(null!=i?i:d(N,this));return this.options.throwOnError&&s.add("error"),Object.keys(d(P,this)).some((t=>{const i=t;return d(P,this)[i]!==e[i]&&s.has(i)}))})()&&(s.listeners=!0),f(V,this,ot).call(this,{...s,...t})}onQueryUpdate(){this.updateResult(),this.hasListeners()&&f(V,this,st).call(this)}});function Z(t){f(V,this,at).call(this);let e=d(I,this).fetch(this.options,t);return null!=t&&t.throwOnError||(e=e.catch(x)),e}function tt(){f(V,this,nt).call(this);const t=R(this.options.staleTime,d(I,this));if(k||d(P,this).isStale||!O(t))return;const e=C(d(P,this).dataUpdatedAt,t);p(Y,this,setTimeout((()=>{d(P,this).isStale||this.updateResult()}),e+1))}function et(){var t;return null!==(t="function"==typeof this.options.refetchInterval?this.options.refetchInterval(d(I,this)):this.options.refetchInterval)&&void 0!==t&&t}function it(t){f(V,this,rt).call(this),p(J,this,t),!k&&!1!==m(this.options.enabled,d(I,this))&&O(d(J,this))&&0!==d(J,this)&&p(G,this,setInterval((()=>{(this.options.refetchIntervalInBackground||M.isFocused())&&f(V,this,Z).call(this)}),d(J,this)))}function st(){f(V,this,tt).call(this),f(V,this,it).call(this,f(V,this,et).call(this))}function nt(){d(Y,this)&&(clearTimeout(d(Y,this)),p(Y,this,void 0))}function rt(){d(G,this)&&(clearInterval(d(G,this)),p(G,this,void 0))}function at(){const t=d(g,this).getQueryCache().build(d(g,this),this.options);if(t===d(I,this))return;const e=d(I,this);p(I,this,t),p(T,this,t.state),this.hasListeners()&&(null==e||e.removeObserver(this),t.addObserver(this))}function ot(t){W.batch((()=>{t.listeners&&this.listeners.forEach((t=>{t(d(P,this))})),d(g,this).getQueryCache().notify({query:d(I,this),type:"observerResultsUpdated"})}))}function ht(t,e){return function(t,e){return!1!==m(e.enabled,t)&&void 0===t.state.data&&!("error"===t.state.status&&!1===e.retryOnMount)}(t,e)||void 0!==t.state.data&&lt(t,e,e.refetchOnMount)}function lt(t,e,i){if(!1!==m(e.enabled,t)){const s="function"==typeof i?i(t):i;return"always"===s||!1!==s&&ut(t,e)}return!1}function ct(t,e,i,s){return(t!==e||!1===m(s.enabled,t))&&(!i.suspense||"error"!==t.state.status)&&ut(t,i)}function ut(t,e){return!1!==m(e.enabled,t)&&t.isStaleByTime(R(e.staleTime,t))}var dt=F.createContext(!1),pt=()=>F.useContext(dt);dt.Provider;var ft=F.createContext(function(){let t=!1;return{clearReset:()=>{t=!1},reset:()=>{t=!0},isReset:()=>t}}()),vt=()=>F.useContext(ft);function gt(){}var yt=(t,e)=>{(t.suspense||t.throwOnError||t.experimental_prefetchInRender)&&(e.isReset()||(t.retryOnMount=!1))},bt=t=>{F.useEffect((()=>{t.clearReset()}),[t])},mt=({result:t,errorResetBoundary:e,throwOnError:i,query:s})=>{return t.isError&&!e.isReset()&&!t.isFetching&&s&&(n=i,r=[t.error,s],"function"==typeof n?n(...r):!!n);var n,r},wt=t=>{t.suspense&&(void 0===t.staleTime&&(t.staleTime=1e3),"number"==typeof t.gcTime&&(t.gcTime=Math.max(t.gcTime,1e3)))},Rt=(t,e)=>t.isLoading&&t.isFetching&&!e,xt=(t,e)=>(null==t?void 0:t.suspense)&&e.isPending,kt=(t,e,i)=>e.fetchOptimistic(t).catch((()=>{i.clearReset()}));const Ot=_.section(t||(t=l`
    width: 100%;
    height: 100%;
    padding: 100px 0px;
`)),Ct=_.ul(e||(e=l`
    width: 100%;
    list-style-type: none;
`)),Mt=_.a(i||(i=l`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`)),Et=_.li(s||(s=l`
    display: flex;
    align-items: center;
    padding: 0.625rem 0px; // 12px 0px
    border-bottom: 1px solid var(--white400);
    transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
    :hover {
        transform: scale(1.01);
    }
`)),St=_.div(n||(n=l`
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
`)),Wt=_.p(r||(r=l`
    width: 100%;
    padding: 0px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`)),Ft=_.span(a||(a=l`
    min-width: 100px;
    width: 100px;
    font-size: var(--font-size-small);
    letter-spacing: 0;
    color: var(--grey);
    white-space: nowrap;
`)),Ut=_.div(o||(o=l`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 24px;
    gap: 8px;
`)),_t=_.span(h||(h=l`
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
`),(({delay:t})=>t||0));function jt(){return j(Ut,{children:[Q(_t,{delay:"0s"}),Q(_t,{delay:"0.3s"}),Q(_t,{delay:"0.6s"})]})}const Qt=t=>{const e=new Date(t);e.setHours(e.getHours()+9);return`${e.getFullYear()}년 ${e.getMonth()+1}월 ${e.getDay()}일`},qt=void 0,Dt=void 0,It=void 0}}}))}();

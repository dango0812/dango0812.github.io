var gt=Object.freeze,Mt=Object.defineProperty;var bt=e=>{throw TypeError(e)};var Z=(e,t,s)=>t.has(e)||bt("Cannot "+s);var i=(e,t,s)=>(Z(e,t,"read from private field"),s?s.call(e):t.get(e)),f=(e,t,s)=>t.has(e)?bt("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),l=(e,t,s,r)=>(Z(e,t,"write to private field"),r?r.call(e,s):t.set(e,s),s),d=(e,t,s)=>(Z(e,t,"access private method"),s);var O=(e,t)=>gt(Mt(e,"raw",{value:gt(t||e.slice())}));import{S as Bt,d as mt,e as I,s as et,f as Y,g as jt,i as st,h as yt,t as At,k as zt,l as $t,o as vt,q as Pt,b as C,v as Ht,n as F,j as V,a as w}from"./index-BWiDqyCB.js";import{C as Wt,R as Kt}from"./FlexBox-CvTOKRLe.js";var y,a,N,m,D,M,T,E,q,B,j,U,P,_,A,o,K,it,rt,nt,at,ot,ht,ct,kt,St,Nt=(St=class extends Bt{constructor(t,s){super();f(this,o);f(this,y);f(this,a);f(this,N);f(this,m);f(this,D);f(this,M);f(this,T);f(this,E);f(this,q);f(this,B);f(this,j);f(this,U);f(this,P);f(this,_);f(this,A,new Set);this.options=s,l(this,y,t),l(this,E,null),l(this,T,mt()),this.options.experimental_prefetchInRender||i(this,T).reject(new Error("experimental_prefetchInRender feature flag is not enabled")),this.bindMethods(),this.setOptions(s)}bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(i(this,a).addObserver(this),Rt(i(this,a),this.options)?d(this,o,K).call(this):this.updateResult(),d(this,o,at).call(this))}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return lt(i(this,a),this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return lt(i(this,a),this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,d(this,o,ot).call(this),d(this,o,ht).call(this),i(this,a).removeObserver(this)}setOptions(t,s){const r=this.options,u=i(this,a);if(this.options=i(this,y).defaultQueryOptions(t),this.options.enabled!==void 0&&typeof this.options.enabled!="boolean"&&typeof this.options.enabled!="function"&&typeof I(this.options.enabled,i(this,a))!="boolean")throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");d(this,o,ct).call(this),i(this,a).setOptions(this.options),r._defaulted&&!et(this.options,r)&&i(this,y).getQueryCache().notify({type:"observerOptionsUpdated",query:i(this,a),observer:this});const h=this.hasListeners();h&&xt(i(this,a),u,this.options,r)&&d(this,o,K).call(this),this.updateResult(s),h&&(i(this,a)!==u||I(this.options.enabled,i(this,a))!==I(r.enabled,i(this,a))||Y(this.options.staleTime,i(this,a))!==Y(r.staleTime,i(this,a)))&&d(this,o,it).call(this);const n=d(this,o,rt).call(this);h&&(i(this,a)!==u||I(this.options.enabled,i(this,a))!==I(r.enabled,i(this,a))||n!==i(this,_))&&d(this,o,nt).call(this,n)}getOptimisticResult(t){const s=i(this,y).getQueryCache().build(i(this,y),t),r=this.createResult(s,t);return Gt(this,r)&&(l(this,m,r),l(this,M,this.options),l(this,D,i(this,a).state)),r}getCurrentResult(){return i(this,m)}trackResult(t,s){const r={};return Object.keys(t).forEach(u=>{Object.defineProperty(r,u,{configurable:!1,enumerable:!0,get:()=>(this.trackProp(u),s==null||s(u),t[u])})}),r}trackProp(t){i(this,A).add(t)}getCurrentQuery(){return i(this,a)}refetch({...t}={}){return this.fetch({...t})}fetchOptimistic(t){const s=i(this,y).defaultQueryOptions(t),r=i(this,y).getQueryCache().build(i(this,y),s);return r.fetch().then(()=>this.createResult(r,s))}fetch(t){var s;return d(this,o,K).call(this,{...t,cancelRefetch:(s=t.cancelRefetch)!=null?s:!0}).then(()=>(this.updateResult(),i(this,m)))}createResult(t,s){var pt;const r=i(this,a),u=this.options,h=i(this,m),n=i(this,D),v=i(this,M),x=t!==r?t.state:i(this,N),{state:Q}=t;let c={...Q},z=!1,g;if(s._optimisticResults){const b=this.hasListeners(),k=!b&&Rt(t,s),L=b&&xt(t,r,s,u);(k||L)&&(c={...c,...$t(Q.data,t.options)}),s._optimisticResults==="isRestoring"&&(c.fetchStatus="idle")}let{error:$,errorUpdatedAt:H,status:R}=c;if(s.select&&c.data!==void 0)if(h&&c.data===(n==null?void 0:n.data)&&s.select===i(this,q))g=i(this,B);else try{l(this,q,s.select),g=s.select(c.data),g=vt(h==null?void 0:h.data,g,s),l(this,B,g),l(this,E,null)}catch(b){l(this,E,b)}else g=c.data;if(s.placeholderData!==void 0&&g===void 0&&R==="pending"){let b;if(h!=null&&h.isPlaceholderData&&s.placeholderData===(v==null?void 0:v.placeholderData))b=h.data;else if(b=typeof s.placeholderData=="function"?s.placeholderData((pt=i(this,j))==null?void 0:pt.state.data,i(this,j)):s.placeholderData,s.select&&b!==void 0)try{b=s.select(b),l(this,E,null)}catch(k){l(this,E,k)}b!==void 0&&(R="success",g=vt(h==null?void 0:h.data,b,s),z=!0)}i(this,E)&&($=i(this,E),g=i(this,B),H=Date.now(),R="error");const W=c.fetchStatus==="fetching",J=R==="pending",X=R==="error",dt=J&&W,ft=g!==void 0,S={status:R,fetchStatus:c.fetchStatus,isPending:J,isSuccess:R==="success",isError:X,isInitialLoading:dt,isLoading:dt,data:g,dataUpdatedAt:c.dataUpdatedAt,error:$,errorUpdatedAt:H,failureCount:c.fetchFailureCount,failureReason:c.fetchFailureReason,errorUpdateCount:c.errorUpdateCount,isFetched:c.dataUpdateCount>0||c.errorUpdateCount>0,isFetchedAfterMount:c.dataUpdateCount>x.dataUpdateCount||c.errorUpdateCount>x.errorUpdateCount,isFetching:W,isRefetching:W&&!J,isLoadingError:X&&!ft,isPaused:c.fetchStatus==="paused",isPlaceholderData:z,isRefetchError:X&&ft,isStale:ut(t,s),refetch:this.refetch,promise:i(this,T)};if(this.options.experimental_prefetchInRender){const b=G=>{S.status==="error"?G.reject(S.error):S.data!==void 0&&G.resolve(S.data)},k=()=>{const G=l(this,T,S.promise=mt());b(G)},L=i(this,T);switch(L.status){case"pending":t.queryHash===r.queryHash&&b(L);break;case"fulfilled":(S.status==="error"||S.data!==L.value)&&k();break;case"rejected":(S.status!=="error"||S.error!==L.reason)&&k();break}}return S}updateResult(t){const s=i(this,m),r=this.createResult(i(this,a),this.options);if(l(this,D,i(this,a).state),l(this,M,this.options),i(this,D).data!==void 0&&l(this,j,i(this,a)),et(r,s))return;l(this,m,r);const u={},h=()=>{if(!s)return!0;const{notifyOnChangeProps:n}=this.options,v=typeof n=="function"?n():n;if(v==="all"||!v&&!i(this,A).size)return!0;const p=new Set(v!=null?v:i(this,A));return this.options.throwOnError&&p.add("error"),Object.keys(i(this,m)).some(x=>{const Q=x;return i(this,m)[Q]!==s[Q]&&p.has(Q)})};(t==null?void 0:t.listeners)!==!1&&h()&&(u.listeners=!0),d(this,o,kt).call(this,{...u,...t})}onQueryUpdate(){this.updateResult(),this.hasListeners()&&d(this,o,at).call(this)}},y=new WeakMap,a=new WeakMap,N=new WeakMap,m=new WeakMap,D=new WeakMap,M=new WeakMap,T=new WeakMap,E=new WeakMap,q=new WeakMap,B=new WeakMap,j=new WeakMap,U=new WeakMap,P=new WeakMap,_=new WeakMap,A=new WeakMap,o=new WeakSet,K=function(t){d(this,o,ct).call(this);let s=i(this,a).fetch(this.options,t);return t!=null&&t.throwOnError||(s=s.catch(jt)),s},it=function(){d(this,o,ot).call(this);const t=Y(this.options.staleTime,i(this,a));if(st||i(this,m).isStale||!yt(t))return;const r=At(i(this,m).dataUpdatedAt,t)+1;l(this,U,setTimeout(()=>{i(this,m).isStale||this.updateResult()},r))},rt=function(){var t;return(t=typeof this.options.refetchInterval=="function"?this.options.refetchInterval(i(this,a)):this.options.refetchInterval)!=null?t:!1},nt=function(t){d(this,o,ht).call(this),l(this,_,t),!(st||I(this.options.enabled,i(this,a))===!1||!yt(i(this,_))||i(this,_)===0)&&l(this,P,setInterval(()=>{(this.options.refetchIntervalInBackground||zt.isFocused())&&d(this,o,K).call(this)},i(this,_)))},at=function(){d(this,o,it).call(this),d(this,o,nt).call(this,d(this,o,rt).call(this))},ot=function(){i(this,U)&&(clearTimeout(i(this,U)),l(this,U,void 0))},ht=function(){i(this,P)&&(clearInterval(i(this,P)),l(this,P,void 0))},ct=function(){const t=i(this,y).getQueryCache().build(i(this,y),this.options);if(t===i(this,a))return;const s=i(this,a);l(this,a,t),l(this,N,t.state),this.hasListeners()&&(s==null||s.removeObserver(this),t.addObserver(this))},kt=function(t){Pt.batch(()=>{t.listeners&&this.listeners.forEach(s=>{s(i(this,m))}),i(this,y).getQueryCache().notify({query:i(this,a),type:"observerResultsUpdated"})})},St);function qt(e,t){return I(t.enabled,e)!==!1&&e.state.data===void 0&&!(e.state.status==="error"&&t.retryOnMount===!1)}function Rt(e,t){return qt(e,t)||e.state.data!==void 0&&lt(e,t,t.refetchOnMount)}function lt(e,t,s){if(I(t.enabled,e)!==!1){const r=typeof s=="function"?s(e):s;return r==="always"||r!==!1&&ut(e,t)}return!1}function xt(e,t,s,r){return(e!==t||I(r.enabled,e)===!1)&&(!s.suspense||e.state.status!=="error")&&ut(e,s)}function ut(e,t){return I(t.enabled,e)!==!1&&e.isStaleByTime(Y(t.staleTime,e))}function Gt(e,t){return!et(e.getCurrentResult(),t)}var Lt=C.createContext(!1),Yt=()=>C.useContext(Lt);Lt.Provider;function Vt(){let e=!1;return{clearReset:()=>{e=!1},reset:()=>{e=!0},isReset:()=>e}}var Jt=C.createContext(Vt()),Xt=()=>C.useContext(Jt);function Zt(e,t){return typeof e=="function"?e(...t):!!e}function wt(){}var te=(e,t)=>{(e.suspense||e.throwOnError||e.experimental_prefetchInRender)&&(t.isReset()||(e.retryOnMount=!1))},ee=e=>{C.useEffect(()=>{e.clearReset()},[e])},se=({result:e,errorResetBoundary:t,throwOnError:s,query:r,suspense:u})=>e.isError&&!t.isReset()&&!e.isFetching&&r&&(u&&e.data===void 0||Zt(s,[e.error,r])),ie=e=>{const t=e.staleTime;e.suspense&&(e.staleTime=typeof t=="function"?(...s)=>Math.max(t(...s),1e3):Math.max(t!=null?t:1e3,1e3),typeof e.gcTime=="number"&&(e.gcTime=Math.max(e.gcTime,1e3)))},re=(e,t)=>e.isLoading&&e.isFetching&&!t,ne=(e,t)=>(e==null?void 0:e.suspense)&&t.isPending,Ct=(e,t,s)=>t.fetchOptimistic(e).catch(()=>{s.clearReset()});function ae(e,t,s){var c,z,g,$,H;const r=Ht(),u=Yt(),h=Xt(),n=r.defaultQueryOptions(e);(z=(c=r.getDefaultOptions().queries)==null?void 0:c._experimental_beforeQuery)==null||z.call(c,n),n._optimisticResults=u?"isRestoring":"optimistic",ie(n),te(n,h),ee(h);const v=!r.getQueryCache().get(n.queryHash),[p]=C.useState(()=>new t(r,n)),x=p.getOptimisticResult(n),Q=!u&&e.subscribed!==!1;if(C.useSyncExternalStore(C.useCallback(R=>{const W=Q?p.subscribe(Pt.batchCalls(R)):wt;return p.updateResult(),W},[p,Q]),()=>p.getCurrentResult(),()=>p.getCurrentResult()),C.useEffect(()=>{p.setOptions(n,{listeners:!1})},[n,p]),ne(n,x))throw Ct(n,p,h);if(se({result:x,errorResetBoundary:h,throwOnError:n.throwOnError,query:r.getQueryCache().get(n.queryHash),suspense:n.suspense}))throw x.error;if(($=(g=r.getDefaultOptions().queries)==null?void 0:g._experimental_afterQuery)==null||$.call(g,n,x),n.experimental_prefetchInRender&&!st&&re(x,u)){const R=v?Ct(n,p,h):(H=r.getQueryCache().get(n.queryHash))==null?void 0:H.promise;R==null||R.catch(wt).finally(()=>{p.updateResult()})}return n.notifyOnChangeProps?x:p.trackResult(x)}function oe(e,t){return ae(e,Nt)}var Ot;const he=F.section(Ot||(Ot=O(["\n    width: 100%;\n    height: 100%;\n    padding: 100px 0px;\n"])));var Et;const ce=F.ul(Et||(Et=O(["\n    width: 100%;\n    list-style-type: none;\n"])));var It;const le=F.a(It||(It=O(["\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n"])));var Qt;const ue=F.li(Qt||(Qt=O(["\n    display: flex;\n    align-items: center;\n    padding: 0.625rem 0px; // 12px 0px\n    border-bottom: 1px solid var(--white400);\n    transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);\n    :hover {\n        transform: scale(1.01);\n    }\n"])));var Ft;const de=F.div(Ft||(Ft=O(["\n    width: 40px;\n    height: 40px;\n    min-width: 40px;\n    min-height: 40px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: var(--font-size-small);\n    border-radius: var(--border-radius-md);\n    background-color: var(--white200);\n"])));var Tt;const fe=F.p(Tt||(Tt=O(["\n    width: 100%;\n    padding: 0px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n"])));var _t;const pe=F.span(_t||(_t=O(["\n    min-width: 100px;\n    width: 100px;\n    font-size: var(--font-size-small);\n    letter-spacing: 0;\n    color: var(--grey);\n    white-space: nowrap;\n"])));var Dt;const ge=F.div(Dt||(Dt=O(["\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    height: 24px;\n    gap: 8px;\n"])));var Ut;const tt=F.span(Ut||(Ut=O(["\n    width: 10px;\n    height: 10px;\n    border-radius: var(--border-radius-full);\n    background-color: inherit;\n    animation: bounce 1.5s linear infinite;\n    animation-delay: ",";\n\n    @keyframes bounce {\n        0% {\n            margin-bottom: 0;\n        }\n        25% {\n            margin-bottom: 12px;\n            background-color: var(--pink);\n        }\n        50% {\n            margin-bottom: 0\n        }\n        100% {\n            margin-bottom: 0\n        }\n    }\n"])),({delay:e})=>e||0);function be(){return V(ge,{children:[w(tt,{delay:"0s"}),w(tt,{delay:"0.3s"}),w(tt,{delay:"0.6s"})]})}const me=e=>{const t=new Date(e);t.setHours(t.getHours()+9);const s=t.getFullYear(),r=t.getMonth()+1,u=t.getDay();return"".concat(s,"년 ").concat(r,"월 ").concat(u,"일")},ye="https://dev.to",ve="dango0812",Re="fDwtyzQ7BU8gb9MEjzt3CB4a";function Oe(){const{data:e,isLoading:t,isFetching:s}=oe({initialData:[],queryKey:["blog_posts"],queryFn:()=>r(),refetchOnWindowFocus:!1}),r=C.useCallback(async()=>await(await fetch("".concat(ye,"/api/articles?username=").concat(ve,"&api_key=").concat(Re))).json(),[]),u=t&&s,h=C.useCallback(n=>n<10?"0".concat(n):n,[]);return V(he,{children:[w("h1",{children:"블로그"}),u?V(Wt,{children:[w(be,{}),w("p",{children:"게시글을 불러오고 있어요."})]}):w(ce,{children:e.map((n,v)=>w(ue,{children:w(le,{href:n.url,target:"_blank",rel:"noreferrer noopener",children:V(Kt,{alignItems:"center",gap:20,children:[w(de,{children:h(v+1)}),w(fe,{children:n.title}),w(pe,{children:me(n.created_at)})]})})},n.id))})]})}export{Oe as default};
//# sourceMappingURL=page-B6Rze_uy.js.map

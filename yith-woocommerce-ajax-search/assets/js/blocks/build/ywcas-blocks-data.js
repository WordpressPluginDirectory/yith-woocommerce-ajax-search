(()=>{"use strict";var e={n:t=>{var s=t&&t.__esModule?()=>t.default:()=>t;return e.d(s,{a:s}),s},d:(t,s)=>{for(var r in s)e.o(s,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:s[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{YWCAS_RESULTS_VIEW_STORE_KEY:()=>R});var s={};e.r(s),e.d(s,{getCategories:()=>c,getLastQuery:()=>u,getResults:()=>l,getSearchedResults:()=>o});var r={};e.r(r),e.d(r,{CHANGE_QUERYSTRING:()=>y,fetchFromAPI:()=>S,setCategories:()=>g,setSearchedResults:()=>d});const a=window.wp.data,o=e=>e.results,l=e=>e.results,c=e=>e.categories,u=e=>e.lastQuery,n="SET_SEARCHED_RESULTS",i="SET_CATEGORIES",y="CHANGE_QUERYSTRING",d=e=>({type:n,results:e}),g=e=>({type:i,categories:e}),S=e=>({type:"FETCH_FROM_API",path:e}),_={lastQuery:"",results:{totalResults:0,query:"",results:[],relatedContent:{}},categories:[]},h=window.wp.apiFetch;var p=e.n(h);const w=window.ywcas.ywcasSettings,R="yith/store/ywcas-search-view",C={reducer:(e=_,t)=>{let s=e;switch(t.type){case n:s={...e,lastQuery:t.results.query,results:t.results};break;case i:s={...e,categories:t.categories}}return s},selectors:s,actions:r,controls:{FETCH_FROM_API:e=>p()({cache:"no-cache",path:e.path})},resolvers:{*getSearchedResults(e,t=0,s=!1,r=5,a=0,o=!1){if(!o&&(void 0===e||""===e||!w.YWCAS_HAS_AUTOCOMPLETE||e.length<w.YWCAS_MIN_CHARS))return d({totalResults:0,query:"",results:[],relatedContent:{}});let l=`/ywcas/v1/search?query=${e}&lang=${w.YWCAS_LANG}&category=${t}&showCategories=${s}&maxResults=${r}`;l+=o?"&test=1":"",a>0&&(l+="&page="+a);const c=yield S(l);return d(c)},*getCategories(e){const t="/ywcas/v1/categories?type="+e+"&lang="+w.YWCAS_LANG,s=yield S(t);return g(s)}},__experimentalUseThunks:!0},E=(0,a.createReduxStore)(R,C);(0,a.register)(E),(this.ywcas=this.ywcas||{}).ywcasBlocksData=t})();
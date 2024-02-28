"use strict";(self.webpackChunkwebpackYWCASBlocksJsonp=self.webpackChunkwebpackYWCASBlocksJsonp||[]).push([[975],{196:(e,t,o)=>{o.d(t,{EV:()=>m,AT:()=>w,Ut:()=>i});var r=o(280),a=o(287),s=o(304),l=o(960);const n=({submitStyle:e,buttonLabel:t,iconType:o,onClick:n,wrapperStyle:c})=>{switch(e){case"text":return(0,r.createElement)(l.Button,{className:"ywcas-submit-button",color:"secondary",size:"sm",onClick:n},t);case"icon":return"icon-right"===o&&(0,r.createElement)(l.Box,{className:"ywcas-submit-wrapper",sx:c},(0,r.createElement)(a.Icon,{className:"ywcas-submit-icon",onClick:n,icon:(0,s.wF)()}));case"iconText":return(0,r.createElement)(l.Button,{className:"ywcas-submit-button",color:"secondary",size:"sm",onClick:n},(0,r.createElement)(a.Icon,{className:"ywcas-submit-icon",icon:(0,s.wF)()})," ",t)}};var c=o(692);const i=({queryString:e,placeholder:t,placeholderTextColor:o,inputTextColor:i,inputBgColor:u,inputBgFocusColor:m,inputBorderColor:p,inputBorderFocusColor:d,inputBorderSize:y,inputBorderRadius:b,submitContentColor:f,submitContentHoverColor:g,submitBgColor:h,submitBgHoverColor:w,submitBorderColor:C,submitBorderHoverColor:E,submitStyle:_,size:k,setSearchQuery:S,iconType:x,buttonLabel:B,buttonBorderRadius:v,onFocus:N=null,onBlur:L=null,onCloseMobile:F=null,isSmallDevice:R=!1})=>{const T=()=>({borderRadius:"50%",backgroundColor:`${h}!important`,border:"1px solid",borderColor:`${C||"#FFF"} !important`,svg:{height:""!==h&&"#fff"!==h.toLowerCase()&&"#ffffff"!==h.toLowerCase()?"20px":"24px"},"&:hover, & > sgv:hover":{backgroundColor:`${w}!important`,borderColor:`${E||"#FFF"} !important`}}),$=()=>{if(""!==e){const t=c.YWCAS_SITE_URL+"?ywcas=1&post_type=product&lang="+c.YWCAS_LANG+"&s="+e;window.location.href=t}};return(0,r.createElement)(r.Fragment,null,(0,r.createElement)(l.Box,{className:"ywcas-block-components-search-field",sx:{"& .ywcas-input-field-wrapper":{flex:1,borderRadius:`${b.topLeft} ${b.topRight} ${b.bottomRight} ${b.bottomLeft}`,borderColor:`${p||"#7C7C7C"}!important`,borderWidth:`${y.topLeft} ${y.topRight}  ${y.bottomLeft} ${y.bottomRight}`,backgroundColor:`${u||"#FFF"}!important`,borderStyle:"solid",overflow:"hidden","&:focus-within":{backgroundColor:`${m||"#FFF"}!important`,borderColor:`${d||"#5B5B5B"}!important`},"& >div":{width:"100%",padding:0,input:{flex:1}}},"& .ywcas-input-field input":{color:`${i||"#000"} !important`,fontSize:"1rem!important"},"& .ywcas-input-field input::placeholder":{color:`${o||"#000"}`,opacity:1},"& .ywcas-submit-button":{color:`${f||"#fff"} !important`,backgroundColor:`${h||"#a7ab06"} !important`,borderColor:`${C||"#FFF"} !important`,borderRadius:`${v.topLeft} ${v.topRight} ${v.bottomRight} ${v.bottomLeft}`},"& .ywcas-submit-button:hover":{color:`${g||"#fff"} !important`,backgroundColor:`${w||"#a7ab06"} !important`,borderColor:`${E||"#FFF"} !important`},"& .ywcas-submit-icon":{color:`${f||"#000"} !important`},"&:hover .ywcas-submit-icon, & .ywcas-submit-icon:hover":{color:`${g||"#000"} !important`},"& .lapilliUI-Input__backdrop":{display:"none"}}},R&&(0,r.createElement)("div",{className:"mobile-search-close",onClick:F},(0,r.createElement)(a.Icon,{icon:(0,s.O)()})),(0,r.createElement)(l.Stack,{direction:"row",spacing:0},(0,r.createElement)(l.Stack,{className:"ywcas-input-field-wrapper"},(0,r.createElement)(l.Input,{className:"ywcas-input-field",placeholder:t,autoComplete:"off",size:k,value:e,onChange:S,onFocus:N,onBlur:L,onKeyDown:e=>{"Enter"===e.key&&$()},startAdornment:"icon"===_&&"icon-left"===x?(0,r.createElement)(l.Box,{className:"ywcas-submit-wrapper",sx:T()},(0,r.createElement)(a.Icon,{className:"ywcas-submit-icon",icon:(0,s.wF)()})):null,endAdornment:(0,r.createElement)(n,{submitStyle:_,buttonLabel:B,submitBgColor:h,iconType:x,onClick:$,wrapperStyle:T()})})))))};var u=o(115);const m=({children:e,...t})=>{const o=(0,u.Yv)("(max-width: 600px)");return(0,r.createElement)(r.Fragment,null,!o&&(0,r.createElement)(l.Popover,{...t},(0,r.createElement)(l.Box,{className:"popover-content"},e)),o&&(0,r.createElement)(l.Box,{className:"mobile-search-content"},e))};var p=o(48),d=o(496);const y=({className:e,label:t,backgroundColor:o,color:a,top:s})=>(0,r.createElement)(l.Box,{className:`ywcas-badge ${e}`,sx:{top:`${s}px`,backgroundColor:o,color:a}},t),b=({imageSize:e,marginLeft:t,item:o,showSaleBadge:a,showOutOfStockBadge:s,showFeaturedBadge:n,hideFeaturedIfOnSale:i})=>{const u=Boolean(parseInt(o.instock)),m=a&&Boolean(parseInt(o.onsale)),d=(!i||!m)&&n&&Boolean(parseInt(o.featured)),b=s&&!u,{saleBadgeLabel:f,saleFeaturedLabel:g,saleOutOfStockLabel:h,saleBadgeColors:w,featuredBadgeColors:C,outOfStockBadgeColors:E}=c.ywcasDefaultSettings,_=m?30:5,k=d?_+25:m?30:5;return(0,r.createElement)(l.Stack,{className:"search-result-item__thumbnail",sx:{width:e,marginLeft:t}},m&&(0,r.createElement)(y,{className:"ywcas-onsale-badge",top:5,label:(0,p.cp)(f),backgroundColor:w.bgcolor,color:w.color}),d&&(0,r.createElement)(y,{className:"ywcas-featured-badge",top:_,label:g,backgroundColor:C.bgcolor,color:C.color}),b&&(0,r.createElement)(y,{className:"ywcas-outofstock-badge",top:k,label:h,backgroundColor:E.bgcolor,color:E.color}),(0,r.createElement)("img",{src:"string"==typeof o.thumbnail.small?o.thumbnail.small:c.ywcas_wc_data.placeholderImageSrc,alt:o.name,width:e}))},f=function(e){const{item:t,searchQuery:o,onClick:s,showName:n,showImage:i,showPrice:m,showCategories:y,showStock:f,showSKU:g,showSummary:h,showAddToCart:w,layout:C,imageSize:E,imagePosition:_,summaryMaxWord:k,productNameColor:S,priceLabel:x,categoryResults:B,results:v}=e,N=(0,u.Yv)("(max-width: 600px)"),L="grid"===C?"column":"row",F="list"===C&&"right"===_?"auto":0,[R,T]=(0,d.useState)(!1),$=e=>{let t=B.find((t=>parseInt(t.term_id)===e.parent));return t&&0!==t.parent&&(t=$(t)),t},A=e=>{const t=e.name;return(0,r.createElement)("a",{href:e.url},(0,p.cp)(t))},I=e=>{e.stopPropagation(),e.target.classList.contains("search-result-add-to-cart")&&(s(e,t,!1),T(!0),jQuery.ajax({url:c.YWCAS_AJAX_URL.toString().replace("%%endpoint%%","add_to_cart"),data:{quantity:1,product_id:t.post_id,product_sku:t.sku},type:"POST",success:function(e){T(!1)}}))};return(0,r.createElement)(l.Box,{className:`search-result-item ${C}`},(0,r.createElement)(l.Stack,{align:"center",direction:L,spacing:2,className:"search-result-item__content","data-id":t.post_id,"data-name":t.name,onClick:e=>s(e,t)},i&&("grid"===C||"list"===C&&"right"!==_)&&(0,r.createElement)(b,{marginLeft:F,item:t,...e}),(0,r.createElement)((()=>{if(!i&&(0,u.t7)(t.thumbnail))return"";const e=parseInt(t.instock)>0?"in-stock":"out-of-stock";return(0,r.createElement)(l.Stack,{className:"search-result-item_name",sx:{flex:1,alignItems:"left"},onClick:e=>s(e,t,v.totalResults)},n&&(0,r.createElement)(l.Typography,{sx:{color:S,fontSize:"0.9em"},className:"search-result-item__name"},(0,p.cp)(t.name)),m&&(0,r.createElement)(l.Typography,{className:"search-result-item__price",sx:{fontSize:"0.9em",fontWeight:"600"}},x," ",(0,u.es)(t)),(0,r.createElement)(l.Box,{className:"search-result-item__inline_group",direction:"row",sx:{display:"block"}},g&&(0,r.createElement)(l.Typography,{className:"search-result-item__sku"},(0,r.createElement)("strong",null,c.YWCAS_SKU_LABEL)," ",t.sku),g&&f&&(0,r.createElement)("span",null,"-"),f&&(0,r.createElement)(l.Typography,{className:`search-result-item__stock stock ${e}`},parseInt(t.instock)?c.YWCAS_IN_STOCK_LABEL:c.YWCAS_OUT_OF_STOCK_LABEL)),y&&(0,r.createElement)(l.Box,{className:"search-result-item__category",sx:{fontSize:"0.7em"}},(e=>{if(B){const t=B.find((t=>parseInt(t.term_id)===e[0]));if(!t)return"";const o=0!==t.parent&&$(t);return o?(0,r.createElement)(l.Box,null,A(o)," ",(0,r.createElement)("span",null," > "),"  ",A(t)):A(t)}return""})(t.parent_category)),h&&"grid"===C&&(0,r.createElement)(l.Typography,{className:"search-result-item__summary",sx:{fontSize:"0.8em"}},(0,u.EV)(t.summary,k)))}),null),N&&h&&"grid"!==C&&(0,r.createElement)(l.Typography,{className:"search-result-item__summary",sx:{fontSize:"0.8em"}},(0,p.cp)((0,u.EV)(t.summary,k))),w&&(R?(0,r.createElement)(l.Spinner,{color:"default",size:"sm",thickness:3.6}):(0,r.createElement)("div",{className:"wp-block-button"},(0,r.createElement)((()=>{const e=parseInt(t.instock),o="wp-element-button wp-block-button__link wp-block-woocommerce-product-button search-result-add-to-cart";return parseInt(t.is_purchasable)&&e&&("simple"===t.product_type||"variation"===t.product_type)&&0<parseFloat(null==t?void 0:t.max_price)?(0,r.createElement)(a.Button,{className:o,onClick:I},c.YWCAS_ADD_TO_CART_LABEL):e&&"variable"===t.product_type&&0<parseFloat(null==t?void 0:t.max_price)?(0,r.createElement)(a.Button,{size:"sm",className:o,onClick:e=>s(e,t)},c.YWCAS_SELECT_OPTIONS):(0,r.createElement)(a.Button,{size:"sm",className:o,onClick:e=>s(e,t)},c.YWCAS_READ_MORE)}),null))),i&&"list"===C&&"right"===_&&(0,r.createElement)(b,{marginLeft:F,item:t,...e})),!N&&h&&"grid"!==C&&(0,r.createElement)(l.Typography,{className:"search-result-item__summary",sx:{fontSize:"0.8em"}},(0,p.cp)((0,u.EV)(t.summary,k))))};var g=o(632),h=o.n(g);const w=e=>{const{searchQuery:t,layout:o,results:a,categoryList:s,noResults:n,showViewAll:i,showViewAllText:u,maxResultsToShow:m}=e,p=(e,o,r=!0)=>{e.stopPropagation();const s="/ywcas/v1/register?itemID="+o.post_id+"&queryString="+t+"&totalResults="+a.totalResults+"&lang="+c.YWCAS_LANG;h()({path:s}).then((()=>{r&&d(o)})).catch((e=>{console.log(e)}))},d=e=>{e.url&&(window.location.href=e.url)},y=u.replace("{total}",a.totalResults),b=a.results;return(0,r.createElement)(r.Fragment,null,b&&b.length&&(0,r.createElement)(l.Grid,{className:`ywcas-search-results-grid ${o}`,columns:1},b.map(((t,o)=>(0,r.createElement)(f,{key:o,item:t,onClick:p,results:a,categoryResults:s,...e})))),!b&&(0,r.createElement)(l.Typography,null,n),b&&i&&m<a.totalResults&&(0,r.createElement)("div",{className:"ywcas-total-results"}," > ",(0,r.createElement)("a",{className:"total-results-link",href:"#",onClick:()=>{const e=!1!==a.fuzzyToken?a.fuzzyToken:t,o=c.YWCAS_SITE_URL+"?ywcas=1&post_type=product&lang="+c.YWCAS_LANG+"&s="+e;window.location.href=o}},y)))};o(448)},115:(e,t,o)=>{o.d(t,{EV:()=>i,Yv:()=>u,es:()=>c,t7:()=>s}),o(48);var r=o(692),a=o(280);const s=e=>void 0===e||("object"==typeof e?0===Object.keys(e).length:e.hasOwnProperty(length)?0===e.length:"undefined"),l=e=>accounting.formatMoney(e,r.ywcas_wc_data.currency),n=(e,t=0)=>{const o=l(e);return parseFloat(t)&&t!==e?`${l(t)} - ${o}`:o},c=e=>"variable"===e.product_type?n(e.max_price,e.min_price):parseInt(e.onsale)?n(e.min_price):n(e.max_price),i=(e,t)=>e.split(" ").slice(0,t).join(" "),u=e=>{const t=(0,a.useMemo)((()=>window.matchMedia(e)),[e]),[o,r]=(0,a.useState)(t.matches);return(0,a.useEffect)((()=>{const e=()=>r(t.matches);return t.addEventListener("change",e),()=>t.removeEventListener("change",e)}),[t]),o}},484:(e,t,o)=>{o.r(t),o.d(t,{default:()=>p});var r=o(992),a=o(280),s=o(496),l=o(960),n=o(196),c=o(380),i=o(115);var u=o(396);const m={placeholder:{type:"string",default:(0,u.__)("Search products...","yith-woocommerce-ajax-search")},placeholderTextColor:{type:"string",default:"#000"},iconType:{type:"string",default:"icon-right"},inputTextColor:{type:"string",default:"#000"},inputBgColor:{type:"string",default:"#fff"},inputBgFocusColor:{type:"string",default:"#fff"},inputBorderColor:{type:"string",default:"#7C7C7C"},inputBorderFocusColor:{type:"string",default:"#5B5B5B"},inputBorderSize:{type:"object",default:{topLeft:"1px",topRight:"1px",bottomLeft:"1px",bottomRight:"1px"}},inputBorderRadius:{type:"object",default:{topLeft:"20px",topRight:"20px",bottomLeft:"20px",bottomRight:"20px"}},submitContentColor:{type:"string",default:"#000"},submitContentHoverColor:{type:"string",default:"#000"},submitBorderColor:{type:"string",default:"#fff"},submitBorderHoverColor:{type:"string",default:"#fff"},submitBgColor:{type:"string",default:"#fff"},submitBgHoverColor:{type:"string",default:"#fff"},submitStyle:{type:"string",default:"icon"},className:{type:"string",default:"ywcas-input-block"},buttonLabel:{type:"string",default:(0,u.__)("Search","yith-woocommerce-ajax-search-premium")},buttonBorderRadius:{type:"object",default:{topLeft:"10px",topRight:"10px",bottomLeft:"10px",bottomRight:"10px"}},lock:{type:"object",default:{remove:!1,move:!1}}},p=(0,r.R)(m)((e=>{const{placeholder:t=""}=e,{query:o,setQuery:r,inputFocused:u,setInputFocused:m,size:p}=(0,c.gD)(),d=(0,s.useRef)(null),y=(0,i.Yv)("(max-width: 600px)"),[b,f]=(0,s.useState)(!1),[g,h]=(0,s.useState)(o);(0,s.useEffect)((()=>{h(o)}),[o]),(0,s.useEffect)((()=>{const e=setTimeout((()=>{r(g)}),500);return()=>clearTimeout(e)}),[g]),(0,s.useEffect)((()=>{u&&(y?!b&&w():C())}),[y,u]);const w=()=>{const e=document.querySelector("#wpadminbar"),t=document.querySelector("#ywtenv-banner");let o=document.querySelector(".ywcas-search-mobile");if(!o){o=document.createElement("div"),o.classList.add("ywcas-search-mobile"),(e||t)&&o.classList.add("with-wp-admin-toolbar");const r=u.closest(".wp-block-yith-search-block"),a=Array.prototype.indexOf.call(r.parentNode.childNodes,r);r.parentNode.classList.add("ywcas-block-mounted"),r.parentNode.dataset.ywcasTarget=a,o.append(r),document.body.append(o),document.body.classList.add("ywcas-disable-overflow"),document.documentElement.style.overflow="hidden",f(!0)}},C=()=>{const e=document.querySelector(".ywcas-search-mobile");if(e){const t=e.querySelector(".wp-block-yith-search-block"),o=document.querySelector(".ywcas-block-mounted"),r=o.dataset.ywcasTarget;r<o.childNodes.length-1?o.insertBefore(t,o.childNodes[r]):o.append(t),e.remove(),o.classList.remove("ywcas-block-mounted"),document.body.classList.remove("ywcas-disable-overflow"),document.documentElement.style.overflow=""}f(!1)};return(0,a.createElement)(l.Box,{ref:d},(0,a.createElement)(n.Ut,{placeholder:t,setSearchQuery:(e,t)=>{e?(e.stopPropagation(),u||m(null==d?void 0:d.current),g!==e.target.value&&h(e.target.value)):h(t)},queryString:g,onFocus:()=>{m(null==d?void 0:d.current)},onCloseMobile:()=>{C(),h(""),m(null);const e=new CustomEvent("ywcas-close-mobile",{detail:{},bubbles:!0,cancelable:!0,composed:!1});document.dispatchEvent(e)},size:p,isSmallDevice:y,...e}))}))},992:(e,t,o)=>{o.d(t,{R:()=>s});var r=o(280),a=o(628);const s=e=>t=>o=>{const s=(0,a.m)(e,o);return(0,r.createElement)(t,{...o,...s})}}}]);
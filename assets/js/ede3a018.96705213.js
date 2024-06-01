"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[504],{2080:(e,a,n)=>{n.r(a),n.d(a,{default:()=>c});n(758);var l=n(4046),t=n(8999),o=n(4878),s=n(6070);function c(){const e=(0,l.Ay)();return(0,s.jsxs)(t.A,{children:[(0,s.jsx)("h2",{children:"Global data"}),(0,s.jsx)(o.A,{src:e,collapseDepth:3})]})}},4878:(e,a,n)=>{n.d(a,{A:()=>F});var l=n(758);const t=e=>"boolean"==typeof e||e instanceof Boolean,o=e=>"number"==typeof e||e instanceof Number,s=e=>"bigint"==typeof e||e instanceof BigInt,c=e=>!!e&&e instanceof Date,r=e=>"string"==typeof e||e instanceof String,u=e=>Array.isArray(e),i=e=>e instanceof Object&&null!==e;let d=1;const p=()=>d++;function m(e){let{field:a,value:n,data:t,lastElement:o,openBracket:s,closeBracket:c,level:r,style:u,shouldExpandNode:i,clickToExpandNode:d}=e;const m=(0,l.useRef)(!1),[b,_,v]=function(e){const[a,n]=(0,l.useState)(e());return[a,()=>n((e=>!e)),n]}((()=>i(r,n,a)));(0,l.useEffect)((()=>{m.current?v(i(r,n,a)):m.current=!0}),[i]);const E=b?u.collapseIcon:u.expandIcon,f=b?"collapse JSON":"expand JSON",h=function(){const e=(0,l.useRef)();return void 0===e.current&&(e.current=`:jsnvw:${p()}:`),e.current}(),N=r+1,g=t.length-1,y=e=>{" "===e.key&&(e.preventDefault(),_())};return(0,l.createElement)("div",{className:u.basicChildStyle,role:"list"},(0,l.createElement)("span",{className:E,onClick:_,onKeyDown:y,role:"button",tabIndex:0,"aria-label":f,"aria-expanded":b,"aria-controls":b?h:void 0}),a&&(d?(0,l.createElement)("span",{className:u.clickableLabel,onClick:_,onKeyDown:y,role:"button",tabIndex:-1},a,":"):(0,l.createElement)("span",{className:u.label},a,":")),(0,l.createElement)("span",{className:u.punctuation},s),b?(0,l.createElement)("div",{id:h},t.map(((e,a)=>(0,l.createElement)(x,{key:e[0]||a,field:e[0],value:e[1],style:u,lastElement:a===g,level:N,shouldExpandNode:i,clickToExpandNode:d})))):(0,l.createElement)("span",{className:u.collapsedContent,onClick:_,onKeyDown:y,role:"button",tabIndex:-1,"aria-hidden":!0,"aria-label":f,"aria-expanded":b}),(0,l.createElement)("span",{className:u.punctuation},c),!o&&(0,l.createElement)("span",{className:u.punctuation},","))}function b(e){let{field:a,value:n,style:l,lastElement:t,shouldExpandNode:o,clickToExpandNode:s,level:c}=e;return m({field:a,value:n,lastElement:t||!1,level:c,openBracket:"{",closeBracket:"}",style:l,shouldExpandNode:o,clickToExpandNode:s,data:Object.keys(n).map((e=>[e,n[e]]))})}function _(e){let{field:a,value:n,style:l,lastElement:t,level:o,shouldExpandNode:s,clickToExpandNode:c}=e;return m({field:a,value:n,lastElement:t||!1,level:o,openBracket:"[",closeBracket:"]",style:l,shouldExpandNode:s,clickToExpandNode:c,data:n.map((e=>[void 0,e]))})}function v(e){let{field:a,value:n,style:u,lastElement:i}=e,d=n,p=u.otherValue;return null===n?(d="null",p=u.nullValue):void 0===n?(d="undefined",p=u.undefinedValue):r(n)?(d=u.noQuotesForStringValues?n:`"${n}"`,p=u.stringValue):t(n)?(d=n?"true":"false",p=u.booleanValue):o(n)?(d=n.toString(),p=u.numberValue):s(n)?(d=`${n.toString()}n`,p=u.numberValue):d=c(n)?n.toISOString():n.toString(),""===a&&(a='""'),(0,l.createElement)("div",{className:u.basicChildStyle,role:"listitem"},a&&(0,l.createElement)("span",{className:u.label},a,":"),(0,l.createElement)("span",{className:p},d),!i&&(0,l.createElement)("span",{className:u.punctuation},","))}function x(e){const a=e.value;return u(a)?(0,l.createElement)(_,Object.assign({},e)):i(a)&&!c(a)?(0,l.createElement)(b,Object.assign({},e)):(0,l.createElement)(v,Object.assign({},e))}var E="_2bkNM";const f={container:"_2IvMF _GzYRV",basicChildStyle:E,label:"_1MGIk",clickableLabel:"_2YKJg _1MGIk _1MFti",nullValue:"_2T6PJ",undefinedValue:"_1Gho6",stringValue:"_vGjyY",booleanValue:"_3zQKs",numberValue:"_1bQdo",otherValue:"_1xvuR",punctuation:"_3uHL6 _3eOF8",collapseIcon:"_oLqym _f10Tu _1MFti _1LId0",expandIcon:"_2AXVT _f10Tu _1MFti _1UmXx",collapsedContent:"_2KJWg _1pNG9 _1MFti",noQuotesForStringValues:!1},h=()=>!0,N=e=>{let{data:a,style:n=f,shouldExpandNode:t=h,clickToExpandNode:o=!1}=e;return(0,l.createElement)("div",{className:n.container},(0,l.createElement)(x,{value:a,style:n,lastElement:!0,level:0,shouldExpandNode:t,clickToExpandNode:o}))},g="containerParaiso_ENr_",y="basicElementParaiso_UlMI",k="labelParaiso_J947",V="nullValueParaiso_G5Rj",j="undefinedValueParaiso_EvqE",I="stringValueParaiso_oudc",S="booleanValueParaiso_mHKG",C="numberValueParaiso_ZxNV",P="otherValueParaiso_SYwK",A="punctuationParaiso_nvXo",T="expandIconParaiso_z7pc",D="collapseIconParaiso_vkJ4",G="collapseContentParaiso_qODR";var M=n(6070);const O={container:g,basicChildStyle:y,label:k,nullValue:V,undefinedValue:j,stringValue:I,booleanValue:S,numberValue:C,otherValue:P,punctuation:A,collapseIcon:D,expandIcon:T,collapsedContent:G};function F(e){let{src:a,collapseDepth:n}=e;return(0,M.jsx)(N,{data:a,shouldExpandNode:(e,a)=>Array.isArray(a)?a.length<5:void 0!==n&&e<n,style:O})}},8999:(e,a,n)=>{n.d(a,{A:()=>r});n(758);var l=n(106),t=n(1660);const o={container:"container_ydE0",nav:"nav_yrfV",navlink:"navlink_w0Qg",active:"active_EWeW"};var s=n(6070);function c(e){let{to:a,children:n}=e;return(0,s.jsx)(t.A,{className:o.navlink,isNavLink:!0,to:a,exact:!0,activeStyle:{backgroundColor:"#363739"},children:n})}function r(e){let{children:a}=e;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(l.A,{children:[(0,s.jsx)("html",{lang:"en"}),(0,s.jsx)("title",{children:"Docusaurus debug panel"}),(0,s.jsx)("meta",{name:"robots",content:"noindex"})]}),(0,s.jsxs)("div",{children:[(0,s.jsxs)("nav",{className:o.nav,children:[(0,s.jsx)(c,{to:"/__docusaurus/debug",children:"Config"}),(0,s.jsx)(c,{to:"/__docusaurus/debug/metadata",children:"Metadata"}),(0,s.jsx)(c,{to:"/__docusaurus/debug/registry",children:"Registry"}),(0,s.jsx)(c,{to:"/__docusaurus/debug/routes",children:"Routes"}),(0,s.jsx)(c,{to:"/__docusaurus/debug/content",children:"Content"}),(0,s.jsx)(c,{to:"/__docusaurus/debug/globalData",children:"Global data"})]}),(0,s.jsx)("main",{className:o.container,children:a})]})]})}}}]);
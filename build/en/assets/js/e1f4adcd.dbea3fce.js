"use strict";(self.webpackChunkhf_log=self.webpackChunkhf_log||[]).push([[9070],{3905:(e,n,t)=>{t.d(n,{Zo:()=>f,kt:()=>u});var l=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,l,a=function(e,n){if(null==e)return{};var t,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=l.createContext({}),s=function(e){var n=l.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},f=function(e){var n=s(e.components);return l.createElement(o.Provider,{value:n},e.children)},d="mdxType",k={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},m=l.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,f=p(e,["components","mdxType","originalType","parentName"]),d=s(t),m=a,u=d["".concat(o,".").concat(m)]||d[m]||k[m]||r;return t?l.createElement(u,i(i({ref:n},f),{},{components:t})):l.createElement(u,i({ref:n},f))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=m;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p[d]="string"==typeof e?e:a,i[1]=p;for(var s=2;s<r;s++)i[s]=t[s];return l.createElement.apply(null,i)}return l.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9495:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>k,frontMatter:()=>r,metadata:()=>p,toc:()=>s});var l=t(7462),a=(t(7294),t(3905));const r={sidebar_position:6},i="CSS \u5f39\u6027\u76d2\u5b50",p={unversionedId:"Web/CSS\u5f39\u6027\u76d2\u5b50",id:"Web/CSS\u5f39\u6027\u76d2\u5b50",title:"CSS \u5f39\u6027\u76d2\u5b50",description:"\u8def\u6761\u7f16\u7a0b",source:"@site/docs/Web/CSS\u5f39\u6027\u76d2\u5b50.md",sourceDirName:"Web",slug:"/Web/CSS\u5f39\u6027\u76d2\u5b50",permalink:"/en/docs/Web/CSS\u5f39\u6027\u76d2\u5b50",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Web/CSS\u5f39\u6027\u76d2\u5b50.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"\u54cd\u5e94\u5f0f\u7f51\u9875\u8bbe\u8ba1\u539f\u5219",permalink:"/en/docs/Web/\u54cd\u5e94\u5f0f\u7f51\u9875\u8bbe\u8ba1\u539f\u5219"},next:{title:"CSS \u7f51\u683c",permalink:"/en/docs/Web/CSS\u7f51\u683c"}},o={},s=[{value:"1. \u4f7f\u7528 display: flex \u5b9a\u4f4d\u76d2\u5b50",id:"1-\u4f7f\u7528-display-flex-\u5b9a\u4f4d\u76d2\u5b50",level:2},{value:"2. \u5728\u63a8\u6587\u4e2d\u6dfb\u52a0\u5f39\u6027\u76d2\u5b50\u5e03\u5c40",id:"2-\u5728\u63a8\u6587\u4e2d\u6dfb\u52a0\u5f39\u6027\u76d2\u5b50\u5e03\u5c40",level:2},{value:"3. \u4f7f\u7528 flex-direction \u5c5e\u6027\u521b\u5efa\u4e00\u4e2a\u884c/\u5217",id:"3-\u4f7f\u7528-flex-direction-\u5c5e\u6027\u521b\u5efa\u4e00\u4e2a\u884c\u5217",level:2},{value:"4. \u4f7f\u7528 justify-content \u5c5e\u6027\u5bf9\u9f50\u5143\u7d20",id:"4-\u4f7f\u7528-justify-content-\u5c5e\u6027\u5bf9\u9f50\u5143\u7d20",level:2},{value:"5. \u4f7f\u7528 align-items \u5c5e\u6027\u5bf9\u9f50\u5143\u7d20",id:"5-\u4f7f\u7528-align-items-\u5c5e\u6027\u5bf9\u9f50\u5143\u7d20",level:2},{value:"6. \u4f7f\u7528 flex-wrap \u5c5e\u6027\u5305\u88f9\u4e00\u884c\u6216\u4e00\u5217",id:"6-\u4f7f\u7528-flex-wrap-\u5c5e\u6027\u5305\u88f9\u4e00\u884c\u6216\u4e00\u5217",level:2},{value:"7. \u4f7f\u7528 flex-shrink \u5c5e\u6027\u5b9a\u4e49 flex \u5b50\u5143\u7d20\u7684\u6536\u7f29\u89c4\u5219",id:"7-\u4f7f\u7528-flex-shrink-\u5c5e\u6027\u5b9a\u4e49-flex-\u5b50\u5143\u7d20\u7684\u6536\u7f29\u89c4\u5219",level:2},{value:"8. \u4f7f\u7528 flex-grow \u5c5e\u6027\u5b9a\u4e49 flex \u5b50\u5143\u7d20\u7684\u589e\u957f\u7cfb\u6570",id:"8-\u4f7f\u7528-flex-grow-\u5c5e\u6027\u5b9a\u4e49-flex-\u5b50\u5143\u7d20\u7684\u589e\u957f\u7cfb\u6570",level:2},{value:"9. \u4f7f\u7528 flex-basis \u5c5e\u6027\u8bbe\u7f6e\u5143\u7d20\u7684\u521d\u59cb\u5927\u5c0f",id:"9-\u4f7f\u7528-flex-basis-\u5c5e\u6027\u8bbe\u7f6e\u5143\u7d20\u7684\u521d\u59cb\u5927\u5c0f",level:2},{value:"10. \u4f7f\u7528 flex \u77ed\u65b9\u6cd5\u5c5e\u6027",id:"10-\u4f7f\u7528-flex-\u77ed\u65b9\u6cd5\u5c5e\u6027",level:2},{value:"11. \u4f7f\u7528 order \u5c5e\u6027\u91cd\u65b0\u6392\u5217\u5b50\u5143\u7d20",id:"11-\u4f7f\u7528-order-\u5c5e\u6027\u91cd\u65b0\u6392\u5217\u5b50\u5143\u7d20",level:2},{value:"12. \u4f7f\u7528 align-self \u5c5e\u6027\u8c03\u6574\u5355\u4e2a\u5b50\u5143\u7d20\u7684\u5bf9\u9f50\u65b9\u5f0f",id:"12-\u4f7f\u7528-align-self-\u5c5e\u6027\u8c03\u6574\u5355\u4e2a\u5b50\u5143\u7d20\u7684\u5bf9\u9f50\u65b9\u5f0f",level:2}],f={toc:s},d="wrapper";function k(e){let{components:n,...t}=e;return(0,a.kt)(d,(0,l.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"css-\u5f39\u6027\u76d2\u5b50"},"CSS \u5f39\u6027\u76d2\u5b50"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.icoderoad.com/"},"\u8def\u6761\u7f16\u7a0b")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#css-%E5%BC%B9%E6%80%A7%E7%9B%92%E5%AD%90"},"CSS \u5f39\u6027\u76d2\u5b50"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#1-%E4%BD%BF%E7%94%A8-display-flex-%E5%AE%9A%E4%BD%8D%E7%9B%92%E5%AD%90"},"1. \u4f7f\u7528 display: flex \u5b9a\u4f4d\u76d2\u5b50")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#2-%E5%9C%A8%E6%8E%A8%E6%96%87%E4%B8%AD%E6%B7%BB%E5%8A%A0%E5%BC%B9%E6%80%A7%E7%9B%92%E5%AD%90%E5%B8%83%E5%B1%80"},"2. \u5728\u63a8\u6587\u4e2d\u6dfb\u52a0\u5f39\u6027\u76d2\u5b50\u5e03\u5c40")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#3-%E4%BD%BF%E7%94%A8-flex-direction-%E5%B1%9E%E6%80%A7%E5%88%9B%E5%BB%BA%E4%B8%80%E4%B8%AA%E8%A1%8C%E5%88%97"},"3. \u4f7f\u7528 flex-direction \u5c5e\u6027\u521b\u5efa\u4e00\u4e2a\u884c/\u5217")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#4-%E4%BD%BF%E7%94%A8-justify-content-%E5%B1%9E%E6%80%A7%E5%AF%B9%E9%BD%90%E5%85%83%E7%B4%A0"},"4. \u4f7f\u7528 justify-content \u5c5e\u6027\u5bf9\u9f50\u5143\u7d20")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#5-%E4%BD%BF%E7%94%A8-align-items-%E5%B1%9E%E6%80%A7%E5%AF%B9%E9%BD%90%E5%85%83%E7%B4%A0"},"5. \u4f7f\u7528 align-items \u5c5e\u6027\u5bf9\u9f50\u5143\u7d20")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#6-%E4%BD%BF%E7%94%A8-flex-wrap-%E5%B1%9E%E6%80%A7%E5%8C%85%E8%A3%B9%E4%B8%80%E8%A1%8C%E6%88%96%E4%B8%80%E5%88%97"},"6. \u4f7f\u7528 flex-wrap \u5c5e\u6027\u5305\u88f9\u4e00\u884c\u6216\u4e00\u5217")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#7-%E4%BD%BF%E7%94%A8-flex-shrink-%E5%B1%9E%E6%80%A7%E5%AE%9A%E4%B9%89-flex-%E5%AD%90%E5%85%83%E7%B4%A0%E7%9A%84%E6%94%B6%E7%BC%A9%E8%A7%84%E5%88%99"},"7. \u4f7f\u7528 flex-shrink \u5c5e\u6027\u5b9a\u4e49 flex \u5b50\u5143\u7d20\u7684\u6536\u7f29\u89c4\u5219")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#8-%E4%BD%BF%E7%94%A8-flex-grow-%E5%B1%9E%E6%80%A7%E5%AE%9A%E4%B9%89-flex-%E5%AD%90%E5%85%83%E7%B4%A0%E7%9A%84%E5%A2%9E%E9%95%BF%E7%B3%BB%E6%95%B0"},"8. \u4f7f\u7528 flex-grow \u5c5e\u6027\u5b9a\u4e49 flex \u5b50\u5143\u7d20\u7684\u589e\u957f\u7cfb\u6570")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#9-%E4%BD%BF%E7%94%A8-flex-basis-%E5%B1%9E%E6%80%A7%E8%AE%BE%E7%BD%AE%E5%85%83%E7%B4%A0%E7%9A%84%E5%88%9D%E5%A7%8B%E5%A4%A7%E5%B0%8F"},"9. \u4f7f\u7528 flex-basis \u5c5e\u6027\u8bbe\u7f6e\u5143\u7d20\u7684\u521d\u59cb\u5927\u5c0f")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#10-%E4%BD%BF%E7%94%A8-flex-%E7%9F%AD%E6%96%B9%E6%B3%95%E5%B1%9E%E6%80%A7"},"10. \u4f7f\u7528 flex \u77ed\u65b9\u6cd5\u5c5e\u6027")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#11-%E4%BD%BF%E7%94%A8-order-%E5%B1%9E%E6%80%A7%E9%87%8D%E6%96%B0%E6%8E%92%E5%88%97%E5%AD%90%E5%85%83%E7%B4%A0"},"11. \u4f7f\u7528 order \u5c5e\u6027\u91cd\u65b0\u6392\u5217\u5b50\u5143\u7d20")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#12-%E4%BD%BF%E7%94%A8-align-self-%E5%B1%9E%E6%80%A7%E8%B0%83%E6%95%B4%E5%8D%95%E4%B8%AA%E5%AD%90%E5%85%83%E7%B4%A0%E7%9A%84%E5%AF%B9%E9%BD%90%E6%96%B9%E5%BC%8F"},"12. \u4f7f\u7528 align-self \u5c5e\u6027\u8c03\u6574\u5355\u4e2a\u5b50\u5143\u7d20\u7684\u5bf9\u9f50\u65b9\u5f0f"))))),(0,a.kt)("a",{id:"markdown-1-\u4f7f\u7528-display-flex-\u5b9a\u4f4d\u76d2\u5b50",name:"1-\u4f7f\u7528-display-flex-\u5b9a\u4f4d\u76d2\u5b50"}),(0,a.kt)("h2",{id:"1-\u4f7f\u7528-display-flex-\u5b9a\u4f4d\u76d2\u5b50"},"1. \u4f7f\u7528 display: flex \u5b9a\u4f4d\u76d2\u5b50"),(0,a.kt)("p",null,"\u53ea\u8981\u5728\u4e00\u4e2a\u5143\u7d20\u7684 CSS \u4e2d\u6dfb\u52a0 ",(0,a.kt)("inlineCode",{parentName:"p"},"display: flex;"),"\uff0c\u5c31\u53ef\u4ee5\u4f7f\u7528\u5176\u5b83 ",(0,a.kt)("inlineCode",{parentName:"p"},"flex")," \u5c5e\u6027\u6765\u6784\u5efa\u54cd\u5e94\u5f0f\u9875\u9762\u4e86\u3002"),(0,a.kt)("a",{id:"markdown-2-\u5728\u63a8\u6587\u4e2d\u6dfb\u52a0\u5f39\u6027\u76d2\u5b50\u5e03\u5c40",name:"2-\u5728\u63a8\u6587\u4e2d\u6dfb\u52a0\u5f39\u6027\u76d2\u5b50\u5e03\u5c40"}),(0,a.kt)("h2",{id:"2-\u5728\u63a8\u6587\u4e2d\u6dfb\u52a0\u5f39\u6027\u76d2\u5b50\u5e03\u5c40"},"2. \u5728\u63a8\u6587\u4e2d\u6dfb\u52a0\u5f39\u6027\u76d2\u5b50\u5e03\u5c40"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"\u5c55\u5f00\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'<style>\n  body {\n    font-family: Arial, sans-serif;\n  }\n  header {\n    display: flex;\n  }\n  header .profile-thumbnail {\n    width: 50px;\n    height: 50px;\n    border-radius: 4px;\n  }\n  header .profile-name {\n\n    margin-left: 10px;\n    display: flex;\n\n}\nheader .follow-btn {\n\n    margin: 0 0 0 auto;\n    display: flex;\n\n}\nheader .follow-btn button {\nborder: 0;\nborder-radius: 3px;\npadding: 5px;\n}\nheader h3, header h4 {\ndisplay: flex;\nmargin: 0;\n}\n#inner p {\nmargin-bottom: 10px;\nfont-size: 20px;\n}\n#inner hr {\nmargin: 20px 0;\nborder-style: solid;\nopacity: 0.1;\n}\nfooter {\ndisplay: flex;\n}\nfooter .stats {\n\n    font-size: 15px;\n    display: flex;\n\n}\nfooter .stats strong {\nfont-size: 18px;\n}\nfooter .stats .likes {\nmargin-left: 10px;\n}\nfooter .cta {\nmargin-left: auto;\n}\nfooter .cta button {\nborder: 0;\nbackground: transparent;\n}\n</style>\n\n<header>\n  <img src="https://freecodecamp.s3.amazonaws.com/quincy-twitter-photo.jpg" alt="Quincy Larson\'s profile picture" class="profile-thumbnail">\n  <div class="profile-name">\n    <h3>Quincy Larson</h3>\n    <h4>@ossia</h4>\n  </div>\n  <div class="follow-btn">\n    <button>Follow</button>\n  </div>\n</header>\n<div id="inner">\n  <p>I meet so many people who are in search of that one trick that will help them work smart. Even if you work smart, you still have to work hard.</p>\n  <span class="date">1:32 PM - 12 Jan 2018</span>\n  <hr>\n</div>\n<footer>\n  <div class="stats">\n    <div class="Retweets">\n      <strong>107</strong> Retweets\n    </div>\n    <div class="likes">\n      <strong>431</strong> Likes\n    </div>\n  </div>\n  <div class="cta">\n    <button class="share-btn">Share</button>\n    <button class="retweet-btn">Retweet</button>\n    <button class="like-btn">Like</button>\n  </div>\n</footer>\n'))),(0,a.kt)("a",{id:"markdown-3-\u4f7f\u7528-flex-direction-\u5c5e\u6027\u521b\u5efa\u4e00\u4e2a\u884c\u5217",name:"3-\u4f7f\u7528-flex-direction-\u5c5e\u6027\u521b\u5efa\u4e00\u4e2a\u884c\u5217"}),(0,a.kt)("h2",{id:"3-\u4f7f\u7528-flex-direction-\u5c5e\u6027\u521b\u5efa\u4e00\u4e2a\u884c\u5217"},"3. \u4f7f\u7528 flex-direction \u5c5e\u6027\u521b\u5efa\u4e00\u4e2a\u884c/\u5217"),(0,a.kt)("p",null,"\u7ed9\u5143\u7d20\u6dfb\u52a0 ",(0,a.kt)("inlineCode",{parentName:"p"},"display: flex")," \u5c5e\u6027\u53ef\u4ee5\u8ba9\u5b83\u53d8\u6210 flex \u5bb9\u5668\uff0c \u7136\u540e\u53ef\u4ee5\u8ba9\u5143\u7d20\u7684\u9879\u76ee\u6392\u5217\u6210\u884c\u6216\u5217\u3002 \u53ea\u8981\u7ed9\u7236\u5143\u7d20\u6dfb\u52a0 ",(0,a.kt)("inlineCode",{parentName:"p"},"flex-direction")," \u5c5e\u6027\uff0c\u5e76\u628a\u5c5e\u6027\u503c\u8bbe\u7f6e\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"row")," \u6216 ",(0,a.kt)("inlineCode",{parentName:"p"},"column"),"\uff0c\u5373\u53ef\u6a2a\u5411\u6392\u5217\u6216\u7eb5\u5411\u6392\u5217\u5b83\u7684\u6240\u6709\u5b50\u5143\u7d20\u3002 \u521b\u5efa\u4e00\u884c\u5c06\u4f7f\u5b50\u9879\u6c34\u5e73\u5bf9\u9f50\uff0c\u521b\u5efa\u4e00\u5217\u5c06\u4f7f\u5b50\u9879\u5782\u76f4\u5bf9\u9f50\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"flex-direction")," \u7684\u5176\u4ed6\u53ef\u9009\u503c\u8fd8\u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},"row-reverse")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"column-reverse"),"\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a")," ",(0,a.kt)("inlineCode",{parentName:"p"},"flex-direction")," \u7684",(0,a.kt)("strong",{parentName:"p"},"\u9ed8\u8ba4\u503c"),"\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"row"),"\u3002"),(0,a.kt)("a",{id:"markdown-4-\u4f7f\u7528-justify-content-\u5c5e\u6027\u5bf9\u9f50\u5143\u7d20",name:"4-\u4f7f\u7528-justify-content-\u5c5e\u6027\u5bf9\u9f50\u5143\u7d20"}),(0,a.kt)("h2",{id:"4-\u4f7f\u7528-justify-content-\u5c5e\u6027\u5bf9\u9f50\u5143\u7d20"},"4. \u4f7f\u7528 justify-content \u5c5e\u6027\u5bf9\u9f50\u5143\u7d20"),(0,a.kt)("p",null,"flex \u5b50\u5143\u7d20\u6709\u65f6\u4e0d\u80fd\u5145\u6ee1\u6574\u4e2a flex \u5bb9\u5668\uff0c \u6240\u4ee5\u6211\u4eec\u7ecf\u5e38\u9700\u8981\u544a\u8bc9 CSS \u4ee5\u4ec0\u4e48\u65b9\u5f0f\u6392\u5217 flex \u5b50\u5143\u7d20\uff0c\u4ee5\u53ca\u8c03\u6574\u5b83\u4eec\u7684\u95f4\u8ddd\u3002 \u53ef\u4ee5\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"justify-content")," \u5c5e\u6027\u7684\u4e0d\u540c\u503c\u6765\u5b9e\u73b0\u3002 \u5728\u4ecb\u7ecd\u5c5e\u6027\u7684\u53ef\u9009\u503c\u4e4b\u524d\uff0c\u6211\u4eec\u8981\u5148\u7406\u89e3\u4e00\u4e9b\u91cd\u8981\u672f\u8bed\u3002"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/css-flexbox-1/images/flex-direction-terms.svg"},"\u8fd9\u91cc\u6709\u4e00\u5f20\u6765\u81ea W3C \u7684\u6709\u7528\u7684\u56fe\u7247\uff0c\u8bf4\u660e\u4e86\u4e0b\u9762\u5173\u4e8e\u201c\u884c\u201d flex \u5bb9\u5668\u7684\u6982\u5ff5\u3002")),(0,a.kt)("p",null,"\u5982\u679c\u628a flex \u5bb9\u5668\u8bbe\u4e3a\u4e00\u4e2a\u884c\uff0c\u5b83\u7684\u5b50\u5143\u7d20\u4f1a\u4ece\u5de6\u5230\u53f3\u9010\u4e2a\u6392\u5217\uff1b \u5982\u679c\u628a flex \u5bb9\u5668\u8bbe\u4e3a\u4e00\u4e2a\u5217\uff0c\u5b83\u7684\u5b50\u5143\u7d20\u4f1a\u4ece\u4e0a\u5230\u4e0b\u9010\u4e2a\u6392\u5217\u3002 \u5b50\u5143\u7d20\u6392\u5217\u7684\u65b9\u5411\u88ab\u79f0\u4e3a ",(0,a.kt)("strong",{parentName:"p"},"main axis\uff08\u4e3b\u8f74\uff09"),"\u3002 \u5bf9\u4e8e\u884c\uff0c\u4e3b\u8f74\u6c34\u5e73\u8d2f\u7a7f\u6bcf\u4e00\u4e2a\u9879\u76ee\uff1b \u5bf9\u4e8e\u5217\uff0c\u4e3b\u8f74\u5782\u76f4\u8d2f\u7a7f\u6bcf\u4e00\u4e2a\u9879\u76ee\u3002"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"\u5bf9\u4e8e\u5982\u4f55\u6cbf\u4e3b\u8f74\u7ebf\u6392\u653e flex \u9879\u76ee\uff0c\u6709\u51e0\u79cd\u9009\u62e9\u3002 \u5f88\u5e38\u7528\u7684\u4e00\u79cd\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"justify-content: center"),";\uff1a\u5373 flex \u5b50\u5143\u7d20\u5728 flex \u5bb9\u5668\u4e2d\u5c45\u4e2d\u6392\u5217\u3002 \u5176\u4ed6\u9009\u62e9\u5305\u62ec\uff1a"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"flex-start"),"\uff1a\u4ece flex \u5bb9\u5668\u7684\u8d77\u59cb\u4f4d\u7f6e\u5f00\u59cb\u6392\u5217\u9879\u76ee\u3002 \u5bf9\u884c\u6765\u8bf4\u662f\u628a\u9879\u76ee\u79fb\u81f3\u5de6\u8fb9\uff0c \u5bf9\u4e8e\u5217\u662f\u628a\u9879\u76ee\u79fb\u81f3\u9876\u90e8\u3002 \u5982\u672a\u8bbe\u7f6e ",(0,a.kt)("inlineCode",{parentName:"p"},"justify-content")," \u7684\u503c\uff0c\u90a3\u4e48\u8fd9\u5c31\u662f",(0,a.kt)("strong",{parentName:"p"},"\u9ed8\u8ba4\u503c"),"\u3002",(0,a.kt)("br",null),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"flex-end"),"\uff1a\u4ece flex \u5bb9\u5668\u7684\u7ec8\u6b62\u4f4d\u7f6e\u5f00\u59cb\u6392\u5217\u9879\u76ee\u3002 \u5bf9\u884c\u6765\u8bf4\u662f\u628a\u9879\u76ee\u79fb\u81f3\u53f3\u8fb9\uff0c \u5bf9\u4e8e\u5217\u662f\u628a\u9879\u76ee\u79fb\u81f3\u5e95\u90e8\u3002",(0,a.kt)("br",null),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"space-between"),"\uff1a\u9879\u76ee\u95f4\u4fdd\u7559\u4e00\u5b9a\u95f4\u8ddd\u5730\u6cbf\u4e3b\u8f74\u5c45\u4e2d\u6392\u5217\u3002 \u7b2c\u4e00\u4e2a\u548c\u6700\u540e\u4e00\u4e2a\u9879\u76ee\u88ab\u653e\u7f6e\u5728\u5bb9\u5668\u8fb9\u6cbf\u3002 \u4f8b\u5982\uff0c\u5728\u884c\u4e2d\u7b2c\u4e00\u4e2a\u9879\u76ee\u4f1a\u7d27\u8d34\u7740\u5bb9\u5668\u5de6\u8fb9\uff0c\u6700\u540e\u4e00\u4e2a\u9879\u76ee\u4f1a\u7d27\u8d34\u7740\u5bb9\u5668\u53f3\u8fb9\uff0c\u7136\u540e\u5176\u4ed6\u9879\u76ee\u5747\u5300\u6392\u5e03\u3002 ",(0,a.kt)("br",null),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"space-around"),"\uff1a\u4e0e ",(0,a.kt)("inlineCode",{parentName:"p"},"space-between")," \u76f8\u4f3c\uff0c\u4f46\u5934\u5c3e\u4e24\u4e2a\u9879\u76ee\u4e0d\u4f1a\u7d27\u8d34\u5bb9\u5668\u8fb9\u7f18\uff0c\u6240\u6709\u9879\u76ee\u4e4b\u95f4\u7684\u7a7a\u95f4\u5747\u5300\u6392\u5e03\u3002 ",(0,a.kt)("br",null),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"space-evenly"),"\uff1a\u5728 flex \u9879\u76ee\u4e4b\u95f4\u5747\u5300\u5206\u914d\u7a7a\u95f4\uff0c\u5728 flex \u5bb9\u5668\u7684\u4efb\u4e00\u7aef\u90fd\u6709\u4e00\u4e2a\u5b8c\u6574\u7684\u7a7a\u95f4\u3002"),(0,a.kt)("a",{id:"markdown-5-\u4f7f\u7528-align-items-\u5c5e\u6027\u5bf9\u9f50\u5143\u7d20",name:"5-\u4f7f\u7528-align-items-\u5c5e\u6027\u5bf9\u9f50\u5143\u7d20"}),(0,a.kt)("h2",{id:"5-\u4f7f\u7528-align-items-\u5c5e\u6027\u5bf9\u9f50\u5143\u7d20"},"5. \u4f7f\u7528 align-items \u5c5e\u6027\u5bf9\u9f50\u5143\u7d20"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"align-items")," \u5c5e\u6027\u4e0e ",(0,a.kt)("inlineCode",{parentName:"p"},"justify-content")," \u7c7b\u4f3c\u3002 \u56de\u5fc6\u4e00\u4e0b\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"justify-content")," \u5c5e\u6027\u4f7f flex \u5b50\u5143\u7d20\u6cbf\u4e3b\u8f74\u6392\u5217\u3002 \u884c\u7684\u4e3b\u8f74\u662f\u6c34\u5e73\u7ebf\uff0c\u5217\u7684\u4e3b\u8f74\u662f\u5782\u76f4\u7ebf\u3002"),(0,a.kt)("p",null,"Flex \u5bb9\u5668\u4e2d\uff0c\u4e0e\u4e3b\u8f74\u5782\u76f4\u7684\u53eb\u505a ",(0,a.kt)("strong",{parentName:"p"},"cross axis\uff08\u4ea4\u53c9\u8f74\uff09"),"\u3002 \u884c\u7684\u4ea4\u53c9\u8f74\u662f\u5782\u76f4\u7684\uff0c\u5217\u7684\u4ea4\u53c9\u8f74\u662f\u6c34\u5e73\u7684\u3002"),(0,a.kt)("p",null,"CSS \u4e2d\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"align-items")," \u5c5e\u6027\u7528\u6765\u5b9a\u4e49 flex \u5b50\u5143\u7d20",(0,a.kt)("em",{parentName:"p"},"\u6cbf\u4ea4\u53c9\u8f74\u7684\u5bf9\u9f50\u65b9\u5f0f"),"\u3002 \u5bf9\u884c\u6765\u8bf4\uff0c\u5b9a\u4e49\u7684\u662f\u5143\u7d20\u7684\u4e0a\u4e0b\u5bf9\u9f50\u65b9\u5f0f\uff1b \u5bf9\u5217\u6765\u8bf4\uff0c\u662f\u5b9a\u4e49\u5143\u7d20\u7684\u5de6\u53f3\u5bf9\u9f50\u65b9\u5f0f\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"align-items")," \u7684\u53ef\u9009\u503c\u5305\u62ec\uff1a"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"flex-start"),"\uff1a\u4ece flex \u5bb9\u5668\u7684\u8d77\u59cb\u4f4d\u7f6e\u5f00\u59cb\u5bf9\u9f50\u9879\u76ee\u3002 \u5bf9\u884c\u6765\u8bf4\uff0c\u628a\u9879\u76ee\u79fb\u81f3\u5bb9\u5668\u9876\u90e8\uff1b \u5bf9\u5217\u6765\u8bf4\uff0c\u662f\u628a\u9879\u76ee\u79fb\u81f3\u5bb9\u5668\u5de6\u8fb9\u3002",(0,a.kt)("br",null),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"flex-end"),"\uff1a\u4ece flex \u5bb9\u5668\u7684\u7ec8\u6b62\u4f4d\u7f6e\u5f00\u59cb\u5bf9\u9f50\u9879\u76ee\u3002 \u5bf9\u884c\u6765\u8bf4\uff0c\u628a\u9879\u76ee\u79fb\u81f3\u5bb9\u5668\u5e95\u90e8\uff1b \u5bf9\u5217\u6765\u8bf4\uff0c\u628a\u9879\u76ee\u79fb\u81f3\u5bb9\u5668\u53f3\u8fb9\u3002",(0,a.kt)("br",null),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"center"),"\uff1a\u628a\u9879\u76ee\u5c45\u4e2d\u653e\u7f6e\u3002 \u5bf9\u884c\u6765\u8bf4\uff0c\u5782\u76f4\u5c45\u4e2d\uff08\u9879\u76ee\u8ddd\u79bb\u9876\u90e8\u548c\u5e95\u90e8\u7684\u8ddd\u79bb\u76f8\u7b49\uff09\uff1b \u5bf9\u5217\u6765\u8bf4\uff0c\u6c34\u5e73\u5c45\u4e2d\uff08\u9879\u76ee\u8ddd\u79bb\u5de6\u8fb9\u548c\u53f3\u8fb9\u7684\u8ddd\u79bb\u76f8\u7b49\uff09\u3002",(0,a.kt)("br",null),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"stretch"),"\uff1a\u62c9\u4f38\u9879\u76ee\uff0c\u586b\u6ee1 flex \u5bb9\u5668\u3002 \u4f8b\u5982\uff0c\u6392\u6210\u884c\u7684\u9879\u76ee\u4ece\u5bb9\u5668\u9876\u90e8\u62c9\u4f38\u5230\u5e95\u90e8\u3002 \u5982\u672a\u8bbe\u7f6e ",(0,a.kt)("inlineCode",{parentName:"p"},"align-items")," \u7684\u503c\uff0c\u90a3\u4e48\u8fd9\u5c31\u662f",(0,a.kt)("strong",{parentName:"p"},"\u9ed8\u8ba4\u503c"),"\u3002",(0,a.kt)("br",null),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"baseline"),"\uff1a\u6cbf\u57fa\u7ebf\u5bf9\u9f50\u3002 \u57fa\u7ebf\u662f\u6587\u672c\u76f8\u5173\u7684\u6982\u5ff5\uff0c\u53ef\u4ee5\u8ba4\u4e3a\u5b83\u662f\u5b57\u6bcd\u6392\u5217\u7684\u4e0b\u7aef\u57fa\u51c6\u7ebf\u3002"),(0,a.kt)("a",{id:"markdown-6-\u4f7f\u7528-flex-wrap-\u5c5e\u6027\u5305\u88f9\u4e00\u884c\u6216\u4e00\u5217",name:"6-\u4f7f\u7528-flex-wrap-\u5c5e\u6027\u5305\u88f9\u4e00\u884c\u6216\u4e00\u5217"}),(0,a.kt)("h2",{id:"6-\u4f7f\u7528-flex-wrap-\u5c5e\u6027\u5305\u88f9\u4e00\u884c\u6216\u4e00\u5217"},"6. \u4f7f\u7528 flex-wrap \u5c5e\u6027\u5305\u88f9\u4e00\u884c\u6216\u4e00\u5217"),(0,a.kt)("p",null,"CSS flexbox \u5177\u6709\u5c06 flex \u5bb9\u5668\u62c6\u5206\u4e3a\u591a\u884c\uff08\u6216\u5217\uff09\u7684\u529f\u80fd\u3002 \u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cflex \u5bb9\u5668\u4f1a\u8c03\u6574\u9879\u76ee\u5927\u5c0f\uff0c\u628a\u5b83\u4eec\u90fd\u585e\u5230\u4e00\u8d77\u3002 \u5bf9\u4e8e\u884c\u6765\u8bf4\uff0c\u6240\u6709\u9879\u76ee\u90fd\u4f1a\u5728\u4e00\u6761\u76f4\u7ebf\u4e0a\u3002"),(0,a.kt)("p",null,"\u4e0d\u8fc7\uff0c\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"flex-wrap")," \u5c5e\u6027\u53ef\u4ee5\u4f7f\u9879\u76ee\u6362\u884c\u5c55\u793a\u3002 \u8fd9\u610f\u5473\u7740\u591a\u51fa\u6765\u7684\u5b50\u5143\u7d20\u4f1a\u88ab\u79fb\u5230\u65b0\u7684\u884c\u6216\u5217\u3002 \u6362\u884c\u53d1\u751f\u7684\u65ad\u70b9\u7531\u5b50\u5143\u7d20\u548c\u5bb9\u5668\u7684\u5927\u5c0f\u51b3\u5b9a\u3002"),(0,a.kt)("p",null,"\u6362\u884c\u65b9\u5411\u7684\u53ef\u9009\u503c\u6709\u8fd9\u4e9b\uff1a"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"nowrap"),"\uff1a",(0,a.kt)("strong",{parentName:"p"},"\u9ed8\u8ba4\u503c"),"\uff0c\u4e0d\u6362\u884c\u3002 ",(0,a.kt)("br",null),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"wrap"),"\uff1a\u5982\u679c\u6392\u5217\u4ee5\u884c\u4e3a\u57fa\u51c6\uff0c\u5c31\u5c06\u884c\u4ece\u4e0a\u5f80\u4e0b\u6392\u5217\uff1b\u5982\u679c\u6392\u5217\u4ee5\u5217\u4e3a\u57fa\u51c6\uff0c\u5c31\u5c06\u5217\u4ece\u5de6\u5f80\u53f3\u6392\u5217\u3002",(0,a.kt)("br",null),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"wrap-reverse"),"\uff1a\u5982\u679c\u6392\u5217\u4ee5\u884c\u4e3a\u57fa\u51c6\uff0c\u5c31\u5c06\u884c\u4ece\u4e0b\u5f80\u4e0a\u6392\u5217\uff1b\u5982\u679c\u6392\u5217\u4ee5\u5217\u4e3a\u57fa\u51c6\uff0c\u5c31\u5c06\u5217\u4ece\u53f3\u5f80\u5de6\u6392\u5217\u3002"),(0,a.kt)("hr",null),(0,a.kt)("a",{id:"markdown-7-\u4f7f\u7528-flex-shrink-\u5c5e\u6027\u5b9a\u4e49-flex-\u5b50\u5143\u7d20\u7684\u6536\u7f29\u89c4\u5219",name:"7-\u4f7f\u7528-flex-shrink-\u5c5e\u6027\u5b9a\u4e49-flex-\u5b50\u5143\u7d20\u7684\u6536\u7f29\u89c4\u5219"}),(0,a.kt)("h2",{id:"7-\u4f7f\u7528-flex-shrink-\u5c5e\u6027\u5b9a\u4e49-flex-\u5b50\u5143\u7d20\u7684\u6536\u7f29\u89c4\u5219"},"7. \u4f7f\u7528 flex-shrink \u5c5e\u6027\u5b9a\u4e49 flex \u5b50\u5143\u7d20\u7684\u6536\u7f29\u89c4\u5219"),(0,a.kt)("p",null,"\u4f7f\u7528\u4e4b\u540e\uff0c\u5982\u679c flex \u5bb9\u5668\u592a\u5c0f\uff0c\u5219\u5b50\u5143\u7d20\u4f1a\u81ea\u52a8\u7f29\u5c0f\u3002 \u5f53\u5bb9\u5668\u7684\u5bbd\u5ea6\u5c0f\u4e8e\u91cc\u9762\u6240\u6709\u5b50\u5143\u7d20\u7684\u5bbd\u5ea6\u4e4b\u548c\u65f6\uff0c\u6240\u6709\u5b50\u5143\u7d20\u90fd\u4f1a\u81ea\u52a8\u538b\u7f29\u3002"),(0,a.kt)("p",null,"\u5b50\u5143\u7d20\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"flex-shrink")," \u63a5\u53d7\u6570\u503c\u4f5c\u4e3a\u5c5e\u6027\u503c\u3002 \u6570\u503c\u8d8a\u5927\uff0c\u5219\u8be5\u5143\u7d20\u4e0e\u5176\u4ed6\u5143\u7d20\u76f8\u6bd4\u4f1a\u88ab\u538b\u7f29\u5f97\u66f4\u5389\u5bb3\u3002 \u6bd4\u5982\uff0c\u4e00\u4e2a\u9879\u76ee\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"flex-shrink")," \u5c5e\u6027\u503c\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"1"),"\uff0c\u53e6\u4e00\u4e2a\u9879\u76ee\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"flex-shrink")," \u5c5e\u6027\u503c\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"3"),"\uff0c\u90a3\u4e48\u540e\u8005\u76f8\u6bd4\u524d\u8005\u4f1a\u53d7\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"3")," \u500d\u538b\u7f29\u3002"),(0,a.kt)("a",{id:"markdown-8-\u4f7f\u7528-flex-grow-\u5c5e\u6027\u5b9a\u4e49-flex-\u5b50\u5143\u7d20\u7684\u589e\u957f\u7cfb\u6570",name:"8-\u4f7f\u7528-flex-grow-\u5c5e\u6027\u5b9a\u4e49-flex-\u5b50\u5143\u7d20\u7684\u589e\u957f\u7cfb\u6570"}),(0,a.kt)("h2",{id:"8-\u4f7f\u7528-flex-grow-\u5c5e\u6027\u5b9a\u4e49-flex-\u5b50\u5143\u7d20\u7684\u589e\u957f\u7cfb\u6570"},"8. \u4f7f\u7528 flex-grow \u5c5e\u6027\u5b9a\u4e49 flex \u5b50\u5143\u7d20\u7684\u589e\u957f\u7cfb\u6570"),(0,a.kt)("p",null,"\u4e0e ",(0,a.kt)("inlineCode",{parentName:"p"},"flex-shrink")," \u76f8\u5bf9\u7684\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"flex-grow"),"\u3002",(0,a.kt)("inlineCode",{parentName:"p"},"flex-shrink")," \u4f1a\u5728\u5bb9\u5668\u592a\u5c0f\u65f6\u5bf9\u5b50\u5143\u7d20\u4f5c\u51fa\u8c03\u6574\u3002 \u76f8\u5e94\u5730\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"flex-grow")," \u4f1a\u5728\u5bb9\u5668\u592a\u5927\u65f6\u5bf9\u5b50\u5143\u7d20\u4f5c\u51fa\u8c03\u6574\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u4e00\u4e2a\u9879\u76ee\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"flex-grow")," \u5c5e\u6027\u503c\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"1"),"\uff0c\u53e6\u4e00\u4e2a\u9879\u76ee\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"flex-grow")," \u5c5e\u6027\u503c\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"3"),"\uff0c\u90a3\u4e48\u503c\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"3")," \u7684\u4e00\u4e2a\u4f1a\u8f83\u53e6\u4e00\u4e2a\u6269\u5927 ",(0,a.kt)("inlineCode",{parentName:"p"},"3")," \u500d\u3002"),(0,a.kt)("a",{id:"markdown-9-\u4f7f\u7528-flex-basis-\u5c5e\u6027\u8bbe\u7f6e\u5143\u7d20\u7684\u521d\u59cb\u5927\u5c0f",name:"9-\u4f7f\u7528-flex-basis-\u5c5e\u6027\u8bbe\u7f6e\u5143\u7d20\u7684\u521d\u59cb\u5927\u5c0f"}),(0,a.kt)("h2",{id:"9-\u4f7f\u7528-flex-basis-\u5c5e\u6027\u8bbe\u7f6e\u5143\u7d20\u7684\u521d\u59cb\u5927\u5c0f"},"9. \u4f7f\u7528 flex-basis \u5c5e\u6027\u8bbe\u7f6e\u5143\u7d20\u7684\u521d\u59cb\u5927\u5c0f"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"flex-basis")," \u5c5e\u6027\u5b9a\u4e49\u4e86\u5728\u4f7f\u7528 CSS \u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"flex-shrink")," \u6216 ",(0,a.kt)("inlineCode",{parentName:"p"},"flex-grow")," \u5c5e\u6027\u5bf9\u5143\u7d20\u8fdb\u884c\u8c03\u6574\u524d\uff0c\u5143\u7d20\u7684\u521d\u59cb\u5927\u5c0f\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"flex-basis")," \u5c5e\u6027\u7684\u5355\u4f4d\u4e0e\u5176\u4ed6\u8868\u793a\u5c3a\u5bf8\u7684\u5c5e\u6027\u7684\u5355\u4f4d\u4e00\u81f4\uff08",(0,a.kt)("inlineCode",{parentName:"p"},"px"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"em"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"%")," \u7b49\uff09\u3002 \u5982\u679c\u503c\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"auto"),"\uff0c\u5219\u9879\u76ee\u7684\u5c3a\u5bf8\u968f\u5185\u5bb9\u8c03\u6574\u3002"),(0,a.kt)("a",{id:"markdown-10-\u4f7f\u7528-flex-\u77ed\u65b9\u6cd5\u5c5e\u6027",name:"10-\u4f7f\u7528-flex-\u77ed\u65b9\u6cd5\u5c5e\u6027"}),(0,a.kt)("h2",{id:"10-\u4f7f\u7528-flex-\u77ed\u65b9\u6cd5\u5c5e\u6027"},"10. \u4f7f\u7528 flex \u77ed\u65b9\u6cd5\u5c5e\u6027"),(0,a.kt)("p",null,"\u4e0a\u9762\u51e0\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"flex")," \u5c5e\u6027\u6709\u4e00\u4e2a\u7b80\u5199\u65b9\u5f0f\u3002 ",(0,a.kt)("inlineCode",{parentName:"p"},"flex-grow"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"flex-shrink")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"flex-basis")," \u5c5e\u6027\u53ef\u4ee5\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"flex")," \u4e2d\u4e00\u5e76\u8bbe\u7f6e\u3002"),(0,a.kt)("p",null,"\u4f8b\u5982\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"flex: 1 0 10px;")," \u4f1a\u628a\u9879\u76ee\u5c5e\u6027\u8bbe\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"flex-grow: 1;"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"flex-shrink: 0;")," \u4ee5\u53ca ",(0,a.kt)("inlineCode",{parentName:"p"},"flex-basis: 10px;"),"\u3002"),(0,a.kt)("p",null,"\u5c5e\u6027\u7684\u9ed8\u8ba4\u8bbe\u7f6e\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"flex: 0 1 auto;"),"\u3002"),(0,a.kt)("hr",null),(0,a.kt)("a",{id:"markdown-11-\u4f7f\u7528-order-\u5c5e\u6027\u91cd\u65b0\u6392\u5217\u5b50\u5143\u7d20",name:"11-\u4f7f\u7528-order-\u5c5e\u6027\u91cd\u65b0\u6392\u5217\u5b50\u5143\u7d20"}),(0,a.kt)("h2",{id:"11-\u4f7f\u7528-order-\u5c5e\u6027\u91cd\u65b0\u6392\u5217\u5b50\u5143\u7d20"},"11. \u4f7f\u7528 order \u5c5e\u6027\u91cd\u65b0\u6392\u5217\u5b50\u5143\u7d20"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"order")," \u5c5e\u6027\u544a\u8bc9 CSS flex \u5bb9\u5668\u91cc\u5b50\u5143\u7d20\u7684\u987a\u5e8f\u3002 \u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u9879\u76ee\u6392\u5217\u987a\u5e8f\u4e0e\u6e90 HTML \u6587\u4ef6\u4e2d\u987a\u5e8f\u76f8\u540c\u3002 \u8fd9\u4e2a\u5c5e\u6027\u63a5\u53d7\u6570\u5b57\u4f5c\u4e3a\u53c2\u6570\uff0c\u53ef\u4ee5\u4f7f\u7528\u8d1f\u6570\u3002"),(0,a.kt)("a",{id:"markdown-12-\u4f7f\u7528-align-self-\u5c5e\u6027\u8c03\u6574\u5355\u4e2a\u5b50\u5143\u7d20\u7684\u5bf9\u9f50\u65b9\u5f0f",name:"12-\u4f7f\u7528-align-self-\u5c5e\u6027\u8c03\u6574\u5355\u4e2a\u5b50\u5143\u7d20\u7684\u5bf9\u9f50\u65b9\u5f0f"}),(0,a.kt)("h2",{id:"12-\u4f7f\u7528-align-self-\u5c5e\u6027\u8c03\u6574\u5355\u4e2a\u5b50\u5143\u7d20\u7684\u5bf9\u9f50\u65b9\u5f0f"},"12. \u4f7f\u7528 align-self \u5c5e\u6027\u8c03\u6574\u5355\u4e2a\u5b50\u5143\u7d20\u7684\u5bf9\u9f50\u65b9\u5f0f"),(0,a.kt)("p",null,"flex \u5b50\u9879\u76ee\u7684\u6700\u540e\u4e00\u4e2a\u5c5e\u6027\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"align-self"),"\u3002 \u8fd9\u4e2a\u5c5e\u6027\u5141\u8bb8\u4f60\u8c03\u6574\u5355\u4e2a\u5b50\u5143\u7d20\u81ea\u5df1\u7684\u5bf9\u9f50\u65b9\u5f0f\uff0c\u800c\u4e0d\u4f1a\u5f71\u54cd\u5230\u5168\u90e8\u5b50\u5143\u7d20\u3002 \u56e0\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"float"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"clear")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"vertical-align")," \u7b49\u8c03\u6574\u5bf9\u9f50\u65b9\u5f0f\u7684\u5c5e\u6027\u90fd\u4e0d\u80fd\u5e94\u7528\u4e8e flex \u5b50\u5143\u7d20\uff0c\u6240\u4ee5\u8fd9\u4e2a\u5c5e\u6027\u663e\u5f97\u5341\u5206\u6709\u7528\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"align-self")," \u53ef\u8bbe\u7f6e\u7684\u503c\u4e0e ",(0,a.kt)("inlineCode",{parentName:"p"},"align-items")," \u7684\u4e00\u6837\uff0c\u5e76\u4e14\u5b83\u4f1a\u8986\u76d6 ",(0,a.kt)("inlineCode",{parentName:"p"},"align-items")," \u6240\u8bbe\u7f6e\u7684\u503c\u3002"),(0,a.kt)("hr",null))}k.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkhf_log=self.webpackChunkhf_log||[]).push([[1767],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),i=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},h=function(e){var t=i(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),c=i(n),u=r,d=c["".concat(l,".").concat(u)]||c[u]||m[u]||o;return n?a.createElement(d,p(p({ref:t},h),{},{components:n})):a.createElement(d,p({ref:t},h))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,p=new Array(o);p[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,p[1]=s;for(var i=2;i<o;i++)p[i]=n[i];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6797:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var a=n(7462),r=(n(7294),n(3905));const o={},p="sys",s={unversionedId:"Python/sys",id:"Python/sys",title:"sys",description:"1. sys.path: \u6307\u5b9a\u6a21\u5757\u641c\u7d22\u8def\u5f84\u7684\u5217\u8868\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cpython \u5bfc\u5165\u6587\u4ef6\u6216\u8005\u6a21\u5757\uff0c\u4f1a\u5728sys.path\u91cc\u627e\u6a21\u5757\u7684\u8def\u5f84\u3002\u5982\u679c\u5728\u5f53\u524d\u641c\u7d22\u8def\u5f84\u5217\u8868sys.path\u4e2d\u627e\u4e0d\u5230\u8be5\u6a21\u5757\u7684\u8bdd\uff0c\u5c31\u4f1a\u62a5\u9519\u3002",source:"@site/docs/Python/sys.md",sourceDirName:"Python",slug:"/Python/sys",permalink:"/en/docs/Python/sys",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Python/sys.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"subprocess",permalink:"/en/docs/Python/subprocess"},next:{title:"Fortran",permalink:"/en/docs/category/fortran"}},l={},i=[],h={toc:i},c="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"sys"},"sys"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"sys.path"),": \u6307\u5b9a\u6a21\u5757\u641c\u7d22\u8def\u5f84\u7684\u5217\u8868\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cpython \u5bfc\u5165\u6587\u4ef6\u6216\u8005\u6a21\u5757\uff0c\u4f1a\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"sys.path"),"\u91cc\u627e\u6a21\u5757\u7684\u8def\u5f84\u3002\u5982\u679c\u5728\u5f53\u524d\u641c\u7d22\u8def\u5f84\u5217\u8868",(0,r.kt)("inlineCode",{parentName:"p"},"sys.path"),"\u4e2d\u627e\u4e0d\u5230\u8be5\u6a21\u5757\u7684\u8bdd\uff0c\u5c31\u4f1a\u62a5\u9519\u3002"),(0,r.kt)("p",{parentName:"li"},"\u6700\u5e38\u7528\u7684\u7528\u6cd5\u5c31\u662f\u5411",(0,r.kt)("inlineCode",{parentName:"p"},"sys.path"),"\u4e2d\u6dfb\u52a0\u641c\u7d22\u8def\u5f84"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import sys\nsys.path.append(path)  # path \u4ee3\u8868\u7684\u662f\u4e00\u4e2a\u8def\u5f84\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"\u4f7f\u7528\u793a\u4f8b:"),"- \u67e5\u770b\u5f53\u524d\u641c\u7d22\u8def\u5f84 ```python In [2]: import sys",(0,r.kt)("p",{parentName:"li"},"In ","[3]",": sys.path\nOut","[3]",":\n","['/data/home/hfhuang/software/anaconda3/envs/p100/bin',\n'',\n'/opt/rh/devtoolset-8/root/usr/lib64/python2.7/site-packages',\n'/opt/rh/devtoolset-8/root/usr/lib/python2.7/site-packages',\n'/data/home/hfhuang/software/PWmatMLFF/src',\n'/data/home/hfhuang/software',\n'/data/home/hfhuang/software/anaconda3/envs/p100/lib/python38.zip',\n'/data/home/hfhuang/software/anaconda3/envs/p100/lib/python3.8',\n'/data/home/hfhuang/software/anaconda3/envs/p100/lib/python3.8/lib-dynload',\n'/data/home/hfhuang/.local/lib/python3.8/site-packages',\n'/data/home/hfhuang/software/anaconda3/envs/p100/lib/python3.8/site-packages',\n'/data/home/hfhuang/software/anaconda3/envs/p100/lib/python3.8/site-packages/op-0.0.0-py3.8-linux-x86_64.egg']"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"\n- \u610f\u601d\u662f\u5bfc\u5165python\u6a21\u5757\u65f6,\u9700\u8981\u4ece\u8fd9\u4e9b\u8def\u5f84\u4e2d\u5bfb\u627e\n\n- \u6dfb\u52a0\u65b0\u7684\u641c\u7d22\u8def\u5f84\n  - \u5047\u8bbe\u6211\u8981\u5bfc\u5165\u4e00\u4e2a\u6a21\u5757`md100`,\u8def\u5f84\u4e3a`/data/home/hfhuang/software/PWmatMLFF/src/pre_data/`,\u76f4\u63a5`import md100`,\u663e\u793a\u62a5\u9519:\n```python\nIn [4]: import md100\n---------------------------------------------------------------------------\nModuleNotFoundError                       Traceback (most recent call last)\nCell In[4], line 1\n----\x3e 1 import md100\n\nModuleNotFoundError: No module named 'md100'\n")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u6dfb\u52a0\u8def\u5f84\u540e\u91cd\u65b0 import:")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-python"},"In [5]: sys.path.append('/data/home/hfhuang/software/PWmatMLFF/src/pre_data/')\n\nIn [6]: import md100\n\nIn [7]: sys.path\nOut[7]:\n['/data/home/hfhuang/software/anaconda3/envs/p100/bin',\n  '',\n  '/opt/rh/devtoolset-8/root/usr/lib64/python2.7/site-packages',\n  '/opt/rh/devtoolset-8/root/usr/lib/python2.7/site-packages',\n  '/data/home/hfhuang/software/PWmatMLFF/src',\n  '/data/home/hfhuang/software',\n  '/data/home/hfhuang/software/anaconda3/envs/p100/lib/python38.zip',\n  '/data/home/hfhuang/software/anaconda3/envs/p100/lib/python3.8',\n  '/data/home/hfhuang/software/anaconda3/envs/p100/lib/python3.8/lib-dynload',\n  '/data/home/hfhuang/.local/lib/python3.8/site-packages',\n  '/data/home/hfhuang/software/anaconda3/envs/p100/lib/python3.8/site-packages',\n  '/data/home/hfhuang/software/anaconda3/envs/p100/lib/python3.8/site-packages/op-0.0.0-py3.8-linux-x86_64.egg',\n  '/data/home/hfhuang/software/PWmatMLFF/src/pre_data/']\n")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"sys.argv"),": \u4e00\u4e2a\u4ece\u7a0b\u5e8f\u5916\u90e8\u83b7\u53d6\u53c2\u6570\u7684\u6865\u6881\u3002\u56e0\u4e3a\u6211\u4eec\u4ece\u5916\u90e8\u53d6\u5f97\u7684\u53c2\u6570\u53ef\u4ee5\u662f\u591a\u4e2a\uff0c\u6240\u4ee5\u83b7\u5f97\u7684\u662f\u4e00\u4e2a\u5217\u8868\uff08list)\uff0c\u4e5f\u5c31\u662f\u8bf4 sys.argv \u5176\u5b9e\u53ef\u4ee5\u770b\u4f5c\u662f\u4e00\u4e2a\u5217\u8868\uff0c\u6240\u4ee5\u624d\u80fd\u7528[]\u63d0\u53d6\u5176\u4e2d\u7684\u5143\u7d20\u3002\u5176\u7b2c\u4e00\u4e2a\u5143\u7d20\u662f\u7a0b\u5e8f\u672c\u8eab\uff0c\u968f\u540e\u624d\u4f9d\u6b21\u662f\u5916\u90e8\u7ed9\u4e88\u7684\u53c2\u6570\u3002"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"\u4f7f\u7528\u793a\u4f8b:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5047\u8bbe\u5b58\u5728\u6587\u4ef6",(0,r.kt)("em",{parentName:"li"},"test.py"),", \u6267\u884c\u4ee3\u7801\u65f6\uff1a")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import sys\na=sys.argv\nb=len(sys.argv)\nprint(a)\nprint(b)\n\n>>> ['test.py',]\n    1\n")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u518d\u6b21\u8fd0\u884c\u4ee3\u7801python test.py coding:")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-python"},">>> ['test.py', 'coding']\n    2\n")))),(0,r.kt)("li",{parentName:"ol"})))}m.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkhf_log=self.webpackChunkhf_log||[]).push([[5782],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=p(t),d=o,m=f["".concat(c,".").concat(d)]||f[d]||u[d]||a;return t?r.createElement(m,i(i({ref:n},s),{},{components:t})):r.createElement(m,i({ref:n},s))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[f]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8158:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=t(7462),o=(t(7294),t(3905));const a={},i="with open() as f:",l={unversionedId:"Python/open",id:"Python/open",title:"with open() as f:",description:"\u76f8\u5173\u53c2\u6570\uff1a",source:"@site/docs/Python/open.md",sourceDirName:"Python",slug:"/Python/open",permalink:"/en/docs/Python/open",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Python/open.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"numpy",permalink:"/en/docs/Python/numpy"},next:{title:"os",permalink:"/en/docs/Python/os"}},c={},p=[],s={toc:p},f="wrapper";function u(e){let{components:n,...t}=e;return(0,o.kt)(f,(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"with-open-as-f"},"with open() as f:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"with open('./filename.txt', 'r') as f:\n   content = f.read(f)  #\u6587\u4ef6\u7684\u8bfb\u64cd\u4f5c\n\nwith open('data.txt', 'w') as f:\n   f.write('hello world')  #\u6587\u4ef6\u7684\u5199\u64cd\u4f5c\n")),(0,o.kt)("p",null,"\u76f8\u5173\u53c2\u6570\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dotnetcli"},"r:   # \u4ee5\u53ea\u8bfb\u65b9\u5f0f\u6253\u5f00\u6587\u4ef6\u3002\u6587\u4ef6\u7684\u6307\u9488\u5c06\u4f1a\u653e\u5728\u6587\u4ef6\u7684\u5f00\u5934\u3002\u8fd9\u662f**\u9ed8\u8ba4\u6a21\u5f0f**\u3002\nrb:  # \u4ee5\u4e8c\u8fdb\u5236\u683c\u5f0f\u6253\u5f00\u4e00\u4e2a\u6587\u4ef6\u7528\u4e8e\u53ea\u8bfb\u3002\u6587\u4ef6\u6307\u9488\u5c06\u4f1a\u653e\u5728\u6587\u4ef6\u7684\u5f00\u5934\u3002\u8fd9\u662f\u9ed8\u8ba4\u6a21\u5f0f\u3002\nr+:  # \u6253\u5f00\u4e00\u4e2a\u6587\u4ef6\u7528\u4e8e\u8bfb\u5199\u3002\u6587\u4ef6\u6307\u9488\u5c06\u4f1a\u653e\u5728\u6587\u4ef6\u7684\u5f00\u5934\u3002\nrb+: # \u4ee5\u4e8c\u8fdb\u5236\u683c\u5f0f\u6253\u5f00\u4e00\u4e2a\u6587\u4ef6\u7528\u4e8e\u8bfb\u5199\u3002\u6587\u4ef6\u6307\u9488\u5c06\u4f1a\u653e\u5728\u6587\u4ef6\u7684\u5f00\u5934\u3002\nw:   # \u6253\u5f00\u4e00\u4e2a\u6587\u4ef6\u53ea\u7528\u4e8e\u5199\u5165\u3002\u5982\u679c\u8be5\u6587\u4ef6\u5df2\u5b58\u5728\u5219\u5c06\u5176\u8986\u76d6\u3002\u5982\u679c\u8be5\u6587\u4ef6\u4e0d\u5b58\u5728\uff0c\u521b\u5efa\u65b0\u6587\u4ef6\u3002\nwb:  # \u4ee5\u4e8c\u8fdb\u5236\u683c\u5f0f\u6253\u5f00\u4e00\u4e2a\u6587\u4ef6\u53ea\u7528\u4e8e\u5199\u5165\u3002\u5982\u679c\u8be5\u6587\u4ef6\u5df2\u5b58\u5728\u5219\u5c06\u5176\u8986\u76d6\u3002\u5982\u679c\u8be5\u6587\u4ef6\u4e0d\u5b58\u5728\uff0c\u521b\u5efa\u65b0\u6587\u4ef6\u3002\nw+:  # \u6253\u5f00\u4e00\u4e2a\u6587\u4ef6\u7528\u4e8e\u8bfb\u5199\u3002\u5982\u679c\u8be5\u6587\u4ef6\u5df2\u5b58\u5728\u5219\u5c06\u5176\u8986\u76d6\u3002\u5982\u679c\u8be5\u6587\u4ef6\u4e0d\u5b58\u5728\uff0c\u521b\u5efa\u65b0\u6587\u4ef6\u3002\nwb+: # \u4ee5\u4e8c\u8fdb\u5236\u683c\u5f0f\u6253\u5f00\u4e00\u4e2a\u6587\u4ef6\u7528\u4e8e\u8bfb\u5199\u3002\u5982\u679c\u8be5\u6587\u4ef6\u5df2\u5b58\u5728\u5219\u5c06\u5176\u8986\u76d6\u3002\u5982\u679c\u8be5\u6587\u4ef6\u4e0d\u5b58\u5728\uff0c\u521b\u5efa\u65b0\u6587\u4ef6\u3002\na:   # \u6253\u5f00\u4e00\u4e2a\u6587\u4ef6\u7528\u4e8e\u8ffd\u52a0\u3002\u5982\u679c\u8be5\u6587\u4ef6\u5df2\u5b58\u5728\uff0c\u6587\u4ef6\u6307\u9488\u5c06\u4f1a\u653e\u5728\u6587\u4ef6\u7684\u7ed3\u5c3e\u3002\u4e5f\u5c31\u662f\u8bf4\uff0c\u65b0\u7684\u5185\u5bb9\u5c06\u4f1a\u88ab\u5199\u5165\u5230\u5df2\u6709\u5185\u5bb9\u4e4b\u540e\u3002\u5982\u679c\u8be5\u6587\u4ef6\u4e0d\u5b58\u5728\uff0c\u521b\u5efa\u65b0\u6587\u4ef6\u8fdb\u884c\u5199\u5165\u3002\nab:  # \u4ee5\u4e8c\u8fdb\u5236\u683c\u5f0f\u6253\u5f00\u4e00\u4e2a\u6587\u4ef6\u7528\u4e8e\u8ffd\u52a0\u3002\u5982\u679c\u8be5\u6587\u4ef6\u5df2\u5b58\u5728\uff0c\u6587\u4ef6\u6307\u9488\u5c06\u4f1a\u653e\u5728\u6587\u4ef6\u7684\u7ed3\u5c3e\u3002\u4e5f\u5c31\u662f\u8bf4\uff0c\u65b0\u7684\u5185\u5bb9\u5c06\u4f1a\u88ab\u5199\u5165\u5230\u5df2\u6709\u5185\u5bb9\u4e4b\u540e\u3002\u5982\u679c\u8be5\u6587\u4ef6\u4e0d\u5b58\u5728\uff0c\u521b\u5efa\u65b0\u6587\u4ef6\u8fdb\u884c\u5199\u5165\u3002\na+:  # \u6253\u5f00\u4e00\u4e2a\u6587\u4ef6\u7528\u4e8e\u8bfb\u5199\u3002\u5982\u679c\u8be5\u6587\u4ef6\u5df2\u5b58\u5728\uff0c\u6587\u4ef6\u6307\u9488\u5c06\u4f1a\u653e\u5728\u6587\u4ef6\u7684\u7ed3\u5c3e\u3002\u6587\u4ef6\u6253\u5f00\u65f6\u4f1a\u662f\u8ffd\u52a0\u6a21\u5f0f\u3002\u5982\u679c\u8be5\u6587\u4ef6\u4e0d\u5b58\u5728\uff0c\u521b\u5efa\u65b0\u6587\u4ef6\u7528\u4e8e\u8bfb\u5199\u3002\nab+: # \u4ee5\u4e8c\u8fdb\u5236\u683c\u5f0f\u6253\u5f00\u4e00\u4e2a\u6587\u4ef6\u7528\u4e8e\u8ffd\u52a0\u3002\u5982\u679c\u8be5\u6587\u4ef6\u5df2\u5b58\u5728\uff0c\u6587\u4ef6\u6307\u9488\u5c06\u4f1a\u653e\u5728\u6587\u4ef6\u7684\u7ed3\u5c3e\u3002\u5982\u679c\u8be5\u6587\u4ef6\u4e0d\u5b58\u5728\uff0c\u521b\u5efa\u65b0\u6587\u4ef6\u7528\u4e8e\u8bfb\u5199\u3002\n")),(0,o.kt)("p",null,"file \u5bf9\u8c61\u7684\u5c5e\u6027\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"file.read([size])        #\u5c06\u6587\u4ef6\u6570\u636e\u4f5c\u4e3a\u5b57\u7b26\u4e32\u8fd4\u56de\uff0c\u53ef\u9009\u53c2\u6570size\u63a7\u5236\u8bfb\u53d6\u7684\u5b57\u8282\u6570\nfile.readlines([size])   #\u8fd4\u56de\u6587\u4ef6\u4e2d\u884c\u5185\u5bb9\u7684\u5217\u8868\uff0csize\u53c2\u6570\u53ef\u9009\nfile.write(str)          #\u5c06\u5b57\u7b26\u4e32\u5199\u5165\u6587\u4ef6\nfile.writelines(strings) #\u5c06\u5b57\u7b26\u4e32\u5e8f\u5217\u5199\u5165\u6587\u4ef6\nfile.close()             #\u5173\u95ed\u6587\u4ef6\nfile.closed              #\u8868\u793a\u6587\u4ef6\u5df2\u7ecf\u88ab\u5173\u95ed\uff0c\u5426\u5219\u4e3aFalse\n\nfile.mode                #Access\u6587\u4ef6\u6253\u5f00\u65f6\u4f7f\u7528\u7684\u8bbf\u95ee\u6a21\u5f0f\nfile.encoding            #\u6587\u4ef6\u6240\u4f7f\u7528\u7684\u7f16\u7801\nfile.name                #\u6587\u4ef6\u540d\nfile.newlines            #\u672a\u8bfb\u53d6\u5230\u884c\u5206\u9694\u7b26\u65f6\u4e3aNone\uff0c\u53ea\u6709\u4e00\u79cd\u884c\u5206\u9694\u7b26\u65f6\u4e3a\u4e00\u4e2a\u5b57\u7b26\u4e32\uff0c\u5f53\u6587\u4ef6\u6709\u591a\u79cd\u7c7b\u578b\u7684\u884c\u7ed3\u675f\u7b26\u65f6\uff0c\n                         #\u5219\u4e3a\u4e00\u4e2a\u5305\u542b\u6240\u6709\u5f53\u524d\u6240\u9047\u5230\u7684\u884c\u7ed3\u675f\u7684\u5217\u8868\nfile.softspace           #\u4e3a0\u8868\u793a\u5728\u8f93\u51fa\u4e00\u6570\u636e\u540e\uff0c\u8981\u52a0\u4e0a\u4e00\u4e2a\u7a7a\u683c\u7b26\uff0c1\u8868\u793a\u4e0d\u52a0\u3002\u8fd9\u4e2a\u5c5e\u6027\u4e00\u822c\u7a0b\u5e8f\u5458\u7528\u4e0d\u7740\uff0c\u7531\u7a0b\u5e8f\u5185\u90e8\u4f7f\u7528\n")))}u.isMDXComponent=!0}}]);
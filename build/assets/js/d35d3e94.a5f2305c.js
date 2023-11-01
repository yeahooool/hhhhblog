"use strict";(self.webpackChunkhf_log=self.webpackChunkhf_log||[]).push([[4025],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>_});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=i.createContext({}),f=function(e){var n=i.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=f(e.components);return i.createElement(o.Provider,{value:n},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=f(t),m=r,_=c["".concat(o,".").concat(m)]||c[m]||p[m]||a;return t?i.createElement(_,s(s({ref:n},d),{},{components:t})):i.createElement(_,s({ref:n},d))}));function _(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,s=new Array(a);s[0]=m;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l[c]="string"==typeof e?e:r,s[1]=l;for(var f=2;f<a;f++)s[f]=t[f];return i.createElement.apply(null,s)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2519:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>f});var i=t(7462),r=(t(7294),t(3905));const a={slug:"libtorch1",title:"libtorch\u4fee\u6539\u4f7f\u7528\u8bb0\u5f55",authors:["hf"],tags:["python","libtorch"]},s=void 0,l={permalink:"/blog/libtorch1",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2023-10-31-pytorch/2023-10-31-libtorch.md",source:"@site/blog/2023-10-31-pytorch/2023-10-31-libtorch.md",title:"libtorch\u4fee\u6539\u4f7f\u7528\u8bb0\u5f55",description:"\u4f7f\u7528 libtorch \u7684\u65f6\u5019\uff0c\u53d1\u73b0\u6709\u4e9b\u5730\u65b9\u548c pytorch \u7684\u4f7f\u7528\u65b9\u5f0f\u4e0d\u4e00\u6837\uff0c\u8bb0\u5f55\u4e00\u4e0b\u3002",date:"2023-10-31T00:00:00.000Z",formattedDate:"2023\u5e7410\u670831\u65e5",tags:[{label:"python",permalink:"/blog/tags/python"},{label:"libtorch",permalink:"/blog/tags/libtorch"}],readingTime:7.955,hasTruncateMarker:!1,authors:[{name:"\u55b5s\u01ceng~",title:"\u4e00\u4ecb\u8349\u6c11",url:"https://github.com/yeahooool",imageURL:"https://z1.ax1x.com/2023/10/31/pinJO8H.jpg",key:"hf"}],frontMatter:{slug:"libtorch1",title:"libtorch\u4fee\u6539\u4f7f\u7528\u8bb0\u5f55",authors:["hf"],tags:["python","libtorch"]},prevItem:{title:"libtorch\u4fee\u6539\u4f7f\u7528\u8bb0\u5f552",permalink:"/blog/libtorch2"},nextItem:{title:"Long Blog Post",permalink:"/blog/long-blog-post"}},o={authorsImageUrls:[void 0]},f=[],d={toc:f},c="wrapper";function p(e){let{components:n,...t}=e;return(0,r.kt)(c,(0,i.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u4f7f\u7528 libtorch \u7684\u65f6\u5019\uff0c\u53d1\u73b0\u6709\u4e9b\u5730\u65b9\u548c pytorch \u7684\u4f7f\u7528\u65b9\u5f0f\u4e0d\u4e00\u6837\uff0c\u8bb0\u5f55\u4e00\u4e0b\u3002"),(0,r.kt)("p",null,"TorchScript \u6709\u4e00\u4e9b\u9650\u5236\uff0c\u7279\u522b\u662f\u5173\u4e8e\u5b83\u5982\u4f55\u5904\u7406\u548c\u63a8\u65ad\u7c7b\u578b\u7684\u3002\u6bd4\u5982\u8bf4\u4ee5\u4e0b\u51fd\u6570\u4f20\u5165\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"cfg")," \u5b57\u5178\u5305\u542b\u4e86\u4e0d\u540c\u7c7b\u578b\u7684\u503c\uff08",(0,r.kt)("inlineCode",{parentName:"p"},"List[int]"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"bool")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"str"),"\uff09\uff0c\u8fd9\u4f7f\u5f97 TorchScript \u96be\u4ee5\u5904\u7406\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"class EmbeddingNet(nn.Module):\n    def __init__(self, cfg, magic=False):\n        super(EmbeddingNet, self).__init__()\n        self.cfg = cfg\n        self.weights = nn.ParameterDict()\n\n        if cfg['bias']:\n            self.bias = nn.ParameterDict()\n        if self.cfg['resnet_dt']:\n                self.resnet_dt = nn.ParameterDict()\n        self.network_size = [1] + self.cfg['network_size']\n        if cfg[\"activation\"] == \"tanh\":\n            cfg[\"activation\"] = torch.tanh\n        else:\n            pass\n")),(0,r.kt)("p",null,"\u4e3a\u4e86\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0c\u6211\u4eec\u53ef\u4ee5\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"EmbeddingNet")," \u7c7b\u4e2d\u4f7f\u7528\u660e\u786e\u7684\u7c7b\u5c5e\u6027\u4ee3\u66ff ",(0,r.kt)("inlineCode",{parentName:"p"},"cfg")," \u5b57\u5178\uff0c\u5e76\u4e3a\u8fd9\u4e9b\u5c5e\u6027\u63d0\u4f9b\u6b63\u786e\u7684\u7c7b\u578b\u6ce8\u91ca\u3002\u8fd9\u6709\u52a9\u4e8e TorchScript \u63a8\u65ad\u8fd9\u4e9b\u5c5e\u6027\u7684\u7c7b\u578b\uff0c\u5e76\u4f7f\u4ee3\u7801\u4e0e TorchScript \u66f4\u52a0\u517c\u5bb9\u3002\u4ee5\u4e0b\u662f\u6839\u636e\u8fd9\u79cd\u7b56\u7565\u4fee\u6539\u8fc7\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"EmbeddingNet")," \u7c7b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'class EmbeddingNet(nn.Module):\n    def __init__(self,\n                 network_size: List[int],\n                 bias: bool,\n                 resnet_dt: bool,\n                 activation: str,\n                 device,\n                 magic = False):\n        super(EmbeddingNet, self).__init__()\n        self.network_size = [1] + network_size\n        self.bias_flag = bias\n        self.resnet_dt_flag = resnet_dt\n        self.activation = torch.tanh if activation == "tanh" else None\n\n        self.weights = nn.ParameterDict()\n        self.bias_dict = nn.ParameterDict() if bias else None\n        self.resnet_dt_dict = nn.ParameterDict() if resnet_dt else None\n')),(0,r.kt)("p",null,"\u8fd9\u6837\u505a\u5176\u5b9e\u5c31\u662f\u5728\u8c03\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"EmbeddingNet")," \u7684\u65f6\u5019\uff0c\u628a ",(0,r.kt)("inlineCode",{parentName:"p"},"cfg")," \u5b57\u5178\u4e2d\u7684\u503c\u4e00\u4e2a\u4e2a\u660e\u786e\u5730\u4f20\u5165 ",(0,r.kt)("inlineCode",{parentName:"p"},"EmbeddingNet")," \u7c7b\u4e2d\uff0c\u8fd9\u6837 TorchScript \u5c31\u80fd\u591f\u63a8\u65ad\u51fa\u8fd9\u4e9b\u503c\u7684\u7c7b\u578b\u4e86\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'EmbeddingNet(self.config["net_cfg"]["embedding_net"]["network_size"],\n             self.config["net_cfg"]["embedding_net"]["bias"],\n             self.config["net_cfg"]["embedding_net"]["resnet_dt"],\n             self.config["net_cfg"]["embedding_net"]["activation"],\n             self.device,\n             magic)\n')),(0,r.kt)("hr",null),(0,r.kt)("p",null,"\u540e\u7eed\u7a0b\u5e8f\u8fd0\u884c\u7684\u65f6\u5019\uff0c\u53d1\u73b0\u62a5\u9519\u4e86\uff0c\u62a5\u9519\u4fe1\u606f\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"RuntimeError:\nUnable to extract string literal index. ModuleDict indexing is only supported with string literals. For example, 'i = \"a\"; self.layers[i](x)' will fail because i is not a literal. Enumeration of ModuleDict is supported, e.g. 'for k, v in self.items(): out = v(inp)':\n  File \"/data/home/hfhuang/software/PWmatMLFF/src/model/dp_embedding.py\", line 89\n\n            if self.bias_flag:\n                hiden = torch.matmul(x, self.weights['weight' + str(i-1)]) + self.bias['bias' + str(i-1)]\n                                        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ <--- HERE\n            else:\n                hiden = torch.matmul(x, self.weights['weight' + str(i-1)])\n")),(0,r.kt)("p",null,"\u8fd9\u4e2a\u65b0\u7684\u9519\u8bef\u8868\u660e TorchScript \u5728\u5904\u7406\u5b57\u5178\u952e\u65f6\u9047\u5230\u4e86\u95ee\u9898\u3002TorchScript \u9700\u8981\u5728\u7f16\u8bd1\u65f6\u77e5\u9053\u786e\u5207\u7684\u952e\uff0c\u4f46\u5728\u4ee3\u7801\u4e2d\uff0c\u952e\u662f\u901a\u8fc7\u5b57\u7b26\u4e32\u8fde\u63a5\u52a8\u6001\u751f\u6210\u7684\uff0c\u8fd9\u4f7f\u5f97 TorchScript \u65e0\u6cd5\u5728\u7f16\u8bd1\u65f6\u786e\u5b9a\u952e\u7684\u503c\u3002"),(0,r.kt)("p",null,"\u7531\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"nn.ParameterDict")," \u672c\u8d28\u4e0a\u662f\u4e00\u4e2a\u5b57\u5178\uff0c\u5e76\u4e14\u5728 forward \u51fd\u6570\u4e2d\u4f7f\u7528\u7684\u952e\u662f\u52a8\u6001\u751f\u6210\u7684\uff0cTorchScript \u65e0\u6cd5\u5728\u7f16\u8bd1\u65f6\u89e3\u6790\u8fd9\u4e9b\u952e\u3002\u4e3a\u4e86\u514b\u670d\u8fd9\u4e2a\u95ee\u9898\uff0c\u6211\u4eec\u53ef\u4ee5\u5c1d\u8bd5\u4e0d\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"nn.ParameterDict"),"\uff0c\u800c\u662f\u76f4\u63a5\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"nn.Parameter")," \u5217\u8868\u6216 ",(0,r.kt)("inlineCode",{parentName:"p"},"nn.ModuleList")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"self.weights = nn.ParameterDict()\nself.bias_dict = nn.ParameterDict() if bias else None\nself.resnet_dt_dict = nn.ParameterDict() if resnet_dt else None\n# initial weight normalization\nfor i in range(1, len(self.network_size)):\n    wij = torch.Tensor(self.network_size[i-1], self.network_size[i])\n    normal(wij, mean=0, std=(1.0 / np.sqrt(self.network_size[i-1] + self.network_size[i])))\n    self.weights[\"weight\" + str(i-1)] = nn.Parameter(wij, requires_grad=True)\n    if self.bias_flag:\n        bias = torch.Tensor(1, self.network_size[i])\n        normal(bias, mean=0, std=1)\n        self.bias[\"bias\" + str(i-1)] = nn.Parameter(bias, requires_grad=True)\n    if self.resnet_dt_flag:\n        resnet_dt = torch.Tensor(1, self.network_size[i])\n        normal(resnet_dt, mean=1, std=0.001)\n        self.resnet_dt[\"resnet_dt\" + str(i-1)] = nn.Parameter(resnet_dt, requires_grad=True)\n\ndef forward(self, x):\n    for i in range(1, len(self.network_size)):\n        if self.bias_flag:\n            hiden = torch.matmul(x, self.weights['weight' + str(i-1)]) + self.bias['bias' + str(i-1)]\n        else:\n            hiden = torch.matmul(x, self.weights['weight' + str(i-1)])\n\n        hiden = self.activation(hiden)\n\n        if self.network_size[i] == self.network_size[i-1]:\n            if self.resnet_dt_flag:\n                x = hiden * self.resnet_dt['resnet_dt' + str(i-1)] + x\n            else:\n                x = hiden + x\n        elif self.network_size[i] == 2 * self.network_size[i-1]:\n            if self.resnet_dt_flag:\n                x = torch.cat((x, x), dim=-1)  + hiden * self.resnet_dt['resnet_dt' + str(i-1)]\n            else:\n                x = torch.cat((x, x), dim=-1)  + hiden\n        else:\n            x = hiden\n    return x\n")),(0,r.kt)("p",null,"\u4ee5\u4e0b\u662f\u4e00\u4e2a\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"nn.Parameter")," \u5217\u8868\u7684\u793a\u4f8b\uff0c\u5b83\u907f\u514d\u4e86\u5728 forward \u65b9\u6cd5\u4e2d\u4f7f\u7528\u52a8\u6001\u952e\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# \u521d\u59cb\u5316\u6743\u91cd\u548c\u504f\u5dee\u5217\u8868\nself.weights = nn.ParameterList()\nself.bias = nn.ParameterList() if bias else None\nself.resnet_dt = nn.ParameterList() if resnet_dt else None\n\n# \u521d\u59cb\u5316\u6743\u91cd\u548c\u504f\u5dee\nfor i in range(1, len(self.network_size)):\n    wij = torch.Tensor(self.network_size[i-1], self.network_size[i])\n    normal(wij, mean=0, std=(1.0 / np.sqrt(self.network_size[i-1] + self.network_size[i])))\n    self.weights.append(nn.Parameter(wij, requires_grad=True)).to('cuda:2')\n\n    if self.bias_flag:\n        bias_tensor = torch.Tensor(1, self.network_size[i])\n        normal(bias_tensor, mean=0, std=1)\n        self.bias.append(nn.Parameter(bias_tensor, requires_grad=True)).to('cuda:2')\n\n    if self.resnet_dt_flag:\n        resnet_dt = torch.Tensor(1, self.network_size[i])\n        normal(resnet_dt, mean=1, std=0.001)\n        self.resnet_dt.append(nn.Parameter(resnet_dt, requires_grad=True)).to('cuda:2')\n\ndef forward(self, x):\n    for i in range(1, len(self.network_size)):\n        weight = self.weights[i-1]\n        if self.bias_flag:\n            bias = self.bias[i-1]\n            hiden = torch.matmul(x, weight) + bias\n        else:\n            hiden = torch.matmul(x, weight)\n\n        hiden = self.activation_function(hiden)\n\n        if self.network_size[i] == self.network_size[i-1]:\n            if self.resnet_dt_flag:\n                resnet_dt = elf.resnet_dt[i-1]\n                x = hiden * resnet_dt + x\n            else:\n                x = hiden + x\n        elif self.network_size[i] == 2 * self.network_size[i-1]:\n            if self.resnet_dt_flag:\n                resnet_dt = elf.resnet_dt[i-1]\n                x = torch.cat((x, x), dim=-1) + hiden * resnet_dt\n            else:\n                x = torch.cat((x, x), dim=-1) + hiden\n        else:\n            x = hiden\n\n    return x\n")),(0,r.kt)("hr",null),(0,r.kt)("p",null,"\u540e\u7eed\u7a0b\u5e8f\u8fd0\u884c\u7684\u65f6\u5019\uff0c\u53d1\u73b0\u4ecd\u7136\u62a5\u9519\u4e86\uff0c\u62a5\u9519\u4fe1\u606f\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"RuntimeError:\nExpected integer literal for index but got a variable or non-integer. ModuleList/Sequential indexing is only supported with integer literals. For example, 'i = 4; self.layers[i](x)' will fail because i is not a literal. Enumeration is supported, e.g. 'for index, v in enumerate(self): out = v(inp)':\n  File \"/data/home/hfhuang/software/PWmatMLFF/src/model/dp_embedding.py\", line 93\n\n            weight = self.weights[i-1]\n                     ~~~~~~~~~~~~~~~~~ <--- HERE\n            if self.bias_flag:\n                bias = self.bias[i-1]\n")),(0,r.kt)("p",null,"\u8fd9\u4e2a\u9519\u8bef\u4fe1\u606f\u518d\u6b21\u7a81\u51fa\u4e86 TorchScript \u7f16\u8bd1\u8fc7\u7a0b\u4e2d\u7684\u4e00\u4e9b\u9650\u5236\u3002TorchScript \u671f\u671b\u5728\u7f16\u8bd1\u65f6\u80fd\u591f\u77e5\u9053\u6240\u6709\u7684\u7d22\u5f15\uff0c\u4f46\u5728\u4ee3\u7801\u4e2d\uff0c\u8bd5\u56fe\u4f7f\u7528\u53d8\u91cf ",(0,r.kt)("inlineCode",{parentName:"p"},"i")," \u6765\u7d22\u5f15 ",(0,r.kt)("inlineCode",{parentName:"p"},"nn.ParameterList"),"\uff0c\u8fd9\u662f TorchScript \u4e0d\u652f\u6301\u7684\u3002"),(0,r.kt)("p",null,"\u4e3a\u4e86\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0c\u6211\u4eec\u53ef\u4ee5\u7528\u4e00\u4e2a\u5c0f\u6280\u5de7\uff1a\u4f7f\u7528 Python \u5185\u7f6e\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"enumerate")," \u51fd\u6570\u6765\u904d\u5386\u6743\u91cd\u548c\u504f\u7f6e\uff0c\u8fd9\u6837\u6211\u4eec\u53ef\u4ee5\u540c\u65f6\u83b7\u5f97\u5f53\u524d\u7684\u7d22\u5f15\u548c\u5bf9\u5e94\u7684\u53c2\u6570\u3002"),(0,r.kt)("p",null,"\u56e0\u4e3a\u6709\u591a\u4e2a\u9700\u8981\u904d\u5386\u7684\u53c2\u6570\u5217\u8868\uff08",(0,r.kt)("inlineCode",{parentName:"p"},"self.weights"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"self.bias"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"self.resnet_dt"),"\uff09\uff0c\u800c TorchScript \u4e0d\u5141\u8bb8\u4f7f\u7528\u975e\u6587\u5b57\u7d22\u5f15\uff08\u5373\u53d8\u91cf\u7d22\u5f15\uff09\u3002"),(0,r.kt)("p",null,"\u90a3\u4e48\u4e00\u79cd\u53ef\u80fd\u7684\u89e3\u51b3\u65b9\u6848\u662f\u5728\u521d\u59cb\u5316\u65f6\u5c06\u8fd9\u4e9b\u6743\u91cd\u3001\u504f\u7f6e\u548c resnet_dt \u53c2\u6570\u7ec4\u5408\u6210\u4e00\u4e2a\u5355\u72ec\u7684\u6a21\u5757\u5217\u8868 (",(0,r.kt)("inlineCode",{parentName:"p"},"nn.ModuleList"),")\uff0c\u6bcf\u4e2a\u6a21\u5757\u90fd\u6709\u5b83\u9700\u8981\u7684\u53c2\u6570\u3002\u8fd9\u6837\uff0c\u53ef\u4ee5\u4e00\u6b21\u904d\u5386\u4e00\u4e2a\u6a21\u5757\uff0c\u5e76\u5728\u6bcf\u6b21\u8fed\u4ee3\u4e2d\u5e94\u7528\u903b\u8f91\u3002"),(0,r.kt)("p",null,"\u4e0b\u9762\u662f\u5982\u4f55\u505a\u5230\u8fd9\u4e00\u70b9\u7684\u793a\u4f8b\u4ee3\u7801\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'class LayerModule(nn.Module):\n    def __init__(self,\n                 weight,\n                 bias = None,\n                 resnet_dt = None):\n        super(LayerModule, self).__init__()\n        self.weight = nn.Parameter(weight, requires_grad=True)\n        self.bias = nn.Parameter(bias, requires_grad=True) if bias is not None else None\n        self.resnet_dt = nn.Parameter(resnet_dt, requires_grad=True) if resnet_dt is not None else None\n\nclass EmbeddingNet(nn.Module):\n    def __init__(self,\n                 network_size: List[int],\n                 bias: bool,\n                 resnet_dt: bool,\n                 activation: str,\n                 device,\n                 magic = False):\n        super(EmbeddingNet, self).__init__()\n        self.network_size = [1] + network_size\n        self.bias_flag = bias\n        self.resnet_dt_flag = resnet_dt\n        self.activation = torch.tanh if activation == "tanh" else None\n        # \u521b\u5efa\u6a21\u5757\u5217\u8868\n        self.layers = nn.ModuleList()\n\n        # initial weight normalization\n        for i in range(1, len(self.network_size)):\n            wij = torch.Tensor(self.network_size[i-1], self.network_size[i])\n            normal(wij, mean=0, std=(1.0 / np.sqrt(self.network_size[i-1] + self.network_size[i])))\n\n            bias = None\n            if self.bias_flag:\n                bias = torch.Tensor(1, self.network_size[i])\n                normal(bias, mean=0, std=1)\n\n            resnet_dt = None\n            if self.resnet_dt_flag:\n                resnet_dt = torch.Tensor(1, self.network_size[i])\n                normal(resnet_dt, mean=1, std=0.001)\n            # \u6dfb\u52a0\u5230\u6a21\u5757\u5217\u8868\n            self.layers.append(LayerModule(wij, bias, resnet_dt)).to(device)\n\n    def forward(self, x):\n        for i, layer in enumerate(self.layers):\n            if self.bias_flag and layer.bias is not None:\n                hiden = torch.matmul(x, layer.weight) + layer.bias\n            else:\n                hiden = torch.matmul(x, layer.weight)\n\n            hiden = self.activation(hiden)\n\n            if self.network_size[i+1] == self.network_size[i]:\n                if self.resnet_dt_flag and layer.resnet_dt is not None:\n                    x = hiden * layer.resnet_dt + x\n                else:\n                    x = hiden + x\n            elif self.network_size[i+1] == 2 * self.network_size[i]:\n                if self.resnet_dt_flag and layer.resnet_dt is not None:\n                    x = torch.cat((x, x), dim=-1)  + hiden * layer.resnet_dt\n                else:\n                    x = torch.cat((x, x), dim=-1)  + hiden\n            else:\n                x = hiden\n\n        return x\n')),(0,r.kt)("p",null,"\u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c\u6211\u4eec\u521b\u5efa\u4e86\u4e00\u4e2a\u65b0\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"LayerModule")," \u7c7b\uff0c\u5b83\u5305\u542b\u4e00\u4e2a\u5c42\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"weight"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"bias"),"\u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"resnet_dt"),"\uff08\u5982\u679c\u5b58\u5728\u7684\u8bdd\uff09\u3002\u7136\u540e\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"EmbeddingNet")," \u7c7b\u521b\u5efa\u4e86\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"nn.ModuleList"),"\uff0c\u5176\u4e2d\u5305\u542b\u4e86\u6240\u6709\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"LayerModule")," \u5b9e\u4f8b\u3002\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"forward")," \u65b9\u6cd5\u4e2d\uff0c\u6211\u4eec\u53ef\u4ee5\u65b9\u4fbf\u5730\u904d\u5386 ",(0,r.kt)("inlineCode",{parentName:"p"},"self.layers"),"\uff0c\u5e76\u5bf9\u6bcf\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"LayerModule")," \u5b9e\u4f8b\u5e94\u7528\u6211\u4eec\u7684\u903b\u8f91\u3002"),(0,r.kt)("p",null,"\u8fd9\u79cd\u65b9\u6cd5\u7684\u597d\u5904\u662f\uff0c\u5b83\u5141\u8bb8 TorchScript \u5728\u7f16\u8bd1\u65f6\u77e5\u9053\u6240\u6709\u7684\u7d22\u5f15\u548c\u7ed3\u6784\uff0c\u56e0\u4e3a\u6211\u4eec\u4e0d\u518d\u4f9d\u8d56\u4e8e\u52a8\u6001\u7684\u7d22\u5f15\u6216\u952e\u6765\u8bbf\u95ee\u6211\u4eec\u7684\u53c2\u6570\u3002"))}p.isMDXComponent=!0}}]);
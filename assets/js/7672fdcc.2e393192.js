"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[745],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),g=u(r),f=o,m=g["".concat(l,".").concat(f)]||g[f]||s[f]||i;return r?n.createElement(m,a(a({ref:t},c),{},{components:r})):n.createElement(m,a({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=g;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},817:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return u},assets:function(){return c},toc:function(){return s},default:function(){return f}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],p={slug:"argocd-with-public-helm-charts-and-private-git",title:"ArgoCD with public charts and private values.yaml",authors:"yellowmegaman",tags:["gitops"]},l=void 0,u={permalink:"/enableops/enableops.github.io/gh-pages-dev/blog/argocd-with-public-helm-charts-and-private-git",editUrl:"https://github.com/enableops/enableops.github.io/edit/main/blog/blog/2021-11-19-argocd-with-private-git/index.md",source:"@site/blog/2021-11-19-argocd-with-private-git/index.md",title:"ArgoCD with public charts and private values.yaml",description:"Using ArgoCD for proper GitOps is great. You define your workload, put it in VCS, point ArgoCD to it with proper credentials and you\u2019re good. But there is a case, when you\u2019re not the one developing some piece of software, but you do want to store it\u2019s configuration privately.",date:"2021-11-19T00:00:00.000Z",formattedDate:"November 19, 2021",tags:[{label:"gitops",permalink:"/enableops/enableops.github.io/gh-pages-dev/blog/tags/gitops"}],readingTime:2.43,truncated:!0,authors:[{name:"Dmitry Rozhdestvenskiy",title:"Internal Engineer",url:"https://github.com/yellowmegaman",imageURL:"https://github.com/yellowmegaman.png",key:"yellowmegaman"}],nextItem:{title:"What is GitOps? The ArgoCD version",permalink:"/enableops/enableops.github.io/gh-pages-dev/blog/what-is-gitops-argocd"}},c={authorsImageUrls:[void 0]},s=[],g={toc:s};function f(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Using ArgoCD for proper GitOps is great. You define your workload, put it in VCS, point ArgoCD to it with proper credentials and you\u2019re good. But there is a case, when you\u2019re not the one developing some piece of software, but you do want to store it\u2019s configuration privately."))}f.isMDXComponent=!0}}]);
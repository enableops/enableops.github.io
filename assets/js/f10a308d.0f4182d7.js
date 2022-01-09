"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[932],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return g}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),g=r,m=d["".concat(s,".").concat(g)]||d[g]||u[g]||o;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4351:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},assets:function(){return c},toc:function(){return u},default:function(){return g}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],l={slug:"what-is-gitops-argocd",title:"What is GitOps? The ArgoCD version",authors:"yellowmegaman",tags:["gitops"]},s=void 0,p={permalink:"/enableops/enableops.github.io/gh-pages-dev/blog/what-is-gitops-argocd",source:"@site/blog/2021-11-18-what-is-gitops-argocd/index.md",title:"What is GitOps? The ArgoCD version",description:"GitOps is an approach. It\u2019s not a product, not a tool. You can deliver software updates to the cloud, to Tesla car or hobby project based on Raspberry Pi with the help of GitOps.",date:"2021-11-18T00:00:00.000Z",formattedDate:"November 18, 2021",tags:[{label:"gitops",permalink:"/enableops/enableops.github.io/gh-pages-dev/blog/tags/gitops"}],readingTime:4.745,truncated:!0,authors:[{name:"Dmitry Rozhdestvenskiy",title:"Internal Engineer",url:"https://github.com/yellowmegaman",imageURL:"https://github.com/yellowmegaman.png",key:"yellowmegaman"}],prevItem:{title:"ArgoCD with public charts and private values.yaml",permalink:"/enableops/enableops.github.io/gh-pages-dev/blog/argocd-with-public-helm-charts-and-private-git"},nextItem:{title:"Getting started with Google Cloud & Terraform",permalink:"/enableops/enableops.github.io/gh-pages-dev/blog/getting-started-with-google-cloud-terraform"}},c={authorsImageUrls:[void 0]},u=[{value:"Moving parts",id:"moving-parts",children:[],level:2},{value:"Benefits",id:"benefits",children:[],level:2},{value:"ArgoCD",id:"argocd",children:[],level:2},{value:"Deployment",id:"deployment",children:[],level:2},{value:"Git part",id:"git-part",children:[],level:2}],d={toc:u};function g(e){var t=e.components,l=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"GitOps is an approach. It\u2019s not a product, not a tool. You can deliver software updates to the cloud, to Tesla car or hobby project based on Raspberry Pi with the help of GitOps."),(0,o.kt)("p",null,"Main thing to note here \u2013 unlike how operations were carried out in the past, with GitOps we can be sure not to miss ",(0,o.kt)("em",{parentName:"p"},"how")," some operation was performed, because everything is stored (in git) now."),(0,o.kt)("h2",{id:"moving-parts"},"Moving parts"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"application or automation code"),(0,o.kt)("li",{parentName:"ul"},"VCS to store this code in"),(0,o.kt)("li",{parentName:"ul"},"GitOps component which is performing an update"),(0,o.kt)("li",{parentName:"ul"},"access to the environment which needs to be updated")),(0,o.kt)("p",null,"General scheme is quite simple \u2013 you change something, update is got deployed automatically somewhere. Forget about old-school uploading of artefacts to remote host and running some commands afterwards.\n",(0,o.kt)("img",{alt:"Moving parts",src:n(791).Z})),(0,o.kt)("h2",{id:"benefits"},"Benefits"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Deployment change is peer-reviewed"),(0,o.kt)("li",{parentName:"ul"},"Full audit-log of actions performed against environment are stored in git and versioned"),(0,o.kt)("li",{parentName:"ul"},"No need for personal access to environments, only the GitOps component has rights to perform update, on the behalf of programmatic means access like ServiceAccount"),(0,o.kt)("li",{parentName:"ul"},"Easy to track changes from last deployment"),(0,o.kt)("li",{parentName:"ul"},"Easy rollback to the previous version"),(0,o.kt)("li",{parentName:"ul"},"Nice web UI \ud83d\ude01")),(0,o.kt)("h2",{id:"argocd"},"ArgoCD"),(0,o.kt)("p",null,"Let\u2019s install ArgoCD and connect it to GKE cluster"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="terminal"',title:'"terminal"'},"helm repo add argo <https://argoproj.github.io/argo-helm>\nhelm repo update\nhelm install argocd --create-namespace \\\\\n                      --namespace argocd \\\\\n                      --set dex.enabled=false argo/argo-cd\n")),(0,o.kt)("p",null,"For this example we\u2019re skipping ArgoCD DEX component, because installation is performed locally on docker for desktop kubernetes."),(0,o.kt)("p",null,"Now we can get the password for admin user:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="terminal"',title:'"terminal"'},'kubectl -n argocd get secret argocd-initial-admin-secret \\\\\n        -o jsonpath="{.data.password}" | base64 -d\n')),(0,o.kt)("p",null,"Port-forward ArgoCD server to access it locally:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="terminal"',title:'"terminal"'},"kubectl port-forward service/argocd-server -n argocd 8080:443\n")),(0,o.kt)("p",null,"Now we can install ArgoCD CLI to add remove clusters. We also do need to authenticate ourselves against our local install. Use admin password from above:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ brew install argocd\n$ argocd login 127.0.0.1:8080\nWARNING: server certificate had error: x509: cannot validate certificate for 127.0.0.1 because it doesn't contain any IP SANs. Proceed insecurely (y/n)? y\nUsername: admin\nPassword:\n'admin:login' logged in successfully\nContext '127.0.0.1:8080' updated\n$ argocd cluster list\nSERVER                          NAME        VERSION  STATUS   MESSAGE\n<https://kubernetes.default.svc>  in-cluster           Unknown  Cluster has no application and not being monitored.\n")),(0,o.kt)("p",null,"We can see now that ArgoCD is authenticated and shows the cluster which it is deployed into."),(0,o.kt)("p",null,"Now let's add some remote GKE cluster from Google Cloud:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'$ gcloud container clusters get-credentials production --zone us-central1-f --project someproject-1337\nFetching cluster endpoint and auth data.\nkubeconfig entry generated for production.\n$ kubectl config get-contexts\nCURRENT   NAME                                          CLUSTER                                         AUTHINFO                                     NAMESPACE\n          docker-desktop                                docker-desktop                                  docker-desktop\n*         gke_someproject-1337_us-central1-f_production gke_someproject-1337_us-central1-f_production   gke_someproject-1337_us-central1-f_production\n\n\n$ export GOOGLE_CREDENTIALS=terraform.json # we specify our ServiceAccount key\n$ argocd cluster add gke_someproject-1337_us-central1-f_production\nWARNING: This will create a service account `argocd-manager` on the cluster referenced by context `gke_someproject-1337_us-central1-f_argocd` with full cluster level admin privileges. Do you want to continue [y/N]? y\nINFO[0004] ClusterRole "argocd-manager-role" created\nINFO[0005] ClusterRoleBinding "argocd-manager-role-binding" updated\nCluster \'https://555.555.555.555\' added\n\n$ argocd cluster list\nSERVER                          NAME                                             VERSION  STATUS   MESSAGE\nhttps://555.555.555.555         gke_someproject-1337_us-central1-f_production    Unknown  Cluster has no application and not being monitored.\nhttps://kubernetes.default.svc  in-cluster                                       Unknown  Cluster has no application and not being monitored.\n$\n')),(0,o.kt)("p",null,"What happened here?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"we got credentials for GKE cluster with the help of gcloud"),(0,o.kt)("li",{parentName:"ul"},"looked at available kubectl contexts"),(0,o.kt)("li",{parentName:"ul"},"exported ServiceAccount key location as env variable"),(0,o.kt)("li",{parentName:"ul"},"added cluster to ArgoCD"),(0,o.kt)("li",{parentName:"ul"},"checked that it was added properly")),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Important thing to note here. We're using local credentials only once, after that ArgoCD creates it's own k8s ServiceAccount in target cluster, this way authentication JWT token is not expiring, as it is with gcloud."))),(0,o.kt)("h2",{id:"deployment"},"Deployment"),(0,o.kt)("p",null,"Now we can deploy our app. We gonna skip VCS part for this example, it requires additional configuration for ArgoCD private repos. You can check it out ",(0,o.kt)("a",{parentName:"p",href:"https://argo-cd.readthedocs.io/en/release-1.8/user-guide/private-repositories/"},"here"),"."),(0,o.kt)("p",null,"Save this example Traefik deployment manifest to disk:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="Application-traefik.yaml"',title:'"Application-traefik.yaml"'},'---\napiVersion: argoproj.io/v1alpha1\nkind: Application\nmetadata:\n  name: traefik\nspec:\n  destination:\n    namespace: traefik\n    server: <https://555.555.555.555>\n  project: default\n  syncPolicy:\n    automated:\n      prune: true\n      selfHeal: true\n    syncOptions:\n      - Validate=true\n      - CreateNamespace=true\n  source:\n    path: \'\'\n    repoURL: <https://helm.traefik.io/traefik>\n    chart: "traefik"\n    targetRevision: "10.6.2"\n    helm:\n      parameters:\n      - name: service.type\n        value: "ClusterIP"\n')),(0,o.kt)("p",null,"Now we are applying it locally to our docker-desktop cluster where ArgoCD is resided. It, in turn will sync this workload to remote GKE cluster"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl -n argocd apply -f Application-traefik.yaml\n$ kubectl config use-context gke_someproject-1337_us-central1-f_production\n$ kubectl -n traefik get po\nNAME                       READY   STATUS    RESTARTS   AGE\ntraefik-65c68d8dd7-qzmzp   0/1     Running   0          7s\n$ \n")),(0,o.kt)("p",null,"Let\u2019s check the web UI of our ArgoCD."),(0,o.kt)("p",null,"Open ",(0,o.kt)("a",{parentName:"p",href:"https://127.0.0.1:8080"},"https://127.0.0.1:8080")," and log in. Certificate will be invalid, but that\u2019s OK for local testing installation. Provide admin password obtained in previous step.\n",(0,o.kt)("img",{alt:"Screenshot of app in ArgoCD",src:n(8956).Z})),(0,o.kt)("p",null,"Application details:\n",(0,o.kt)("img",{alt:"Screenshot of app details in ArgoCD",src:n(218).Z})),(0,o.kt)("p",null,"Now we have firm connection between ArgoCD GitOps component and GKE cluster, woot!"),(0,o.kt)("h2",{id:"git-part"},"Git part"),(0,o.kt)("p",null,"We can now proceed with configuration of private repos to pull changes from git, or apply changes locally."),(0,o.kt)("p",null,"We need to place repository secret (e.g. private key) in kubernetes secrets in argocd namespace."),(0,o.kt)("p",null,"After that we can apply private repo configuration:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"argocd repo add git@github.com:argoproj/argocd-example-apps.git \\\\\n                --ssh-private-key-path ~/.ssh/id_rsa\n")),(0,o.kt)("p",null,"Define the app:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'---\napiVersion: argoproj.io/v1alpha1\nkind: Application\nmetadata:\n  name: guestbook\n  namespace: argocd\nspec:\n  destination:\n    namespace: guestbook\n    server: <https://555.555.555.555>\n  project: default\n  syncPolicy:\n    automated:\n      prune: true\n      selfHeal: true\n    syncOptions:\n      - Validate=true\n      - CreateNamespace=true\n  source:\n    path: "guestbook"\n    repoURL: <https://github.com/argoproj/argocd-example-apps>\n    targetRevision: HEAD\n')),(0,o.kt)("p",null,"Check target cluster:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl -n guestbook get po\nNAME                            READY   STATUS    RESTARTS   AGE\nguestbook-ui-85985d774c-ttn2p   1/1     Running   0          23s\n$ \n")),(0,o.kt)("p",null,"From now on you can deploy applications from your private git repo. When you modify the files in ",(0,o.kt)("inlineCode",{parentName:"p"},"targetRevision")," location, ArgoCD will update your cluster. Woot!"))}g.isMDXComponent=!0},218:function(e,t,n){t.Z=n.p+"assets/images/app-details-eb3085a1ce1315ecb1262627d7fb648b.png"},8956:function(e,t,n){t.Z=n.p+"assets/images/app-view-421c533ba645f3bc41ea4ab2b0ce91d3.png"},791:function(e,t,n){t.Z=n.p+"assets/images/moving-parts-d00d5284e790fb665a89573f65e26f27.png"}}]);
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[470],{3905:function(e,t,o){o.d(t,{Zo:function(){return u},kt:function(){return g}});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var c=r.createContext({}),s=function(e){var t=r.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(o),g=n,m=p["".concat(c,".").concat(g)]||p[g]||d[g]||a;return o?r.createElement(m,l(l({ref:t},u),{},{components:o})):r.createElement(m,l({ref:t},u))}));function g(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,l=new Array(a);l[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var s=2;s<a;s++)l[s]=o[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,o)}p.displayName="MDXCreateElement"},3720:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return s},assets:function(){return u},toc:function(){return d},default:function(){return g}});var r=o(7462),n=o(3366),a=(o(7294),o(3905)),l=["components"],i={slug:"getting-started-with-google-cloud-terraform",title:"Getting started with Google Cloud & Terraform",authors:"yellowmegaman",tags:["getting_started"]},c=void 0,s={permalink:"/enableops/enableops.github.io/gh-pages-dev/blog/getting-started-with-google-cloud-terraform",editUrl:"https://github.com/enableops/enableops.github.io/edit/main/blog/blog/2021-11-17-getting-started-with-google-cloud-terraform/index.md",source:"@site/blog/2021-11-17-getting-started-with-google-cloud-terraform/index.md",title:"Getting started with Google Cloud & Terraform",description:"Thousands of startups start to use cloud every day and it\u2019s truly a great way to start building your first infrastructure for new project.",date:"2021-11-17T00:00:00.000Z",formattedDate:"November 17, 2021",tags:[{label:"getting_started",permalink:"/enableops/enableops.github.io/gh-pages-dev/blog/tags/getting-started"}],readingTime:3.935,truncated:!0,authors:[{name:"Dmitry Rozhdestvenskiy",title:"Internal Engineer",url:"https://github.com/yellowmegaman",imageURL:"https://github.com/yellowmegaman.png",key:"yellowmegaman"}],prevItem:{title:"What is GitOps? The ArgoCD version",permalink:"/enableops/enableops.github.io/gh-pages-dev/blog/what-is-gitops-argocd"}},u={authorsImageUrls:[void 0]},d=[{value:"Start using Google Cloud",id:"start-using-google-cloud",children:[],level:2},{value:"Download and install gcloud (Google Cloud SDK)",id:"download-and-install-gcloud-google-cloud-sdk",children:[],level:2},{value:"Creating custom role and ServiceAccount for terraform",id:"creating-custom-role-and-serviceaccount-for-terraform",children:[],level:2},{value:"Creating the ServiceAccount key",id:"creating-the-serviceaccount-key",children:[],level:2}],p={toc:d};function g(e){var t=e.components,i=(0,n.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Thousands of startups start to use cloud every day and it\u2019s truly a great way to start building your first infrastructure for new project."),(0,a.kt)("p",null,"Most of the time people that are delegated with such tasks are very excited and also are quite limited in time. But the cloud is ever-expanding system with millions of features and some not really evident defaults. It is really hard to understand everything from first go, if you are not some 10 YOE professional."),(0,a.kt)("p",null,"But the most important thing \u2013 it\u2019s incredibly hard to repeat all actions after something complex has already been set up. This is the moment when IaC (Infrastructure as code) comes in handy! And the best choice for that nowadays is Hashicorp Terraform. It has big community, lot\u2019s of official modules and it is very stable and extendable."),(0,a.kt)("h2",{id:"start-using-google-cloud"},"Start using Google Cloud"),(0,a.kt)("p",null,"Whenever you are using personal account, or Google Workspace was already set up, actions are basically identical. You can head over to ",(0,a.kt)("a",{parentName:"p",href:"http://cloud.google.com/"},"http://cloud.google.com/")," to activate your cloud account. You may also want to activate your free trial, usually a message appears at the top of the page or in the center.\n",(0,a.kt)("img",{alt:"Google Cloud",src:o(9252).Z})),(0,a.kt)("p",null,"If you chose to proceed with this great offer, or decided to skip it for now, you are just few steps away from getting proper IaC going with your new cloud account."),(0,a.kt)("h2",{id:"download-and-install-gcloud-google-cloud-sdk"},"Download and install gcloud (Google Cloud SDK)"),(0,a.kt)("p",null,"Mac users can user ",(0,a.kt)("a",{parentName:"p",href:"https://brew.sh/"},"brew")," for that, otherwise you can follow download instructions ",(0,a.kt)("a",{parentName:"p",href:"https://cloud.google.com/sdk/docs/install"},"here"),"."),(0,a.kt)("p",null,"Brew installation example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"brew install google-cloud-sdk\n")),(0,a.kt)("p",null,"After installation is complete it\u2019s time to authenticate your gcloud cli"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"gcloud auth login\n")),(0,a.kt)("p",null,"New tab in your browser will open to choose the account to use with gcloud. Important note here \u2013 you need to choose the proper account which was used to activate your new Google Cloud.\n",(0,a.kt)("img",{alt:"Google Cloud Sign In",src:o(7064).Z})),(0,a.kt)("p",null,"Now that we have gcloud authenticated, we should set the project id. Project id can be found on main Dashboard page of google cloud.\n",(0,a.kt)("img",{alt:"Google Cloud Project Info",src:o(5657).Z})),(0,a.kt)("p",null,"Now that we have that id, let\u2019s set it for gcloud and verify our newly added auth:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ gcloud config set project someproject-1337\nUpdated property [core/project].\nyellowmegaman@Dmitrys-MacBook-Air ~ % gcloud auth list\n  Credentialed Accounts\nACTIVE  ACCOUNT\n*       someone@somedomain.tld\nTo set the active account, run:\n    $ gcloud config set account `ACCOUNT`\n$\n")),(0,a.kt)("p",null,"Awesome!"),(0,a.kt)("h2",{id:"creating-custom-role-and-serviceaccount-for-terraform"},"Creating custom role and ServiceAccount for terraform"),(0,a.kt)("p",null,"Terraform requires a way to interact with any cloud or service. With Google Cloud the most preferred way is ServiceAccount which is granted some roles to perform actions."),(0,a.kt)("p",null,"First we create the role. We want to have a role that is permitted to interact with container clusters (GKE), cloud storage buckets (GCS), and create/update/delete ServiceAccounts. You can always add more permissions, or remove them."),(0,a.kt)("p",null,"Save this yaml code to your disk, like ",(0,a.kt)("inlineCode",{parentName:"p"},"terraform-Role.yaml")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="terraform-Role.yaml"',title:'"terraform-Role.yaml"'},"---\ntitle: terraform\nstage: GA\ndescription: terraform IaC role\nincludedPermissions:\n  - compute.instanceGroupManagers.get\n  - container.clusters.create\n  - container.clusters.delete\n  - container.clusters.get\n  - container.clusters.getCredentials\n  - container.nodes.get\n  - container.nodes.list\n  - container.operations.get\n  - iam.serviceAccounts.create\n  - iam.serviceAccounts.delete\n  - iam.serviceAccounts.get\n  - iam.serviceAccounts.getAccessToken\n  - iam.serviceAccounts.list\n  - iam.serviceAccounts.update\n  - storage.buckets.create\n  - storage.buckets.delete\n  - storage.buckets.get\n  - storage.objects.create\n  - storage.objects.delete\n  - storage.objects.get\n  - storage.objects.getIamPolicy\n  - storage.objects.list\n  - storage.objects.setIamPolicy\n  - storage.objects.update\n")),(0,a.kt)("p",null,"Now we can create the role (replace ",(0,a.kt)("inlineCode",{parentName:"p"},"<project_id>")," with your value):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'gcloud iam roles create "terraform" --project="<project_id>" \\\\\n                                    --file=terraform-Role.yaml\n')),(0,a.kt)("p",null,"Let\u2019s create terraform ServiceAccount and couple of role bindings (replace ",(0,a.kt)("inlineCode",{parentName:"p"},"<project_id>")," with your value):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'$ gcloud iam service-accounts create "terraform" \\\\\n                --description="Terraform IaC service account" \\\\\n                --display-name="terraform"\n$ gcloud projects add-iam-policy-binding "<project_id>" \\\\\n   --member="serviceAccount:terraform@<project_id>.iam.gserviceaccount.com" \\\\\n   --role="projects/<project_id>/roles/terraform"\n$ gcloud projects add-iam-policy-binding "<project_id>" \\\\\n   --member="serviceAccount:terraform@<project_id>.iam.gserviceaccount.com" \\\\\n   --role="roles/iam.serviceAccountUser"\n$ gcloud projects add-iam-policy-binding "<project_id>" \\\\\n   --member="serviceAccount:terraform@<project_id>.iam.gserviceaccount.com" \\\\\n   --role="roles/container.admin"\n')),(0,a.kt)("p",null,"Now we can head over to ",(0,a.kt)("a",{parentName:"p",href:"https://console.cloud.google.com/iam-admin/iam"},"IAM & Admin")," in Google Cloud to verify the results:\n",(0,a.kt)("img",{alt:"Google Cloud IAM &amp; Admin",src:o(5793).Z})),(0,a.kt)("h2",{id:"creating-the-serviceaccount-key"},"Creating the ServiceAccount key"),(0,a.kt)("p",null,"Now that we have a ServiceAccount with proper roles attached, we need to obtain ServiceAccount key to provide it to terraform. Let\u2019s create one (replace ",(0,a.kt)("inlineCode",{parentName:"p"},"<project_id>")," with your value):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"gcloud iam service-accounts keys create terraform.json \\\\\n    --iam-account=terraform@<project_id>.iam.gserviceaccount.com\n")),(0,a.kt)("p",null,"After running this command you will have ServiceAccount json key that can be used for IaC with terraform and for many other services that do work with Google Cloud."),(0,a.kt)("p",null,"To use it with terraform you can just export env variable:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"export GOOGLE_CREDENTIALS=<path_to_your_key.json>\n")),(0,a.kt)("p",null,"What the benefits of using IaC from the start?"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"solid backup of configuration of all you infrastructure parts"),(0,a.kt)("li",{parentName:"ul"},"audit log of actions (if infra code is managed in VCS)"),(0,a.kt)("li",{parentName:"ul"},"predictable state of infrastructure"),(0,a.kt)("li",{parentName:"ul"},"hand-picked permissions, not just ",(0,a.kt)("inlineCode",{parentName:"li"},"Owner")," role assigned to terraform as seen in many companies"),(0,a.kt)("li",{parentName:"ul"},"better understanding what\u2019s happening, instead of clicking random things on Web UI")))}g.isMDXComponent=!0},5793:function(e,t,o){t.Z=o.p+"assets/images/google-cloud-iam-7d1c1ce414d757e79492563e408bb185.png"},5657:function(e,t,o){t.Z=o.p+"assets/images/google-cloud-project-aed18f84b043becf2d4edb4c3f6a9526.png"},7064:function(e,t,o){t.Z=o.p+"assets/images/google-cloud-signin-288fd3eb283587663fed267f391b1d21.png"},9252:function(e,t,o){t.Z=o.p+"assets/images/google-cloud-410293a525ce3613a92913130c2b94a6.png"}}]);
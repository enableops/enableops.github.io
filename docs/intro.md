---
sidebar_position: 1
title: Setup guide
---
import {
  SignUpController,
  LoginStep,
  SelectStep,
  ConfigureStep,
  DeployStep,
} from "../src/components/getting-started";
import YouTube from 'react-youtube';
export const controller = new SignUpController();

From zero to 🚀 fully operational cloud environment for production (GitOps) and development (CI/CD) without prior DevOps knowledge.

## ☁️ Check your Cloud project

First things first - the cloud! You have to make sure you have an access to already created **GCP** (Google Cloud Platform) Project. This is our main requirement for you, and we don't mind if it will be project with lots of people and data there or just freshly created one.

GCP can be a bit owerwhelming at start, so here is an introductionary video about it.

<YouTube videoId="GKEk1FzAN1A" opts={{width:"100%", height: '400'}}/>

Don't worry, you don't neet to be a GCP genius to use enableOps, you just need project and we will get you covered from there.  

:::caution Billing Warning

Make sure you have your billing in project set up. Otherwise we will not be able to activate Kubernetes API and deployment will fail.

:::

## ⛳️ Authentification

*Phew, now with the hardest part behind us we can finilize the setup. Seriously, we have only 3 small steps and 1 copy-paste shell command left.*

**We are security first** = we won't be asking you for direct access to your cluster and it's you who will be running deployment commands, for this you (and your project) will need an access to our modules, therefore we need to authenticate your `google accout` and read a `list of projects` available to you. 

<LoginStep controller={controller}/>

<br />

:::tip

We need this data only for the configuration and deployment process, we won't store any of your personal information on our servers. Feel free to [clear us out from permissions](https://myaccount.google.com/permissions) after setup.

:::

## 🎖 Select project

Choose the project which you will be deploying your cluster to. Make sure you have all the rights to enable APIs and add Service accounts. The admin level rights will do. 

<SelectStep controller={controller}/>

## 🧬 Configure enableOps

Now just hit the button, sit back and relax. We will need some moments to compile configuration files for your project to let you deploy it with one line in shell. 

<ConfigureStep controller={controller}/>

## 🚀 Deploy your cluster

Clicking this big green button will start your personal and secure Google Cloud Shell environment where you will be able to deploy the cluster. Don't worry, once you will open Google Cloud Shell you will see additional tutorial from us. 

<DeployStep controller={controller}/>

<br />
<br />

:::caution use the same account

Make sure you are usining the same Google account when opening Google Cloud Shell as you used when signing in on this page. 

:::

*By the way, [Google Cloud Shell is a very handy service](https://cloud.google.com/shell#features), it's free and will give you a quick way to try new things without installing anything on your local machine. We recommend to have it in your sleeve.*  



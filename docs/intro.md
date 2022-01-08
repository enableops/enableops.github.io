---
sidebar_position: 1
title: Getting started 
---
import { StatusUpdater, SigninStep, SelectStep } from '../src/components/getting-started';
export const statusUpdater = new StatusUpdater();

Let's start with **enableOps in less than 5 minutes**.

## ⛅️ Check your Cloud project

Make sure you have Google Project Set up with billing info. If you still don't - [follow official guide](https://cloud.google.com/resource-manager/docs/creating-managing-projects).

## ⛳️ Sign in to enableOps

Get started by signing into our service. We will need your account to provide you with an access to cluster configuration. Also we need to make sure that you have an access to propper projects. 

<SigninStep statusUpdater={statusUpdater}/>

## 🎖 Select project

Select the project

<SelectStep statusUpdater={statusUpdater}/>

## 🧬 Configure enableOps

## 🚀 Deploy your cluster

Open Google Cloud Shell at [https://cloud.google.com/shell](https://cloud.google.com/shell) using account with email mentioned in the form. 




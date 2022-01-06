---
sidebar_position: 1
---
import SignInButton from '../src/components/SignInButton';


# Getting started

Let's start with **enableOps in less than 5 minutes**.

## 0️⃣ Make sure you have Google Cloud project

If you still don't - [follow official guide](https://cloud.google.com/resource-manager/docs/creating-managing-projects).

## 1️⃣ Register

Get started by signing into our service. We will need your account to provide you with an access to cluster configuration. Also we need to make sure that you have an access to propper projects. 

<SignInButton />

## 2️⃣ Choose project

Select the project

<SignInButton />

## Go to Google Cloud Shell

Open Google Cloud Shell at [https://cloud.google.com/shell](https://cloud.google.com/shell) using account with email mentioned in the form. 

## Download tutorial

Paste this line into the cloud shell

```shell
cloudshell_open --repo_url "https://source.developers.google.com/p/enableops/r/init" \
  --print_file "motd" --page "shell" --tutorial "install.md" \
  --git_branch "main" --force_new_clone
```

## Follow the tutorial in Cloud Shell

Just like that.



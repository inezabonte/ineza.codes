---
title: "How to get GitHub notifications on your Discord server"
date: "2021-05-01"
tags: ["github", "tutorial", "webhooks", "discord"]
cover_image: "https://res.cloudinary.com/tizzertuna/image/upload/v1622756559/Articles/iPhone_12_12_Pro_2_2x_xngvv5.png"
---

GitHub provides us with a way to allow other applications such as discord to connect it and receive POST requests whenever any action is done on your repository.

This can be useful if you find the email notifications not as instant as you'd want them to be.

### Prerequisites

- You need to have a GitHub account with a repository.
- You need to have a discord server where we will add the webhook.

### 1. Create the webhook

A webhook is basically a link that will allow other applications to post into discord.
To create a webhook, head into your `server settings` => `integrations` => `New webhook`
![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ks08crvkapm0zzdke827.png)
You can give your webhook a name and also choose which channel it will be posting to. You can click on `Copy Webhook URL` to copy the link which we are going to use on our GitHub repository.

### 2. Add Discord webhook to GitHub

After creating the webhook the next thing is to add it to your github repository from which you would like to get notifications.

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/gedao8zfs6gsagk4d6nb.png)

Head over to your repo then `settings` => `Webhooks` => `Add webhook`

Paste the link we copied earlier from discord  in the `Payload URL` and make sure to add `/github` at the end.

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/7rl3nyalji68p6ku8s2p.png)

Set the `Content type` to `application/json` and finally choose the events which should trigger the webhook. Personally, I want everything.

After you are done you can click the green button at the bottom labeled `Add webhook` to complete the process.

If you have done it correctly you should receive a similar notification to this;
![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/w5zjnmz8qm2f4n0c04qm.png)

### 3. Test the webhook

To test the webhook we can perform a simple action such as creating an issue on the repo which we just added the webhook.
![A screenshot of creating a test issue](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/3lu23pr35fzd0uhkff0f.png)

Upon creating the issue. You should immediately receive a notification from discord on whatever device you have installed it on.
![Screen Shot 2021-05-01 at 13.50.28](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/hkpkhejr84npp7sj37aw.png)

It will work the same way when pushing commits, creating PRs ...etc

Thank You for reading❤️.

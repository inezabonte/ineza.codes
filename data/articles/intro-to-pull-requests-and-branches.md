---
title: "Introduction to Branches and Pull Requests for Beginners."
date: "2020-08-23"
tags: ["beginners", "github", "git"]
---

Branches and pull requests are essential to the GitHub workflow, they help developers work together in a better and organised way. If you've never heard of them that's okay. My goal in this tutorial is to help you understand what they are and how they are used when working on repositories.

### **What are Branches?**

A branch simply put is an isolated environment that is created from the **master** branch that allows you to experiment on new ideas or makes bug fixes without affecting the master branch or being affected by the changes committed by others to the same repository.

You can use branches to safely develop and test new features. When the features are ready to be deployed, a `pull request` is opened to review the changes you made.

### **What are pull requests?**

A pull request is a feature that allows you to inform others of the changes you've made to the repository through your branch.
It allows you to share screenshots and general ideas or seek help and advice when you're stuck.

The repository owner reviews the work you've done on your branch and they can get back to you either for more info about the changes you made or point out a bug you may have missed.
Once the pull request has been reviewed and has passed all the tests. The branch can then be merged with the master branch.

### **Creating a branch**

In order to create a branch. Make sure you are signed in into your GitHub account. Navigate to the repository you wish to create a branch in and click on the `master` button.

To create a new branch, type the name of your new branch in the space provided. For this tutorial I'll call mine `readme-edits` since I'll be editing the README document.

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/0ak9qx4n538czpyigdu7.png)

Hit **enter**  and your repository will switch to the new branch. The button that was written *master* has now changed to *readme-edits* this shows us which branch we are currently working on. To switch back to master; click on the `readme-edits` button then select *master*.

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/mfti4zeq8qqixwn61hsn.png)

The black checkmark ✔️ is also another way to know which branch you are currently working on.

### **Making Changes**

Open the README file from the `readme-edits` branch and make some changes.

After editing your document, add a *commit message*, you can also add an optional *description*, then click on **commit changes**

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/n4qzrvmqrn01xwwbdhzk.png)

### **Opening a Pull Request**

After your changes have been committed, we can now open a pull request, so that the repository owner (in this case it's you) can review your work and merge it with the master branch.

In the top pane click on the `pull request` tab.
![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/i0pg0ttk6fidzxgm88gf.png)

Immediately after opening you will receive a prompt to `Compare & pull request` since GitHub has noticed new changes that are not in the master branch. click on the **Compare & pull request** button.

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/2s2ioedaxkjc3ayy8z42.png)

After clicking the button you will see this window below, here you can add a more in-depth explanation of the changes you made, you can also add media such as images and emojis using [markdown](https://www.markdownguide.org/getting-started/). This will be visible to those reviewing your pull request. Finally click on `create pull request`.

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/g2vrby8suc4ayquydnj8.png)

Once you've created your pull requests, you are free to make changes to files within the repository in the same branch and all your commits will be added to your pull request, the changes will be visible within the "Files changed" tab.

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/2ojggvhwbxlma1hi5gpw.png)

### **Merging a pull request**

Once your changes have been verified, now it's time to merge them into your master branch. Pull Requests just like commits are searchable, they let you go back in time to understand why some changes were made and how it happened.

Click `Merge pull request` then click `confirm`. Seeing the box down below confirms that it has been merged. You can choose to delete the branch as well if you won't be needing it anymore.
![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/mrhpf94xfxbmmm9fqmzo.png)

If you switch back to the master branch you will see the updated changes.

Here is a diagram that summarises the steps undertaken when opening a pull request.

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/cupyitq4w3xzhf4og1ml.png)

And these are the basics you need to know when creating branches and opening pull requests.

Thank You for Reading 😊

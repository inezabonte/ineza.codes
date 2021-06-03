---
title: 'How to use GitHub and Git for Beginners'
date: '2020-08-15'
tags: ["github", "git", "beginners"]
cover_image: "https://res.cloudinary.com/tizzertuna/image/upload/v1622757998/Articles/article_2_2x_mqkaqj.png"
---

If you are a beginner in the field of programming you must have come across the term `GitHub` and `Git` from blogs or even tutorials and wondered what they are🤔, in this blog I intend to explain them and hopefully you will get an idea of what they are and how they work.

### **What is GitHub?**

GitHub is a code hosting platform for `version control` and `collaboration`. Simply put, GitHub is a cloud storage platform like Google Drive or OneDrive but is built and centred around code.

Apart from just storing your code. GitHub allows you to collaborate with other programmers on projects simultaneously and remotely making it accessible from anywhere in the world.

In my intro I used the word `version control`. And this is where Git comes in. GitHub not only just stores your code. It keeps track of every single change you make and commit, that way if you ever need to go back to a specific point in time of your project you can easily do so.

### **What is Git?**

Git is a version control system(VCS), it is in charge of tracking your source code or files for any changes made during development.
Git operates locally, therefore has to be installed and linked with your GitHub account through a remote in order for it to access your projects and update them accordingly.

### **Let's get started**

In this tutorial I will teach you some of the basics you need when using Git or GitHub

- **Create a repository on [GitHub](https://github.com).**
Sign in into your account or create one if it's your first time. Click on the `+` icon to create a new repository
![A screenshot of GitHub](https://dev-to-uploads.s3.amazonaws.com/i/gym7lmubo8ixdvo0pjzu.png)

- **Enter a name for your repository**. Use hyphens instead of spaces. You can add an optional Description as well.
Check ✅ the `initialize this repository with a README`. This will allow you to be able to download/clone the repository to your local computer.
![creating a repository](https://dev-to-uploads.s3.amazonaws.com/i/s9rsnw0csp0e96nba799.png)

After that You will see your new repository with one file that is the README.md file. This file is mostly used when one wants to give more details or give instructions about their projects.
![Newly created repository](https://dev-to-uploads.s3.amazonaws.com/i/bl287dv215r91c2xd05a.png)

- **Clone the repository to your computer**. To clone your repository. Click on the `code` button. Copy the link of your project using the clipboard icon.
![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/53h2pzg7tj15eqed7nwe.png)

### **Cloning a Repository with Git**

To clone the repository to your computer. Open the terminal or git cli on your computer depending on what OS you use and run `git`
> git

If the command is not recognised then download git from this [Link](https://git-scm.com)

Navigate to the directory you would like to clone your project in and run `git clone` followed by the link to your repository.
`Example`  
> `git clone https://github.com/inezabonte/first-app.git`

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/h55swyn2abppchvdrocz.png)

### **Making a Commit**

Commits are snapshots of changes made to your project. Each change you commit is referenced with a unique alphanumeric code that can be used if you ever need to go back to a specific commit.

In order to make changes to our repository. Open the cloned repository in a text editor and let's make some changes to our README file.

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/5v6u4708ktijgiuc3dl7.png)

After saving your changes, go back to terminal and navigate to your project. After that run;

> git status

`git status` shows us which files have been changed, which files are tracked, etc. As you can see below, it tells us that there is a file that has been `modified` which is the README.md file

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/cbl0jiaajrrska7c1zyr.png)

### **Committing Changes**

In order to push our changes to GitHub, we need to:

**1. Stage Changes for commit**. To do this we use the command `git add` followed by the file you want to add.

> git add README.md

**2. Commit with a message**. This is done using the `git commit -m` command followed by a short message in quotes explaining the changes you made, to whoever might be looking at the project.

> git commit -m "My first commit"

**3. Push to GitHub**. Finally we can now push our changes to GitHub. To do this we use the command `git push origin master`

> git push origin master

**`NB`** If this is your first push you may be required to enter your GitHub `username` and `password`. It's a one-time process.

If you go to your GitHub account you will see a new commit in your project. If you click on it, it will show you more details about the changes you made.
![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/cq1ymdoer63e0y7s1xiv.png)

The lines highlighted in green show the additions that you made in your commit. Deletions are highlighted in red.

Here is a diagram that sums all the steps taken when committing your changes.
![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/wb32benjrqg3hmx51usd.png)

I hope this tutorial has been of help to you. If you find yourself forgetting some of the codes, don't worry you can google them or also use this [Cheatsheet](https://www.notion.so/Introduction-to-Git-ac396a0697704709a12b6a0e545db049).

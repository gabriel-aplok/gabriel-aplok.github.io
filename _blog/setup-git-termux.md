---
layout: blog
status: public
title: "How to Setup Git in Termux"
tags: [termux, git]
author: Gabriel Lima
date: 2023-07-15
---

### To set up Git in Termux, you can follow these steps:

1. Install Termux: If you haven't already, download and install Termux from the Google Play Store or F-Droid.
2. Open Termux: Launch the Termux app on your Android device.
3. Update Packages: Before installing Git, it's a good practice to update the package repositories. Run the following command to update the package lists:
```shell
apt update
```
4.Install Git: Use the following command to install Git:
```shell
apt install git
```
5. Configure Git: After installing Git, you need to configure your username and email address. Use the following commands, replacing `Your Name` with your desired name and `youremail@example.com` with your email address:
```shell
git config --global user.name "Your Name"
git config --global user.email "youremail@example.com"
```
6. Verify Installation: To verify that Git is installed correctly, you can run the following command:
```shell
git --version
```
It should display the installed Git version.

With these steps completed, Git should be successfully set up in your Termux environment. You can now use Git commands to manage your repositories.

### To commit to a repository using SSH deploy keys in Termux, you can follow these steps:

1. Generate SSH Key Pair: If you haven't already generated an SSH key pair, you can do so by running the following command:
```shell
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```
This command will generate an RSA key pair (public and private key) in the `~/.ssh` directory.
2. Add SSH Key to SSH Agent: The SSH agent manages your SSH keys. Run the following command to add your private key to the SSH agent:
```shell
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_rsa
```
3. Copy Public Key: To use SSH deploy keys, you need to copy the contents of your public key. Run the following command to display your public key:
```shell
cat ~/.ssh/id_rsa.pub
```
Copy the output, which should start with `ssh-rsa` and end with your email address.
4. Add Deploy Key to Repository: Go to the repository settings of your private repository (e.g., on GitHub, GitLab, or Bitbucket) and look for the option to add deploy keys. Paste the public key you copied in the previous step and save the changes.
5. Clone Repository: Now you can clone the repository using SSH. Run the following command, replacing <repository-url> with the SSH URL of your private repository:
```shell
git clone <repository-url>
```
Termux will use the SSH key pair to authenticate and clone the repository.
6. Commit and Push: Navigate to the cloned repository using the `cd` command, make your changes, and commit them using Git commands:
```shell
git add .
git commit -m "Your commit message"
```
Finally, push the changes to the remote repository:
```shell
git push origin <branch-name>
```
Replace `<branch-name>` with the branch you want to push your changes to.

By following these steps, you should be able to commit and push to your repository using SSH deploy keys in Termux.

#!/bin/bash

# Before deploy, make sure EC2 has CodeDeploy Agent

# Take off commentout when you deploy to new EC2 instance
# Install nvm, yarn, and forever
sudo curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash
source root/.nvm/nvm.sh
nvm install node
npm install -g yarn
yarn add forever

# Clean working folder
# sudo find /home/ec2-user/happygoat -type f -delete
#!/bin/bash

# Before deploy, make sure EC2 has CodeDeploy Agent

# Take off commentout when you deploy to new EC2 instance
# Install node.js, yarn, nvm, forever
wget https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh
sudo chmod +x install.sh
./install.sh


# Install forever module
# https://www.npmjs.com/package/forever
# sudo npm install forever -g

# Clean working folder
# sudo find /home/ec2-user/happygoat -type f -delete
#!/bin/bash

# Before deploy, make sure EC2 has CodeDeploy Agent

# Take off commentout when you deploy to new EC2 instance
# Install node.js, yarn, nvm, forever
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
. ~/.nvm/nvm.sh
nvm install node


# Install forever module
# https://www.npmjs.com/package/forever
# sudo npm install forever -g

# Clean working folder
# sudo find /home/ec2-user/happygoat -type f -delete
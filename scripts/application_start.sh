#!/bin/bash

# Stop all servers and start the server as a daemon
sudo -i forever stopall
sudo -i forever start --workingDir /home/ec2-user/happygoat -c "yarn start" ./

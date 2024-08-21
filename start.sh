#!/bin/bash

# Source nvm so that it's available in the script
source $HOME/.nvm/nvm.sh

# Use a specific Node.js version
nvm use 21.0.0

# Now, you can run your Node.js commands
npm run start

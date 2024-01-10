#!/bin/bash

# To run: ./build.sh URL

# Navigate to the frontend directory
cd frontend || exit 1

# Check if the argument is provided
if [ $# -eq 0 ]; then
    echo "Usage: $0 <new_url>"
    echo "Using default URL: localhost"
    echo "REACT_APP_API_URL = localhost" > .env
else
    echo "REACT_APP_API_URL = \"$1\"" > .env
    echo "Using URL: $1"
fi

# Update the .env file with the new URL

# Install dependencies and build the project
npm install
npm run build

# Move the build folder to the nginx directory
rm -r ../nginx/build
cp -r build ../nginx/

# Optional: Restart Nginx if needed
# systemctl restart nginx

echo "Deployment complete."

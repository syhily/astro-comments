#!/bin/bash

# Get the absolute directory of the script
current_dir=$(dirname "$(realpath "$0")")
cd ${current_dir}
cd ..

echo "Upgrade the dependencies for the plugin"
npx npm-check-updates -u && npm i && npm update

echo "Upgrade the example dependencies"
cd example
npx npm-check-updates -u && npm i && npm update
cd ..

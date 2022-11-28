#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# place .nojekyll to bypass
echo > .nojeckyll

git push -f git@github.com:Gitgrunfelder/vite-project.git main:gh-pages

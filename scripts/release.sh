#!/bin/bash -e

git config --global user.email $GIT_EMAIL
git config --global user.name $GIT_USER
echo '//registry.npmjs.org/:_authToken=${NPM_TOKEN}' > .npmrc

normalized_branch=$(echo $BUILDKITE_BRANCH | sed 's/[^a-zA-Z0-9-]/./g')

if [ "$BUILDKITE_BRANCH" == "master" ];then
    npm version patch
else
    npm version prerelease --preid $normalized_branch
fi

npm publish && git push

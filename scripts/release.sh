#!/bin/bash -e

echo "Configuring git..."
remoteUrl=$(git remote get-url origin | sed 's/https:\/\///')
git config --global push.default simple
git config --global user.email $GIT_EMAIL
git config --global user.name $GIT_USERNAME
git remote add deploy "https://$GIT_USERNAME:$GIT_TOKEN@${remoteUrl}"
git checkout $BUILDKITE_BRANCH

echo '//registry.npmjs.org/:_authToken=${NPM_TOKEN}' > .npmrc

normalized_branch=$(echo $BUILDKITE_BRANCH | sed 's/[^a-zA-Z0-9-]/./g')

if [ "$BUILDKITE_BRANCH" == "master" ];then
    npm version patch
    npm publish
else
    npm version prerelease #--no-git-tag-version --preid $normalized_branch.$BUILDKITE_BUILD_NUMBER
    npm publish --tag $normalized_branch
fi

# git add -u && git commit -m"CI version bump" && 
git push deploy $BUILDKITE_BRANCH --tags
git remote remove deploy

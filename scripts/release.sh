#!/bin/bash -e

git config --global user.email $GIT_EMAIL
git config --global user.name $GIT_USER
echo '//registry.npmjs.org/:_authToken=${NPM_TOKEN}' > .npmrc

normalized_branch=$(echo $BUILDKITE_BRANCH | sed 's/[^a-zA-Z0-9-]/./g')

if [ "$BUILDKITE_BRANCH" == "master" ];then
    npm version patch
    npm publish
else
    npm version prerelease --no-git-tag-version --preid $normalized_branch
    npm publish --tag $normalized_branch
fi

git add -u && git commit -m"CI version bump" && git push origin HEAD:$BUILDKITE_BRANCH

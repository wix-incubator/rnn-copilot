#!/bin/bash -e

node scripts/setupGit.js
echo '//registry.npmjs.org/:_authToken=${NPM_TOKEN}' > .npmrc

normalized_branch=$(echo $BUILDKITE_BRANCH | sed 's/[^a-zA-Z0-9-]/./g')

if [ "$BUILDKITE_BRANCH" == "master" ];then
    npm version patch
    npm publish
else
    npm version prerelease --no-git-tag-version --preid $normalized_branch.$BUILDKITE_BUILD_NUMBER
    npm publish --tag $normalized_branch
fi

git add -u && git commit -m"CI version bump" && git push origin $BUILDKITE_BRANCH

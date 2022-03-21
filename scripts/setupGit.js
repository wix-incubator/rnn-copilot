const cp = require('child_process');

function execSyncSilently(cmd) {
    cp.execSync(cmd, { stdio: ['ignore', 'ignore', 'ignore'] });
}

execSyncSilently(`git config --global push.default simple`);
execSyncSilently(`git config --global user.email "${process.env.GIT_EMAIL}"`);
execSyncSilently(`git config --global user.name "${process.env.GIT_USERNAME}"`);
const remoteUrl = new RegExp(`https?://(\\S+)`).exec(execSyncRead(`git remote -v`))[1];
execSyncSilently(`git remote add deploy "https://${process.env.GIT_USERNAME}:${process.env.GIT_TOKEN}@${remoteUrl}"`);
cp.execSync(`git checkout master`);
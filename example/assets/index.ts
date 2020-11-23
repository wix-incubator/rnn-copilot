import {Assets} from 'react-native-ui-lib';

const assets = {
  account: require('./account.png'),
  back: require('./back.png'),
  chevronRight: require('./chevronRight.png'),
  home: require('./home.png'),
};

Assets.loadAssetsGroup('icons', assets);

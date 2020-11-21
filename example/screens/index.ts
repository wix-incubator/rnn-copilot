import {Navigation} from 'react-native-navigation';
import PushActionsScreen from './PushActionsScreen';
import TopBarActionsScreen from './TopBarActionsScreen';

Navigation.registerComponent(
  'rnnsimple.PushActionsScreen',
  () => PushActionsScreen,
);
Navigation.registerComponent(
  'rnnsimple.TopBarActionsScreen',
  () => TopBarActionsScreen,
);

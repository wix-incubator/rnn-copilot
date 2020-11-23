import {Navigation} from 'react-native-navigation';
import PushActionsScreen from './PushActionsScreen';
import TopBarActionsScreen from './TopBarActionsScreen';
import RootsScreen from './RootsScreen';

// @ts-expect-error
Navigation.registerComponent('rnnsimple.PushActionsScreen', () => PushActionsScreen);
// @ts-expect-error
Navigation.registerComponent('rnnsimple.TopBarActionsScreen', () => TopBarActionsScreen);
Navigation.registerComponent('rnnsimple.RootsScreen', () => RootsScreen);

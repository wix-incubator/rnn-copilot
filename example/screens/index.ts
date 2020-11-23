import {Navigation} from 'react-native-navigation';
import PushActionsScreen from './PushActionsScreen';
import TopBarActionsScreen from './TopBarActionsScreen';
import RootsScreen from './RootsScreen';

Navigation.registerComponent('rnnsimple.PushActionsScreen', () => PushActionsScreen);
Navigation.registerComponent('rnnsimple.TopBarActionsScreen', () => TopBarActionsScreen);
Navigation.registerComponent('rnnsimple.RootsScreen', () => RootsScreen);

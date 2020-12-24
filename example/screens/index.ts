import {Navigation} from 'react-native-navigation';
import PushActionsScreen from './PushActionsScreen';
import TopBarActionsScreen from './TopBarActionsScreen';
import RootsScreen from './RootsScreen';

Navigation.registerComponent('rnncopilot.PushActionsScreen', () => PushActionsScreen);
Navigation.registerComponent('rnncopilot.TopBarActionsScreen', () => TopBarActionsScreen);
Navigation.registerComponent('rnncopilot.RootsScreen', () => RootsScreen);

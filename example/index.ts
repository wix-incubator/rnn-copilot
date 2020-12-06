import {Navigation} from 'react-native-navigation';
import {App, Root, BottomTab, TopBar} from 'rnn-copilot';
import {Assets, Colors} from 'react-native-ui-lib';
import './configurations';
import './screens';
import './assets';
import './components';
import MainScreen from './MainScreen';
import {name as appName} from '../app.json';

// Register for single stack
Navigation.registerComponent(appName, () => MainScreen);
// Registering the same screen for two tabs
Navigation.registerComponent(`${appName}_1`, () => MainScreen);
Navigation.registerComponent(`${appName}_2`, () => MainScreen);

App.withTopBar(new TopBar().withBorder(false).withOptions({backButton: {icon: Assets.icons.back, color: Colors.grey10}})).withLayout({
  componentBackgroundColor: Colors.grey80,
});

Root.withBottomTab(
  new BottomTab('main', `${appName}_1`).withLabel('Main').withIcon(Assets.icons.home).withSelectedColor(Colors.blue30),
).withBottomTab(
  new BottomTab('secondary', `${appName}_2`).withLabel('Second').withIcon(Assets.icons.account).withSelectedColor(Colors.blue30),
);

Navigation.events().registerAppLaunchedListener(() => {
  App.set();
  Root.set();
});

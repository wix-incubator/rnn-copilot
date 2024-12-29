import {I18nManager} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {App, Root, BottomTab, TopBar} from 'rnn-copilot';
import {Assets, Colors, Constants} from 'react-native-ui-lib';
import './configurations';
import './screens';
import './assets';
import './components';
import MainScreen from './MainScreen';
import SideMenuScreen from './SideMenuScreen';
import {name as appName} from '../app.json';

// Enable to test RTL
I18nManager.forceRTL(false);
console.log(`I18nManager.isRTL`, I18nManager.isRTL)

// Register for single stack
Navigation.registerComponent(appName, () => MainScreen);
// Registering the same screen for two tabs
Navigation.registerComponent(`${appName}_1`, () => MainScreen);
Navigation.registerComponent(`${appName}_2`, () => MainScreen);
// Registering for Side Menu
Navigation.registerComponent('sideMenu', () => SideMenuScreen);

App
  .withTopBar(new TopBar().withBorder(false).withOptions({backButton: {icon: Assets.icons.back, color: Colors.grey10}}))
  .withOptions({layout: {direction: I18nManager.isRTL ? 'rtl' : 'ltr'}})
  .withLayout({
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

import {Navigation} from 'react-native-navigation';
import {App, Root, BottomTab} from 'rnn-simple';
import {Assets, Colors} from 'react-native-ui-lib';
import './configurations';
import './screens';
import './assets';
import './components';
import AppScreen from './App';
import {name as appName} from '../app.json';

// Registering the same screen for two tabs
Navigation.registerComponent(`${appName}_1`, () => AppScreen);
Navigation.registerComponent(`${appName}_2`, () => AppScreen);

const mainTab = new BottomTab('main', appName);
mainTab.withLabel('Main');

const app = new App()
  .withTopBar({noBorder: true, backButton: {icon: Assets.icons.back, color: Colors.grey10}})
  .withLayout({componentBackgroundColor: Colors.grey80});

const root = new Root()
  .withBottomTab(new BottomTab('main', `${appName}_1`).withLabel('Main').withIcon(Assets.icons.home).withSelectedColor(Colors.blue30))
  .withBottomTab(
    new BottomTab('secondary', `${appName}_2`).withLabel('Second').withIcon(Assets.icons.account).withSelectedColor(Colors.blue30),
  );

Navigation.events().registerAppLaunchedListener(() => {
  app.set();
  root.set();
});

import {Navigation} from 'react-native-navigation';
import {Root, BottomTab} from 'rnn-simple';
import App from './example/App';
import {name as appName} from './app.json';
import './example/configurations';
import './example/screens';

// Registering the same screen for two tabs
Navigation.registerComponent(`${appName}_1`, () => App);
Navigation.registerComponent(`${appName}_2`, () => App);

const mainTab = new BottomTab('main', appName);
mainTab.withLabel('Main');

const root = new Root();
root.withBottomTab(new BottomTab('main', `${appName}_1`).withLabel('Main'));
root.withBottomTab(new BottomTab('secondary', `${appName}_2`).withLabel('Second'));
Navigation.events().registerAppLaunchedListener(() => {
  root.set();
});

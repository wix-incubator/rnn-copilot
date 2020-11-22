import {Navigation} from 'react-native-navigation';
import {Root, BottomTab} from 'rnn-simple';
import App from './example/App';
import {name as appName} from './app.json';
import './example/configurations';
import './example/screens';

const mainTab = new BottomTab('main', appName);
mainTab.withLabel('Main');

const root = new Root();
root.withBottomTab(mainTab);
root.withBottomTab(new BottomTab('secondary', appName).withLabel('second'));
Navigation.registerComponent(appName, () => App);
Navigation.events().registerAppLaunchedListener(() => {
  root.set();
});

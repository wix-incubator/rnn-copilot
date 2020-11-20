import {Navigation} from 'react-native-navigation';
import App from './example/App';
import {name as appName} from './app.json';
import './example/screens';

Navigation.registerComponent(appName, () => App);
Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: appName,
            },
          },
        ],
      },
    },
  });
});

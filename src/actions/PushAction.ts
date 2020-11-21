import {Navigation} from 'react-native-navigation';

export default class PushAction {
  originComponentId: string;
  screenName: string;

  constructor(componentId: string, screenName: string) {
    this.originComponentId = componentId;
    this.screenName = screenName;
  }

  go() {
    Navigation.push(this.originComponentId, {
      component: {
        name: this.screenName,
        // passProps: {},
      },
    });
  }
}

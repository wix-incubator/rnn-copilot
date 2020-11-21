import {Navigation} from 'react-native-navigation';
import {last} from 'lodash';

const appStack: string[] = [];

Navigation.events().registerComponentDidAppearListener(
  ({componentId, componentName, passProps, ...others}) => {
    appStack.push(componentId);
  },
);

export function getVisibleComponentId() {
  return last(appStack) as string;
}

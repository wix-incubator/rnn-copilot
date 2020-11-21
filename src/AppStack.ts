import {Navigation} from 'react-native-navigation';
// import {last} from 'lodash';

// const appStack: string[] = [];
let currentVisibleComponentId: string;

Navigation.events().registerComponentDidAppearListener(
  ({componentId /* , componentName, passProps, ...others */}) => {
    currentVisibleComponentId = componentId;
    // appStack.push(componentId);
  },
);

export function getVisibleComponentId() {
  return currentVisibleComponentId;
  // return last(appStack) as string;
}

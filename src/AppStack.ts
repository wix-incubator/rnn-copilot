import {Navigation} from 'react-native-navigation';
// import {last} from 'lodash';

// const appStack: string[] = [];
let currentVisibleComponentId: string;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
let currentTab: number = 0;

Navigation.events().registerComponentDidAppearListener(({componentId /* , componentName, passProps, ...others */}) => {
  currentVisibleComponentId = componentId;
  // appStack.push(componentId);
});

Navigation.events().registerBottomTabSelectedListener(({selectedTabIndex /* , unselectedTabIndex */}) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  currentTab = selectedTabIndex;
});

export function getVisibleComponentId() {
  return currentVisibleComponentId;
  // return last(appStack) as string;
}

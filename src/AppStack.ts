import {Navigation} from 'react-native-navigation';
// import {last} from 'lodash';

// const appStack: string[] = [];
let currentVisibleComponentId: string;
let currentTab: number = 0;

Navigation.events().registerComponentDidAppearListener(({componentId /* , componentName, passProps, ...others */}) => {
  currentVisibleComponentId = componentId;
  // appStack.push(componentId);
});

Navigation.events().registerBottomTabSelectedListener(({selectedTabIndex/* , unselectedTabIndex */}) => {
  currentTab = selectedTabIndex;
});

export function getVisibleComponentId() {
  return currentVisibleComponentId;
  // return last(appStack) as string;
}

import {Navigation, Layout} from 'react-native-navigation';
import BottomTab from './BottomTab';

export default class Root {
  layout: Layout = {};
  mainScreen?: string;

  constructor(mainScreen?: string) {
    if (mainScreen) {
      this.mainScreen = mainScreen;
      this.layout.stack = {children: [{component: {name: mainScreen}}]};
    }
  }

  withBottomTab(bottomTab: BottomTab) {
    if (!this.layout.bottomTabs) {
      this.layout.bottomTabs = {id: 'bottom_tabs', children: []};
    }
    this.layout.bottomTabs.children?.push(bottomTab.get());

    return this;
  }

  set() {
    Navigation.setRoot({
      root: this.layout,
    });
  }
}

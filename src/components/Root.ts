import {isEmpty, map} from 'lodash';
import {Navigation, Layout} from 'react-native-navigation';
import BottomTab from './BottomTab';

class Root {
  private mainScreen?: string;
  private bottomTabsId: string = 'bottom-tabs';
  private bottomTabs: BottomTab[] = [];

  /** Set a single stack root with a main screen */
  withSingleStack(mainScreen: string) {
    this.mainScreen = mainScreen;
    return this;
  }

  /** Add a bottom tab to Tabbed based root */
  withBottomTab(bottomTab: BottomTab) {
    this.bottomTabs.push(bottomTab);
    return this;
  }

  /** Clear root configurations */
  clear() {
    this.mainScreen = undefined;
    this.bottomTabs = [];
    return this;
  }

  /** Set root according to configurations */
  set() {
    const layout: Layout = {};
    if (this.mainScreen) {
      layout.stack = {children: [{component: {name: this.mainScreen}}]};
    } else if (!isEmpty(this.bottomTabs)) {
      layout.bottomTabs = {
        id: this.bottomTabsId,
        children: map(this.bottomTabs, (tab) => tab.get()),
      };
    } else {
      throw "Cannot set app root without proper configuration. Use either 'withSingleStack' or 'withBottomTab'";
    }
    Navigation.setRoot({
      root: layout,
    });
  }

  changeTab(tabId: string) {
    Navigation.mergeOptions(this.bottomTabsId, {
      bottomTabs: {
        currentTabId: tabId,
      },
    });
  }
}

export default new Root();

import {isArray, isEmpty, isString, map} from 'lodash';
import {Navigation, Layout} from 'react-native-navigation';
import BottomTab from './BottomTab';

class Root {
  private mainScreen?: string | string[];
  private bottomTabsId: string = 'bottom-tabs';
  private bottomTabs: BottomTab[] = [];

  /** Set a single stack root with a main screen or with an array of screens */
  withSingleStack(mainScreen: string | string[]) {
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
      const screens = isArray(this.mainScreen) ? this.mainScreen : [this.mainScreen];
      layout.stack = {children: screens.map((screen: string) => ({component: {name: screen}}))};
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

  /**
   * Change tab by either passing a tabId (string) or tabIndex (number)
   */
  changeTab(tabId: string | number) {
    const bottomTabs = isString(tabId) ? {currentTabId: tabId} : {currentTabIndex: tabId};
    Navigation.mergeOptions(this.bottomTabsId, {
      bottomTabs: bottomTabs,
    });
  }
}

export default new Root();

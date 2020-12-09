import {isArray, isEmpty, isString, map, isUndefined} from 'lodash';
import {Navigation, Layout, Options} from 'react-native-navigation';
import BottomTab from './BottomTab';

class Root {
  private mainScreen?: string | string[];
  private bottomTabsId: string = 'bottom-tabs';
  private bottomTabs: BottomTab[] = [];
  private passProps?: object | object[];
  private options?: Options | Options[];

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

  /**
   * Pass props to the main screen
   * Pass an array of props in case you want to pass to a stack of screens
   */
  withProps(passProps?: object | object[]) {
    this.passProps = passProps;
    return this;
  }

  /**
   * Pass options to the main screen
   * Pass an array of options in case you want to pass to a stack of screens
   */
  withOptions(options?: Options | Options[]) {
    this.options = options;
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
      const allPassProps = isArray(this.passProps) ? this.passProps : [this.passProps];
      const allOptions = isArray(this.options) ? this.options : [this.options];

      layout.stack = {
        children: screens.map((screen: string, index: number) => ({
          component: {name: screen, passProps: allPassProps[index], options: allOptions[index]},
        })),
      };
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

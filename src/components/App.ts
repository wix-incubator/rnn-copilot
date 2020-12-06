import {assign} from 'lodash';
import {
  Navigation,
  Options,
  OptionsStatusBar,
  OptionsLayout,
  OptionsTopBar,
  OptionsBottomTab,
  OptionsBottomTabs,
} from 'react-native-navigation';
import StatusBar from './StatusBar';
import TopBar from './TopBar';

class App {
  options: Options = {};

  withStatusBar(statusBar: StatusBar | OptionsStatusBar) {
    if (statusBar instanceof StatusBar) {
      this.options.statusBar = (statusBar as StatusBar).get();
    } else {
      // TODO: deprecate this way of setting options
      this.options.statusBar = statusBar as OptionsStatusBar;
    }
    return this;
  }

  withLayout(layoutOptions: OptionsLayout) {
    this.options.layout = layoutOptions;
    return this;
  }
  withTopBar(topBar: TopBar | OptionsTopBar) {
    if (topBar instanceof TopBar) {
      this.options.topBar = (topBar as TopBar).get();
    } else {
      // TODO: deprecate this way of setting options
      this.options.topBar = topBar as OptionsTopBar;
    }
    return this;
  }
  withBottomTabs(bottomTabsOptions: OptionsBottomTabs) {
    this.options.bottomTabs = bottomTabsOptions;
    return this;
  }
  withBottomTab(bottomTabOptions: OptionsBottomTab) {
    this.options.bottomTab = bottomTabOptions;
    return this;
  }

  withOptions(options: Options) {
    assign(this.options, options);
    return this;
  }

  clear() {
    this.options = {};
    return this;
  }

  set() {
    Navigation.setDefaultOptions(this.options);
  }
}

export default new App();

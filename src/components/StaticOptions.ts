import {Options} from 'react-native-navigation';
import TopBar from './TopBar';
import StatusBar from './StatusBar';

export default class StaticOptions {
  topBar?: TopBar;
  statusBar?: StatusBar;

  withTopBar(topBar: TopBar) {
    this.topBar = topBar;
    return this;
  }

  withStatusBar(statusBar: StatusBar) {
    this.statusBar = statusBar;
    return this;
  }

  get() {
    const options: Options = {};

    if (this.topBar) {
      options.topBar = this.topBar.get();
    }

    if (this.statusBar) {
      options.statusBar = this.statusBar.get();
    }

    return options;
  }
}

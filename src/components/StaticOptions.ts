import {Navigation, Options} from 'react-native-navigation';
import TopBar from './TopBar';
import StatusBar from './StatusBar';

const MISSING_COMPONENT_ID_MESSAGE =
  'StaticOptions is missing a componentId. Make sure to pass a componentId when creating a new StaticOptions instance or using the "withComponentId" method';

export default class StaticOptions {
  originComponentId?: string;
  options: Options = {};
  topBar: TopBar = new TopBar();
  statusBar: StatusBar = new StatusBar();

  constructor(componentId?: string) {
    this.originComponentId = componentId;
  }

  withComponentId(componentId: string) {
    this.originComponentId = componentId;
    return this;
  }

  withTopBar(topBar: TopBar) {
    this.topBar = topBar;
    return this;
  }

  withStatusBar(statusBar: StatusBar) {
    this.statusBar = statusBar;
    return this;
  }

  withOptions(options: Options) {
    this.options = {...this.options, ...options};
  }

  get() {
    const options: Options = {};

    if (this.topBar) {
      options.topBar = this.topBar.get();
    }

    if (this.statusBar) {
      options.statusBar = this.statusBar.get();
    }

    return {...options, ...this.options};
  }

  update() {
    if (!this.originComponentId) {
      throw new Error(MISSING_COMPONENT_ID_MESSAGE);
    }

    Navigation.mergeOptions(this.originComponentId, this.get());
  }
}

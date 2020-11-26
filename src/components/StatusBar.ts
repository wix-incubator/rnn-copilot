import {Navigation, OptionsStatusBar} from 'react-native-navigation';

const MISSING_COMPONENT_ID_MESSAGE =
  'StatusBar is missing a componentId. Make sure to pass a componentId when creating a new StatusBar instance or using the "withComponentId" method';

export default class TopBar {
  originComponentId?: string;
  options: OptionsStatusBar = {};

  constructor(componentId?: string) {
    this.originComponentId = componentId;
  }

  withComponentId(componentId: string) {
    this.originComponentId = componentId;
    return this;
  }

  withVisibility(value: boolean) {
    this.options.visible = value;
    return this;
  }

  withOptions(options: OptionsStatusBar) {
    this.options = {...this.options, ...options};
  }

  get() {
    return this.options;
  }

  update() {
    if (!this.originComponentId) {
      throw new Error(MISSING_COMPONENT_ID_MESSAGE);
    }

    Navigation.mergeOptions(this.originComponentId, {
      statusBar: this.options,
    });
  }
}

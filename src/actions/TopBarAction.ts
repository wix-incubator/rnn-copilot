import {Navigation, OptionsTopBar} from 'react-native-navigation';
import {set} from 'lodash';

export default class TopBarAction {
  originComponentId: string;
  options: OptionsTopBar = {};

  constructor(componentId: string) {
    this.originComponentId = componentId;
  }

  withTitle(title: string, options?: OptionsTopBar['title']) {
    if (!this.options.title) {
      this.options.title = {};
    }
    this.options.title.text = title;
    this.options.title = {...this.options.title, ...options};
    return this;
  }

  withSubtitle(title: string, options?: OptionsTopBar['subtitle']) {
    if (!this.options.subtitle) {
      this.options.subtitle = {};
    }
    this.options.subtitle.text = title;
    this.options.subtitle = {...this.options.subtitle, ...options};
    return this;
  }

  withVisibility(value: boolean) {
    this.options.visible = value;
    return this;
  }

  withAnimation(value: boolean) {
    this.options.animate = value;
    return this;
  }

  go() {
    Navigation.mergeOptions(this.originComponentId, {
      topBar: this.options,
    });
  }
}

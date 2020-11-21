import {Navigation, OptionsTopBar} from 'react-native-navigation';
import {set} from 'lodash';

export default class TopBarAction {
  originComponentId: string;
  options: OptionsTopBar = {};

  constructor(componentId: string) {
    this.originComponentId = componentId;
  }

  withTitle(title: string) {
    set(this.options, 'title.text', title);
    return this;
  }

  withSubtitle(subtitle: string) {
    set(this.options, 'subtitle.text', subtitle);
    return this;
  }

  go() {
    Navigation.mergeOptions(this.originComponentId, {
      topBar: this.options,
    });
  }
}

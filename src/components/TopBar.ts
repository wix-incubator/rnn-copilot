import {Navigation, OptionsTopBar, OptionsTopBarButton} from 'react-native-navigation';
import {getVisibleComponentId} from '../AppStack';
import {assign, isUndefined} from 'lodash';

export default class TopBar {
  originComponentId?: string;
  options: OptionsTopBar = {};

  constructor(componentId?: string) {
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

  withTransparency() {
    if (!this.options.background) {
      this.options.background = {};
    }
    this.options.background.translucent = true;
    this.options.background.color = 'transparent';
    this.options.drawBehind = true;
  }

  withRightButton(button: OptionsTopBarButton) {
    if (!this.options.rightButtons) {
      this.options.rightButtons = [];
    }
    this.options.rightButtons.push(button);

    return this;
  }

  withRightButtons(buttons: OptionsTopBarButton[]) {
    this.options.rightButtons = buttons;
    return this;
  }

  setRightButton(buttonIndex: number, options: OptionsTopBarButton) {
    let rightButton = this.options.rightButtons?.[buttonIndex];
    if (!rightButton) {
      throw `There is no right button at index ${buttonIndex}`;
    }

    assign(rightButton, options);
  }

  withLoader(loaderComponentId: string, buttonIndex?: number) {
    const LoaderButton: OptionsTopBarButton = {id: 'loader', component: {name: loaderComponentId}};
    if (isUndefined(buttonIndex)) {
      if (!this.options.rightButtons) {
        this.options.rightButtons = [];
      }

      this.options.rightButtons.push(LoaderButton);
    } else {
      if (!this.options.rightButtons?.[buttonIndex]) {
        throw `There is no right button at index ${buttonIndex}`;
      }
      this.options.rightButtons[buttonIndex] = LoaderButton;
    }

    return this;
  }

  get() {
    return this.options;
  }

  update() {
    Navigation.mergeOptions(this.originComponentId || getVisibleComponentId(), {
      topBar: this.options,
    });
  }
}

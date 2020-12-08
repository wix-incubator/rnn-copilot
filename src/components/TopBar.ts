import {Navigation, OptionsTopBar, OptionsTopBarButton} from 'react-native-navigation';
import {assign, isUndefined} from 'lodash';

const MISSING_COMPONENT_ID_MESSAGE =
  'TopBar is missing a componentId. Make sure to pass a componentId when creating a new TopBar instance or using the "withComponentId" method';

export default class TopBar {
  originComponentId?: string;
  options: OptionsTopBar = {};

  constructor(componentId?: string) {
    this.originComponentId = componentId;
  }

  withComponentId(componentId: string) {
    this.originComponentId = componentId;
    return this;
  }

  withBackground(color?: string, options?: OptionsTopBar['background']) {
    if (!this.options.background) {
      this.options.background = {};
    }

    this.options.background = {
      ...this.options.background,
      ...options,
      color,
    };

    return this;
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

  withBorder(visible: boolean = true) {
    this.options.noBorder = !visible;
    this.options.elevation = visible ? 4 : 0;
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

    return this;
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
    return this;
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

  withOptions(options: OptionsTopBar) {
    this.options = {...this.options, ...options};
    return this;
  }

  get() {
    return this.options;
  }

  update() {
    if (!this.originComponentId) {
      throw new Error(MISSING_COMPONENT_ID_MESSAGE);
    }
    Navigation.mergeOptions(this.originComponentId, {
      topBar: this.options,
    });
  }
}

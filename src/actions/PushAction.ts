import {Navigation, Options, Layout} from 'react-native-navigation';
import {TopBar} from '../components';

type ScreenType = 'screen' | 'modal';

const MISSING_COMPONENT_ID_MESSAGE =
  'Push action is missing a componentId. Make sure to pass a componentId when initiating a new push or using the "withComponentId" method';

const MISSING_SCREEN_MESSAGE =
  'Push action is missing a screenName to open. Make sure to pass a screenName when initiating a new push or using the "withScreen" method';
export default class PushAction {
  originComponentId?: string;
  screenName?: string;
  screenType: ScreenType = 'screen';
  options?: Options;
  passProps?: object;
  topBar?: TopBar;

  constructor(screenName?: string, componentId?: string) {
    this.originComponentId = componentId;
    this.screenName = screenName;
  }

  withComponentId(componentId: string) {
    this.originComponentId = componentId;
    return this;
  }

  withScreen(screenName: string) {
    this.screenName = screenName;
    return this;
  }

  asModal(useModal: boolean = true) {
    this.screenType = useModal ? 'modal' : 'screen';
    return this;
  }

  withTopBar(topBar: TopBar) {
    this.topBar = topBar;
    return this;
  }

  withProps(passProps?: object) {
    this.passProps = passProps;
    return this;
  }

  withOptions(options?: Options) {
    this.options = options;
    return this;
  }

  go() {
    if (!this.originComponentId) {
      throw new Error(MISSING_COMPONENT_ID_MESSAGE);
    }

    if (!this.screenName) {
      throw new Error(MISSING_SCREEN_MESSAGE);
    }

    const layout: Layout = {
      component: {
        name: this.screenName,
        passProps: this.passProps,
        options: {},
      },
    };

    if (this.topBar) {
      layout.component!.options!.topBar = this.topBar.get();
    }

    if (this.options) {
      layout.component!.options = {
        ...layout.component?.options,
        ...this.options,
      };
    }

    if (this.screenType === 'screen') {
      Navigation.push(this.originComponentId, layout);
    } else {
      Navigation.showModal({
        stack: {
          children: [layout],
        },
      });
    }
  }
}

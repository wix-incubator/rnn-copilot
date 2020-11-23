import {Navigation, Options, Layout} from 'react-native-navigation';
import {TopBar} from '../components';

type ScreenType = 'screen' | 'modal';
export default class PushAction {
  originComponentId: string;
  screenName: string;
  screenType: ScreenType = 'screen';
  options: Options = {};
  passProps?: object;
  topBar?: TopBar;

  constructor(componentId: string, screenName: string) {
    this.originComponentId = componentId;
    this.screenName = screenName;
  }

  asModal() {
    this.screenType = 'modal';
    return this;
  }

  withTopBar(topBar: TopBar) {
    this.topBar = topBar;
  }

  withProps(passProps?: object) {
    this.passProps = passProps;
  }

  go() {
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

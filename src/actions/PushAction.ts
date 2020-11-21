import {Navigation, Options, Layout} from 'react-native-navigation';

type ScreenType = 'screen' | 'modal';
export default class PushAction {
  originComponentId: string;
  screenName: string;
  screenType: ScreenType = 'screen';
  options: Options = {};
  passProps?: object;

  constructor(componentId: string, screenName: string) {
    this.originComponentId = componentId;
    this.screenName = screenName;
  }

  asModal() {
    this.screenType = 'modal';
    return this;
  }

  withProps(passProps?: object) {
    this.passProps = passProps;
  }

  go() {
    const layout: Layout = {
      component: {
        name: this.screenName,
        passProps: this.passProps,
        // options: {modalPresentationStyle: 'fullScreen'},
      },
    };
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

import {Layout, Navigation} from 'react-native-navigation';

export default class BottomTab {
  label?: string;
  icon?: string;
  layout: Layout = {};

  constructor(id: string, screenId: string) {
    this.layout = {
      stack: {
        id,
        children: [
          {
            component: {
              id: screenId,
              name: screenId,
            },
          },
        ],
        options: {},
      },
    };
  }

  withLabel(label: string) {
    this.layout.stack.options.bottomTab = {
      text: label,
    };

    return this;
  }

  get() {
    return this.layout;
  }
}

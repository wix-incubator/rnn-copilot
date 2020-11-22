import {Layout, OptionsBottomTab} from 'react-native-navigation';

export default class BottomTab {
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
        options: {bottomTab: {}},
      },
    };
  }

  withLabel(label: string) {
    this.layout.stack.options.bottomTab.text = label;
    return this;
  }

  /**
   * Set tab icon and its selected color
   * @param icon
   * @param selectedColor
   */
  withIcon(icon: OptionsBottomTab['icon'], selectedColor?: string): BottomTab {
    this.layout.stack.options.bottomTab.icon = icon;
    this.layout.stack.options.bottomTab.selectedIconColor = selectedColor;
    return this;
  }

  /**
   * Set tab icon and selected icon
   * @param icon default icon
   * @param selectedIcon selected icon
   */
  withIcons(icon: OptionsBottomTab['icon'], selectedIcon: OptionsBottomTab['icon']): BottomTab {
    this.layout.stack.options.bottomTab.icon = icon;
    this.layout.stack.options.bottomTab.selectedIcon = selectedIcon;
    return this;
  }

  /**
   * Set the selected color for the whole tab (icon and label)
   * @param color
   */
  withSelectedColor(color: string) {
    this.layout.stack.options.bottomTab.selectedIconColor = color;
    this.layout.stack.options.bottomTab.selectedTextColor = color;
    return this;
  }

  withOptions(options: OptionsBottomTab) {
    this.layout.stack.options.bottomTab = {
      ...this.layout.stack.options.bottomTab,
      ...options,
    };
    return this;
  }

  get() {
    return this.layout;
  }
}

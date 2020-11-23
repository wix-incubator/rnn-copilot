import {assign} from 'lodash';
import {
  Navigation,
  Options,
  OptionsStatusBar,
  OptionsLayout,
  OptionsTopBar,
  OptionsBottomTab,
  OptionsBottomTabs,
} from 'react-native-navigation';

class App {
  options: Options = {};

  withStatusBar(statusBarOptions: OptionsStatusBar) {
    this.options.statusBar = statusBarOptions;
    return this;
    // statusBar: {
    //   visible: true,
    //   style: NavigationConstants.statusBarStyles.LIGHT,
    //   backgroundColor: appPrimaryColor // for Android
    // },
  }

  withLayout(layoutOptions: OptionsLayout) {
    this.options.layout = layoutOptions;
    return this;
    // layout: {
    //   ...Platform.select({
    //     ios: {
    //       backgroundColor: Colors.white
    //     }
    //   }),
    //   componentBackgroundColor: Colors.white,
    //   orientation: Constants.isTablet ? ['portrait', 'landscape'] : ['portrait'],
    //   direction: Constants.isRTL ? 'rtl' : undefined
    // },
  }
  withTopBar(topBarOptions: OptionsTopBar) {
    this.options.topBar = topBarOptions;
    return this;
    // topBar: {
    //   visible: true,
    //   noBorder: true, // for iOS
    //   elevation: 0, // for Android
    //   background: {
    //     color: appPrimaryColor
    //   },
    //   title: {
    //     color: Colors.white,
    //     fontSize: Typography.bodyBold.fontSize,
    //     fontFamily: Typography.bodyBold.fontFamily,
    //     // fontFamily: Constants.isAndroid ? Typography.bodyBold.fontFamily : '.SFUIText-Heavy',
    //     // fontWeight: 'heavy'
    //   },
    //   subtitle: {
    //     color: Colors.white,
    //     fontSize: Typography.bodySmall.fontSize,
    //     fontFamily: Typography.bodySmall.fontFamily,
    //     // fontFamily: Constants.isAndroid ? Typography.bodySmall.fontFamily : '.SFUIText-Medium',
    //     // fontWeight: 'medium'
    //   },
    //   backButton: {
    //     // visible: true,
    //     color: Colors.white,
    //     icon: Constants.isIOS ? Assets.icons.navigation.back
    //       : undefined,
    //     showTitle: Constants.isIOS ? false : undefined,
    //     testID: NavigationConstants.buttonsIds.POP
    //   },
    //   leftButtonColor: Colors.white,
    //   leftButtonDisabledColor: Colors.rgba(Colors.white, 0.6),
    //   rightButtonColor: Colors.white,
    //   rightButtonDisabledColor: Colors.rgba(Colors.white, 0.6),
    //   rightButtonStyle: {
    //     iconInsets: {
    //       // iOS only
    //       top: 0,
    //       left: Spacings.s3,
    //       bottom: 0,
    //       right: 0
    //     }
    //   }
    // },
  }
  withBottomTabs(bottomTabsOptions: OptionsBottomTabs) {
    this.options.bottomTabs = bottomTabsOptions;
    return this;
    // bottomTabs: {
    //   preferLargeIcons: true,
    //   titleDisplayMode: 'alwaysShow' // for Android
    //   // translucent: true, // for iOS
    // },
  }
  withBottomTab(bottomTabOptions: OptionsBottomTab) {
    this.options.bottomTab = bottomTabOptions;
    return this;
    // bottomTab: {
    //   /* The color ruins non-solid images and RNN doesn't have an option to remove it */
    //   iconColor: Colors.default,
    //   selectedIconColor: appPrimaryColor,
    //   textColor: Colors.default,
    //   selectedTextColor: appPrimaryColor,
    //   fontFamily: Constants.isAndroid ? Typography.text100R.fontFamily : undefined,
    //   fontSize: Typography.text100R.fontSize
    // },
  }

  withOptions(options: Options) {
    assign(this.options, options);
    return this;
  }

  clear() {
    this.options = {};
    return this;
  }

  set() {
    Navigation.setDefaultOptions(this.options);
  }
}

export default new App();

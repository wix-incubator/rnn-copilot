import {Spacings, ThemeManager} from 'react-native-ui-lib';

ThemeManager.setComponentForcedTheme('TextField', (props: any) => ({
  enableErrors: false,
  containerStyle: [{marginBottom: Spacings.s3}, props.containerStyle],
}));

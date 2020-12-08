import React, {Component} from 'react';
import {
  View,
  Text,
  Button,
  TextField,
  Checkbox,
  Spacings,
  Colors,
  ExpandableSection,
  ColorPicker,
  Assets,
} from 'react-native-ui-lib';
import {TopBar, StatusBar} from 'rnn-copilot';

interface State {
  colors: string[];
  backgroundColor?: string;
  title?: string;
  subtitle?: string;
  textColor?: string;
  hideTopBar?: boolean;
  animate?: boolean;
  transparent?: boolean;
  withBorder?: boolean;
  withRightButton?: boolean;
  disabledRightButton?: boolean;
  iconRightButton?: boolean;
  rightButtonLabel?: string;
  withLoader?: boolean;
  hideStatusBar?: boolean;
}

class TopBarActionsScreen extends Component<Screen, State> {
  state = {
    colors: [Colors.grey10, Colors.red30, Colors.blue30, Colors.green30],
    backgroundColor: undefined,
    title: '',
    subtitle: '',
    textColor: Colors.grey10,
    hideTopBar: false,
    animate: false,
    transparent: false,
    withBorder: false,
    withRightButton: false,
    rightButtonLabel: 'Button',
    disabledRightButton: false,
    iconRightButton: false,
    withLoader: false,
    /* StatusBar */
    hideStatusBar: false,
  };

  topBar = new TopBar(this.props.componentId);
  statusBar = new StatusBar(this.props.componentId);

  updateTopBar = () => {
    const {
      backgroundColor,
      title,
      subtitle,
      textColor,
      hideTopBar,
      animate,
      transparent,
      withBorder,
      withRightButton,
      rightButtonLabel,
      disabledRightButton,
      iconRightButton,
      withLoader,
    } = this.state;
    this.topBar
      .withBackground(backgroundColor)
      .withTitle(title, {color: textColor})
      .withSubtitle(subtitle, {color: textColor})
      .withVisibility(!hideTopBar)
      .withAnimation(animate)
      .withBorder(withBorder)
      .withRightButtons([]);
    transparent && this.topBar.withTransparency();

    withRightButton &&
      this.topBar.withRightButtons([
        {id: 'button', text: rightButtonLabel, enabled: !disabledRightButton, icon: iconRightButton ? Assets.icons.account : undefined},
      ]);
    withLoader && this.topBar.withLoader('rnnsimple.Loader');

    this.topBar.update();
  };

  updateStatusBar = () => {
    const {hideStatusBar} = this.state;
    this.statusBar.withVisibility(!hideStatusBar).update();
  };

  renderColorPicker(title: string, value: string | undefined, onChange: Function) {
    const {colors} = this.state;
    return (
      <View marginB-s3>
        <Text text70 grey30>
          {title}
        </Text>
        <ColorPicker
          initialColor={Colors.grey10}
          value={value}
          colors={colors}
          // @ts-expect-error
          onValueChange={onChange}
          onSubmit={(color) => this.setState({colors: [...colors, color]})}
        />
      </View>
    );
  }

  render() {
    const {
      backgroundColor,
      textColor,
      hideTopBar,
      animate,
      transparent,
      withBorder,
      disabledRightButton,
      iconRightButton,
      withRightButton,
      rightButtonLabel,
      withLoader,
      /* StatusBar */
      hideStatusBar,
    } = this.state;

    return (
      <View padding-s5 flex>
        <View row centerV marginB-s3>
          <Text text40>TopBar</Text>
          <Button marginL-s5 label="Update TopBar" onPress={this.updateTopBar} size={Button.sizes.xSmall} />
        </View>
        <View flex>
          {this.renderColorPicker('Background Color', backgroundColor, (value: string) => this.setState({backgroundColor: value}))}
          <TextField title="Title" placeholder="Enter title" onChangeText={(title: string) => this.setState({title})} />
          <TextField title="Subtitle" placeholder="Enter subtitle" onChangeText={(subtitle: string) => this.setState({subtitle})} />

          {this.renderColorPicker('Title/Subtitle Color', textColor, (value: string) => this.setState({textColor: value}))}

          <View row>
            <Checkbox label="Hide TopBar" value={hideTopBar} onValueChange={(value) => this.setState({hideTopBar: value})} />
            <Checkbox
              containerStyle={{marginLeft: Spacings.s3}}
              label="Animate Transition"
              value={animate}
              onValueChange={(value) => this.setState({animate: value})}
            />
          </View>
          <Checkbox
            containerStyle={{marginTop: Spacings.s3}}
            label="Set Transparency"
            value={transparent}
            onValueChange={(value) => this.setState({transparent: value})}
          />
          <Checkbox
            containerStyle={{marginTop: Spacings.s3}}
            label="Set Border"
            value={withBorder}
            onValueChange={(value) => this.setState({withBorder: value})}
          />

          <ExpandableSection
            onPress={() => this.setState({withRightButton: !withRightButton})}
            expanded={withRightButton}
            sectionHeader={
              <View paddingV-s3 pointerEvents="none">
                <Checkbox label="With Right Button" value={withRightButton} />
              </View>
            }>
            <View padding-s5 marginB-s3 style={{borderWidth: 1, borderColor: Colors.grey50}}>
              <TextField title="Button Label" placeholder="Enter right button label" value={rightButtonLabel} />
              <Checkbox
                label="Disabled"
                value={disabledRightButton}
                onValueChange={(value) => this.setState({disabledRightButton: value})}
              />
              <Checkbox
                containerStyle={{marginTop: Spacings.s2}}
                label="Use Icon"
                value={iconRightButton}
                onValueChange={(value) => this.setState({iconRightButton: value})}
              />
            </View>
          </ExpandableSection>
          <Checkbox value={withLoader} label="With Loader" onValueChange={(value) => this.setState({withLoader: value})} />

          <View row centerV marginB-s3 marginT-s5>
            <Text text40>StatusBar</Text>
            <Button marginL-s5 label="Update StatusBar" onPress={this.updateStatusBar} size={Button.sizes.xSmall} />
          </View>

          <Checkbox label="Hide StatusBar" value={hideStatusBar} onValueChange={(value) => this.setState({hideStatusBar: value})} />
        </View>
      </View>
    );
  }
}

export default TopBarActionsScreen;

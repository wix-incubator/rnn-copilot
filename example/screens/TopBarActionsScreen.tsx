import React, {Component} from 'react';
import {View, Text, Button, TextField, Checkbox, Spacings, ColorPalette, Colors, ExpandableSection, Assets} from 'react-native-ui-lib';
import {TopBar, StatusBar} from 'rnn-simple';

interface State {
  title?: string;
  subtitle?: string;
  textColor?: string;
  hideTopBar?: boolean;
  animate?: boolean;
  transparent?: boolean;
  withRightButton?: boolean;
  disabledRightButton?: boolean;
  iconRightButton?: boolean;
  rightButtonLabel?: string;
  withLoader?: boolean;
  hideStatusBar?: boolean;
}

class TopBarActionsScreen extends Component<Screen, State> {
  state = {
    title: '',
    subtitle: '',
    textColor: Colors.grey10,
    hideTopBar: false,
    animate: false,
    transparent: false,
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
      title,
      subtitle,
      textColor,
      hideTopBar,
      animate,
      transparent,
      withRightButton,
      rightButtonLabel,
      disabledRightButton,
      iconRightButton,
      withLoader,
    } = this.state;
    this.topBar
      .withTitle(title, {color: textColor})
      .withSubtitle(subtitle, {color: textColor})
      .withVisibility(!hideTopBar)
      .withAnimation(animate)
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

  render() {
    const {
      textColor,
      hideTopBar,
      animate,
      transparent,
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
          <TextField title="Title" placeholder="Enter title" onChangeText={(title: string) => this.setState({title})} />
          <TextField title="Subtitle" placeholder="Enter subtitle" onChangeText={(subtitle: string) => this.setState({subtitle})} />

          <View row centerV>
            <Text text70>Select Color</Text>

            <ColorPalette
              value={textColor}
              onValueChange={(value: string) => this.setState({textColor: value})}
              colors={[Colors.grey10, Colors.red30, Colors.blue30, Colors.green30]}
            />
          </View>

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

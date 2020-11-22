import React, {Component} from 'react';
import {OptionsTopBarButton} from 'react-native-navigation';
import {View, Text, Button, TextField, Checkbox, Spacings, ColorPalette, Colors, ExpandableSection} from 'react-native-ui-lib';
import {TopBar} from 'rnn-simple';

type RightPartType = 'none' | 'single' | 'multiple' | 'loader';
interface State {
  title?: string;
  subtitle?: string;
  textColor?: string;
  hideTopBar?: boolean;
  animate?: boolean;
  transparent?: boolean;
  withRightButton?: boolean;
  disabledRightButton?: boolean;
  rightButtonLabel?: string;
  rightPart: RightPartType;
}

const BUTTON1: OptionsTopBarButton = {
  id: 'one',
  text: 'Button 1',
};

const BUTTON2: OptionsTopBarButton = {
  id: 'two',
  text: 'Button 2',
};

class TopBarActionsScreen extends Component<undefined, State> {
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
  };

  topBar = new TopBar();

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
    } = this.state;
    this.topBar
      .withTitle(title, {color: textColor})
      .withSubtitle(subtitle, {color: textColor})
      .withVisibility(!hideTopBar)
      .withAnimation(animate);
    transparent && this.topBar.withTransparency();
    withRightButton
      ? this.topBar.withRightButtons([{id: 'button', text: rightButtonLabel, enabled: !disabledRightButton}])
      : this.topBar.withRightButtons([]);

    this.topBar.update();
  };

  render() {
    const {textColor, hideTopBar, animate, transparent, disabledRightButton, withRightButton, rightButtonLabel} = this.state;
    return (
      <View padding-s5 flex>
        <Text text40 marginB-s3>
          TopBar Actions
        </Text>
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
            <Checkbox label="Hide Top Bar" value={hideTopBar} onValueChange={(value) => this.setState({hideTopBar: value})} />
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
            <View padding-s5 style={{borderWidth: 1, borderColor: Colors.grey50}}>
              <TextField title="Button Label" placeholder="Enter right button label" value={rightButtonLabel} />
              <Checkbox
                label="Disabled"
                value={disabledRightButton}
                onValueChange={(value) => this.setState({disabledRightButton: value})}
              />
            </View>
          </ExpandableSection>
        </View>

        <View center useSafeArea>
          <Button label="Update" onPress={this.updateTopBar} />
        </View>
      </View>
    );
  }
}

export default TopBarActionsScreen;

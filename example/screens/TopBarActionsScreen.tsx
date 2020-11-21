import React, {Component} from 'react';
import {OptionsTopBarButton} from 'react-native-navigation';
import {
  View,
  Text,
  Button,
  TextField,
  Checkbox,
  Spacings,
  ColorPalette,
  Colors,
  RadioGroup,
  RadioButton,
} from 'react-native-ui-lib';
import {TopBar} from 'rnn-simple';

type RightPartType = 'none' | 'single' | 'multiple' | 'loader';
interface State {
  title?: string;
  subtitle?: string;
  textColor?: string;
  hideTopBar?: boolean;
  animate?: boolean;
  transparent?: boolean;
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
    rightPart: 'none' as RightPartType,
  };

  topBar = new TopBar();

  setRightPart = () => {
    const {rightPart} = this.state;
    switch (rightPart) {
      case 'none':
        this.topBar.withRightButtons([]);
        break;
      case 'single':
        this.topBar.withRightButton(BUTTON1);
        break;
      case 'multiple':
        this.topBar.withRightButtons([BUTTON1, BUTTON2]);
        break;
      case 'loader':
        break;
      default:
        break;
    }
  };

  updateTopBar = () => {
    const {
      title,
      subtitle,
      textColor,
      hideTopBar,
      animate,
      transparent,
    } = this.state;
    this.topBar
      .withTitle(title, {color: textColor})
      .withSubtitle(subtitle, {color: textColor})
      .withVisibility(!hideTopBar)
      .withAnimation(animate);
    transparent && this.topBar.withTransparency();
    this.setRightPart();
    this.topBar.update();
  };

  render() {
    const {textColor, hideTopBar, animate, transparent, rightPart} = this.state;
    return (
      <View padding-s5 flex>
        <Text text40 marginB-s3>
          TopBar Actions
        </Text>
        <View flex>
          <TextField
            title="Title"
            placeholder="Enter title"
            onChangeText={(title: string) => this.setState({title})}
          />
          <TextField
            title="Subtitle"
            placeholder="Enter subtitle"
            onChangeText={(subtitle: string) => this.setState({subtitle})}
          />

          <View row centerV>
            <Text text70>Select Color</Text>

            <ColorPalette
              value={textColor}
              onValueChange={(value: string) =>
                this.setState({textColor: value})
              }
              colors={[
                Colors.grey10,
                Colors.red30,
                Colors.blue30,
                Colors.green30,
              ]}
            />
          </View>

          <View row>
            <Checkbox
              label="Hide Top Bar"
              value={hideTopBar}
              onValueChange={(value) => this.setState({hideTopBar: value})}
            />
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

          <RadioGroup
            initialValue={rightPart}
            onValueChange={(value) => this.setState({rightPart: value})}>
            <Text text60 marginT-s5 marginB-s3>
              Right Buttons
            </Text>
            <RadioButton marginB-s1 value={'none'} label="None" />
            <RadioButton marginB-s1 value={'single'} label="Single Button" />
            <RadioButton
              marginB-s1
              value={'multiple'}
              label="Multiple Buttons"
            />
            <RadioButton marginB-s1 value={'loader'} label="Loader" />
          </RadioGroup>
        </View>

        <View center useSafeArea>
          <Button label="Update" onPress={this.updateTopBar} />
        </View>
      </View>
    );
  }
}

export default TopBarActionsScreen;

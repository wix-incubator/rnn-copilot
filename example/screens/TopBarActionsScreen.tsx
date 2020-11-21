import React, {Component} from 'react';
import {
  View,
  Text,
  Button,
  TextField,
  Checkbox,
  Spacings,
  ColorPalette,
  Colors,
} from 'react-native-ui-lib';
import {updateTopBar} from 'rnn-simple';

interface State {
  title?: string;
  subtitle?: string;
  textColor?: string;
  hideTopBar?: boolean;
  animate?: boolean;
}

class TopBarActionsScreen extends Component<undefined, State> {
  state = {
    title: '',
    subtitle: '',
    textColor: Colors.grey10,
    hideTopBar: false,
    animate: false,
  };

  updateTopBar = () => {
    const {title, subtitle, textColor, hideTopBar, animate} = this.state;
    updateTopBar()
      .withTitle(title, {color: textColor})
      .withSubtitle(subtitle, {color: textColor})
      .withVisibility(!hideTopBar)
      .withAnimation(animate)
      .go();
  };

  render() {
    const {textColor, hideTopBar, animate} = this.state;
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
        </View>

        <View center useSafeArea>
          <Button label="Update" onPress={this.updateTopBar} />
        </View>
      </View>
    );
  }
}

export default TopBarActionsScreen;

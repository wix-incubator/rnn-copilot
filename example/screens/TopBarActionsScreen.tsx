import React, {Component} from 'react';
import View from 'react-native-ui-lib/view';
import Text from 'react-native-ui-lib/text';
import Button from 'react-native-ui-lib/button';
import TextField from 'react-native-ui-lib/textField';
import {updateTopBar} from 'rnn-simple';

interface State {
  title?: string;
  subtitle?: string;
}

class TopBarActionsScreen extends Component<undefined, State> {
  state = {
    title: '',
    subtitle: '',
  };

  updateTopBar = () => {
    const {title, subtitle} = this.state;
    updateTopBar().withTitle(title).withSubtitle(subtitle).go();
  };

  render() {
    return (
      <View padding-s5>
        <Text text40 marginB-s3>
          TopBar Actions
        </Text>

        <TextField
          title="Title"
          placeholder="Enter title"
          onChangeText={(title) => this.setState({title})}
        />
        <TextField
          title="Subtitle"
          placeholder="Enter subtitle"
          onChangeText={(subtitle) => this.setState({subtitle})}
        />

        <View center>
          <Button label="Update" onPress={this.updateTopBar} />
        </View>
      </View>
    );
  }
}

export default TopBarActionsScreen;

import React, {Component} from 'react';
import {View, Text, Button} from 'react-native-ui-lib';
import {push} from 'rnn-simple';

type ScreenType = 'screen' | 'modal';
interface State {
  screenType: ScreenType;
}

class PushActionsScreen extends Component<undefined, State> {
  state = {
    screenType: 'screen' as ScreenType,
  };

  push = () => {
    const {screenType} = this.state;
    const pushAction = push('rnnsimple.PushActionsScreen');
    screenType === 'modal' && pushAction.asModal();
    pushAction.go();
  };

  render() {
    const {screenType} = this.state;
    const isModal = screenType === 'modal';

    return (
      <View flex padding-s5>
        <Text text40 marginB-s5>
          Push Actions
        </Text>
        <View flex>
          <View row center>
            <Button
              label="Screen"
              marginR-s5
              outline={isModal}
              onPress={() => this.setState({screenType: 'screen'})}
            />
            <Button
              label="Modal"
              outline={!isModal}
              onPress={() => this.setState({screenType: 'modal'})}
            />
          </View>
        </View>
        <View useSafeArea center>
          <Button label="Push" onPress={this.push} />
        </View>
      </View>
    );
  }
}

export default PushActionsScreen;

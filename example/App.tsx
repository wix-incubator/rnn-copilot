import React, {Component} from 'react';
import View from 'react-native-ui-lib/view';
import Text from 'react-native-ui-lib/text';
import TouchableOpacity from 'react-native-ui-lib/touchableOpacity';
import {Colors} from 'react-native-ui-lib/style';
import {StyleSheet} from 'react-native';
import {push} from 'rnn-simple';

class App extends Component {
  state = {};

  renderItem(title: string, screenName: string) {
    return (
      <TouchableOpacity marginL-s5 paddingR-s5 paddingV-s4 style={styles.listItem} onPress={() => push(screenName).go()}>
        <Text text70R>{title}</Text>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View flex paddingT-s5>
        <Text marginL-s5 text40>
          RNNSimple
        </Text>
        {this.renderItem('TopBar Actions', 'rnnsimple.TopBarActionsScreen')}
        {this.renderItem('Push Actions', 'rnnsimple.PushActionsScreen')}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  listItem: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.grey50,
  },
});

export default App;

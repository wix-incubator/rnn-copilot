import React, {useEffect, useRef} from 'react';
import View from 'react-native-ui-lib/view';
import Text from 'react-native-ui-lib/text';
import TouchableOpacity from 'react-native-ui-lib/touchableOpacity';
import {Colors} from 'react-native-ui-lib/style';
import {StyleSheet} from 'react-native';
import {push as pushBuilder, StaticOptions, TopBar} from 'rnn-copilot';
import {Navigation} from 'react-native-navigation';
// import {Constants} from 'react-native-ui-lib';

function App({componentId}: Screen) {
  const push = useRef(pushBuilder(undefined, componentId)).current;

  useEffect(() => {
    Navigation.events().registerNavigationButtonPressedListener(event => {
      if (event.buttonId === 'sideMenu') {
        Navigation.mergeOptions(componentId, {
          sideMenu: {
            left: {
              visible: true,
              // width: Constants.screenWidth,
            },
          },
        });
      }
    });
  }, []);

  const renderItem = (title: string, screenName: string) => {
    return (
      <TouchableOpacity marginL-s5 paddingR-s5 paddingV-s4 style={styles.listItem} onPress={() => push.withScreen(screenName).go()}>
        <Text text70R>{title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View flex paddingT-s5>
      <Text marginL-s5 text40>
        RNN Copilot
      </Text>
      {renderItem('TopBar & StatusBar', 'rnncopilot.TopBarActionsScreen')}
      {renderItem('Push', 'rnncopilot.PushActionsScreen')}
      {renderItem('Roots', 'rnncopilot.RootsScreen')}
    </View>
  );
}

App.options = () => {
  return new StaticOptions().withTopBar(new TopBar().withTitle('RNN COPILOT').withLeftButton({id: 'sideMenu', text: '='})).get();
};

const styles = StyleSheet.create({
  listItem: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.grey50,
  },
});

export default App;

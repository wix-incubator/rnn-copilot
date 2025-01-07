import React, {Component} from 'react';
import {View, Text, Button, Colors, Assets} from 'react-native-ui-lib';
import {BottomTab, Root} from 'rnn-copilot';
import {name as appName} from '../../app.json';

class RootsScreen extends Component {
  state = {};

  setRootWithTabs = () => {
    const tab1 = new BottomTab('main', `${appName}_1`).withLabel('Main').withIcon(Assets.icons.home).withSelectedColor(Colors.blue30);
    const tab2 = new BottomTab('secondary', `${appName}_2`)
      .withLabel('Second')
      .withIcon(Assets.icons.account)
      .withSelectedColor(Colors.blue30);

    Root.clear().withBottomTab(tab1).withBottomTab(tab2).set();
  };

  setRootAsSingleStack = () => {
    Root.clear().withSingleStack(appName).set();
  };

  setRootWithSideMenu = () => {
    Root.clear().withSideMenu('sideMenu').withSingleStack(appName).set()
  }

  render() {
    return (
      <View flex padding-s5>
        <Text text40 marginB-s3>
          Roots
        </Text>
        <View center flex gap-s3>
          <Button label="With Tabs" onPress={this.setRootWithTabs} />
          <Button label="Single Stack" onPress={this.setRootAsSingleStack} />
          <Button label="Side Menu" onPress={this.setRootWithSideMenu} />
        </View>
      </View>
    );
  }
}

export default RootsScreen;

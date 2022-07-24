import React, {Component} from 'react';
import {Navigation} from 'react-native-navigation';
import {View, Text, Button, ExpandableSection, Checkbox, Typography, TextField, Colors, Spacings} from 'react-native-ui-lib';
import {push, TopBar, StaticOptions, NavigationState} from 'rnn-copilot';

class PushActionsScreen extends Component<Screen> {
  static options() {
    return (
      new StaticOptions()
        // .withStatusBar(new StatusBar().withBackgroundColor('red'))
        .withTopBar(new TopBar().withTitle('Push Actions'))
        .get()
    );
  }

  state = {
    withTopBar: false,
    topBarTitle: '',
    topBarSubtitle: '',
  };

  pushScreen = () => this.push(false);
  pushModal = () => this.push(true);

  push = (asModal: boolean) => {
    const {withTopBar, topBarTitle, topBarSubtitle} = this.state;
    const pushAction = push('rnncopilot.PushActionsScreen', this.props.componentId);
    asModal && pushAction.asModal();
    if (withTopBar) {
      const topBar = new TopBar().withTitle(topBarTitle).withSubtitle(topBarSubtitle);
      pushAction.withTopBar(topBar);
    }
    pushAction.go();
  };

  dismissAll = () => {
    Navigation.dismissAllModals();
  };

  render() {
    const {withTopBar} = this.state;

    return (
      <View flex padding-s5>
        <Text text40 marginB-s5>
          Push Actions
        </Text>
        <View flex>
          <View row center>
            <Button label="Push" marginR-s5 onPress={this.pushScreen} />
            <Button label="ShowModal" onPress={this.pushModal} />
          </View>
          <ExpandableSection
            onPress={() => this.setState({withTopBar: !withTopBar})}
            expanded={withTopBar}
            sectionHeader={
              <View paddingV-s3 pointerEvents="none">
                <Checkbox value={withTopBar} label="TopBar" labelStyle={Typography.text60} />
              </View>
            }>
            <View padding-s5 style={{borderWidth: 1, borderColor: Colors.grey50}}>
              <View row>
                <TextField
                  containerStyle={{flex: 1, marginRight: Spacings.s2}}
                  title="Tile"
                  placeholder="Enter title"
                  onChangeText={(topBarTitle: string) => this.setState({topBarTitle})}
                />
                <TextField
                  containerStyle={{flex: 1}}
                  title="Subtitle"
                  placeholder="Enter subtitle"
                  onChangeText={(topBarSubtitle: string) => this.setState({topBarSubtitle})}
                />
              </View>
            </View>
          </ExpandableSection>
        </View>
        <View flex>
          <Text text60>General Info</Text>
          <Text text70>Stack Level: {NavigationState.stackCounter}</Text>
          <Text text70>Current Screen ID: {NavigationState.activeScreenId}</Text>
        </View>
        <View useSafeArea center row>
          <Button marginL-s4 label="Dismiss All Modals" onPress={this.dismissAll} />
        </View>
      </View>
    );
  }
}

export default PushActionsScreen;

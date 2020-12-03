import React, {Component} from 'react';
import {View, Text, Button, ExpandableSection, Checkbox, Typography, TextField, Colors, Spacings} from 'react-native-ui-lib';
import {push, TopBar, StaticOptions, StatusBar} from 'rnn-copilot';

type ScreenType = 'screen' | 'modal';
interface State {
  screenType: ScreenType;
  withTopBar?: boolean;
  topBarTitle?: string;
  topBarSubtitle?: string;
}

class PushActionsScreen extends Component<Screen, State> {
  static options() {
    return (
      new StaticOptions()
        // .withStatusBar(new StatusBar().withBackgroundColor('red'))
        .withTopBar(new TopBar().withTitle('Push Actions'))
        .get()
    );
  }
  state = {
    screenType: 'screen' as ScreenType,
    withTopBar: false,
    topBarTitle: '',
    topBarSubtitle: '',
  };

  push = () => {
    const {screenType, withTopBar, topBarTitle, topBarSubtitle} = this.state;
    const pushAction = push('rnnsimple.PushActionsScreen', this.props.componentId);
    screenType === 'modal' && pushAction.asModal();
    if (withTopBar) {
      const topBar = new TopBar().withTitle(topBarTitle).withSubtitle(topBarSubtitle);
      pushAction.withTopBar(topBar);
    }
    pushAction.go();
  };

  render() {
    const {screenType, withTopBar} = this.state;
    const isModal = screenType === 'modal';

    return (
      <View flex padding-s5>
        <Text text40 marginB-s5>
          Push Actions
        </Text>
        <View flex>
          <View row center>
            <Button label="Screen" marginR-s5 outline={isModal} onPress={() => this.setState({screenType: 'screen'})} />
            <Button label="Modal" outline={!isModal} onPress={() => this.setState({screenType: 'modal'})} />
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
        <View useSafeArea center>
          <Button label="Push" onPress={this.push} />
        </View>
      </View>
    );
  }
}

export default PushActionsScreen;

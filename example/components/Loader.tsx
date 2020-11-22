import React from 'react';
import {ActivityIndicator} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {Colors} from 'react-native-ui-lib';

const Loader = () => {
  return <ActivityIndicator size="small" color={Colors.grey10} />;
};

Navigation.registerComponent('rnnsimple.Loader', () => Loader);

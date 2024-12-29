import React from 'react';
import {StyleSheet} from 'react-native';
import {Colors, Spacings, Text, View} from 'react-native-ui-lib';

const SideMenuScreen: React.FC = () => {
  return (
    <View flex useSafeArea>
      <View flex padding-s5>
        <Text text50 marginB-s5>
          Side Menu
        </Text>

        {Array.from({length: 4}).map((_, i) => {
          return (
            <View key={i} style={styles.listItem}>
              <Text>ITEM {i + 1}</Text>
            </View>
          );
        })}

        <View flex bottom>
          <Text>© 2024 Example App. All Rights Reserved.</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    paddingVertical: Spacings.s3,
    borderBottomWidth: 1,
    borderBottomColor: Colors.grey50,
  },
});

export default SideMenuScreen;

import {View, Text} from 'react-native';
import React from 'react';
import MainNavigator from './src/navigation/MainNavigator';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <MainNavigator />
    </View>
  );
};

export default App;

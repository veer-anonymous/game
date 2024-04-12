import {View, Text} from 'react-native';
import React from 'react';
import MainNavigator from './src/navigation/MainNavigator';
import MathGameComponent from './src/screen/MathgameComponent';
import Navigation from './src/screen/Navigation';

const App = () => {
  return (
    <View style={{flex: 1}}>
      {/* <MainNavigator /> */}
      {/* <MathGameComponent /> */}
      <Navigation />
    </View>
  );
};

export default App;

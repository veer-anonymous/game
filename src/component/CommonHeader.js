import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {scale} from 'react-native-size-matters';

const CommonHeader = () => {
  return <View style={style.container}></View>;
};

export default CommonHeader;
const style = StyleSheet.create({
  container: {
    width: '100%',
    height: scale(50),
    backgroundColor: '#8331D4',
  },
});

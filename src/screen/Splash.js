import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

const Splash = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('gamelogic');
    }, 3000);
  }, []);
  return (
    <View style={style.container}>
      <Text style={{fontSize: 39}}>this is a slpash Screen so </Text>
    </View>
  );
};

export default Splash;
const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink',
  },
});

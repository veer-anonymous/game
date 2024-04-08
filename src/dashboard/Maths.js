import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {scale} from 'react-native-size-matters';
import {useNavigation} from '@react-navigation/native';

const Maths = () => {
  const navigation = useNavigation();
  return (
    <View style={style.container}>
      <TouchableOpacity
        style={style.box}
        onPress={() => {
          navigation.navigate('game', {type: 1});
        }}>
        <Text style={style.number_lock}>1</Text>
        <Text style={{fontSize: 20, flexDirection: 'row'}}>⭐ ⭐ ⭐</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={style.box}
        onPress={() => {
          navigation.navigate('game', {type: 2});
        }}>
        {/* <Text>2 </Text> */}
        <Text style={style.number_lock}>🔒</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={style.box}
        onPress={() => {
          navigation.navigate('game', {type: 3});
        }}>
        {/* <Text style={style.number_lock}>3 </Text> */}
        <Text style={style.number_lock}>🔒</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={style.box}
        onPress={() => {
          navigation.navigate('game', {type: 'four'});
        }}>
        {/* <Text style={style.number_lock}>4 </Text> */}
        <Text style={style.number_lock}>🔒</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={style.box}
        onPress={() => {
          navigation.navigate('game', {type: 'five'});
        }}>
        {/* <Text style={style.number_lock}>5 </Text> */}
        <Text style={style.number_lock}>🔒</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={style.box}
        onPress={() => {
          navigation.navigate('game', {type: 'six'});
        }}>
        {/* <Text style={style.number_lock}>6</Text> */}
        <Text style={style.number_lock}>🔒</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={style.box}
        onPress={() => {
          navigation.navigate('game', {type: 'seven'});
        }}>
        {/* <Text style={style.number_lock}>7 </Text> */}
        <Text style={style.number_lock}>🔒</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={style.box}
        onPress={() => {
          navigation.navigate('game', {type: 'eight'});
        }}>
        {/* <Text style={style.number_lock}>8 </Text> */}
        <Text style={style.number_lock}>🔒</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={style.box}
        onPress={() => {
          navigation.navigate('game', {type: 'nine'});
        }}>
        {/* <Text style={style.number_lock}>9 </Text> */}
        <Text style={style.number_lock}>🔒</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={style.box}
        onPress={() => {
          navigation.navigate('game', {type: 'ten'});
        }}>
        <Text style={style.number_lock}>🔒</Text>
        {/* <Text>10 </Text> */}
        {/* <Text style={{color: 'pink', fontSize: 20}}>hi ⭐🔒 🔒</Text> */}
      </TouchableOpacity>
    </View>
  );
};

export default Maths;
const style = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: scale(15),
  },
  box: {
    width: scale(100),
    height: scale(100),
    backgroundColor: 'lightblue',
    marginHorizontal: scale(5),
    marginVertical: scale(10),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderColor: 'pink',
    borderWidth: 2.5,
  },
  number_lock: {
    fontSize: 50,
    // backgroundColor: 'pink',
    fontWeight: 'bold',
  },
});

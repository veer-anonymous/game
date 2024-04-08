import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Dimensions,
} from 'react-native';
import React from 'react';
import CommonHeader from '../component/CommonHeader';
import {scale, verticalScale} from 'react-native-size-matters';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
  return (
    <View style={style.container}>
      <StatusBar backgroundColor={'#8331D4'} barStyle={'dark-content'} />
      <CommonHeader />
      <TouchableOpacity
        style={[style.item, {marginTop: verticalScale(50)}]}
        onPress={() => {
          navigation.navigate('hindi');
        }}>
        <Text style={style.text}>Hindi</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={style.item}
        onPress={() => {
          navigation.navigate('marathi');
        }}>
        <Text style={style.text}>Marathi</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={style.item}
        onPress={() => {
          navigation.navigate('english');
        }}>
        <Text style={style.text}>English</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={style.item}
        onPress={() => {
          navigation.navigate('science');
        }}>
        <Text style={style.text}>Science</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={style.item}
        onPress={() => {
          navigation.navigate('history');
        }}>
        <Text style={style.text}>History</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={style.item}
        onPress={() => {
          navigation.navigate('Maths');
        }}>
        <Text style={style.text}>Maths</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={style.item}
        onPress={() => {
          navigation.navigate('slap');
        }}>
        <Text style={style.text}>Slap</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={style.item}
        onPress={() => {
          navigation.navigate('snake');
        }}>
        <Text style={style.text}>Snake</Text>
      </TouchableOpacity>
      <View style={style.bottom}>
        <TouchableOpacity
          style={style.bottom_item}
          onPress={() => {
            navigation.navigate('snake');
          }}>
          <Text style={style.bottom_text}>Quite</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.bottom_item}
          onPress={() => {
            navigation.navigate('snake');
          }}>
          <Text style={style.bottom_text}>Rate</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
const style = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#8331D4',
  },
  item: {
    width: Dimensions.get('screen').width - 50,
    backgroundColor: '#A76AE4',
    marginVertical: verticalScale(5),
    padding: scale(10),
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#5761BD',
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: scale(14),
  },
  bottom: {
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: verticalScale(20),
  },
  bottom_item: {
    width: '35%',
    backgroundColor: '#A76AE4',
    padding: scale(15),
    borderRadius: 10,
    borderWidth: 3,
    borderColor: '#5761BD',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottom_text: {
    fontSize: scale(15),
    color: '#fff',
    fontWeight: 'bold',
  },
});

import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../dashboard/Home';
import Hindi from '../dashboard/Hindi';
import Marathi from '../dashboard/Marathi';
import English from '../dashboard/English';
import Science from '../dashboard/Science';
import History from '../dashboard/History';
import Maths from '../dashboard/Maths';
import Splash from '../onboading/Splash';
import Slap from '../dashboard/Slap';
import Snake from '../dashboard/Snake';
import Welcome from '../onboading/Welcome';
import Game from '../component/Game';

const Stack = createStackNavigator();
const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen name="hindi" component={Hindi} />
        <Stack.Screen name="marathi" component={Marathi} />
        <Stack.Screen name="english" component={English} />
        <Stack.Screen name="science" component={Science} />
        <Stack.Screen name="history" component={History} />
        <Stack.Screen name="Maths" component={Maths} />
        <Stack.Screen name="slap" component={Slap} />
        <Stack.Screen name="snake" component={Snake} />
        <Stack.Screen name="splash" component={Splash} />
        <Stack.Screen name="welcome" component={Welcome} />
        <Stack.Screen name="game" component={Game} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;

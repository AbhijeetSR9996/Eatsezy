import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//import {createStackNavigator} from '@react-navigation/stack';
import SplashScreenDemo from '../screens/SplashScreenDemo';
import HomeScreen from '../screens/Home/HomeScreen';
import BottomTabs from '../navigation/bottomTabs/BottomTabs';

const Stack = createNativeStackNavigator();
//const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='SplashScreenDemo'>
     
        <Stack.Screen name="SplashDemo" component={SplashScreenDemo} />
        <Stack.Screen name="BottomTabs" component={BottomTabs} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;

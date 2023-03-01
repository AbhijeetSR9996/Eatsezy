import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreenDemo from '../screens/SplashScreenDemo';
import HomeScreen from '../screens/Home/HomeScreen';
import SearchScreen from '../screens/Search/SearchScreen';
import LoginScreen from '../screens/Login/LoginScreen';
import SignupScreen from '../screens/SignUp/SignUpScreen';
import BottomTabs from '../navigation/bottomTabs/BottomTabs';
import MyReservesionScreen from '../screens/MyReservesion/MyReservesionScreen';
import NotificationScreen from '../screens/Notification/NotificationScreen';
import FindRestaurantMap from '../screens/FindRestautantMap/FindRestaurantScreen';
import RestaurantsScreen from '../screens/Restaurants/RestaurantsScreen';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='SplashScreenDemo'>
     
        <Stack.Screen name="SplashDemo" component={SplashScreenDemo} />
        <Stack.Screen name="BottomTabs" component={BottomTabs} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="SearchScreen" component={SearchScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignupScreen" component={SignupScreen} />
        <Stack.Screen name="MyReservesionScreen" component={MyReservesionScreen} />
        <Stack.Screen name="NotificationScreen" component={NotificationScreen} />
        <Stack.Screen name="FindRestaurantMap" component={FindRestaurantMap} />
        <Stack.Screen name="RestaurantsScreen" component={RestaurantsScreen}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;

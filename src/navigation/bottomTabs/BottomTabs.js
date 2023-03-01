import * as React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screens/Home/HomeScreen';
import SearchScreen from '../../screens/Search/SearchScreen';
import LoginScreen from '../../screens/Login/LoginScreen';
import SignupScreen from '../../screens/SignUp/SignUpScreen';
import MyReservesionScreen from '../../screens/MyReservesion/MyReservesionScreen';
import NotificationScreen from '../../screens/Notification/NotificationScreen';
import FindRestaurantMap from '../../screens/FindRestautantMap/FindRestaurantScreen';
import RestaurantsScreen from '../../screens/Restaurants/RestaurantsScreen';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
	return (
		<Tab.Navigator
			backBehavior='none'
      screenOptions={{
        headerShown: false,
      }}
			tabBarOptions={{
				labelStyle: { fontSize: 0 },
				activeTintColor: 'white',
				inactiveTintColor: 'white',
			  }}
		>
			<Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          //tabBarStyle:{display:'none'},
          //tabBarButton: () => null,
          tabBarIcon: () => (
            <Image
              source={require('../../assets/images/home.png')}
              style={{ width: 22, height: 20 }}
            />
          )
        }}
      />
      <Tab.Screen
        name="NotificationScreen"
        component={NotificationScreen}
        options={{
          //tabBarStyle:{display:'none'},
          tabBarButton: () => null,
          tabBarIcon: () => (
            <Image
              source={require('../../assets/images/home.png')}
              style={{ width: 22, height: 20 }}
            />
          )
        }}
      />
      <Tab.Screen
        name="FindRestaurantMap"
        component={FindRestaurantMap}
        options={{
          //tabBarStyle:{display:'none'},
          tabBarButton: () => null,
          tabBarIcon: () => (
            <Image
              source={require('../../assets/images/home.png')}
              style={{ width: 22, height: 20 }}
            />
          )
        }}
      />
            <Tab.Screen
        name="RestaurantsScreen"
        component={RestaurantsScreen}
        options={{
          //tabBarStyle:{display:'none'},
          tabBarButton: () => null,
          tabBarIcon: () => (
            <Image
              source={require('../../assets/images/home.png')}
              style={{ width: 22, height: 20 }}
            />
          )
        }}
      />
	  <Tab.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          //tabBarStyle:{display:'none'},
          //tabBarButton: () => null,
          tabBarIcon: () => (
            <Image
              source={require('../../assets/images/searchicon.png')}
              style={{ width: 22, height: 22 }}
            />
          )
        }}
      />
      <Tab.Screen
        name="MyReservesionScreen"
        component={MyReservesionScreen}
        options={{
          //tabBarStyle:{display:'none'},
          //tabBarButton: () => null,
          tabBarIcon: () => (
            <Image
              source={require('../../assets/images/calendar.png')}
              style={{ width: 22, height: 22 }}
            />
          )
        }}
      />
      <Tab.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{
          //tabBarStyle:{display:'none'},
          //tabBarButton: () => null,
          tabBarIcon: () => (
            <Image
              source={require('../../assets/images/user2.png')}
              style={{ width: 22, height: 22 }}
            />
          )
        }}
      />
      <Tab.Screen
        name="SignupScreen"
        component={SignupScreen}
        options={{
          //tabBarStyle:{display:'none'},
          tabBarButton: () => null,
          tabBarIcon: () => (
            <Image
              source={require('../../assets/images/user2.png')}
              style={{ width: 22, height: 22 }}
            />
          )
        }}
      />
      
			</Tab.Navigator>
	);
}
export default BottomTabs;
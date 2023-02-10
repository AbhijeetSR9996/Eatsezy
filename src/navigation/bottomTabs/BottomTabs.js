import * as React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//my imports

import HomeScreen from '../../screens/Home/HomeScreen';


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
	  {/* <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          //tabBarStyle:{display:'none'},
          //tabBarButton: () => null,
          tabBarIcon: () => (
            <Image
              source={require('../../assets/images/Bell.png')}
              style={{ width: 22, height: 20 }}
            />
          )
        }}
      /> */}
      {/* <Tab.Screen
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
      /> */}
			</Tab.Navigator>
	);
}
export default BottomTabs;
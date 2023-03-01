import React from 'react';
import { ScreenNames } from '../../global/index';
import { enableScreens } from 'react-native-screens';
import { createNativeStackNavigator } from 'react-native-screens/native-stack'

//screens imports
import HomeScreen from '../../screens/Home/HomeScreen';
import NotificationsScreen from '../../screens/Notifications/NotificationsScreen';
import FindRestaurantMap from '../../screens/FindRestautantMap/FindRestaurantScreen';
import RestaurantDetailScreen from '../../screens/RestaurantDetail/RestaurantDetailScreen';
import RestaurantsScreen from '../../screens/Restaurants/RestaurantsScreen';
import SearchScreen from '../../screens/Search/SearchScreen';
import BookingDetailScreen from '../../screens/BookingDetail/BookingDetailScreen';
import MyReservesionScreen from '../../screens/MyReservesion/MyReservesionScreen';
import CreateEnquiryScreen from '../../screens/CreateEnquiry/CreateEnquiryScreen';
import ReservedScreen from '../../screens/Reserved/ReservedScreen';
import EditReservationScreen from '../../screens/EditReservation/EditReservationScreen';

enableScreens();
const stack = createNativeStackNavigator();

const NotificationStack = () => {
	return (
		<stack.Navigator
			screenOptions={
				{
					headerShown: false
				}}
			initialRouteName={ScreenNames.MYRESERVESION_SCREEN}
		// initialRouteName='Test'
		>
			<stack.Screen
				name={ScreenNames.FIND_RESTAURANT_MAP}
				component={FindRestaurantMap} />
			<stack.Screen
				name={ScreenNames.RESTAURANTDETAIL_SCREEN}
				component={RestaurantDetailScreen} />
			<stack.Screen
				name={ScreenNames.RESTAURANTS_SCREEN}
				component={RestaurantsScreen} />

			<stack.Screen
				name={ScreenNames.SEARCH_SCREEN}
				component={SearchScreen} />
			<stack.Screen
				name={ScreenNames.BOOKINGDETAIL_SCREEN}
				component={BookingDetailScreen} />

			<stack.Screen
				name={ScreenNames.MYRESERVESION_SCREEN}
				component={MyReservesionScreen} />

			<stack.Screen
				name={ScreenNames.CREATEENQUIRY_SCREEN}
				component={CreateEnquiryScreen} />

			<stack.Screen
				name={ScreenNames.RESERVED_SCREEN}
				component={ReservedScreen} />
			<stack.Screen name={ScreenNames.NOTIFICATION_SCREEN} component={NotificationsScreen} />

			<stack.Screen name={ScreenNames.EDITBOOKING} component={EditReservationScreen} />
		</stack.Navigator>
	);
};
export default NotificationStack;
import React from 'react';
import { ScreenNames } from '../../global/index';
import { enableScreens } from 'react-native-screens';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

//screens imports
import HomeScreen from '../../screens/Home/HomeScreen';
// import { RESULTS } from 'react-native-permissions';
// import RestaurantDetailScreen from '../../screens/RestaurantDetail/RestaurantDetailScreen';
// import RestaurantsScreen from '../../screens/Restaurants/RestaurantsScreen';
// import SearchScreen from '../../screens/Search/SearchScreen';
// import BookingDetailScreen from '../../screens/BookingDetail/BookingDetailScreen';
// import MyReservesionScreen from '../../screens/MyReservesion/MyReservesionScreen';
// import CreateEnquiryScreen from '../../screens/CreateEnquiry/CreateEnquiryScreen';
// import ReservedScreen from '../../screens/Reserved/ReservedScreen';
import NotificationsScreen from '../../screens/Notification/NotificationScreen';
// import FindRestaurantMap from '../../screens/FindRestautantMap/FindRestaurantScreen';
// import ReviewScreen from '../../screens/Review/ReviewScreen';
import LoginScreen from "../../screens/Login/LoginScreen"
// import EnquiriesScreen from '../../screens/Enquiries/EnquiriesScreen';
// import InquiryScreen from '../../screens/Inquiry/InquiryScreen';
// import PdfScreen from '../../components/Pdf/PdfScreen';
// import RestaurantReviewScreen from '../../screens/RestaurantReview/RestaurantReviewScreen';
// import EditReservationScreen from '../../screens/EditReservation/EditReservationScreen';
enableScreens();
const stack = createNativeStackNavigator();
const HomeStack = () => {
	return (
		<stack.Navigator
			screenOptions={
				{
					headerShown: false
				}}
			initialRouteName={ScreenNames.HOME}
		>
			<stack.Screen
				name={ScreenNames.FIND_RESTAURANT_MAP}
				component={FindRestaurantMap} />
			<stack.Screen
				name={ScreenNames.HOME}
				component={HomeScreen} 
				/*options={({route}) => ({
					headerTransparent:true,
					headerTranslucent
				})}*/
				/>

			<stack.Screen
				name={ScreenNames.PDF_SCREEN}
				component={PdfScreen} />

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
				name={ScreenNames.ENQUIRIES_SCREEN}
				component={EnquiriesScreen} />

			<stack.Screen
				name={ScreenNames.INQUIRES_SCREEN}
				component={InquiryScreen} />




			<stack.Screen
				name={ScreenNames.RESERVED_SCREEN}
				component={ReservedScreen} />

			<stack.Screen
				name={ScreenNames.LOGIN}
				component={LoginScreen} />
			<stack.Screen name={ScreenNames.NOTIFICATION_SCREEN} component={NotificationsScreen} />
			<stack.Screen name={ScreenNames.REVIEW_SCREEN} component={ReviewScreen} />
			<stack.Screen name={ScreenNames.RESTAURANT_REVIEW_SCREEN} component={RestaurantReviewScreen} />
			<stack.Screen name={ScreenNames.EDITBOOKING} component={EditReservationScreen} />
		</stack.Navigator>
	);
};
export default HomeStack;
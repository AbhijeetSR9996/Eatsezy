import React from 'react';
import { ScreenNames } from '../../global/index';
import { enableScreens } from 'react-native-screens';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

//my imports

//screens imports
import LoginScreen from '../../screens/Login/LoginScreen';
import OTPScreen from '../../screens/OTP/OTPScreen';
import { connect } from 'react-redux';
import ProfileScreen from '../../screens/Profile/ProfileScreen';
import SignUpScreen from '../../screens/SignUp/SignUpScreen';
import EditProfileScreen from '../../screens/EditProfile/EditProfileScreen';
import EatsEzyGudiesScreen from '../../screens/EatsEzyGudies/EatsEzyGudiesScreen';
import MyPreferencesScreen from '../../screens/MyPreferences/MyPreferencesScreen';
import ReviewGivenScreen from '../../screens/ReviewGiven/ReviewGivenScreen';
import TransactionScreen from '../../screens/Transaction/TransactionScreen';
import EnquiriesScreen from '../../screens/Enquiries/EnquiriesScreen';
import InquiryScreen from '../../screens/Inquiry/InquiryScreen';
import WalletScreen from '../../screens/Wallet/WalletScreen';
import NotificationsScreen from '../../screens/Notification/NotificationScreen';
import MyFavouriteScreen from '../../screens/MyFavourite/MyFavouriteScreen';
import RestaurantReviewScreen from '../../screens/RestaurantReview/RestaurantReviewScreen';
import RestaurantDetailScreen from '../../screens/RestaurantDetail/RestaurantDetailScreen';

enableScreens();
const stack = createNativeStackNavigator();

const ProfileStack = ({
	isSignedIn
}) => {

	// const initialScreenName = isSignedIn ? ScreenNames.PROFILE : ScreenNames.SIGN_IN;
	const initialScreenName = isSignedIn ? ScreenNames.PROFILE : ScreenNames.LOGIN;

	return (
		<stack.Navigator screenOptions={{ headerShown: false, }} initialRouteName={initialScreenName}	>

			<stack.Screen name={ScreenNames.LOGIN} component={LoginScreen} />
			<stack.Screen name={ScreenNames.SIGNUP_SCREEN} component={SignUpScreen} />

			<stack.Screen name={ScreenNames.OTP} component={OTPScreen} />
			<stack.Screen name={ScreenNames.PROFILE} component={ProfileScreen} />
			<stack.Screen name={ScreenNames.EDITPROFILE_SCREEN} component={EditProfileScreen} />
			<stack.Screen name={ScreenNames.EATSEZY_SCREEN} component={EatsEzyGudiesScreen} />
			<stack.Screen name={ScreenNames.MYPREFERENCES_SCREEN} component={MyPreferencesScreen} />
			<stack.Screen name={ScreenNames.REVIEW_GIVEN_SCREEN} component={ReviewGivenScreen} />
			<stack.Screen name={ScreenNames.TRANSACTION_SCREEN} component={TransactionScreen} />
			<stack.Screen name={ScreenNames.ENQUIRIES_SCREEN} component={EnquiriesScreen} />
			<stack.Screen name={ScreenNames.INQUIRES_SCREEN} component={InquiryScreen} />
			<stack.Screen name={ScreenNames.WALLET_SCREEN} component={WalletScreen} />
			<stack.Screen name={ScreenNames.NOTIFICATION_SCREEN} component={NotificationsScreen} />
			<stack.Screen name={ScreenNames.MYFAVOURITE_SCREEN} component={MyFavouriteScreen} />
			<stack.Screen name={ScreenNames.RESTAURANT_REVIEW_SCREEN} component={RestaurantReviewScreen} />
			<stack.Screen
				name={ScreenNames.RESTAURANTDETAIL_SCREEN}
				component={RestaurantDetailScreen} />

		</stack.Navigator >
	);
};

const mapStateToProps = state => ({
	isSignedIn: state.user.isSignedIn,
});

export default connect(mapStateToProps, null)(ProfileStack);

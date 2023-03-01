import React from 'react';
import { Text, View, Image, TouchableOpacity, StatusBar, ToastAndroid, FlatList, Platform, Alert, Linking, Clipboard, ScrollView } from 'react-native';

//my imports
import { styles } from './ProfileStyle';
import Header from './ProfileHeader';
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar';
import { connect } from 'react-redux';
import { Colors, ScreenNames, Server } from '../../global';
import { globalStyles } from '../../global/globalStyles';
import AsyncStorage from '@react-native-community/async-storage';
import { CommonActions, useNavigation } from '@react-navigation/native';
//import * as UserAction from '../../redux/actions/userActions';
import EditSvg from "../../assets/svg/EditSvg.svg"
import { profileData } from '../../Dummy/Dummy';
import Profile from '../../components/Profile/Profile';
// import axios from 'axios';
// import EatsEzyModal from '../../components/EatsEzyFilterModal/EatsEzyModal';


const ProfileScreen = ({

	name,
	dispatch,

	email,
	profileimg,
	userId

}) => {


	const resetStackAndGoToHome = CommonActions.reset({
		index: 0,
		routes: [{ name: ScreenNames.BOTTOM_TABS, }],
	});


	const navigation = useNavigation();

	const Logout = async () => {

		await AsyncStorage.clear()
		const userToke = { "userToken": "123456" }
		const responsetoken = await axios.post(`${Server.BASE_URL}/user/set-user-token/${userId}`, userToke)
		navigation.dispatch(resetStackAndGoToHome)
		dispatch(UserAction.clearSession())
	}

	const renderProfile = (item, index) => <Profile item={item} index={index} Logout={Logout} />


	const goEditProfile = () => {
		navigation.navigate(ScreenNames.EDITPROFILE_SCREEN)
	}

	return (
		<View style={styles.container}>
			<FocusAwareStatusBar isLightBar={false} isTopSpace={true} isTransparent={true} />
			<Header activateLeftIcon={false} name={"Profile"} />
			<ScrollView showsVerticalScrollIndicator={false}>
				<View style={{ flex: 1 }}>
					<View style={styles.profileContainer}>
						{/* <View style={{ flexDirection: "row", alignItems: "center" }} >
							{profileimg &&
								<Image source={{ uri: profileimg }} style={{ height: 73, width: 73, borderRadius: 100, }} />
							}
							<View style={styles.userDetail}>
								<Text style={styles.font1}>{name}</Text>
								<Text style={styles.font2}>{email}</Text>
							</View>
						</View> */}
						<View style={{ flexDirection: "row", alignItems: "center" }} >
								<Image source={require('../../assets/images/Profile.png')} style={{ height: 73, width: 73, borderRadius: 100, }} />
							<View style={styles.userDetail}>
								<Text style={styles.font1}>Clara Williams</Text>
								<Text style={styles.font2}>mymail@gmail.com</Text>
							</View>
						</View>
						<TouchableOpacity
							onPress={goEditProfile}
							style={styles.edit}>
							<EditSvg />
						</TouchableOpacity>
					</View>
					<View>
						{
							profileData.map(renderProfile)
						}
					</View>
				</View>
			</ScrollView>

		</View>
	);
}

const mapStateToProps = state => ({
	name: state.user.name,
	email: state.user.email,
	profileimg: state.user.profileimg,
	userId: state.user.userId

});

const mapDispatchToProps = dispatch => ({ dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);

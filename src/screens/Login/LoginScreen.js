import React from 'react'
import { View, Text, TouchableOpacity, ScrollView, Platform, KeyboardAvoidingView,Image,SafeAreaView } from 'react-native'
import FocusAwareStatusBar from "../../components/FocusAwareStatusBar"
import { styles } from "./LoginStyle";
import DownArrow from "../../assets/svg/DropDown.svg";
import PhoneSvg from "../../assets/svg/phone2.svg";
//import CountryPicker from 'react-native-country-picker-modal'

import { globalStyles } from "../../global/globalStyles"
import TextInputGlobal from '../../components/TextInputGlobal/TextInputGlobal';
import { Colors, ScreenNames, Server } from '../../global';
import axios from 'axios';
import CustomAlert from '../../components/CustomAlert/CusomAlert';


const LoginScreen = ({ navigation }) => {

	const [mobileNumber, setMobileNumber] = React.useState("")
	const [selectedCountryCode, setSelectedCountryCode] = React.useState("65")
	const [selectedCountry, setSelectedCountry] = React.useState("SG")
	const [countryCodeVisible, setCountryCodeVisible] = React.useState(false)
	const [customAlertVisible, setCustomAlertVisible] = React.useState(false)
	const [alertText, setAlertText] = React.useState("")

	//function
	const goSignUp = () => {
		navigation.navigate(ScreenNames.SIGNUP_SCREEN)
	}

	const goToOtp = async () => {
		if (mobileNumber.length < 8) {
		} else {
		  try {
			console.warn(
			  `${Server.BASE_URL}/user/check-user-by-phone/${
				'+' + selectedCountryCode + mobileNumber
			  }`,
			);
			const response = await axios.get(
			  `${Server.BASE_URL}/user/check-user-by-phone/${
				'+' + selectedCountryCode + mobileNumber
			  }`,
			);
			if (!response.data) {
			  setAlertText('User Does not Exist');
			  toggleCustomAlertVisibility();
			} else {
			  navigation.navigate(ScreenNames.OTP, {
				number: '+' + selectedCountryCode + mobileNumber,
				login: true,
			  });
			}
		  } catch (error) {
			console.warn('error', error.message);
		  }
		}
	  };

	const onSelect = (country) => {
		setSelectedCountry(country.cca2)
		setSelectedCountryCode(country.callingCode[0])
	}

	const toggleCountryCodeVisibility = () => {
		setCountryCodeVisible(!countryCodeVisible)
	}
	const toggleCustomAlertVisibility = () => {
		setCustomAlertVisible(!customAlertVisible)
	}
	return (
		<SafeAreaView style={{flex: 1, backgroundColor: Colors.WHITE}}>
		<KeyboardAvoidingView style={{ flex: 1, backgroundColor: Colors.WHITE,
			flexGrow: 1
		}}
			behavior={Platform.OS === "ios" ? "padding" : 'null'}
		>
		  	
			<FocusAwareStatusBar isLightBar={false} isTopSpace={true} />
		  
			<View style={{ flex: 1,backgroundColor:Colors.WHITE, //marginTop: 20, 
			//paddingBottom:55, 
			}}>
				<ScrollView
					keyboardShouldPersistTaps='handled' showsVerticalScrollIndicator={false}>


					<View style={styles.titleContainer}>
						<Text style={styles.title}>EatsEzy</Text>
					</View>
					<View style={styles.bodyContainer}>
						{/* <TextInputGlobal
							Svg={<TouchableOpacity
								onPress={toggleCountryCodeVisibility}
								style={{ flexDirection: "row", alignItems: "center", marginLeft: 0 }}>
								
								<CountryPicker
									visible={countryCodeVisible}
									withCallingCode
									withFilter
									countryCode={selectedCountry}
									withFlagButton={true}
									withCallingCodeButton
									onSelect={onSelect}
									containerButtonStyle={{ marginRight: 5 }}
									withCloseButton
								/>
								
								<DownArrow />
							</TouchableOpacity>}
							placeHolder={"Phone Number"}
							keyboardType="phone-pad"
							maxLength={10}
							state={mobileNumber}
							setState={setMobileNumber}
						/> */}

                <View style={styles.vwcountry} >                            
                    <TextInputGlobal
                            Svg={<TouchableOpacity
                                onPress={toggleCountryCodeVisibility}
                                style={styles.txtin}>   
                                
                                {/* <CountryPicker
                                    visible={countryCodeVisible}
                                    withCallingCode
                                    withFilter
                                    countryCode={selectedCountry}
                                    withFlagButton
                                    withCallingCodeButton
                                    onSelect={onSelect}
                                    containerButtonStyle={{ marginRight: 5, }}
                                    withCloseButton
                                /> */}
                                
                                <DownArrow />
                                
                            </TouchableOpacity>}
                        
                        />

                        </View> 

                        <View style={styles.vwphone} >                            
                    <TextInputGlobal
                            Svg={<TouchableOpacity
                                onPress={toggleCountryCodeVisibility}
                                style={styles.txtin}>
                              <PhoneSvg style={{left:7}}/>
                            </TouchableOpacity>}
                            placeHolder={"Phone Number"}
                            keyboardType="phone-pad"
                            maxLength={10}
                            state={mobileNumber}
                            setState={setMobileNumber}
                        /> 
                        </View>

					</View>
                    <View style={styles.vw}>
                        <Image style={styles.img} source={require('../../assets/images/eatsezyimage.png')} />
                    </View>

                <View style={styles.footerContainer} > 
                    <TouchableOpacity	onPress={goToOtp}
	                 style={[globalStyles.button,]}>
	                  <Text style={globalStyles.buttonText}>Sign In</Text>
                    </TouchableOpacity>
                    <View style={[styles.alignContent,]}>
	                 <Text style={styles.font1}>Don't have an account? </Text>
      	             <TouchableOpacity onPress={goSignUp}>
		               <Text style={styles.font2}>Sign Up.</Text>
	                 </TouchableOpacity>
                    </View>
                </View>

				</ScrollView>
				
			</View>

			{/* <View style={styles.footerContainer} >

				<TouchableOpacity
					onPress={goToOtp}
					style={[globalStyles.button, { marginTop: 40 }]}>
					<Text style={globalStyles.buttonText}>Sign In</Text>
				</TouchableOpacity>
				<View style={[styles.alignContent, { marginBottom: 20, }]}>
					<Text style={styles.font1}>Don't have an account? </Text>
					<TouchableOpacity onPress={goSignUp}>
						<Text style={styles.font2}>Sign Up.</Text>
					</TouchableOpacity>
				</View>

			</View> */}
            

			<CustomAlert
				toggleCustomAlertVisibility={toggleCustomAlertVisibility}
				customAlertVisible={customAlertVisible}
				desc={alertText}
				title={"Alert"}
				leftButtonText={"ok"}
				leftButtonFunction={toggleCustomAlertVisibility}
			/>
		  
		</KeyboardAvoidingView>
      </SafeAreaView>
	)
}

export default LoginScreen

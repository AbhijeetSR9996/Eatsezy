import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  ScrollView,
  Alert,
  Image,
  TextInput,
  KeyboardAvoidingView,
  SafeAreaView,
} from 'react-native';
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar';
import {styles} from './SignUpStyles';
import UserSvg from '../../assets/svg/user.svg';
import PhoneSvg from '../../assets/svg/phone2.svg';
//import CountryPicker from 'react-native-country-picker-modal';
import DownArrow from '../../assets/svg/DropDown.svg';

import {globalStyles} from '../../global/globalStyles';
import TextInputGlobal from '../../components/TextInputGlobal/TextInputGlobal';
import {Colors, ScreenNames, Server} from '../../global';
//import CheckBox from '@react-native-community/checkbox';
import axios from 'axios';
import CustomAlert from '../../components/CustomAlert/CusomAlert';

const SignUpScreen = ({navigation}) => {
  const [userName, setUserName] = React.useState('');
  const [mobileNumber, setMobileNumber] = React.useState('');
  const [selectedCountryCode, setSelectedCountryCode] = React.useState('65');
  const [selectedCountry, setSelectedCountry] = React.useState('SG');
  const [countryCodeVisible, setCountryCodeVisible] = React.useState(false);
  const [customAlertVisible, setCustomAlertVisible] = React.useState(false);
  const [isChecked, setIsChecked] = React.useState(false);
  const [alertText, setAlertText] = React.useState('');

  const goSignIn = () => {
    navigation.navigate(ScreenNames.LOGIN);
  };

  const toggleCountryCodeVisibility = () => {
    setCountryCodeVisible(!countryCodeVisible);
  };
  const toggleCustomAlertVisibility = () => {
    setCustomAlertVisible(!customAlertVisible);
  };
  const goToOtp = async () => {
    // matches

    if (mobileNumber.length < 8 && userName == '') {
      setAlertText('Please fill all details');
      toggleCustomAlertVisibility();
    } else if (!userName.match(/^[A-Za-z]*$/)) {
      setAlertText('Only taking alphabets uppercase to lowercase');
      toggleCustomAlertVisibility();
    } else {
      const response = await axios.get(
        `${Server.BASE_URL}/user/check-user-by-phone/+${
          selectedCountryCode + mobileNumber
        }`,
      );
      // console.warn("response.data", response.data, "======", selectedCountryCode + mobileNumber);
      if (response.data) {
        setAlertText('User Already Present');
        toggleCustomAlertVisibility();
      } else {
        if (isChecked) {
          // navigation.navigate(ScreenNames.OTP, { number: "+" + selectedCountryCode + mobileNumber, login: false, name: userName })
          navigation.navigate(ScreenNames.OTP, {
            number: selectedCountryCode + mobileNumber,
            login: false,
            name: userName,
          });
        } else {
          setAlertText('Please Agree to our Terms and Condition');
          toggleCustomAlertVisibility();
        }
      }
    }
  };

  const toggleCheckBox = (value) => setIsChecked(value);
  const onSelect = (country) => {
    setSelectedCountry(country.cca2);
    setSelectedCountryCode(country.callingCode[0]);
  };

  return (
    <SafeAreaView >
      <KeyboardAvoidingView
        style={{flex: 1, backgroundColor: Colors.WHITE, flexGrow: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : 'null'}
        //keyboardVerticalOffset= {Platform.OS === 'android'? 64 : 0}
      >
        <FocusAwareStatusBar isLightBar={false} isTopSpace={true} />

        <View style={{flex: 1, backgroundColor: Colors.WHITE, marginTop: 30}}>
          <ScrollView
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}>
            <View 
         style={[styles.img,{elevation:8,borderColor:'black'}]}>
              <Image
                style={styles.img}
                source={require('../../assets/images/eatsezylogo.gif')}
              />
            </View>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>EatsEzy</Text>
            </View>
            <View style={styles.bodyContainer}>
              <TextInputGlobal
                Svg={<UserSvg />}
                placeHolder={'Name'}
                state={userName}
                setState={setUserName}
              />

              {/* <TextInputGlobal
                            Svg={<TouchableOpacity
                                onPress={toggleCountryCodeVisibility}
                                style={{ flexDirection: "row", alignItems: "center", marginLeft: 0, }}>
                             
                                <CountryPicker
                                    visible={countryCodeVisible}
                                    withCallingCode
                                    withFilter
                                    countryCode={selectedCountry}
                                    withFlagButton={true}
                                    withCallingCodeButton
                                    onSelect={onSelect}
                                    containerButtonStyle={{ marginRight: 5, }}
                                    withCloseButton
                                />
                                
                                <DownArrow />
                                
                                <PhoneSvg style={{left:7}}/>
                            </TouchableOpacity>}
                            
                            placeHolder={"Phone Number"}
                            keyboardType="phone-pad"
                            maxLength={10}
                            state={mobileNumber}
                            setState={setMobileNumber}
                        /> */}

              <View style={styles.vwcountry}>
                <TextInputGlobal
                  Svg={
                    <TouchableOpacity
                      onPress={toggleCountryCodeVisibility}
                      style={styles.txtin}>
                      {/* <CountryPicker
                        visible={countryCodeVisible}
                        withCallingCode
                        withFilter
                        countryCode={selectedCountry}
                        withFlagButton={true}
                        withCallingCodeButton
                        onSelect={onSelect}
                        containerButtonStyle={{marginRight: 5}}
                        withCloseButton
                      /> */}

                      <DownArrow />
                    </TouchableOpacity>
                  }
                />
              </View>

              <View style={styles.vwphone}>
                <TextInputGlobal
                  Svg={
                    <TouchableOpacity
                      onPress={toggleCountryCodeVisibility}
                      style={styles.txtin}>
                      <PhoneSvg style={{left: 7}} />
                    </TouchableOpacity>
                  }
                  placeHolder={'Phone Number'}
                  keyboardType="phone-pad"
                  maxLength={10}
                  state={mobileNumber}
                  setState={setMobileNumber}
                />
              </View>

              {/* <View style={styles.vw1}>
                {Platform.OS == 'android' ? (
                  <CheckBox
                    onValueChange={toggleCheckBox}
                    value={isChecked}
                    tintColors={{true: Colors.PRIMARY, false: Colors.PRIMARY}}
                  />
                ) : (
                  <CheckBox
                    value={isChecked}
                    onAnimationType="one-stroke"
                    offAnimationType="one-stroke"
                    onValueChange={toggleCheckBox}
                    boxType="square"
                    onCheckColor={Colors.PRIMARY}
                    tintColor={Colors.PRIMARY}
                    onFillColor={Colors.WHITE}
                    onTintColor={Colors.PRIMARY}
                    style={{transform: [{scale: 0.8}]}}
                  />
                )}
                <View style={styles.terms}>
                  <Text style={styles.font1}>I agree with</Text>
                  <Text style={styles.font2}> Terms and Conditions</Text>
                </View>
              </View> */}
            {/* <View style={styles.vw}> */}

            {/* <Image 
                            source={require('../../assets/images/eatsezylogo.gif')}  
                            style={{width: 150, height: 150 }}
                        /> */}

            {/* </View> */}

            <View style={styles.footerContainer}>
              <TouchableOpacity
                onPress={goToOtp}
                style={[globalStyles.button, {marginTop: 40}]}>
                <Text style={globalStyles.buttonText}>Sign Up</Text>
              </TouchableOpacity>

              <View style={[styles.alignContent, {marginBottom: 40}]}>
                <Text style={[styles.font1, {marginBottom: -2, left: 5}]}>
                  Already have an account?
                </Text>
                <TouchableOpacity
                  onPress={goSignIn}
                  style={{
                    //backgroundColor: 'grey',
                    height: 30,
                    width: 80,
                    top: -3,
                  }}>
                  <Text style={[styles.font2, {top: 5, left: 10}]}>
                    Sign In.
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
                        </View>

          </ScrollView>
          </View>

          <CustomAlert
            toggleCustomAlertVisibility={toggleCustomAlertVisibility}
            customAlertVisible={customAlertVisible}
            desc={alertText}
            title={'Alert'}
            leftButtonText={'ok'}
            leftButtonFunction={toggleCustomAlertVisibility}
          />
        </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignUpScreen;

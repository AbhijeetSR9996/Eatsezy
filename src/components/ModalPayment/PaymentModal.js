import React from 'react';
import { Text, View, Modal, TouchableOpacity, Alert } from 'react-native';

import { styles } from './PaymentModalStyle';

//svgs
import CloseIcon from '../../assets/svg/closecopy.svg';
import { connect } from 'react-redux';
import WebView from 'react-native-webview';


const PaymentModal = ({
	visible,
	toggleOptionMenu,
	paymentUrl,
	placeOnlineBooing
}) => {

	const onBackPress = async () => {
		try {

			toggleOptionMenu()
		} catch (error) {
			console.warn(error.message);

		}
	}
	return (
		<>
			<Modal
				transparent={true}
				// onRequestClose={toggleOptionMenu}
				statusBarTranslucent={true}
				visible={visible}>

				<View style={styles.parentContainer}>

					<View style={styles.childContainer}>

						<View style={styles.header}>
							<View style={styles.headerFirstChild}>
								<Text style={styles.headerText}>Payment Process</Text>
							</View>
							<TouchableOpacity
								onPress={onBackPress}
								style={styles.headerSecondChild}>
								<CloseIcon />
							</TouchableOpacity>
						</View>
						{/* <WebView
									onMessage={event => {
										const { data } = event.nativeEvent;
										if (data === 'Success') {
											placeOrder()
										} else if (data === 'Fail') {
											toggleOptionMenu()
										} else {
											toggleOptionMenu()
										}

									}}
									source={{ html: '<h1>Hello World</h1>' }}
									style={{ width: 300, height: 300 }}
								/> */}
						<WebView
							style={{ opacity: 0.99 }}
							onMessage={event => {
								const { data } = event.nativeEvent;
								const message = data.split("//");
								if (message.length > 0) {
									if (message[0] === 'SUCCESS') {
										placeOnlineBooing(message[1])
										toggleOptionMenu()
									} else {
										Alert.alert("Alert", "Something went wrong")
										toggleOptionMenu()
									}
								}

							}}
							originWhitelist={['*']}
							javaScriptEnabledAndroid={true}
							source={{
								uri: paymentUrl
							}} />
					</View>

				</View>

			</Modal >
		</>
	);
}

const mapStateToProps = state => ({
	postsCount: state.user.postsCount,
	myUserId: state.user.userId,
	country: state.user.country
});

const mapDispatchToProps = dispatch => ({ dispatch });


export default connect(mapStateToProps, mapDispatchToProps)(PaymentModal);

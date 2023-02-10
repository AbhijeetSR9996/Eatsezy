import React from 'react';
import { Modal, Text, TouchableOpacity, View } from 'react-native';

//svgs
import CancelSvg from '../../assets/svg/CrossSvgWhite.svg';

//my imports
import { styles } from './ModalPleaseSignInStyle';
import { useNavigation } from '@react-navigation/native';
import { ScreenNames } from '../../global';

const SignInModal = ({
	navigateFrom,
	navigateTo,
	description,
	toggleIsSignInModalVisibility,
	isSignInModalVisible,
}) => {

	let navigation = useNavigation();

	const handleYesPress = () => {
		navigation.navigate(navigateFrom, navigateTo)
		toggleIsSignInModalVisibility()
	}

	return (

		<Modal
			animationType={'fade'}
			visible={isSignInModalVisible}
			// onRequestClose={toggleModal}
			transparent={true}
		// statusBarTranslucent={true}
		>
			<View style={styles.modalContainer}>
				<View style={styles.confirmContainer}>
					<View style={styles.confirmHeader}>
						<Text style={styles.confirmDeliveryText}>Message</Text>
						<TouchableOpacity
							onPress={toggleIsSignInModalVisibility}
							style={styles.closeButton}>
							<CancelSvg />
						</TouchableOpacity>
					</View>
					<View style={styles.confirmTextContainer}>
						<Text style={styles.confirmText}>{description}</Text>
					</View>

					<View style={styles.confirmTextButtonContainer}>
						<TouchableOpacity
							onPress={toggleIsSignInModalVisibility}
							style={styles.yesButton}>
							<Text style={styles.yesButtonText}>Cancel</Text>
						</TouchableOpacity>
						<TouchableOpacity
							onPress={handleYesPress}
							style={styles.yesButton}>
							<Text style={styles.yesButtonText}>OK</Text>
						</TouchableOpacity>

					</View>
				</View>

			</View>
		</Modal>
	);
}
export default SignInModal;

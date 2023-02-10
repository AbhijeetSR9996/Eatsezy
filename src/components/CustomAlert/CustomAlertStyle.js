
import { StyleSheet, Dimensions } from 'react-native'
import { Constants } from '../../global';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export const styles = StyleSheet.create({

	centeredView: {
		justifyContent: "center",
		alignItems: "center",
		alignSelf: "center",
		elevation: 10,
		shadowColor: "#000", shadowOffset: { width: 0, height: 2, }, shadowOpacity: 0.80, shadowRadius: 2.62,
		overflow: "hidden",
		borderRadius: 20,
		backgroundColor: "#00000088",

	},
	modalView: {
		borderRadius: 20,
		backgroundColor: "#FFFFFFE6",
		width: Constants.SCREEN_WIDTH - 80
	},
	blurView: {
		position: "absolute",
		top: 0,
		left: 0,
		bottom: 0,
		right: 0,
		borderRadius: 20
	},
	ModalHeader: {
		alignItems: "center",
		justifyContent: "center",
		padding: 20,
		paddingBottom: 30,
	},
	modalTitle: {
		paddingTop: 10,
		color: "#000",
		fontWeight: "bold",
		textAlign: "center",
		fontSize: 20,
	},
	modalDesc: {
		fontSize: 16,
		textAlign: "center"
	},
	buttonStyleView: {
		justifyContent: "center",
		alignItems: "center",
	},
})
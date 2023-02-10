import {
	Platform,
	StyleSheet
} from 'react-native';
import { Colors, Constants, Fonts } from '.';

export const globalStyles = StyleSheet.create({
	button: {
		height: 50,
		//backgroundColor: Colors.BLACK,
		backgroundColor:'#EF3340',
		borderRadius: 15,
		justifyContent: "center", alignItems: "center",
		// marginHorizontal: 20,
		marginBottom: 15
	},
	buttonText: {
		fontFamily: Fonts.MEDIUM,
		fontSize: 19,
		//color: Colors.WHITE
		color:Colors.WHITE,
		fontWeight:'bold'
	},
	view: {
		flexDirection: "row",
		justifyContent: "space-between"
	},
	buttonText2: {
		fontFamily: Fonts.MEDIUM,
		fontSize: 12,
		color: Colors.WHITE,
	},

	TextInput: {
		height: 37,
		borderWidth: 1,
		borderRadius: 7,
		// borderColor: Colors.BORDER, 
		flexDirection: "row",
		alignItems: "center",
		marginVertical: 20,
		//marginVertical: 35,
		marginHorizontal:10,
		borderColor:'rgba(153, 153, 153, 1)',
	},
	Applybutton: {
		//height: 50,
		//width: Constants.SCREEN_WIDTH / 2.4,
        height:30,
		width:Constants.SCREEN_WIDTH / 4.1,
		//backgroundColor: Colors.BLACK,
        backgroundColor: '#EF3340',
		//borderRadius:13,
		borderRadius:13,
		justifyContent: "center", 
		alignItems: "center",
        //alignSelf:'flex-start',
		// marginHorizontal: 20,
		marginBottom: 15,
		marginHorizontal: 10,
		bottom:485,
		right:115
	},
	ApplybuttonText: {
		fontFamily: Fonts.MEDIUM,
		fontSize: 15,
		color: Colors.WHITE,
		marginTop: Platform.OS == "android" ? 3 : 0,
		bottom:3
	},
});
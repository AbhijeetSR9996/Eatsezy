import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { SCREEN_WIDTH } from '../../global/constants'
import { Colors, Fonts, } from '../../global/index'

export const styles = StyleSheet.create({
	titleContainer: {
		alignItems: "center",
		//backgroundColor:'grey',
		top:250
	},
	title: {
		fontSize: Fonts.SIZE_35,
		fontFamily: Fonts.BOLD,
		color: Colors.PRIMARY,
		//marginVertical: 30
		marginVertical:10,
		fontWeight:'bold'
	},
	bodyContainer: {
		marginHorizontal: 20,
		//marginTop: 40,
        marginTop:300,
		//backgroundColor:'lime',
		
	},
	footerContainer: {
		//flex: 2,
		justifyContent: "flex-end",
		marginHorizontal: 20,
		//backgroundColor:'grey',
		marginTop:-40,
		bottom:225
	},
	bodyTextInputStyle: {
		height: 47,
		borderWidth: 1,
		borderRadius: 5,
		borderColor: Colors.BORDER
		, flexDirection: "row",
		alignItems: "center"
	},
	user: {
		justifyContent: "center",
		// backgroundColor: "red",
		marginHorizontal: 10
	},
	bodyTextInput: {
		flex: 1,
		paddingRight: 10
	},
	terms: {
		flexDirection: "row",
		alignItems: "center"
	},
	font1: {
		fontSize: 16,
		fontFamily: Fonts.LIGHT,
		color: Colors.BLACK
	},
	font2: {
		fontSize: 16,
		fontFamily: Fonts.MEDIUM,
		color: Colors.PRIMARY
	},
	borderLine: {
		backgroundColor: Colors.BORDER,
		height: 1,
		width: SCREEN_WIDTH / 3.8
	},
	font2: {
		fontSize: 16,
		fontFamily: Fonts.LIGHT,
		color: Colors.PRIMARY
	},
	font3: {
		fontSize: 15,
		fontFamily: Fonts.LIGHT,
		color: Colors.OUTER_SPACE_50,
		marginHorizontal: 20
	},
	circle: {
		height: 30,
		width: 30,
		borderRadius: 100,
		borderWidth: 1,
		borderColor: Colors.OUTER_SPACE,
		alignItems: "center",
		justifyContent: "center",
		marginHorizontal: 15
	},
	alignContent: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center"
	},
	vw:{
        height:200,
        width:200,
        //backgroundColor:'white',
        bottom:470,
        left:95,
        //alignItems:'center',
		//elevation:8
    },
	vw1:{ 
        flexDirection: "row", 
        alignItems: "center",
        backgroundColor:'white',
        marginBottom:170,
        bottom:60, 
    },
    vwcountry:{
        height:67,
        //width:125,
		width:135,
        backgroundColor:'white',
		//left:10,
		left:0
    },
    vwphone:{
        height:67,
        width:215,
        backgroundColor:'white',
        bottom:67,
        left:135,
    },
    txtin:{ 
        flexDirection: "row", 
        alignItems: "center", 
        marginLeft: 0, 
		top:'30%'
    },
    img:{
        height:200,
        width:200,
    },
})

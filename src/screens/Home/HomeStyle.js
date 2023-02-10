import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { SCREEN_HEIGHT } from '../../global/constants'
import { Colors, Fonts, Constants } from '../../global/index'

export const styles = StyleSheet.create({

	mainScreen: {
		height: Constants.SCREEN_HEIGHT,
		width: Constants.SCREEN_WIDTH,
		marginTop: 20
	},
	quickLink: {
		fontSize: Fonts.SIZE_21,
		fontFamily: Fonts.BOLD,
		marginBottom: -5,
		color: Colors.BLACK
	},
	bubbleContainer: {
		marginHorizontal: 5,
		marginVertical: 10
	},
	font1: {
		fontFamily: Fonts.LIGHT,
		fontSize: 10,
		color: Colors.GRAY_DARK
	},
	font2: {
		fontFamily: Fonts.SEMIBOLD,
		fontSize: Fonts.SIZE_15,
		color: Colors.WARNING,
		top:0,
		left:30
	},
	seeAllStyle: {
        top:-43,
		left:240,
		justifyContent: "flex-end",
        //backgroundColor:'lime'
	},
	seeAllStyle2: {
        top:635,
		left:240,
		justifyContent:'flex-end',
		//backgroundColor:'green'
	},
	seeAllStyle3: {
        top:1225,
		left:240,
		justifyContent:'flex-end',
		//backgroundColor:'lime'
	},
	headingContainer: {
		paddingHorizontal: 20,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'flex-start'
	},
	pin:{
		left:28,
		top:-37,
		right:20,
	},
	txt1:{
		fontSize: 13,
		color: Colors.WHITE,
		position:'absolute',
		top:80,
		left:40,
		fontWeight:'500',
	},
	txthead1:{
		fontSize:20,
		fontWeight:'bold',
		top:-160
	},
	txthead2:{
		fontSize:20,
		fontWeight:'bold',
		position:'absolute',
		top:1320,
	    left:0
	},
	txtheadsmall1:{
		fontFamily: Fonts.LIGHT,
		fontSize: 10,
		color: Colors.GRAY_DARK,
		top:-160
	},
	txtheadsmall2:{
		fontFamily: Fonts.LIGHT,
		fontSize: 10,
		color: Colors.GRAY_DARK,
		position:'absolute',
		top:1345
	},
	txtnearme:{ 
		fontFamily: Fonts.MEDIUM, 
		marginRight: 8, 
		fontSize: 16, 
		marginBottom: 4, 
	},
	mainvw:{ 
		flex: 1, 
		backgroundColor: Colors.WHITE, 
	},
	vw1:{ 
		marginHorizontal: 20,
		marginRight:80 
	},
	vw2:{
		height:600,
		bottom:90
	},
	vw3:{ 
		position: "absolute", 
		left: 120, 
		right: 0, 
		alignItems: "center", 
		bottom: 5, 
		top:70 
	},
	vw4:{ 
		position: "absolute", 
		left: 120, 
		right: 0, 
		alignItems: "center", 
		bottom: 5, 
		top:100 
	},
	vw5:{ 
		flex: 1 
	},
	vw6:{ 
		marginVertical: 10 
	},
	vw7:{ 
		flexDirection: "row", 
		justifyContent: "space-between", 
		marginHorizontal: 20 ,
	},
	vw8:{ 
		marginHorizontal: 0, 
		marginVertical: 10 
	},
	vw9:{ 
		flexDirection: "row", 
		justifyContent: "space-between", 
		marginHorizontal: 20 
	},
	vw10:{ 
		flex: 1 
	},
	filter:{ 
		bottom:50,
		left:290
	},
    nearme:{
		backgroundColor: Colors.WHITE, flexDirection: "row", alignItems: "center", elevation: 3,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 5,
		},
		shadowOpacity: 0.34,
		shadowRadius: 6.27, borderRadius: 30, paddingVertical: 5, paddingHorizontal: 15,
	},
	sv:{ 
		//paddingBottom: 1410,
          height:SCREEN_HEIGHT * 3.45,
	},
    mappin:{
		height:10,
		width:10,
		left: 30, 
		top: -35,
		//backgroundColor:'grey' 
	},
})
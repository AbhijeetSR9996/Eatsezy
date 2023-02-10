import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { SCREEN_WIDTH } from '../../global/constants'
import { Colors, Fonts, Constants } from '../../global/index'

export const styles = StyleSheet.create({
    titleContainer: {
        alignItems: "center",
        //backgroundColor:'grey',
        marginVertical: 12,
        // height:60,
        zIndex:1
    },
    title: {
        fontSize: Fonts.SIZE_35,
        fontFamily: Fonts.BOLD,
        color: Colors.PRIMARY,
        top:0
    },
    bodyContainer: {
        marginHorizontal: 20,
        //backgroundColor:'lime',
        height:450,
    },
    footerContainer: {
        // marginHorizontal: 20,
        // flex: 1,
        justifyContent: "flex-end",
        //backgroundColor:'grey',
        bottom:80,
        paddingVertical:-20
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
        alignItems: "center",
        marginLeft: 5,
        
    },
    font1: {
        fontSize: 16,
        fontFamily: Fonts.LIGHT,
        color: Colors.BLACK,
    },
    font2: {
        fontSize: 16,
        fontFamily: Fonts.LIGHT,
        color: Colors.PRIMARY
    },
    borderLine: {
        backgroundColor: Colors.BORDER,
        height: 1,
        width: SCREEN_WIDTH / 4
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
        height: 35,
        width: 35,
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
        justifyContent: "center",
        //backgroundColor:'lime',
        
    },
    vw:{
        height:200,
        width:200,
        backgroundColor:'white',
        bottom:470,
        left:80,
        alignItems:'center',
        justifyContent: 'center',
        elevation:8,
        //alignSelf: 'center',
    },
    vw1:{ 
        backgroundColor:'white',
        flexDirection: "row", 
        alignItems: "center",
        // marginBottom:170,
        bottom:60, 
    },
    vwcountry:{
        height:67,
        width:125,
        backgroundColor:'white'
    },
    vwphone:{
        height:67,
        width:205,
        backgroundColor:'white',
        bottom:67,
        left:115,
    },
    txtin:{ 
        flexDirection: "row", 
        alignItems: "center", 
        marginLeft: 0, 
    },
    
    img:{
        height:200,
        width:200,
        alignSelf: 'center',
        //borderWidth:1,
        //borderColor:'black'
        
    },
})

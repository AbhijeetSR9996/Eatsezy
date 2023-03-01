import React from 'react'
import { View, Text, StyleSheet,styles } from 'react-native'
import { SCREEN_WIDTH } from '../../global/constants'
import { Colors, Fonts, } from '../../global/index'

export const styles = StyleSheet.create({
    quickLink: {
        fontSize: Fonts.SIZE_19,
        fontFamily: Fonts.BOLD,
        color: Colors.BLACK
    },
    bubbleContainer: {
        marginHorizontal: 5,
        marginVertical: 10,
    },
    sv:{
        height:140,
    },
    vw:{ 
        marginHorizontal: 0, 
        marginVertical: 10 
    },
    vw1:{ 
        flex: 1, 
        backgroundColor: Colors.WHITE,  
    },
    vw2:{ 
        marginHorizontal: 20, 
    },
    vw3:{ 
        flex: 1, 
    },
    img1:{
        height:80,
        width:80,
        top:20,
        marginLeft:30
    },
    img2:{
        height:80,
        width:80,
        top:20,
        marginLeft:20
    },
    img3:{
        height:80,
        width:80,
        top:20,
        marginLeft:20,
        marginRight:30
    },
    txt1:{
        fontSize:15,
        fontWeight:'500',
        position:'absolute',
        top:108,
        left:45
    },
    txt2:{
        fontSize:15,
        fontWeight:'500',
        position:'absolute',
        top:108,
        left:150
    },
    txt3:{
        fontSize:15,
        fontWeight:'500',
        position:'absolute',
        top:108,
        left:250
    },
    txt4:{
        fontSize:15,
        fontWeight:'500',
        position:'absolute',
        top:108,
        left:355
    },
    flat:{ 
        paddingHorizontal: 10, 
    },
});
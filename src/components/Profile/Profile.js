import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Colors, Fonts, ScreenNames } from '../../global'
import ToggleSvg from "../../assets/svg/toggle.svg";
import InquiriesSvg from "../../assets/svg/Inquiries.svg"
const Profile = ({ item, index, Logout }) => {

    const navigation = useNavigation()
    const navigte = () => {
        if (typeof item.screen != "undefined") {
            navigation.navigate(item.screen)
        }
        if (item.name == "Logout") {
            Logout()
        }
        if (item.name == "Privacy Policy") {
            Linking.openURL("https://b2b.eatsezy.com/privacy-policy")
        }
        if (item.name == "Terms and Conditions") {
            Linking.openURL("https://b2b.eatsezy.com/terms-and-conditions")
        }
        

    }
    return (
        <TouchableOpacity
            onPress={navigte}
            style={{ flex: 1 }}>
            <View>
                <View style={styles.align}>
                    <View style={{ marginRight: 15 }}>
                        {item.svg}
                    </View>
                    <Text style={{ ...styles.font1, color: index == 10 ? Colors.ALERT : Colors.BLACK }}>{item.name}</Text>
                    
                    <TouchableOpacity style={{ backgroundColor:'white',height:20,width:30,marginHorizontal:160, }}>
                       {index == 9 ? <ToggleSvg style={{color:index == 1 ? Colors.ALERT:null}}/>:null} 
                       {index == 1 ? <InquiriesSvg style={{backgroundColor:'white',height:20,width:30,marginHorizontal:60}}/>:null}
                    </TouchableOpacity>
                    {/* <TouchableOpacity style={{ backgroundColor:'lime',height:20,width:30,left:100 }}>
                       {index == 1 ? <InquiriesSvg/>:null} 
                    </TouchableOpacity> */}
                </View>
            </View>
            <View style={[styles.underLine, { height: index == 10 ? 0 : 1 }]}></View>
        </TouchableOpacity>
    )
}

export default Profile

const styles = StyleSheet.create({
    align: {
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 20,
        marginVertical: 13
    },
    font1: {
        fontSize: Fonts.SIZE_12,
        fontFamily: Fonts.MEDIUM,
        color: Colors.BLACK
    },
    underLine: {
        height: 1,
        width: "90%",
        marginStart:20,
        backgroundColor: Colors.GRAY_MEDIUM
    }
})

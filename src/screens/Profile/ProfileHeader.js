import { useNavigation } from '@react-navigation/core';
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import BellSvg from "../../assets/svg/bell.svg"
import BellIcon from "../../assets/svg/bellicon.svg"
import { Colors, Fonts, ScreenNames } from '../../global';

const ProfileHeader = () => {
    const navigation = useNavigation()

    return (
        <View style={styles.HeaderContainer}>
            <View style={{ flex: 1, justifyContent: "center",alignItems:'center' }}>
                <Text style={styles.font2}>Profile</Text>
            </View>

            <TouchableOpacity onPress={() => {
                navigation.navigate(ScreenNames.NOTIFICATION_SCREEN)
            }}>
                {/* <View style={styles.smallCircle}>
                    <Text style={styles.font1}>3</Text>
                </View> */}
                <View
                    style={{}}>
                    {/* <BellSvg /> */}
                    <BellIcon/>
                </View>
                {/* <Image source={require('../../assets/images/notifybell.png')} style={{backgroundColor:'transparent'}} /> */}
            </TouchableOpacity>
        </View>
    )
}

export default ProfileHeader

const styles = StyleSheet.create({
    smallCircle: {
        height: 15,
        width: 15,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: Colors.WHITE,
        backgroundColor: Colors.PRIMARY,
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        zIndex: 1
    },
    font1: {
        fontFamily: Fonts.MEDIUM,
        fontSize: 9,
        color: Colors.WHITE
    },
    font2: {
        fontFamily: Fonts.BOLD,
        fontSize: 21,
        color: Colors.BLACK
    },
    font3: {
        fontFamily: Fonts.LIGHT,
        fontSize: 13,
        color: Colors.GRAY_DARK
    },
    HeaderContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginHorizontal: 20,
        backgroundColor: Colors.WHITE,
        marginTop: 10
    }
})

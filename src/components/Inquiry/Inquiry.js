import { useNavigation } from '@react-navigation/core'
import moment from 'moment'
import React from 'react'
import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { connect } from 'react-redux'
import { Colors, Constants, Fonts, ScreenNames } from '../../global'
import InquirySVG from '../../assets/svg/inquiryimg.svg'
import { SCREEN_HEIGHT } from '../../global/constants'

const Inquiry = ({ item, index, createName }) => {
    const navigation = useNavigation()

    return (
        <View style={{ flex: 1, alignItems: typeof item.user != "undefined" ? "flex-end" : "flex-start",
         }}>

            <TouchableOpacity
                // onPress={goInquiry}
                style={{ ...styles.mainContainer, backgroundColor: typeof item.user != "undefined" ? "#00000009" : `${Colors.PRIMARY}10`, }}>
                <View style={{ alignItems: typeof item.user != "undefined" ? "flex-end" : "flex-start", marginBottom: 5, maxHeight:SCREEN_HEIGHT/28,position:'relative'}}>
                    {/* <Text style={styles.font1}>{typeof item.user != "undefined" ? item.user.userName : item.restaurant.restaurantName}</Text>
                    <Text style={styles.font2}>{moment(item.dateTime).format("MM/DD/YYYY")} | {moment(item.dateTime).format("hh:mm a")}</Text> */}
                   <InquirySVG style={styles.inquirysvg}/>
                   <Text style={[styles.font1,{fontSize:12,alignSelf:'flex-start',left:20,position:'absolute'}]}>Cameron Williamson</Text>
                    <Text style={[styles.font2,{fontSize:10,top:3}]}>{moment(item.dateTime).format("MM/DD/YYYY")} | {moment(item.dateTime).format("hh:mm a")}</Text>
                </View>
                <View style={styles.vw}>
                    {/* <Text style={styles.font3}>{item.message}</Text> */}
                    <Text style={styles.font3}>Lorem Ipsum is simply dummy Lorem  simply dummy text of the printing and simply typeset text of the printing and typesetsimply dummy text of the print </Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}
const mapStateToProps = state => ({
    userId: state.user.userId,
    createName: state.user.name,
});



export default connect(mapStateToProps, null)(Inquiry)

const styles = StyleSheet.create({

    font1: {
        fontFamily: Fonts.BOLD,
        fontSize: 17,
        color: Colors.BLACK,
    },

    font2: {
        fontFamily: Fonts.LIGHT,
        fontSize: 12,
        color: Colors.BLACK
    },

    font3: {
        fontFamily: Fonts.MEDIUM,
        fontSize: 13,
        color: Colors.GRAY_DARK
    },

    font4: {
        fontFamily: Fonts.LIGHT,
        fontSize: 10,
        color: Colors.WHITE,
        marginTop: Platform.OS == "android" ? -1 : 0
    },
    Response: {
        height: 25,
        // width: 65,
        padding: 7,
        // padding: 3,
        borderRadius: 8,
        backgroundColor: Colors.BLACK,
        alignItems: "center",
        justifyContent: "center"
    },
    mainContainer: {
        padding: 15,
        paddingVertical: 15,
        //maxWidth: Constants.SCREEN_WIDTH / 1.5,
        maxWidth:Constants.SCREEN_WIDTH / 1.2,
        borderRadius: 10,
        backgroundColor: "#00000009",
        marginVertical: 10,

    },
    inquirysvg: {
        alignSelf:'flex-start',
        position:'absolute',
        top:3,
        left:3
    },
    vw: { 
        marginBottom: 10, 
        flex: 1, 
    },
});


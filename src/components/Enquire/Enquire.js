import { useNavigation } from '@react-navigation/core'
import moment from 'moment'
import React from 'react'
import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Colors, Fonts, ScreenNames } from '../../global'
import EnquirySVG from '../../assets/svg/enquiryimg.svg'

const Enquire = ({ item, index }) => {
    const navigation = useNavigation()
    const goInquiry = () => {
        navigation.navigate(ScreenNames.INQUIRES_SCREEN, { enquireId: item._id })
    }
    return (
        <View

            style={styles.mainContainer}>
            <View style={styles.vw}>
            <EnquirySVG/>
            <Text style={[styles.font1,{fontSize:14,fontWeight:'300'}]}>Straits Teriyaki</Text> 
                {/* <Text style={styles.font1}>{item.userName}</Text> */}
                <Text style={styles.font2}>{moment(item.date).format("MM/DD/YYYY")} | {moment(item.date).format("hh:mm a")}</Text>

            </View>
            {/* <View style={{ marginBottom: 10, flex: 1,  }}>
                <Text style={styles.font3}>{item.enquiryDetail}</Text>
            </View> */}
            <View style={styles.vw2}>
                {/* <Text style={styles.font3}>{item.enquiryDetail}</Text> */}
                <Text style={styles.font3}>Lorem Ipsum is simply dummy Lorem  simply dummy text of the printing and simply typeset text of the printing and typesetsimply dummy text of the print</Text>
            </View>
            <View style={styles.vw3}>

                <TouchableOpacity onPress={goInquiry} style={styles.Response}>
                    <Text style={styles.font4}>See Response</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Enquire

const styles = StyleSheet.create({

    font1: {
        fontFamily: Fonts.BOLD,
        fontSize: 17,
        color: Colors.BLACK
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
        fontFamily: Fonts.MEDIUM,
        fontSize: 10,
        color: Colors.WHITE,
        marginTop: Platform.OS == "android" ? -2 : -2
    },
    Response: {
        height: 25,
        // width: 65,
        padding: 7,
        // padding: 3,
        borderRadius: 8,
        //backgroundColor: Colors.BLACK,
        backgroundColor:'#ee3450',
        alignItems: "center",
        justifyContent: "center",
        marginVertical:-50  
    },
    mainContainer: {
        padding: 15,
        paddingVertical: 15,
        borderRadius: 10,
        backgroundColor: "#00000009",
        //backgroundColor:'lime',
        marginVertical: 10,
        paddingBottom:0,
    },
    vw: { 
        flexDirection: "row", 
        alignItems: "center", 
        justifyContent: "space-between", 
        marginBottom: 5, 
    },
    vw2: { 
        marginBottom: 10, 
        flex: 1,
        marginHorizontal:40, 
        right:40, 
        paddingVertical:10 
    },
    vw3: { 
        alignItems: "flex-end", 
    },
});

import moment from 'moment'
import React from 'react'
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Colors, Constants, Fonts, ScreenNames } from '../../global'
import { useNavigation } from '@react-navigation/native'

const ReservationCard = ({ data, route }) => {

    const navigation = useNavigation();
    const goToUpdateBooking = () => {
        if (route == "UPCOMING") {

            let postData = {
                "restaurantId": data.restaurantId._id,
                "choosenTime": data.startTime,
                "date": moment(data.bookingDate).format("YYYY-MM-DD"),
                "peopleCapacity": data.totalPeople,
                "userMessage": data.userMessage,
                "bookingName": data.bookingName,
                "bookingEmail": data.bookingEmail,
                "bookingPhone": data.bookingPhone,

            }
            navigation.navigate(ScreenNames.RESERVED_SCREEN, { bookings: { data: data }, restaurantName: data.restaurantId.restaurantName, data: postData, selectedTimeSlots: data.startTime, "coverImage": data.restaurantId.restaurantThumbnail })
        }
    }
    return (
        <TouchableOpacity onPress={goToUpdateBooking} style={styles.cardBox}>
            <View style={styles.cardImage}>
                <Image
                    //source={{ uri: data?.restaurantId?.restaurantThumbnail }}
                    source={require('../../assets/images/restdish1.png')}
                    style={styles.coverImage}
                    resizeMode="cover"
                />
            </View>

            {/* <View style={styles.cardContent}>
                <View style={[styles.statusContainer, {
                    borderColor:
                        data?.status == "CANCELLED" ? Colors.GRAY_MEDIUM :
                            data?.status == "NO-SHOW" ? Colors.PRIMARY :
                                "#4BC537"
                }]}>
                    <Text style={{ ...styles.activeText, color: data?.status == "CANCELLED" ? Colors.GRAY_MEDIUM : data?.status == "NO-SHOW" ? Colors.PRIMARY : "#4BC537", }}>{data?.status}</Text>
                </View>
                <Text style={styles.restaurantText}>{data?.restaurantId?.restaurantName}</Text>
                <Text style={styles.restaurantNumber} numberOfLines={1}>Res. #{data?._id}</Text>
                <Text style={styles.restaurantBottomText}>{data?.totalPeople} People</Text>
                <Text style={styles.restaurantBottomText}>{data?.bookingDate} | {data.startTime} - {data.endTime}</Text>
            </View> */}
            
            <View style={styles.cardContent}>              
                <Text style={styles.restaurantText}>Urban Tadka Dining</Text>
                <Text style={styles.restaurantNumber} numberOfLines={1}>Res. #5645466</Text>
                <Text style={styles.restaurantBottomText}>3 People</Text>
                <Text style={styles.restaurantBottomText}>10.12.2020 | 12pm - 1pm</Text>
                <View style={[styles.statusContainer, {
                    borderColor:
                        data?.status == "CANCELLED" ? Colors.GRAY_MEDIUM :
                            data?.status == "NO-SHOW" ? "#027ABE" :
                                "#4BC537" }]}>
                    {/* <Text style={{ ...styles.activeText, color: data?.status == "CANCELLED" ? Colors.GRAY_MEDIUM : data?.status == "NO-SHOW" ? "#027ABE" : "#4BC537", }}>{data?.status}</Text>*/}
                    <Text style={{ ...styles.activeText, color: data?.status == "CANCELLED" ? Colors.GRAY_MEDIUM : data?.status == "NO-SHOW" ? "#027ABE" : "#4BC537", }}>Completed</Text>
                </View>        
            </View>
        </TouchableOpacity>
    )
}

export default ReservationCard

const styles = StyleSheet.create({
    cardImage: {
        width: 120,
        height: 125,
        borderRadius: 5
    },
    coverImage: {
        //width: '100%',
        //height: '100%',
        //borderRadius: 5,
        height:155,
        width:125,
        right:10,
        bottom:10,
        borderTopLeftRadius:10,
        borderBottomLeftRadius:10
    },
    cardBox: {
        display: 'flex',
        backgroundColor: "white",
        //backgroundColor:'grey',
        width:305,
        left:5,
        flexDirection: 'row',
        marginBottom: 10,
        //borderRadius: 4,
        borderRadius:10,
        margin: 20,
        padding: 10,
        borderWidth: .3,
        borderColor: Colors.GRAY_DARK,
        borderColor: Colors.WHITE,
        elevation:10,
        
    },
    cardContent: {
        marginLeft: 15,
        paddingVertical: 10,

    },
    activeText: {
        fontFamily: Fonts.MEDIUM,
        color: "#4BC537",
        fontSize: 10,
        marginBottom: 4,
        textAlign: 'center',
        textTransform: 'capitalize',
    },
    statusContainer: {
        width: 110,
        // paddingHorizontal: 42,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: "#4BC537",
        paddingTop: 2,
        marginTop: 12,
        
    },
    restaurantText: {
        fontSize: 16,
        fontFamily: Fonts.MEDIUM,
        color: Colors.BLACK,
        opacity: 0.7,
        //marginTop: 10,
        marginTop:-5,
        textTransform: 'capitalize',
        fontWeight:'bold'
    },
    restaurantNumber: {
        fontSize: 12,
        width: Constants.SCREEN_WIDTH / 2,
        fontFamily: Fonts.MEDIUM,
        color: Colors.BLACK,
        opacity: 0.65,
        marginTop:5
    },
    restaurantBottomText: {
        fontSize: 12,
        fontFamily: Fonts.MEDIUM,
        color: "#161616",
        width: Constants.SCREEN_WIDTH / 2,
        opacity: 0.40,
        textTransform: 'capitalize',
        marginTop:5
    },
})

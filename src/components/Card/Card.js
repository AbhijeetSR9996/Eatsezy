import { useNavigation } from '@react-navigation/native'
import moment from 'moment'
import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import RightSvg from "../../assets/svg/Right.svg"
import { Colors, Constants, Fonts, ScreenNames } from '../../global'

const Card = ({ item, getAllBookingsNotReviewed }) => {

    const navigation = useNavigation()

    const goToReview = () => {
        navigation.navigate(ScreenNames.REVIEW_SCREEN, { bookingId: item._id, getAllBookingsNotReviewed: getAllBookingsNotReviewed, restaurantId: item.restaurantId._id })
    }
    return (
        <View>
            <TouchableOpacity
                onPress={goToReview}
                activeOpacity={1}
                style={{
                    flexDirection: "row", alignItems: "center",
                    marginVertical: 5,
                    width: Constants.SCREEN_WIDTH - 40, marginHorizontal: 20,

                    justifyContent: "space-between", padding: 4, paddingHorizontal: 7, backgroundColor: "#FFBDB8", borderRadius: 8
                }}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>

                    <Image source={{ uri: item.restaurantId.restaurantThumbnail }} style={{ height: 35, width: 35, borderRadius: 10 }} />
                    <View style={{ marginLeft: 10 }}>
                        <Text style={styles.font1}>{item.restaurantId.restaurantName}</Text>
                        <Text style={styles.font2} >{item.totalPeople} Pax on {moment(item.bookingDate).format("DD MMM YYYY")}</Text>

                    </View>
                </View>

                <View style={{ flexDirection: "row", alignItems: "center" }} >
                    <Text style={styles.font3} >Review </Text>
                    <RightSvg />
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default Card

const styles = StyleSheet.create({
    font1: {
        fontSize: 12,
        fontFamily: Fonts.MEDIUM,
        color: Colors.BLACK
    },

    font2: {
        fontSize: 12,
        fontFamily: Fonts.MEDIUM,
        color: Colors.BLACK
    },
    font3: {
        fontSize: 15,
        fontFamily: Fonts.BOLD,
        color: Colors.BLACK
    },



})

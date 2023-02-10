import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { TabBarItem } from 'react-native-tab-view'
import { Colors, Fonts } from '../../global'

const PointsHistory = ({ item, index }) => {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginVertical: 5 }}>
                <View style={{}}>
                    <Text style={styles.font1}>{typeof item.title != "undefined" ? item.title : "Booking"}</Text>
                    <Text style={styles.font2}>{typeof item.transactionDesc != "undefined" ? item.transactionDesc : item?.restaurantId?.restaurantName}</Text>
                </View>
                <View style={{}}>
                    <TouchableOpacity style={{ flex: 1, alignItems: "flex-end" }}>

                        <Text style={{ ...styles.font3, color: typeof item.transactionType != "undefined" && item.transactionType == "CREDIT" ? Colors.SUCCESS : Colors.ALERT }}>{item?.points}</Text>
                    </TouchableOpacity>
                    <Text style={styles.font4} >{item?.bookingId?.bookingDate}</Text>
                </View>
            </View>
        </View>
    )
}

export default PointsHistory

const styles = StyleSheet.create({
    font1: {
        fontSize: 12,
        fontFamily: Fonts.BOLD
        , color: Colors.BLACK,
    },
    font2: {
        fontSize: 12,
        fontFamily: Fonts.LIGHT
        , color: Colors.BLACK,
    },
    font3: {
        fontSize: 13,
        fontFamily: Fonts.MEDIUM
        , color: Colors.PRIMARY,
    },
    font4: {
        fontSize: 11,
        fontFamily: Fonts.LIGHT
        , color: Colors.BLACK,
    }
})

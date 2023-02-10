import moment from 'moment'
import React from 'react'
import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Colors, Fonts } from '../../global'

const Timing = ({ item, index, time, setTime, quickBook, onPress }) => {
    const Time = () => {
        setTime(index)
        if (typeof onPress != "undefined") {
            onPress(item)
        }
    }
    return (
        <TouchableOpacity
            onPress={() => Time()}
            style={[styles.Timecontainer, { backgroundColor: time == index ? '#16161617' : quickBook ? "#ffffff" : "#16161617", borderWidth: quickBook ? 1 : 0, borderColor: Colors.BLACK + 30 }]}>
            <Text style={[styles.TimeText, { color: time == index ? '#161616' : Colors.GRAY_DARK }]}>{item.openingTiming}-{item.closingTiming}</Text>
        </TouchableOpacity>
    )
}

export default Timing

const styles = StyleSheet.create({
    Timecontainer: {
        padding: 5,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 10,
        borderRadius: 10,
        paddingHorizontal: 10
    },
    TimeText: {
        color: "#000000",
        fontSize: 15,
        fontFamily: Fonts.MEDIUM,
        marginTop: Platform.OS == "android" ? 3 : 0
    }
})

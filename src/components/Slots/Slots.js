import moment from 'moment'
import React from 'react'
import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Colors, Fonts } from '../../global'

const Slots = ({ item, index, time, setTime, quickBook, onPress }) => {
    const Time = () => {
        setTime(index)
        if (typeof onPress != "undefined") {
            onPress(item)
        }
    }
    return (
        <TouchableOpacity
            onPress={() => Time()}
            // style={[styles.Timecontainer, { backgroundColor: time == index ? Colors.BLACK : quickBook ? "#ffffff" : "#16161617", borderWidth: quickBook ? 1 : 0, borderColor: Colors.BLACK + 30 }]}
            style={[styles.Timecontainer, { backgroundColor: time == index ? '#EF3340' : quickBook ? "#ffffff" : "#16161617", borderWidth: quickBook ? 1 : 0, borderColor: Colors.BLACK + 30 }]}
            >
            <Text style={[styles.TimeText, { color: time == index ? Colors.WHITE : Colors.GRAY_DARK }]}>{item}</Text>
        </TouchableOpacity>
    )
}

export default Slots

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

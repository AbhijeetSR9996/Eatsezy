import React from 'react'
import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Colors, Fonts } from '../../global'

const GuestTime = ({ item, index, time, setTime, name, onPress }) => {
    const guestTime = () => {
        if (typeof onPress != "undefined") {
            onPress(item)
        }

    }
    return (
        <TouchableOpacity
            onPress={guestTime}
            style={[styles.filterConatiner, { backgroundColor: time == item ? Colors.BLACK : Colors.WHITE, borderWidth: 1 }]}>
            <Text style={[styles.filterText, { color: time == item ? Colors.WHITE : Colors.GRAY_DARK }]}>{item}</Text>
        </TouchableOpacity>
    )
}

export default GuestTime

const styles = StyleSheet.create({
    filterConatiner: {
        padding: 7,
        marginBottom: 10,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 10,
        borderRadius: 9,
    },
    filterText: {
        color: "#000000",
        fontSize: 13,
        fontFamily: Fonts.MEDIUM,
        marginTop: Platform.OS == "android" ? 3 : 0
    }
})

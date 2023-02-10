import React from 'react'
import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const Offer = ({ item }) => {
    const goToLink = () => {
        Linking.openURL(item.advertismentURL)
    }
    return (
        <TouchableOpacity
            onPress={goToLink}
            activeOpacity={1}
            style={styles.offerContainer}>
            <Image source={{ uri: item.advertismentImage }} style={{ height: "100%", width: "100%", borderRadius: 10, }} />
        </TouchableOpacity>
    )
}

export default Offer

const styles = StyleSheet.create({
    offerContainer: {
        height: 120,
        width: 250,
        borderRadius: 10,
        marginHorizontal: 10,
        // backgroundColor: "red"

    }
})

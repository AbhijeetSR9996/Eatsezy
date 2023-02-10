import axios from 'axios'
import React from 'react'
import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Colors, Fonts, Server } from '../../global'

const cuisionBy = ({ index, name, onPress, selected }) => {
    const [cuision, setCuision] = React.useState(selected)
    return (
        <TouchableOpacity
            onPress={() => {
                setCuision(!cuision)
                onPress(!cuision)
            }}
            style={[styles.cuisionConatiner, { backgroundColor: cuision ? '#EF3340' : Colors.WHITE, borderWidth: 1,borderColor:'#dddddd' },
            {borderRadius: cuision ? 20:15}]}>
            <Text style={[styles.cuisionText, { color: cuision ? Colors.WHITE : Colors.GRAY_DARK }]}>{name}</Text>
        </TouchableOpacity>
    )
}

export default cuisionBy

const styles = StyleSheet.create({
    cuisionConatiner: {
        paddingVertical: 7,
        alignItems: "center",
        justifyContent: "center",
        //marginHorizontal: 10,
        marginHorizontal:5,
        //borderRadius: 20,
        paddingHorizontal: 15,
    },
    cuisionText: {
        color: "#000000",
        fontSize: 12,
        fontFamily: Fonts.MEDIUM,
        marginTop: Platform.OS == "android" ? 3 : 0
    }
})

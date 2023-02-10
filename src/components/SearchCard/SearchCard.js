import React from 'react'
import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Colors, Fonts } from '../../global';
import TrendingSvg from "../../assets/svg/trending-up.svg"

const SearchCard = ({ item, index, search, setSearch }) => {
    const Search = (name) => {
        setSearch(name)
    }
    return (
        <TouchableOpacity
            onPress={() => Search(item.name)}
            style={[styles.Timecontainer]}>
            <TrendingSvg />
            <Text style={[styles.TimeText]}>{item.name}</Text>
        </TouchableOpacity>
    )
}

export default SearchCard

const styles = StyleSheet.create({
    Timecontainer: {
        padding: 2,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 10,
        borderRadius: 5,
        paddingHorizontal: 10,
        borderWidth: 1,
        flexDirection: "row",
        borderColor:Colors.GRAY_LIGHT
    },
    TimeText: {
        //color: "#000000",
        color:Colors.GRAY_DARK,
        fontSize: 12,
        fontFamily: Fonts.MEDIUM,
        marginTop: Platform.OS == "android" ? 3 : 0,
        marginLeft: 5
    }
})

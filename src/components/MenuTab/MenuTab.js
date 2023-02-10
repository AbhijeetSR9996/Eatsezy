import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Colors, Fonts } from '../../global'
import { SCREEN_WIDTH } from '../../global/constants'

const MenuTab = ({ item, state, setState, index, flatlistRef }) => {

    const menuTab = (index) => {
        setState(index)
        flatlistRef.current.scrollToIndex({ animated: true, index: index, viewPosition: 0.5 })
    }
    return (
        <TouchableOpacity style={{ flex: 1, marginHorizontal: 15, }} onPress={() => menuTab(index)}>
            <Text style={[styles.font1, { color: state == index ? Colors.BLACK : Colors.GRAY_MEDIUM }]}>{item.name}</Text>
            <View style={[styles.underLine,
            {
                height: state == index ? 3 : 0,
            }]}></View>
        </TouchableOpacity>
    )
}

export default MenuTab

const styles = StyleSheet.create({
    font1: {
        fontSize: 16,
        fontFamily: Fonts.LIGHT
    },
    underLine: {
        height: 1,
        width: 25,
        //backgroundColor: "#16161690"
        backgroundColor:'#EF3340'
    }
})

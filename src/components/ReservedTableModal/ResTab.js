import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Colors, Fonts } from '../../global'
import { SCREEN_WIDTH } from '../../global/constants'

const ResTab = ({ item, state, setState, index, flatlistRef }) => {

    const RefTab = (index) => {
        setState(index)
        flatlistRef.current.scrollToIndex({ animated: true, index: index, viewPosition: 0.5 })
    }
    return (
        <TouchableOpacity style={{ flex: 1, marginHorizontal: 15, }} onPress={() => RefTab(index)}>
            <Text style={[styles.font1, { color: state == index ? '#F4756B' : Colors.GRAY_MEDIUM }]}>{item.name}</Text>
            <View style={[styles.underLine,
            {
                height: state == index ? 3 : 0,
            }]}></View>
        </TouchableOpacity>
    )
}

export default ResTab

const styles = StyleSheet.create({
    font1: {
        fontSize: 16,
        fontFamily: Fonts.LIGHT,
        marginLeft:-10
    },
    underLine: {
        height: 1,
        width: 45,
        //backgroundColor: "#16161690"
        backgroundColor:'#EF3340',
        marginLeft:-10,
        //right:30
    }
})

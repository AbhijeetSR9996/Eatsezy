import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Platform } from 'react-native'
import { Colors, Fonts, ScreenNames } from '../../global'

const QuickFilter = ({ item, setSelected, selected, restaurant_id }) => {

    const navigation = useNavigation()


    return (
        <TouchableOpacity

            style={[styles.borderQuicklink, {
                borderWidth: selected == item.id ? 0 : 1,
                borderColor: selected == item.id ? "#ffffff" : "#44444450",
                backgroundColor: selected == item.id ? Colors.BLACK : "#44444410",

            }]} onPress={() => {
                navigation.navigate(ScreenNames.RESTAURANTS_SCREEN, { id: item.id, })
                setSelected(item.id)
            }}>

            <View style={{ flex: 1, marginRight: 10 }}>
                {selected == item.id ?
                    item.UnfillSvg
                    :
                    item.fillSvg
                }
            </View>
            <Text style={[styles.font1, { color: selected == item.id ? Colors.WHITE : Colors.GRAY_DARK, marginBottom: 0, }]}>{item.name}</Text>
        </TouchableOpacity>
    )
}

export default QuickFilter

const styles = StyleSheet.create({
    // active_bubble: {
    //     paddingHorizontal: 15,
    //     paddingTop: 9,
    //     paddingBottom: 7,
    //     backgroundColor: Colors.BLACK,
    //     borderRadius: 12
    // },
    // inactive_bubble: {
    //     paddingHorizontal: 15,
    //     paddingTop: 9,
    //     paddingBottom: 7,
    //     backgroundColor: '#EFEFEF',
    //     borderRadius: 12
    // },
    // inactive_txt: {
    //     fontSize: 14,
    //     color: '#161616',
    //     opacity: 0.3
    // },
    // active_txt: {
    //     fontSize: 14,
    //     color: '#fff',
    // }

    borderQuicklink: {
        // borderWidth: 1,
        // color: Colors.OUTER_SPACE_50,
        // height: 45,
        paddingVertical: 9,
        paddingHorizontal: 15,
        borderRadius: 10,
        alignItems: "center",
        flexDirection: "row"
    },
    font1: {
        // marginTop: Platform.OS == "android" ? 3 : 0,
        fontSize: 13,
        fontFamily: Fonts.MEDIUM,
    }
})


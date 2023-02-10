import React from 'react'
import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Colors, Fonts } from '../../global'

const TableChip = ({ item, index, state, setState, setTableId, floorId }) => {

    // console.warn("item", item);
    const Pool = (index) => {
        if (state.floorId != floorId) {
            setState({
                floorId: floorId,
                tableId: item._id
            })
        } else {
            setState({
                ...state,
                tableId: item._id
            })

        }
        // setFloorId(item.floorId)
    }
    return (
        <TouchableOpacity
            onPress={() => Pool()}
            style={[styles.tablechip, {
                backgroundColor: item._id == state.tableId ? Colors.BLACK : Colors.GRAY_LIGHT,

            }]}>
            <Text style={[styles.font1, { color: item._id == state.tableId ? Colors.WHITE : Colors.BLACK }]}>{item?.name ? item.name : item.tableName}</Text>

        </TouchableOpacity>
    )
}

export default TableChip

const styles = StyleSheet.create({
    underLine: {
        height: 2,
        width: 30,
        backgroundColor: Colors.PRIMARY,
    },
    font1: {
        fontSize: 14,
        fontFamily: Fonts.MEDIUM,
        color: Colors.BLACK,
        marginTop: Platform.OS == "android" ? 3 : 0
    },
    tablechip: {
        // backgroundColor: Colors.GRAY_LIGHT,
        borderRadius: 7,
        padding: 3,
        paddingHorizontal: 15,
        alignItems: "center",
        justifyContent: "center",
        borderColor: Colors.PRIMARY,
        marginRight: 10,
        marginTop: 10
    }
})

import React from 'react'
import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Colors, Fonts } from '../../global'
import TableChip from '../TableChip/TableChip'

const PoolTab = ({ item, index, state, setState, onPress, setFloorId, floorName }) => {
    const Pool = () => {
        setState({
            floorId: item.floorId
        })
        if (typeof onPress != "undefined") {
            onPress(item)
        }
    }



    const renderTable = ({ item, index }) => <TableChip item={item} index={index} floorId={item.floorId} setState={setState} state={state} />

    return (

        <View>
            {
                item.tables.length > 0
                &&
                <>
                    <TouchableOpacity
                        onPress={() => Pool(index)}
                        style={{ marginRight: 10 }}>
                        <Text style={[styles.font1, { color: item.floorId == state.floorId ? Colors.BLACK : Colors.GRAY_MEDIUM }]}>{floorName}</Text>
                        {
                            item.floorId == state.floorId ?
                                <View style={styles.underLine}></View>
                                :
                                null
                        }
                    </TouchableOpacity>
                    <FlatList horizontal
                        contentContainerStyle={{ marginVertical: 20 }}
                        showsHorizontalScrollIndicator={false}
                        data={item.tables} renderItem={renderTable}

                    />
                </>}

        </View>
    )
}

export default PoolTab

const styles = StyleSheet.create({
    underLine: {
        height: 2,
        width: 30,
        backgroundColor: Colors.BLACK,
    },
    font1: {
        fontSize: Fonts.SIZE_18,
        fontFamily: Fonts.BOLD,
        color: Colors.GRAY_MEDIUM
    }
})

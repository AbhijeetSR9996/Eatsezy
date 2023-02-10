import React from 'react'
import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Colors, Fonts } from '../../global'

const RequestChip = ({ item, index, data, setData, name }) => {
    const [selected, setSelected] = React.useState(false)

    // console.warn();
    const guestTime = () => {
        if (!selected) {
            setData([...data, name])
        } else {
            setData(data.filter(e => e != name))
        }
        setSelected(!selected)
    }
    React.useEffect(() => {
        // if (data.filter(e => e == name).length > 0) {
        //     setSelected(true)
        // }
    }, [])
    return (
        <TouchableOpacity
            onPress={() => guestTime()}
            style={[styles.filterConatiner, { backgroundColor: selected ? Colors.BLACK : Colors.WHITE, borderWidth: selected ? 0 : 1 }]}>
            <Text style={[styles.filterText, { color: selected ? Colors.WHITE : Colors.GRAY_DARK }]}>{name}</Text>
        </TouchableOpacity>
    )
}

export default RequestChip

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

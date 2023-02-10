import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { WeekData, weeksShortForm } from '../../Dummy/Dummy'
import { Colors, Fonts } from '../../global'

const Weeks = ({ item, index, week, setWeek, setOpeningTimes }) => {
    const weeks = () => {
        setWeek(index)
        if (item.workingHours.length > 0) {
            setOpeningTimes([{
                "openingTiming": item.workingHours[0].openTime,
                "closingTiming": item.workingHours[item.workingHours.length - 1].endTime,
            }])
        }
    }

    return (
        <TouchableOpacity

            onPress={() => weeks(index)}
            style={[styles.weekStyle, { backgroundColor: week == index ? '#EF3340' : Colors.WHITE, }]}>
            <Text style={[styles.weekText, { color: week == index ? Colors.WHITE : Colors.BLACK }]}>
                {weeksShortForm[item.weekDay]}</Text>
        </TouchableOpacity>
    )
}

export default Weeks

const styles = StyleSheet.create({
    weekStyle: {

        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 10,
        borderRadius: 10,
        height: 35,
        width: 50,
        //color:'#EF3340'
    },
    weekText: {
        color: Colors.BLACK,
        fontSize: 15,
        fontFamily: Fonts.MEDIUM
    }
})

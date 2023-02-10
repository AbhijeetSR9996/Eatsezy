import React, { useState, useEffect } from 'react'
import { FlatList, SafeAreaView, ScrollView, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import moment from 'moment';
import { Colors } from '../../global';

const weeks = {
    0: "S",
    1: "M",
    2: "T",
    3: "W",
    4: "T",
    5: "F",
    6: "S",
}
const CalenderStrip = ({ onPress, }) => {
    const [dateData, setDateData] = useState([])
    const [selectedDate, setSelectedDate] = useState(null)
    useEffect(() => {
        var days = nextXDays(30);
        setDateData(days)
        setSelectedDate(days[3])
    }, [])
    const nextXDays = (days) => {

        var daysArr = [];

        for (var j = 3; j > 0; j--) {
            daysArr.push(moment().subtract(j, 'd'));
        }
        for (var i = 0; i < days; i++) {
            daysArr.push(moment().add(i, 'd'));
        }

        return daysArr
    }
    const takeAction = (selectedDate) => {
        if (typeof onPress != "undefined") {
            onPress(selectedDate, moment(selectedDate).format('dddd'))
        }
        setSelectedDate(selectedDate)
    }
    return (
        <View style={{ flexDirection: "row" }}>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
            >
                {
                    dateData.map((item, index) => {
                        if (index < 3) {
                            return <View style={styles.atom}>
                                <Text style={styles.weekDayFaded}>{weeks[moment(item).get('day')]}</Text>
                                <Text style={styles.weekDateFaded}>{moment(item).get('date')}</Text>
                            </View>
                        }
                        return <TouchableOpacity style={styles.atom} onPress={() => { takeAction(item) }}>
                            <Text style={{ ...styles.weekDay, color: item == selectedDate ? Colors.PRIMARY : Colors.BLACK }}>{weeks[moment(item).get('day')]}</Text>
                            <Text style={{ ...styles.weekDate, color: item == selectedDate ? Colors.PRIMARY : Colors.BLACK }}>{moment(item).get('date')}</Text>
                        </TouchableOpacity>
                    })
                }
            </ScrollView>

        </View>
    )
}

export default CalenderStrip

const styles = StyleSheet.create({
    atom: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 31
    },
    weekDay: {
        fontSize: 16,
        color: Colors.BLACK,
        marginBottom: 10
    },
    weekDate: {
        fontSize: 18,
        color: Colors.BLACK,
        marginTop: 0
    },
    weekDayFaded: {
        fontSize: 16,
        color: Colors.BLACK,
        marginBottom: 10,
        opacity: 0.2
    },
    weekDateFaded: {
        fontSize: 18,
        color: Colors.BLACK,
        marginTop: 0,
        opacity: 0.2
    }
})

import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Fill from "../../assets/svg/ProfileFill.svg"
import UnFill from "../../assets/svg/ProfileUnfill.svg"
import { Colors, Fonts } from '../../global';


const TableList = ({ table, index, setTable, onPress }) => {

    const Table = (index) => {
        setTable(index)
        if (typeof onPress != "undefined") {
            onPress(index + 1)
        }
    }
    return (
        <TouchableOpacity onPress={() => Table(index)}>
            {
                table == index ?

                    <View style={styles.guestSpace}>
                        <View style={{ position: "absolute", top: 12, left: 10.1, zIndex: 100 }}>

                            <Text style={[styles.guestText,{color:Colors.WHITE}]}>{index + 1}</Text>
                        </View>
                        <Fill />
                    </View>
                    :
                    <View style={styles.guestSpace}>
                        <View style={{ position: "absolute", top: 12.5, left: 10.1, zIndex: 100 }}>

                            <Text style={styles.guestText}>{index + 1}</Text>
                        </View>
                        <UnFill />
                        
                    </View>
            }
        </TouchableOpacity>
    )
  
    



}

export default TableList

const styles = StyleSheet.create({
    guestText: {
        fontFamily: Fonts.BOLD,
        fontSize: 9,
        color: Colors.BLACK
    },
    guestSpace: {
        marginHorizontal: 10
    }
})


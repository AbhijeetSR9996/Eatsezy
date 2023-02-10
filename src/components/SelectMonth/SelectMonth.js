import React from 'react'
import { FlatList, KeyboardAvoidingView, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Colors, Fonts, Server } from '../../global'
import { memberplane } from '../../Dummy/Dummy'
// import CancelSvg from '../../assets/svg/crosshair.svg'
import axios from 'axios'

const SelectMonth = ({ monthVisible, toggleMonthModal, setSelectedMonth, months }) => {


    return (
        <Modal
            animationType={'fade'}
            visible={monthVisible}
            transparent={true}
        >
            <View style={{ flex: 1, justifyContent: "flex-end", backgroundColor: "#00000010" }}>
                <View style={styles.modalContainer}>
                    <KeyboardAvoidingView behavior={Platform.OS == "android" ? null : "padding"}>
                        <View style={styles.confirmContainer}>
                            <View style={styles.confirmHeader}>
                                <Text style={styles.confirmDeliveryText}
                                    maxFontSizeMultiplier={1}>Select Month</Text>
                                <TouchableOpacity
                                    onPress={toggleMonthModal}
                                    style={styles.closeButton}>
                                    <Text style={{ fontFamily: Fonts.BOLD, color: Colors.WHITE }}>Cancel</Text>
                                </TouchableOpacity>
                            </View>
                            {
                                <FlatList
                                    data={months}
                                    style={{ marginVertical: 0, marginBottom: 10 }}
                                    showsVerticalScrollIndicator={false}
                                    renderItem={({ item, index }) => (
                                        <TouchableOpacity
                                            onPress={() => {
                                                setSelectedMonth(item)
                                                toggleMonthModal()
                                            }}
                                            style={{ elevation: 3, }}>
                                            <View style={{ flex: 1, marginVertical: 12, paddingHorizontal: 20 }}>
                                                {
                                                    <Text style={{ fontSize: 14, fontFamily: Fonts.SEMIBOLD, color: Colors.JUNGLE_BLACK }}>
                                                        {
                                                            item.object.month
                                                        }
                                                    </Text>
                                                }
                                            </View>
                                            <View style={{ height: 1, width: "100%", backgroundColor: Colors.ONYX_60 }}></View>
                                        </TouchableOpacity>
                                    )} />}
                        </View>
                    </KeyboardAvoidingView>
                </View>
            </View>
        </Modal>

    )
}

export default SelectMonth

const styles = StyleSheet.create({
    modalContainer: {
        // flex: 1,
        // height:200
        // backgroundColor: '#00000050',
        // justifyContent: 'flex-end'
    },
    confirmContainer: {
        // flex: 0.25,
        // flex:1,
        // height:200,
        marginTop: 10,
        elevation: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        paddingBottom: 10,
        backgroundColor: Colors.WHITE,
        // height:300
        // paddingBottom: 20,
    },
    confirmHeader: {
        backgroundColor: Colors.BLACK,
        flexDirection: 'row',
        height: 50,
        justifyContent: 'space-between',
    },
    confirmDeliveryText: {
        paddingLeft: 20,
        paddingTop: 15,
        paddingBottom: 15,
        fontFamily: Fonts.BOLD,
        fontSize: Fonts.SIZE_16,
        color: Colors.WHITE,
        letterSpacing: 0.2,

    },
    closeButton: {
        // paddingLeft: 20,
        // paddingTop: 20,
        // paddingBottom: 20,
        paddingRight: 20,
        justifyContent: 'center',
    },
})

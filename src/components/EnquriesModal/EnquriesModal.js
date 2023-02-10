import { View, Text, KeyboardAvoidingView, Platform, Modal, TouchableOpacity, TextInput, FlatList, Image, StyleSheet } from 'react-native'
import React from 'react'
import { Colors, Fonts, ScreenNames, Server } from '../../global';

import { useNavigation } from '@react-navigation/core';

import { SCREEN_HEIGHT } from '../../global/constants';
import FilterBy from '../FilterBy/FilterBy';
// import { KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import { CuisionData, LocationData, QuickAvaliable } from "../../Dummy/Dummy"
import { globalStyles } from '../../global/globalStyles';
import axios from 'axios';
import CrossSvg from "../../assets/svg/CrossSvg.svg"
const EnquriesModal = ({ toggleQuickFilterModalVisible,
    isQuickFilterModalVisible, setEnquirs }) => {



    //function
    const navigation = useNavigation()




    const [enquiresData, setEnquiresData] = React.useState(null)


    const getEnquries = async () => {
        // console.warn(`${Server.BASE_URL}/recommendation/get-all-cuisines`);
        const response = await axios.get(`${Server.BASE_URL}/${Server.END_POINT.GET_ALL_ENQURIES}`)
        setEnquiresData(response.data.data)
    }


    const renderEnquire = ({ item, index }) => {
        const Click = () => {
            setEnquirs(item)
            toggleQuickFilterModalVisible()
        }
        return (
            <TouchableOpacity
                onPress={Click}
                style={{ marginVertical: 7,  }}>
                <View style={{ marginLeft: 10, }}>

                    <Text style={styles.font1}>{item.content}</Text>
                </View>

                <View style={styles.underLine}></View>
            </TouchableOpacity>
        )
    }
    return (

        <Modal
            onShow={getEnquries}
            animationType={'fade'}
            visible={isQuickFilterModalVisible}
            // onRequestClose={toggleModal}
            transparent={true}
        // statusBarTranslucent={true}
        >
            <View style={styles.modalContainer}>

                <KeyboardAvoidingView behavior={Platform.OS == "android" ? null : "padding"}>
                    <View style={styles.confirmContainer}>
                        <View style={styles.confirmHeader}>
                            <Text style={styles.confirmDeliveryText}
                                maxFontSizeMultiplier={1}>Select Reason</Text>
                                {/* <Text style={[styles.confirmDeliveryText,{color:Colors.GRAY_MEDIUM}]}
                                maxFontSizeMultiplier={1}>More than 8</Text> */}
                            <TouchableOpacity
                                onPress={toggleQuickFilterModalVisible}
                                // onPress={() => {
                                //     _toggleblockModal()
                                //     // gotoMemberDetail()
                                // }}
                                // hitSlop={{top:20,right:20,bottom:20,left:20}}
                                hitSlop={{ top: 20, right: 20, bottom: 20, left: 20 }}
                            >
                                <CrossSvg />
                            </TouchableOpacity>

                        </View>
                        {
                            enquiresData &&
                            <View style={{ marginHorizontal: 10, }}>
                                <FlatList data={enquiresData} renderItem={renderEnquire} />
                            </View>

                        }


                    </View>
                </KeyboardAvoidingView>
            </View>
        </Modal >

    )
}



export default (EnquriesModal);

// export default BlockedMemberModal

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        backgroundColor: '#00000050',
        justifyContent: 'flex-end',
    },
    confirmContainer: {
        // flex: 0.25,
        backgroundColor: Colors.WHITE,
        
        paddingBottom: 20,
        // height: SCREEN_HEIGHT / 1.5,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        //backgroundColor:'grey'
    },
    confirmHeader: {
        flexDirection: 'row',
        height: 66,
        justifyContent: 'space-between',
        alignItems: "center",
        paddingHorizontal: 20,

    },
    confirmDeliveryText: {
        // paddingLeft: 20,
        paddingTop: 15,
        paddingBottom: 15,
        fontFamily: Fonts.SEMIBOLD,
        fontSize: Fonts.SIZE_18,
        color: Colors.JUNGLE_BLACK,
        letterSpacing: 0.2,

    },


    clearAll: {
        fontSize: Fonts.SIZE_15,
        fontFamily: Fonts.MEDIUM,
        color: Colors.PRIMARY
    },
    cuision: {
        fontSize: Fonts.SIZE_16,
        fontFamily: Fonts.BOLD,
        color: Colors.BLACK
    },
    filterContainer: {
        marginTop: 10
    },
    font1: {
        fontSize: Fonts.SIZE_13,
        fontFamily: Fonts.BOLD,
        color: Colors.BLACK
    },
    underLine: {
        height: 1,
        width: "100%",
        backgroundColor: Colors.GRAY_MEDIUM,
        marginTop: 7
    }


})


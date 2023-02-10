import React from 'react'
import { View, Text, TextInput, TouchableOpacity, Dimensions, ScrollView, Modal, StyleSheet, Image, Alert, Keyboard } from 'react-native'
// import FocusAwareStatusBar from '../../components/FocusAwareStatusBar'
// import HeaderThekke from '../../components/Header/HeaderThekke';
import { Colors, Fonts } from '../../global';
import { globalStyles } from '../../global/globalStyles';
import { styles } from "./EditProfileModalStyles";
import UploadImageSvg from "../../assets/svg/UploadImageIcon";
import CameraSvg from "../../assets/svg/CameraSvg1.svg";
import CancelSvg from "../../assets/svg/closecopy.svg";

const EditProfileModal = ({ _toggleUploadImage, openLibrary, openCamera, SelectIamgepicker }) => {
    return (
        <Modal onRequestClose={_toggleUploadImage} animationType='fade' visible={SelectIamgepicker} transparent={true}>
            <View style={{ flex: 1, backgroundColor: '#000000aa', justifyContent: 'flex-end' }}>
                <View style={{
                    backgroundColor: Colors.WHITE,
                    // padding: 20
                }}>
                    <View style={{ backgroundColor: Colors.BLACK, flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 20, }}>
                        <Text maxFontSizeMultiplier={1} style={{
                            fontFamily: Fonts.BOLD,
                            fontSize: Fonts.SIZE_20,
                            color: Colors.WHITE,
                            paddingTop: 20,
                            paddingBottom: 18,
                        }}>Select image</Text>
                        <TouchableOpacity
                            onPress={_toggleUploadImage}
                            hitSlop={{ top: 20, right: 20, bottom: 20, left: 20 }}
                            style={{ marginTop: 3 }}>
                            <CancelSvg />
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <TouchableOpacity onPress={openCamera} style={{ flexDirection: "row", marginHorizontal: 20, }}>
                            <CameraSvg />
                            <Text maxFontSizeMultiplier={1} style={{
                                fontFamily: Fonts.BOLD,
                                fontSize: Fonts.SIZE_20,
                                color: Colors.JUNGLE_BLACK,
                                marginBottom: 20
                            }}>    Take Photo...</Text>
                        </TouchableOpacity>
                        <View style={{ height: 2, backgroundColor: Colors.GRAY_LIGHT, }} />
                        <TouchableOpacity onPress={openLibrary} style={{ flexDirection: "row", marginHorizontal: 20, marginTop: 20 }}>
                            <UploadImageSvg />
                            <Text maxFontSizeMultiplier={1} style={{
                                fontFamily: Fonts.BOLD,
                                fontSize: Fonts.SIZE_20,
                                color: Colors.JUNGLE_BLACK,
                                marginBottom: 20
                            }}>     Choose From Library...</Text>
                        </TouchableOpacity>
                        <View style={{ height: 2, backgroundColor: Colors.GRAY_LIGHT, marginBottom: 20 }} />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default EditProfileModal

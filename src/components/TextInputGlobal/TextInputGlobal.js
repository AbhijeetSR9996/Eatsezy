import React from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { globalStyles } from '../../global/globalStyles'
import ShowPasswordSvg from "../../assets/svg/eye.svg";
import HidePasswordSvg from "../../assets/svg/eye-off.svg";
import { Colors } from '../../global';


const TextInputGlobal = ({ Svg, placeHolder, state, setState, show, maxLength = null, keyboardType = "default", editable = true }) => {
    const [password, setPassword] = React.useState(false)
    const toggle = () => setPassword(!password)

    const onChangeText = (text) => {
        setState(text)
    }
    return (
        <View >
            <View style={globalStyles.TextInput}>
                {
                    Svg &&
                    <View style={styles.user}>
                        {Svg}
                    </View>
                }
                <TextInput
                    secureTextEntry={password}
                    placeholder={placeHolder}
                    keyboardType={keyboardType}
                    maxLength={maxLength}
                    autoCapitalize={placeHolder == "Email" ? "none" : "none"}
                    placeholderTextColor={Colors.GRAY_DARK}
                    editable={editable}
                    style={styles.bodyTextInput}


                    onChangeText={onChangeText}
                >
                    {state}
                </TextInput>
                {
                    show ?
                        <TouchableOpacity onPress={toggle} style={{ marginRight: 20 }}>
                            {password
                                ?
                                <ShowPasswordSvg />
                                :
                                <HidePasswordSvg />

                            }
                        </TouchableOpacity>
                        :
                        null
                }
            </View>
        </View>
    )
}

export default TextInputGlobal

const styles = StyleSheet.create({
    user: {
        justifyContent: "center",
        // backgroundColor: "red",
        marginHorizontal: 10
    },
    bodyTextInput: {
        flex: 1,
        paddingRight: 10,
    }
})

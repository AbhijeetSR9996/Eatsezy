import React from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native'
import { globalStyles } from '../../global/globalStyles';
import SearchSvg from "../../assets/svg/search.svg"
import { Colors, Fonts, ScreenNames } from '../../global';
import { useNavigation } from '@react-navigation/core';

const Search = ({ search, setSearch, placeHolder, inputText, data, searchBy }) => {
    const navigation = useNavigation()
    const onChangeText = (text) => {

        // const results = data.filter(e => e[searchBy].toUpperCase().includes(text.toUpperCase()))
        setSearch(text)
    }
    const goSearch = () => {
        if (!inputText) {
            navigation.navigate(ScreenNames.SEARCH_SCREEN)
        } else {

        }
    }

    return (
        <View >
            <TouchableOpacity
                onPress={goSearch}
                activeOpacity={1}
                style={[globalStyles.TextInput, styles.searchtxt,{bottom:'5%'}]}>
                <View style={styles.vw}>
                <Image style={styles.img} source={require('../../assets/images/searchicon.png')} />
                    {/* <SearchSvg /> */}
                </View>
                {
                    !inputText ?

                        <View style={styles.bodyTextInput}>
                            <Text style={styles.txt}>
                                Search here...
                            </Text>
                        </View>
                        :
                        <TextInput
                            placeholder={placeHolder}
                            //placeholderTextColor={Colors.GRAY_DARK}
                            placeholderTextColor={Colors.GRAY_MEDIUM}
                            style={styles.bodyTextInput}
                            onChangeText={onChangeText}
                        >
                            {search}
                        </TextInput>
                }

            </TouchableOpacity>
        </View>
    )
}

export default Search

const styles = StyleSheet.create({
    user: {
        justifyContent: "center",
        // backgroundColor: "red",
        marginHorizontal: 10,
        
    },
    bodyTextInput: {
        flex: 1,
        paddingRight: 10,
        backgroundColor:'white',
        borderRadius:10,
        fontSize:11,
    },
    vw:{ 
        marginHorizontal: 10, 
    },
    img:{
        height:15,
        width:15,
        left:3
    },
    txt:{ 
        fontFamily: Fonts.MEDIUM, 
        color: Colors.GRAY_DARK, 
    },
    searchtxt:{ 
        borderWidth: 0, 
        backgroundColor: "white",
        borderRadius:10, 
        shadowColor:'#000',
        shadowOffset:{width:0,height:5},
        shadowOpacity:0.8,
        shadowRadius:2,
        elevation:15,
    },
});

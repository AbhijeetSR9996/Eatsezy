import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Colors, Fonts } from '../../global'
import { SCREEN_WIDTH } from '../../global/constants'
//import {StatusBar,FlatList,Animated,Platform,} from 'react-native';
//const { width, height } = Dimensions.get('window');

const Photo = ({ item, index, photos, setCurrentIndex, toggleModal }) => {
    return (
        <TouchableOpacity
            onPress={() => {
                setCurrentIndex(index)
                toggleModal()
            }}>

            <View style={styles.photo}>
                {

                    <Image
                        source={{ uri: item }}
                        style={styles.coverImage}
                        resizeMode="cover"
                    />

                }

                {
                    index == 5 ?
                        <View style={styles.vw}>

                            <View style={[styles.photo, { borderRadius: 10, backgroundColor: "#16161690", alignItems: "center", justifyContent: "center", }]}>
                                <Text style={styles.font1}>+{photos - (index + 1)}</Text>
                            </View>
                        </View>
                        :
                        null
                }
            </View>
        </TouchableOpacity>
    )
}

export default Photo

const styles = StyleSheet.create({
    coverImage: {
        height: '100%',
        //width: '100%',
        width:'150%',
        borderRadius: 20,
        paddingHorizontal:10
    },
    photo: {
        height: (SCREEN_WIDTH / 3),
        width: (SCREEN_WIDTH / 3) - 20,
        marginBottom: 20,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        //marginHorizontal: 10,
        marginHorizontal:35
    },
    font1: {
        fontSize: 17,
        fontFamily: Fonts.BOLD,
        color: Colors.WHITE
    },
    vw:{ 
        position: "absolute", 
        top: 0, 
        right: -9, 
    },
});


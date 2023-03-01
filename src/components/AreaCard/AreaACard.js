import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
//import LinearGradient from 'react-native-linear-gradient';
import { Fonts, ScreenNames } from '../../global';

const AreaCard = ({ item, index }) => {
    const navigation = useNavigation()
    const goToRestaurant = () => {
        navigation.navigate(ScreenNames.RESTAURANTS_SCREEN, { id: 2, location: item._id, })
    }
    return (
        <TouchableOpacity
            onPress={goToRestaurant}
            style={styles.container}>
            <Image
                source={{ uri: item.areaImage }}
                style={styles.coverImage}
                resizeMode="cover"

            />
            {/* <LinearGradient
                locations={[0, 1]}
                colors={['#ffffff49', '#00000035']}
                style={styles.linearGradient}>
            </LinearGradient> */}
            <Text style={styles.nameSt} >{item.areaName}</Text>
        </TouchableOpacity>
    )
}

export default AreaCard

const styles = StyleSheet.create({
    container: {
        borderRadius: 100,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 90,
        width: 90,
        marginHorizontal: 10
    },
    linearGradient: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        borderRadius: 100,
    },
    coverImage: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        borderRadius: 100
    },
    nameSt: {
        color: '#fff',
        fontSize: Fonts.SIZE_15,
        fontFamily: Fonts.BOLD,
        lineHeight: 18
    }
})

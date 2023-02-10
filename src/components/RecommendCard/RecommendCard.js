import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import { Fonts, ScreenNames } from '../../global';

const RecommendCard = ({ item }) => {
    const navigation = useNavigation()
    const goToRestaurant = () => {
        navigation.navigate(ScreenNames.RESTAURANTS_SCREEN, { id: 1, recommendation: item._id })
    }
    return (
        <TouchableOpacity style={styles.cover}
            onPress={goToRestaurant}>

            <Image
                source={{ uri: item?.recommendationImage }}
                style={styles.coverImage}
                resizeMode="cover"
            // resizeMode={FastImage.resizeMode.cover}
            />
            <LinearGradient locations={[0, 1.0]} colors={['#ffffff37', '#00000056']} style={styles.linearGradient}>
            </LinearGradient>
            <Text style={styles.nameSt}>{item.recommendationName}</Text>
            <Text style={styles.amt}>{item.amount}</Text>
        </TouchableOpacity>
    )
}

export default RecommendCard

const styles = StyleSheet.create({
    cover: {
        height: 150,
        width: 130,
        borderRadius: 8,
        marginHorizontal: 10
    },
    coverImage: {
        height: '100%',
        width: '100%',
        borderRadius: 8
    },
    linearGradient: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        borderRadius: 8
    },
    nameSt: {
        position: 'absolute',
        bottom: 25,
        left: 15,
        right: 15,

        color: '#fff',
        fontFamily: Fonts.SEMIBOLD,
        fontSize: 16,


    },
    amt: {
        position: 'absolute',
        bottom: 10,
        left: 15,
        color: '#fff',
        fontFamily: Fonts.SEMIBOLD,
        fontSize: 10,
        opacity: 0.7
    }

})

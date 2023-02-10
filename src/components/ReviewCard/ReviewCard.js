import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Pressable, Image } from 'react-native'
import CalenderSvg from '../../assets/svg/calender.svg'
import ReviewRatting from '../../assets/svg/reviewRatting.svg'
import { useNavigation } from '@react-navigation/core'
import { Colors, Constants, Fonts, ScreenNames } from '../../global';
import moment from 'moment'

const ReviewCard = ({
    item,
}) => {
    const navigation = useNavigation();

    const [liked, setliked] = useState(false)
    const goRestaurantsDetail = () => {
        navigation.navigate(ScreenNames.RESTAURANTDETAIL_SCREEN, { restaurant_id: 1 })
    }
    return (
        <TouchableOpacity style={styles.card} onPress={goRestaurantsDetail} >
            <View style={styles.coverImageContainer}>
                <Image
                    source={{ uri: item.restaurantThumbnail }}
                    style={styles.coverImage}
                />
            </View>
            <View style={{ flex: 1, marginLeft: 10 }}>

                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                    <Text style={styles.restaurantName}>{item.restuarantId.restaurantName}</Text>
                    <View style={styles.rating}>
                        <Text style={styles.ratingTxt}>{item.starRating}/5.0</Text>
                    </View>
                </View>
                <View style={styles.info}>
                    <CalenderSvg />
                    <Text style={styles.infoTxt1} numberOfLines={1}>{moment(item.date).format("DD MMM YYYY")}</Text>
                </View>
                <View style={styles.info}>
                    <ReviewRatting />
                    <Text style={styles.infoTxt2}>{item.reviewMessage}</Text>
                </View>
            </View>

        </TouchableOpacity>
    )
}

export default ReviewCard;

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        marginHorizontal: 20,
        marginTop: 15,

    },
    coverImage: {
        width: '100%',
        height: '100%',
        borderRadius: 10
    },
    restaurantName: {
        color: '#161616',
        fontSize: 16,
        fontFamily: Fonts.MEDIUM,

    },
    coverImageContainer: {
        height: 90,
        width: 90,
    },
    info: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
        width: Constants.SCREEN_WIDTH / 1.7
    },
    infoTxt1: {
        fontSize: 12,
        color: '#161616',
        opacity: 0.5,
        marginLeft: 8.11,
        width: 190
    },
    infoTxt2: {
        fontSize: 12,
        color: '#161616',
        opacity: 0.65,
        marginLeft: 8.11
    },
    rating: {
        backgroundColor: '#4EC43B',
        borderRadius: 8,
        height: 24,
        width: 48,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    ratingTxt: {
        fontFamily: Fonts.MEDIUM,
        fontSize: 12,
        color: '#fff',
        paddingHorizontal: 10,
    },
    like: {
        position: 'absolute',
        top: 18,
        left: 16.5,
    }
})

import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Pressable, Image } from 'react-native'
import MapPin from '../../assets/svg/map-pin.svg'
import Cuisine from '../../assets/svg/UnfilledCuisine.svg'
import Heart from '../../assets/svg/heart.svg'
import HeartActive from '../../assets/svg/heartActive.svg'
import { useNavigation } from '@react-navigation/core'
import { Colors, Fonts, ScreenNames, Server } from '../../global';
import { connect } from 'react-redux'
import * as UserActions from '../../redux/actions/userActions'
import axios from 'axios'
import SignInModal from '../../components/ModalPleaseSignIn/ModalPleaseSignInCode';
import { SCREEN_WIDTH } from '../../global/constants'

const RestaurantCard = ({
    item,
    favorite,
    userId,
    dispatch,
    cuisineNames,
    isSignedIn
}) => {
    const [isSignInModalVisible, setIsSignInModalVisible] = React.useState(false);
    const toggleIsSignInModalVisibility = React.useCallback(() => setIsSignInModalVisible(!isSignInModalVisible));

    const addRestaurantToFavaorite = async () => {
        if (isSignedIn) {

            if (!liked) {
                setLoading(true)
                const response = await axios.post(`${Server.BASE_URL}/user/add-restaurant-to-favorites`, {

                    "userId": userId,
                    "restaurantId": item._id

                })
                dispatch(UserActions.setFavorate([...favorite, item._id]))
                setliked(!liked)
                setLoading(false)
            } else {
                setLoading(true)
                const resp = await axios.put(`${Server.BASE_URL}/user/remove-favorite-restaurant/${userId}`, {
                    restaurantId: item._id
                })
                const response = favorite.filter(e => e != item._id)
                dispatch(UserActions.setFavorate(response))
                setliked(!liked)
                setLoading(false)
            }
        } else {
            toggleIsSignInModalVisibility()
        }
    }
    const navigation = useNavigation();

    const [liked, setliked] = useState(false)
    const [loading, setLoading] = React.useState(false)
    const goRestaurantsDetail = () => {
        navigation.navigate(ScreenNames.RESTAURANTDETAIL_SCREEN, { restaurant_id: item._id })
    }

    React.useEffect(() => {
        const data = favorite.filter(e => e == item._id)
        if (data.length > 0) {
            setliked(true)
        }
    }, [favorite])
    console.warn(item);
    return (
        <View style={{ flex: 1 }}>


            <TouchableOpacity style={styles.card} onPress={goRestaurantsDetail} >
                <View style={styles.coverImageContainer}>
                    <Image
                        source={{ uri: item.restaurantThumbnail }}
                        style={styles.coverImage}
                    />
                    <View style={styles.rating}>
                        <Text style={styles.ratingTxt}>{item.restaurantRating.toFixed(1)}/5.0</Text>
                    </View>
                    <TouchableOpacity
                        disabled={loading}
                        style={styles.like} onPress={addRestaurantToFavaorite}>
                        {liked && <HeartActive height={24} width={24} style={styles.heart1} />}
                        {!liked && <Heart height={24} width={24} style={styles.heart2} />}
                    </TouchableOpacity>
                </View>
                <Text style={{ ...styles.restaurantName, fontSize: 16, fontFamily: Fonts.SEMIBOLD }}>{item.restaurantName}</Text>
                {/* <View style={{ flex: 1 }}> */}

                <View style={styles.info}>
                    <MapPin style={styles.mappin} height={12} width={10} />
                    <Text style={styles.infoTxt1} numberOfLines={2}>{item.restaurantLocality}</Text>
                </View>
                <View style={{ ...styles.info }}>
                    <Cuisine height={12.8} width={12.8} />
                    <View style={{ width: SCREEN_WIDTH / 2.5 }}>
                        <Text style={styles.infoTxt2}>{cuisineNames}</Text>
                    </View>
                </View>
                {/* </View> */}

            </TouchableOpacity>

            <SignInModal
                toggleIsSignInModalVisibility={toggleIsSignInModalVisibility}
                isSignInModalVisible={isSignInModalVisible}
                description={"Please Sign in to continue"}
                navigateFrom={ScreenNames.BOTTOM_TABS}
                navigateTo={{ screen: 'Profile' }} />

        </View>
    )
}
const mapStateToProps = state => ({
    state: state.user,
    userId: state.user.userId,
    favorite: state.user.favorite,
    isSignedIn: state.user.isSignedIn,
});

const mapDispatchToProps = dispatch => ({ dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantCard)

const styles = StyleSheet.create({
    card: {
        flexDirection: 'column',
        marginHorizontal: 5
    },
    coverImage: {
        width: '100%',
        height: '100%',
        borderRadius: 5
    },
    restaurantName: {
        color: '#161616',
        fontSize: 14,
        marginTop: 15
    },
    coverImageContainer: {
        height: 150,
        width: 200,
    },
    info: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    infoTxt1: {
        fontSize: 12,
        color: '#161616',
        opacity: 0.5,
        marginLeft: 8.11,
        width: 190
    },
    infoTxt2: {
        fontSize: 11,
        color: '#161616',
        opacity: 0.65,
        marginLeft: 8.11
    },
    rating: {
        backgroundColor: '#4EC43B',
        position: 'absolute',
        top: 10,
        right: 10,
        borderRadius: 8,

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    ratingTxt: {
        fontFamily: Fonts.MEDIUM,
        fontSize: 12,
        color: '#fff',
        paddingHorizontal: 10,
        paddingTop: 6,
        paddingBottom: 4,
    },
    like: {
        position: 'absolute',
        top: 18,
        left: 16.5,
        zIndex: 100
    },
    heart1:{ 
        color: '#EB3723' 
    },
    heart2:{ 
        color: '#fff' 
    },
    mappin:{ 
        color: '#16161690' 
    },
});

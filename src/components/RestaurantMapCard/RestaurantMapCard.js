import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Pressable, Image, Platform } from 'react-native'
import MapPin from '../../assets/svg/map-pin.svg'
import Cuisine from '../../assets/svg/UnfilledCuisine.svg'
import Heart from '../../assets/svg/heart.svg'
import HeartFilled from '../../assets/svg/HeartFilled.svg'
import Dollar from '../../assets/svg/dollar-round.svg';
import Hearts from '../../assets/svg/heartActive.svg';
import Dollars from '../../assets/svg/dollarsvg.svg';
import { styles } from './RestaurantMapCardStyles'
import { useNavigation } from '@react-navigation/native'
import { ScreenNames, Server } from '../../global'
import axios from 'axios'
import { connect } from 'react-redux'
//import * as UserActions from '../../redux/actions/userActions'
import SignInModal from '../ModalPleaseSignIn/ModalPleaseSignInCode'
const RestaurantMapCard = ({
    coverImage,
    rating,
    likeStatus,
    restaurantName,
    restaurantLocality,
    restaurantType,
    restaurantId,
    userId,
    show,
    favorite,
    dispatch, isSignedIn
}) => {
    const [liked, setliked] = useState(likeStatus)
    const [loading, setLoading] = React.useState(false)
    const navigation = useNavigation();
    const goToResaturantDetails = () => {
        navigation.navigate(ScreenNames.RESTAURANTDETAIL_SCREEN, { restaurant_id: restaurantId })
    }

    const [isSignInModalVisible, setIsSignInModalVisible] = React.useState(false);
    const toggleIsSignInModalVisibility = React.useCallback(() => setIsSignInModalVisible(!isSignInModalVisible));

    // const addRestaurantToFavaorite = async () => {
    //     if (isSignedIn) {


    //         if (!liked) {
    //             setLoading(true)
    //             const data = {
    //                 "userId": userId,
    //                 "restaurantId": restaurantId
    //             }
    //             const response = await axios.post(`${Server.BASE_URL}/user/add-restaurant-to-favorites`, data)
    //             dispatch(UserActions.setFavorate([...favorite, restaurantId]))
    //             setliked(!liked)
    //             setLoading(false)
    //         } else {
    //             setLoading(true)
    //             const resp = await axios.put(`${Server.BASE_URL}/user/remove-favorite-restaurant/${userId}`, {
    //                 restaurantId: restaurantId
    //             })
    //             const response = favorite.filter(e => e != restaurantId)
    //             dispatch(UserActions.setFavorate(response))
    //             setliked(!liked)
    //             setLoading(false)
    //         }
    //     } else {
    //         toggleIsSignInModalVisibility()
    //     }
    // }
    React.useEffect(() => {
        const data = favorite.filter(e => e == restaurantId)
        if (data.length > 0) {
            setliked(true)
        }
    }, [favorite])
    return (
        <View style={styles.vw}>


          {/*  <TouchableOpacity style={styles.card}
                onPress={goToResaturantDetails}>
                <View style={styles.first}>
                    <View style={styles.coverImageContainer}>
                        <Image
                            source={{ uri: coverImage }}
                            style={styles.coverImage}
                        />
                    </View>
                    <View style={styles.second}>
                        <Text style={styles.restaurantName}>{restaurantName}</Text>
                        <View style={styles.info}>
                            <MapPin style={{ color: '#16161690' }} height={12} width={10} />
                            <Text style={styles.infoTxt1} numberOfLines={1}>{restaurantLocality}</Text>
                        </View>
                        <View style={styles.info}>
                            <Cuisine />
                            <Text style={styles.infoTxt2} numberOfLines={2}>{restaurantType}</Text>
                        </View>
                        <View style={styles.rating}>
                            <Text style={styles.ratingTxt}>{rating.toFixed(1)}/5.0</Text>
                        </View>
                    </View>
                </View>



                <TouchableOpacity
                    disabled={loading}
                    onPress={addRestaurantToFavaorite}
                    hitSlop={{ left: 20, right: 20, top: 20, bottom: 20 }} style={styles.like} >
                    {liked
                        ?
                        <HeartFilled />
                        :
                        <Heart />
                    }
                </TouchableOpacity>
                </TouchableOpacity> */}

            <TouchableOpacity style={styles.card}
                onPress={goToResaturantDetails}
                activeOpacity={Platform.OS === 'android' ? 1 : 0.5}>
                <View style={styles.first}>
                    <View style={styles.coverImageContainer}>
                        <Image
                            source={require('../../assets/images/restdish1.png')}
                            style={styles.coverImage}
                        />
                    </View>
                    <View style={styles.second}>
                        <Text style={styles.restaurantName}>Urban Tadka Dining</Text>
                        <View style={styles.info}>
                            <Text style={styles.infoTxt1} numberOfLines={1}>Nelson Bridge, Singapore</Text>
                            <Text style={styles.infoTxt2} numberOfLines={1}>Chinese | Asian</Text>
                            <Text style={styles.infoTxt3} numberOfLines={1}> 3 km</Text>
                            <Text style={styles.infoTxt4} numberOfLines={1}> Free</Text>
                        </View>
                        <View style={styles.info}>
                        <MapPin style={styles.mappin} height={12} width={10} />
                        {/* <Dollar style={styles.dollar} height={15} width={25}/> */}
                        <Image
                            source={require('../../assets/images/doll.png')}
                            style={styles.dollar} height={12} width={10}
                        />
                        </View>
                        <View style={styles.rating}>
                            <Text style={styles.ratingTxt}>4.1/5</Text>
                        </View>
                    </View>
                    <View style={styles.view2}>
                    <TouchableOpacity
                    disabled={loading}
                    onPress={addRestaurantToFavaorite}
                    hitSlop={{ left: 20, right: 20, top: 20, bottom: 20 }} style={styles.like} >
                    {liked
                        ?
                        <HeartFilled />
                        :
                        <Heart />
                    }
                </TouchableOpacity>
                </View>
                </View>

                
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

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantMapCard)


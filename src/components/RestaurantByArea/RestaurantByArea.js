import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import { Colors, ScreenNames } from '../../global'
import StarSVG from '../../assets/svg/star.svg'
import { useNavigation } from '@react-navigation/native'
const RestaurantByArea = ({ item }) => {
    const [rattings, setRattings] = React.useState([])
    const navigation = useNavigation()
    React.useEffect(() => {
        let data = []
        for (let i = 0; i < Math.round(item.restaurantRating); i++) {
            data = [...data, i]
        }
        setRattings(data)
    }, [])

    const goRestaurantsDetail = () => {
        navigation.navigate(ScreenNames.RESTAURANTDETAIL_SCREEN, { restaurant_id: item._id })
    }
    return (
        <TouchableOpacity style={styles.container}
            onPress={goRestaurantsDetail}>
            <Image
                source={{ uri: item.restaurantThumbnail }}
                style={styles.coverImage}
                resizeMode="cover"
            />
            <Text style={styles.txt1} numberOfLines={1}>{item.restaurantName}</Text>
            <Text style={styles.txt2} numberOfLines={1}>{item.restaurantLocality}</Text>
            <View style={styles.rating}>
                <View style={styles.start}>
                    {
                        rattings.map(e => {
                            return <StarSVG style={styles.star} height={12} width={12} />
                        })
                    }

                </View>
                <Text style={styles.txt3}>({item.restaurantRating.toFixed(1)})</Text>
            </View>
        </TouchableOpacity>
    )
}

export default RestaurantByArea

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10
    },
    coverImage: {
        width: 120,
        height: 129,
        borderRadius: 10,
        marginBottom: 11
    },
    rating: {
        flexDirection: 'row',
        alignItems: 'flex-start'
    },
    start: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginTop: 1.1
    },
    txt1: {
        width: 120,
        fontFamily: Colors.BOLD,
        fontSize: 12,
        color: '#161616',
        opacity: 0.75
    },
    txt2: {
        width: 120,
        fontFamily: Colors.BOLD,
        fontSize: 12,
        color: '#161616',
        opacity: 0.35
    },
    txt3: {
        fontSize: 10,
        color: '#161616',
        opacity: 0.8
    },
    star: {
        marginRight: 2
    }
})

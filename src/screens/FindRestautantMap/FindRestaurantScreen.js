import axios from 'axios'
import React from 'react'
import { StyleSheet, View, SafeAreaView, FlatList, ScrollView, TouchableOpacity, Text, Platform, PermissionsAndroid, ToastAndroid } from 'react-native'
import MapView from 'react-native-maps'
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar'
import RestaurantMapCard from '../../components/RestaurantMapCard/RestaurantMapCard'
import { Colors, Constants, ScreenNames, Server, Fonts } from '../../global'
import { mapDarkStyle, mapStandardSilverStyle, mapStandardStyle } from './FindReataurantStyles'
import UnSelectedPin from '../../assets/svg/MapUnselectedPin.svg'
import SelectedPin from '../../assets/svg/MapSelectedPin.svg'
//import { featuredRestaurant } from '../../Dummy/Dummy'
import { globalStyles } from '../../global/globalStyles'
//import geoViewport from 'geo-viewport'
import { PERMISSIONS, request } from 'react-native-permissions'
//import Geolocation from 'react-native-geolocation-service';
//import { getDistance } from 'geolib';
const FindRestaurantMap = ({ navigation }) => {
    const [data, setdata] = React.useState([])
    const [currentIndex, setCurrentIndex] = React.useState(0)
    const [indicatorData, setIndicatorData] = React.useState([])
    const [viewableItems, setViewableItems] = React.useState([])
    const [selectedRestaurant, setSelectedRestaurant] = React.useState(null)
    const mapRef = React.useRef(null)
    React.useEffect(() => {
        requestPermission()
        getDefaultRestaurant()
    }, [])

    const getDefaultRestaurant = async () => {
        const response = await axios.post(`${Server.BASE_URL}/${Server.END_POINT.NEAR_BY_RESTAURANT}`,
            {
                "latitude": 19.3005692,
                "longitude": 73.0518041,
                "maxHeight": 350
            }
        )
        console.warn(response.data);
        if (typeof response.data.message == "undefined") {
            setdata(response.data.data)
            if (response.data.data.length > 0) {

                let result = []
                for (let i = 0; i < response.data.data.length / 2; i++) {
                    result = [...result, response.data.data[i]]
                }
                setViewableItems([response.data.data[0], response.data.data[Math.round(response.data.data.length / 2)]])
                setTimeout(() => {
                    if (mapRef.current != null) {

                        mapRef.current.animateToRegion(
                            {
                                latitude: response.data.data[0].loc[1],
                                longitude: response.data.data[0].loc[0],
                                latitudeDelta: 0.00864195044303443,
                                longitudeDelta: 0.000142817690068,
                            },
                            350
                        );
                    }
                }, 2000)
                setIndicatorData(result);
            }
        }
        else {
            setdata([])
        }
    }
    const requestPermission = async () => {
        const isAndroid = Platform.OS == 'android';

        if (isAndroid) {
            const result = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
            // console.log("result", result);
            if (result) {
                getAllRestaurants()
            }
            else {
                const isGranted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
                if (isGranted == PermissionsAndroid.RESULTS.GRANTED) {
                    getAllRestaurants()
                }
            }
        } else {
            await request(PERMISSIONS.IOS.LOCATION_ALWAYS).then((result) => {
                if (result == "granted") {
                    getAllRestaurants();
                }
            });
        }
    }
    // const getAllRestaurants = async () => {
    //     Geolocation.getCurrentPosition(
    //         async ({ coords }) => {
    //             const longitude = coords.longitude;
    //             const latitude = coords.latitude;
    //             const altitude = coords.altitude;
    //             console.warn(coords);
    //             const response = await axios.post(`${Server.BASE_URL}/${Server.END_POINT.NEAR_BY_RESTAURANT}`,
    //                 {
    //                     "latitude": latitude,
    //                     "longitude": longitude,
    //                     "maxHeight": 604
    //                 }
    //             )
    //             console.warn(response.data);
    //             if (typeof response.data.message == "undefined") {
    //                 setdata(response.data.data)
    //                 if (response.data.data.length > 0) {

    //                     let result = []
    //                     for (let i = 0; i < response.data.data.length / 2; i++) {
    //                         result = [...result, response.data.data[i]]
    //                     }
    //                     setViewableItems([response.data.data[0], response.data.data[Math.round(response.data.data.length / 2)]])
    //                     setTimeout(() => {
    //                         if (mapRef.current != null) {

    //                             mapRef.current.animateToRegion(
    //                                 {
    //                                     latitude: response.data.data[0].loc[1],
    //                                     longitude: response.data.data[0].loc[0],
    //                                     latitudeDelta: 0.00864195044303443,
    //                                     longitudeDelta: 0.000142817690068,
    //                                 },
    //                                 350
    //                             );
    //                         }
    //                     }, 2000)
    //                     setIndicatorData(result);
    //                 }
    //             }
    //         },
    //         (err) => {
    //             // if (isMounted.current == true) {
    //             //     setLoading(false);
    //             // }
    //         },
    //         {
    //             enableHighAccuracy: true,
    //             timeout: 15000,
    //             maximumAge: 10000,
    //         }
    //     );
    // }

    // const renderItem = ({ item }) => {
    //     return (
    //         <RestaurantMapCard
    //             key={item._id}
    //             restaurantId={item._id}
    //             // navigation={navigation}
    //             coverImage={item.restaurantThumbnail}
    //             rating={item.restaurantRating}
    //             likeStatus={false}
    //             restaurantName={item.restaurantName}
    //             restaurantLocality={item.address}
    //             restaurantType={item.cuisineNames.join(' | ')}
    //         />
    //     )
    // }

    const renderIndicator = ({ item, index }) => {
        return (
            <View style={{ width: index == currentIndex ? 25 : 14, height: index == currentIndex ? 8 : 5, borderRadius: 10, backgroundColor: index == currentIndex ? Colors.PRIMARY : Colors.GRAY_LIGHT, marginLeft: 5, marginRight: 5 }}>

            </View>
        )
    }
    const _onMomentumScrollEnd = ({ nativeEvent }) => {
        let viewableData = []
        const index = Math.round(nativeEvent.contentOffset.x / Constants.SCREEN_WIDTH);
        if (Math.round(data.length / 2) + index < data.length) {
            viewableData = [...viewableData, data[index], data[index == 0 ? Math.round(data.length / 2) : Math.round(data.length / 2) + index]]
        } else {
            viewableData = [...viewableData, data[index]]
        }
        // setViewableItems(viewableData);
        // if (viewableData.length > 0) {
        //     mapRef.current.animateToRegion(
        //         {
        //             latitude: viewableData[0].loc[1],
        //             longitude: viewableData[0].loc[0],
        //             latitudeDelta: 0.00864195044303443,
        //             longitudeDelta: 0.000142817690068,
        //         },
        //         350
        //     );
        // }
        setCurrentIndex(index);
    }
    const marker = (id) => {
        if (viewableItems.length > 0) {
            const response = viewableItems.filter(e => e._id == id)
            if (response.length > 0) {
                return <SelectedPin />
            } else {
                return <UnSelectedPin />
            }
        }
    }

    const selectRestaurant = (item) => {
        setViewableItems([item])
        setSelectedRestaurant(item)
        if (mapRef.current != null) {
            mapRef.current.animateToRegion(
                {
                    latitude: item.loc[1],
                    longitude: item.loc[0],
                    latitudeDelta: 0.04864195044303443,
                    longitudeDelta: 0.040142817690068,
                },
                350
            );
        }
    }

    const goRestaurantsDetail = () => {
        navigation.navigate(ScreenNames.RESTAURANTDETAIL_SCREEN, { restaurant_id: selectedRestaurant._id })
    }
    // const calculateHeightInMeters = (lat1, long1, lat2, long2) => {
    //     var dis = getDistance(
    //         { latitude: lat1, longitude: long1 },
    //         { latitude: lat2, longitude: long2 },
    //     );
    //     return dis / 2;
    // };
    const onRegionChangeComplete = async (region) => {
        let mapRef1 = await mapRef.current.getMapBoundaries();
        const height = calculateHeightInMeters(mapRef1.northEast.latitude, mapRef1.northEast.longitude, mapRef1.southWest.latitude, mapRef1.southWest.longitude);

        const response = await axios.post(`${Server.BASE_URL}/${Server.END_POINT.NEAR_BY_RESTAURANT}`,
            {
                "latitude": region.latitude,
                "longitude": region.longitude,
                "maxHeight": height
            }
        )
        console.warn("==>", response.data);

        if (typeof response.data.message == "undefined") {
            setdata(response.data.data)
            if (response.data.data.length > 0) {

                let result = []
                for (let i = 0; i < response.data.data.length / 2; i++) {
                    result = [...result, response.data.data[i]]
                }
                setViewableItems([response.data.data[0], response.data.data[Math.round(response.data.data.length / 2)]])
                setTimeout(() => {
                    mapRef.current.animateToRegion(
                        {
                            latitude: response.data.data[0].loc[1],
                            longitude: response.data.data[0].loc[0],
                            latitudeDelta: 0.00864195044303443,
                            longitudeDelta: 0.000142817690068,
                        },
                        350
                    );
                }, 2000)
                setIndicatorData(result);
            }
        } else {
            setdata([])
            setIndicatorData([])
        }
        // let mapzoom = Math.log2(360 * (Constants.SCREEN_WIDTH / 256 / region.longitudeDelta)) + 1
        // let googleearthaltitude;
        // let firstPartOfEq = (.05 * ((591657550.5 / (Math.pow(2, (mapzoom - 1)))) / 2));//amount displayed is .05 meters and map scale =591657550.5/(Math.pow(2,(mapzoom-1))))
        // //this bit ^ essentially gets the h value in the angular size eq then divides it by 2
        // googleearthaltitude = (firstPartOfEq) * ((Math.cos(Math.toRadians(85.362 / 2))) / (Math.sin(Math.toRadians(85.362 / 2))));//85.362 is angle which google maps displays on a 5cm wide screen
        // console.log(googleearthaltitude);
    }
    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <FocusAwareStatusBar isTopSpace={false} />

            <View style={{ ...styles.mapContainer, flex: selectedRestaurant ? 1 : 0.7, }}>

                <MapView style={{ ...StyleSheet.absoluteFillObject }}
                    initialRegion={{
                        latitude: 1.3605124,
                        longitude: 103.7538653,
                        latitudeDelta: 0.004757,
                        longitudeDelta: 0.006866,

                    }}
                    onRegionChangeComplete={onRegionChangeComplete}
                    ref={mapRef}
                    provider={"google"}
                    customMapStyle={true ? mapStandardSilverStyle : mapStandardStyle}
                    minZoomLevel={16}
                    loadingEnabled
                    // zoomEnabled={false}
                    mapType="standard"
                >
                    {
                        data.map(item => {
                            return <MapView.Marker
                                key={item._id}
                                tracksViewChanges={false}
                                coordinate={{

                                    latitude: item?.loc[1],
                                    longitude: item?.loc[0],
                                }}
                                onPress={() => selectRestaurant(item)}
                            // image={require('../../assets/images/mapmarker.png')}
                            // title={item.restaurant_name}
                            // opacity={0.9}
                            >
                                {
                                    marker(item._id)
                                }
                            </MapView.Marker>
                        })}



                </MapView>
            </View>

            <View style={{ flex: selectedRestaurant ? null : 0.35, backgroundColor:'white' }}>
                {
                    selectedRestaurant ?
                        <>
                            {/* <RestaurantMapCard
                                key={selectedRestaurant._id}
                                restaurantId={selectedRestaurant._id}
                                // navigation={navigation}
                                coverImage={selectedRestaurant.restaurantThumbnail}
                                rating={selectedRestaurant.restaurantRating}
                                likeStatus={false}
                                restaurantName={selectedRestaurant.restaurantName}
                                restaurantLocality={selectedRestaurant.address}
                                restaurantType={selectedRestaurant.cuisineNames.join(" | ")}
                            /> */}
                            <TouchableOpacity style={{ ...globalStyles.button, marginHorizontal: 20, marginTop: 10 }}
                                onPress={goRestaurantsDetail}>
                                <Text style={globalStyles.buttonText}>
                                    Book Now
                                </Text>
                            </TouchableOpacity>
                        </>
                        :
                        <>
                            <View style={{ alignItems: "center", marginTop: 20 }}>
                                <FlatList
                                    data={indicatorData}
                                    horizontal={true}
                                    contentContainerStyle={{ alignItems: "center" }}
                                    renderItem={renderIndicator}
                                />
                            </View>
                            <ScrollView
                                horizontal
                                pagingEnabled
                                showsHorizontalScrollIndicator={false}
                                onMomentumScrollEnd={_onMomentumScrollEnd}
                            >
                                {
                                    // data.length > 0
                                    // &&
                                    <FlatList
                                        data={data}
                                        numColumns={Math.round(data.length / 2)}
                                        ListEmptyComponent={({ it, image }) => (
                                            <View style={{ alignItems: "center", alignSelf: "center", width: Constants.SCREEN_WIDTH, marginTop: 20 }}>
                                                <Text style={{ fontSize: 14, fontFamily: Fonts.MEDIUM, color: Colors.BLACK }}>No Restaurant found</Text>
                                            </View>
                                        )}
                                        //renderItem={renderItem}

                                    />
                                }
                            </ScrollView>
                        </>
                }
            </View>
            {/* <View style={styles.restContainer}>
                    {data.map(item => {
                        return <RestaurantLongCardMap
                            key={item._id}
                            restaurantId={item._id}
                            navigation={navigation}
                            coverImage={item.restaurant_images[0]}
                            rating={item.current_rating}
                            likeStatus={false}
                            restaurantName={item.restaurant_name}
                            restaurantLocality={item.address}
                            restaurantType={item.cuisines}
                        />
                    })}
                </View> */}
            {/* </ScrollView> */}
        </View>

    )
}

export default FindRestaurantMap;

const styles = StyleSheet.create({
    mapContainer: {
        flex: 0.7,
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30,
        overflow: "hidden",
        backgroundColor: '#e4e4e4'
    },
    restContainer: {

    }
})
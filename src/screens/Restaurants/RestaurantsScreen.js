import React from 'react'
import { FlatList, RefreshControl, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar'
import { Colors, Fonts, Server } from '../../global'
//import Header from "../../components/Header/Header"
//import { CuisionData, quickLink, ResaturantCardData } from '../../Dummy/Dummy'
//import QuickFilter from '../../components/QuickFilter/QuickFilter'
//import FilterBy from '../../components/FilterBy/FilterBy'
//import RestaurantMapCard from '../../components/RestaurantMapCard/RestaurantMapCard'
//import GuestModal from '../../components/GuestModal/GuestModal'
//import FilterModal from '../../components/FilterModal/FilterModal'
import axios from 'axios'
//import { BASE_URL } from '../../global/server'
//import SkeletonPlaceholder from 'react-native-skeleton-placeholder'
import { SCREEN_WIDTH } from '../../global/constants'

const RestaurantsScreen = ({ route }) => {

    let defaultFilterData = {
        "areaId": [],
        "priceRange": 0,
        "cuisineId": [],
        "recommendationId": [],
        "ratings": 0
    }
    const [selected, setSelected] = React.useState(route.params.id)
    const [cuision, setCuision] = React.useState(null)
    const [subData, setSubData] = React.useState(null)
    const [filterData, setFilterData] = React.useState({
        "areaId": [],
        "priceRange": 0,
        "cuisineId": [],
        "recommendationId": [],
        "ratings": 0
    })
    // const [item, setitem] = React.useState(null)
    const [isGuestModalVisible, setIsGuestModalVisible] = React.useState(false)
    const [isQuickFilterModalVisible, setIsQuickFilterModalVisible] = React.useState(false)
    const toggleGuestModalVisible = () => {
        setIsGuestModalVisible(!isGuestModalVisible)
    }
    const toggleQuickFilterModalVisible = () => {
        setIsQuickFilterModalVisible(!isQuickFilterModalVisible)
    }
    // const renderRestaurantCard = ({ item, index }) => {
    //     return (
    //         <RestaurantMapCard
    //             key={item._id}
    //             restaurantId={item._id}
    //             coverImage={item.restaurantThumbnail}
    //             rating={item.restaurantRating}
    //             likeStatus={false}
    //             show={true}
    //             restaurantName={item.restaurantName}
    //             restaurantLocality={item.restaurantLocality}
    //             restaurantType={item.cuisineNames.join(' | ')}
    //         />
    //     )
    // }

    const [restaurant, setRestaurant] = React.useState(null)
    // const getRestaurant = async () => {
    //     try {
    //         if (typeof route.params.recommendation != "undefined") {
    //             setFilterData({
    //                 ...defaultFilterData,
    //                 "recommendationId": [route.params.recommendation]
    //             })
    //         } else if (typeof route.params.location != "undefined") {
    //             setFilterData({
    //                 ...defaultFilterData,
    //                 "areaId": [route.params.location]
    //             })
    //         } else {
    //             const response = await axios.get(`${Server.BASE_URL}/restaurant/get-all-restaurants`)
    //             setRestaurant(response.data.data)
    //         }
    //     } catch (error) {
    //         console.warn(error.message);
    //     }
    // }


    const getRestaurantByFilter = async () => {
        try {
            const response = await axios.post(`${Server.BASE_URL}/${Server.END_POINT.RESTAURANT_FILTER}`, filterData)
            setRestaurant(response.data.data)

        } catch (error) {
            setRestaurant([])
        }
    }
    // const getAllCusine = async () => {
    //     let response = null;
    //     if (selected == 0) {
    //         response = await axios.get(`${Server.BASE_URL}/${Server.END_POINT.ALL_CUISINE}`)
    //         setSubData(response.data.data)
    //     }
    //     else if (selected == 1) {
    //         response = await axios.get(`${Server.BASE_URL}/${Server.END_POINT.RECOMMENDATION}`)
    //         setSubData(response.data.data)
    //     }
    //     else if (selected == 2) {
    //         response = await axios.get(`${Server.BASE_URL}/${Server.END_POINT.COOL_AREAS}`)
    //         setSubData(response.data.data)
    //     } else if (selected == 3) {
    //         setSubData([
    //             {
    //                 _id: 1,
    //                 name: "😫",
    //             },
    //             {
    //                 _id: 2,
    //                 name: "☹️",
    //             },
    //             {
    //                 _id: 3,
    //                 name: "😕",
    //             },
    //             {
    //                 _id: 4,
    //                 name: "🙂",
    //             },
    //             {
    //                 _id: 5,
    //                 name: "🥰",
    //             },
    //         ])
    //     }
    // }

    const renderQuickLinks = ({ item, idx }) => {
        return <View key={idx} style={styles.bubbleContainer}>
            {/* <TouchableOpacity

                style={[styles.borderQuicklink, {
                    borderWidth: selected == item.id ? 0 : 1,
                    borderColor: selected == item.id ? "#ffffff" : "#44444450",
                    //backgroundColor: selected == item.id ? Colors.BLACK : "#44444410",
                    backgroundColor: selected == item.id ? '#ef3340' : "#44444410",  

                }]} onPress={() => {
                    if (selected == item.id) {

                    } else {
                        setSubData(null)
                        setFilterData({
                            ...defaultFilterData,
                        })
                        // navigation.navigate(ScreenNames.RESTAURANTS_SCREEN, { id: item.id, })
                        setSelected(item.id)
                    }
                }}>

                <View style={styles.vw}>
                    {selected == item.id ?
                        item.UnfillSvg
                        :
                        item.fillSvg
                    }
                </View>
                <Text style={[styles.font1, { color: selected == item.id ? Colors.WHITE : Colors.BLACK }]}>{item.name}</Text>
            </TouchableOpacity> */}
        </View>
    }

    const renderSubList = ({ item, index }) => {

        return (
            <>



                {/* {
                    selected == 3
                        ?
                        <TouchableOpacity
                            style={{ ...styles.cuisionConatiner, backgroundColor: filterData.ratings == item._id ? '#ee3340' : Colors.WHITE, borderWidth: 1 }}
                            onPress={() => {
                                setFilterData({
                                    ...defaultFilterData,
                                    "ratings": item._id
                                })
                            }}
                            activeOpacity={0.5}
                        >
                            <Text maxFontSizeMultiplier={1} style={styles.cuisionText}>
                                {item.name}
                            </Text>
                        </TouchableOpacity>
                        :
                        <FilterBy item={item} index={index}
                            onPress={(status) => {
                                if (selected == 0) {
                                    if (!status) {
                                        setFilterData({
                                            ...defaultFilterData,
                                            "cuisineId": filterData.cuisineId.filter(e => e != item._id),
                                        })
                                    } else {
                                        setFilterData({
                                            ...defaultFilterData,
                                            "cuisineId": [...filterData.cuisineId, item._id],
                                        })
                                    }
                                } else if (selected == 1) {
                                    if (!status) {
                                        setFilterData({
                                            ...defaultFilterData,
                                            "recommendationId": filterData.recommendationId.filter(e => e != item._id)
                                        })
                                    } else {
                                        setFilterData({
                                            ...defaultFilterData,
                                            "recommendationId": [...filterData.recommendationId, item._id]
                                        })
                                    }
                                } else if (selected == 2) {
                                    if (!status) {
                                        setFilterData({
                                            ...defaultFilterData,
                                            "areaId": filterData.areaId.filter(e => e != item._id)
                                        })
                                    } else {
                                        setFilterData({
                                            ...defaultFilterData,
                                            "areaId": [...filterData.areaId, item._id]
                                        })
                                    }
                                } else {
                                    if (!status) {
                                        setFilterData({
                                            ...defaultFilterData,
                                            "ratings": 0
                                        })
                                    } else {
                                        setFilterData({
                                            ...defaultFilterData,
                                            "ratings": item._id
                                        })
                                    }
                                }
                            }}
                            selected={selected == 1 && filterData.recommendationId.filter(e => e == item._id).length > 0 ? true : selected == 2 && filterData.areaId.filter(e => e == item._id).length > 0 ? true : false}
                            name={selected == 0 ? item.cuisineName : selected == 1 ? item.recommendationName : selected == 2 ? item.areaName : item.name} />
                } */}
            </>
        )
    }

    // React.useEffect(() => {
    //     getRestaurant()
    // }, [])
    // React.useEffect(() => {
    //     if (JSON.stringify(defaultFilterData) != JSON.stringify(filterData)) {
    //         if (route.params.id != null) {
    //             getRestaurantByFilter()
    //         }
    //     }
    // }, [filterData])

    // React.useEffect(() => {

    //     getAllCusine()

    // }, [selected])

    const [refreshing, setRefreshing] = React.useState(false);


    return (
        <View style={styles.vw2}>
            <FocusAwareStatusBar isLightBar={false} isTopSpace={true} />
            {/* <Header name="Restaurants" activateLeftIcon={true} activateRightIcon={true}
                onpress={toggleQuickFilterModalVisible}
            /> */}
            {/* <Text></Text> */}
            <View style={styles.vw3}>
                <View style={styles.align}>
                    <Text style={styles.Restaurant}>{restaurant && restaurant.length} Restaurants Found</Text>
                    {/* <TouchableOpacity onPress={toggleGuestModalVisible}>
                        <Text style={styles.Table}>Find a Table</Text>
                    </TouchableOpacity> */}
                </View>

                <View style={[styles.align, { marginVertical: 10 }]}>
                    <Text style={styles.filter}>Quick Filters</Text>
                    <TouchableOpacity>
                        <Text style={styles.clearAll}>Clear all</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View>
                {/* <FlatList
                    showsHorizontalScrollIndicator={false}
                    data={quickLink}
                    contentContainerStyle={styles.flat}
                    horizontal
                    keyExtractor={(item, idx) => `${idx}-restaurant`}
                    renderItem={renderQuickLinks}
                /> */}


                {/* {
                    !restaurant
                    &&
                    <View style={styles.vw4}>
                        <SkeletonPlaceholder>

                            <View >
                                <View style={styles.vw5} />
                                <View style={styles.vw5} />
                                <View style={styles.vw5} />
                                <View style={styles.vw5} />
                                <View style={styles.vw5} />

                            </View>

                        </SkeletonPlaceholder>
                    </View>
                } */}
                {
                    // subData
                    // &&
                    <FlatList

                        data={subData}
                        style={styles.flat2}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        renderItem={renderSubList} />
                }
            </View>
            {/* <GuestModal
                toggleGuestModalVisible={toggleGuestModalVisible}
                state={isGuestModalVisible}
                restaurant_id={route.params.restaurant_id}
            /> */}
            {/* <FilterModal
                isQuickFilterModalVisible={isQuickFilterModalVisible}
                filterData={filterData}
                setFilterData={setFilterData}
                setRestaurant={setRestaurant}
                toggleQuickFilterModalVisible={toggleQuickFilterModalVisible}
            /> */}
            {
                // restaurant
                // &&
                <FlatList
                    refreshControl={<RefreshControl
                        refreshing={refreshing}
                    />}
                    data={restaurant}
                    //renderItem={renderRestaurantCard} 
                    />}
                    

        </View>
    )
}

export default RestaurantsScreen

const styles = StyleSheet.create({

    align: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    Restaurant: {
        fontSize: 14,
        fontFamily: Fonts.MEDIUM,
        color: Colors.BLACK
    },
    Table: {
        fontSize: 14,
        fontFamily: Fonts.MEDIUM,
        color: Colors.PRIMARY
    },
    filter: {
        fontSize: 16,
        fontFamily: Fonts.BOLD,
        color: Colors.BLACK
    },
    clearAll: {
        fontSize: 16,
        fontFamily: Fonts.LIGHT,
        color: Colors.PRIMARY
    },
    bubbleContainer: {
        marginHorizontal: 5,
        marginVertical: 10
    },
    quickLink: {
        fontSize: Fonts.SIZE_21,
        fontFamily: Fonts.BOLD,
        color: Colors.BLACK
    },
    borderQuicklink: {
        // borderWidth: 1,
        // color: Colors.OUTER_SPACE_50,
        // height: 45,
        paddingVertical: 9,
        paddingHorizontal: 15,
        borderRadius: 10,
        alignItems: "center",
        flexDirection: "row"
    },
    cuisionConatiner: {
        paddingVertical: 7,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 10,
        borderRadius: 20,
        paddingHorizontal: 15
    },
    font1: {
        marginTop: Platform.OS == "android" ? 3 : 0,
        fontSize: 13,
        fontFamily: Fonts.MEDIUM,
    },
    cuisionText: {
        color: "#000000",
        fontSize: 12,
        fontFamily: Fonts.MEDIUM,
        marginTop: Platform.OS == "android" ? 3 : 0
    },
    vw:{ 
        flex: 1, 
        marginRight: 10 
    },
    vw2:{ 
        flex: 1, 
        backgroundColor: Colors.WHITE 
    },
    vw3:{ 
        marginHorizontal: 20 
    },
    vw4:{ 
        marginTop: 10, 
        marginLeft: 10 
    },
    vw5:{
        padding: 15,
        paddingVertical: 15,
        borderRadius: 10,
        backgroundColor: "#00000009",
        marginVertical: 10,
        height: 90,
        width: SCREEN_WIDTH - 20,
    
    },
    flat:{ 
        paddingHorizontal: 10 
    },
    flat2:{ 
        marginHorizontal: 10, 
        marginVertical: 10 
    },

})

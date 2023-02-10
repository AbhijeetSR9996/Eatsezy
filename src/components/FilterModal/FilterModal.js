import { View, Text, KeyboardAvoidingView, Platform, Modal, TouchableOpacity, TextInput, FlatList, Image, StyleSheet } from 'react-native'
import React from 'react'
import { Colors, Fonts, ScreenNames, Server } from '../../global';

import { useNavigation } from '@react-navigation/core';

import { SCREEN_HEIGHT } from '../../global/constants';
import FilterBy from '../FilterBy/FilterBy';
// import { KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import { CuisionData, LocationData, PriceRange, ReviewScore, QuickAvaliable } from "../../Dummy/Dummy"
import { globalStyles } from '../../global/globalStyles';
import axios from 'axios';
//import Progress from '@react-native-community/progress-bar-android';
//import { ProgressBarAndroidBase } from 'react-native';
//import { ProgressBarAndroidComponent } from 'react-native';
//import ProgressBar from '@react-native-community/progress-bar-android';
//import Progressing from './Progressing';
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar'

const FilterModal = ({ toggleQuickFilterModalVisible, isQuickFilterModalVisible, setFilterData, filterData, setRestaurant }) => {

    //function
    const [recommendations, setRecommendations] = React.useState(null)
    const [coolAreas, setCoolAreas] = React.useState(null)
    const [cuisine, setCuisine] = React.useState(null)
    const [recommendationId, setRecommendationsId] = React.useState(filterData.recommendationId)
    const [coolAreasId, setCoolAreasId] = React.useState(filterData.areaId)
    const [cuisineId, setCuisineId] = React.useState(filterData.cuisineId)



    const getCoolAreas = async () => {
        const response = await axios.get(`${Server.BASE_URL}/${Server.END_POINT.COOL_AREAS}`)
        setCoolAreas(response.data.data)
    }

    const getAllCusine = async () => {
        const response = await axios.get(`${Server.BASE_URL}/${Server.END_POINT.ALL_CUISINE}`)
        setCuisine(response.data.data)
    }
    const getAllRecommendation = async () => {
        const response = await axios.get(`${Server.BASE_URL}/${Server.END_POINT.RECOMMENDATION}`)
        setRecommendations(response.data.data)
    }

    const onShow = () => {
        getAllCusine()
        getCoolAreas()
        getAllRecommendation()
    }

    const ClearAll = () => {
        setCoolAreas([])
        setCuisine([])
        setRecommendations([])
        toggleQuickFilterModalVisible()
    }

    const applyFilter = async () => {
        let data = {
            "priceRange": "",
            "cuisineId": cuisineId,
            "ratings": 0,
            "areaId": coolAreasId,
            "recommendationId": recommendationId
        }
        setFilterData(data)
        toggleQuickFilterModalVisible()
    }
    return (

        <Modal
            onShow={onShow}
            animationType={'fade'}
            visible={isQuickFilterModalVisible}
            // onRequestClose={toggleModal}
            transparent={true}
            statusBarTranslucent={true}
            
    >
        <FocusAwareStatusBar isLightBar={false} isTopSpace={true} isTransparent={false} />
            <View style={styles.modalContainer}>

            <TouchableOpacity onPress={applyFilter} style={styles.cross1} >
              <Image source={require('../../assets/images/crossicon.png')}
                style={styles.cross2}/>
            </TouchableOpacity>

                <KeyboardAvoidingView behavior={Platform.OS == "android" ? null : "padding"}>
                    <View style={styles.confirmContainer}>
                        <View style={styles.confirmHeader}>
                            {/* <Text style={styles.confirmDeliveryText}
                                maxFontSizeMultiplier={1}>Filter by</Text> */}
                            <TouchableOpacity
                                onPress={ClearAll}
                                // onPress={() => {
                                //     _toggleblockModal()
                                //     // gotoMemberDetail()
                                // }}
                                // hitSlop={{top:20,right:20,bottom:20,left:20}}
                                hitSlop={{ top: 20, right: 20, bottom: 20, left: 20 }}
                                style={styles.clearAll2}
                            >
                                <Text style={styles.clearAll}>Clear All</Text>
                            </TouchableOpacity>
                        </View>

                        {
                            cuisine
                            &&
                            <View style={styles.filterContainer}>
                                <View style={styles.vw} >
                                    <Text style={styles.cuision}>Cuisine</Text>
                                    <Image source={require('../../assets/images/horiline.png')}
                                     style={styles.img}/>
                                     <Image source={require('../../assets/images/horiline.png')}
                                     style={styles.img2}/>
                                </View>
                                <FlatList data={cuisine}
                                    style={styles.flat}
                                    horizontal
                                    showsHorizontalScrollIndicator={false}
                                    renderItem={({ item, index }) => (
                                        <FilterBy item={item} index={index}
                                            onPress={(status) => {
                                                if (!status) {
                                                    setCuisineId(cuisineId.filter(e => e != item._id))
                                                } else {
                                                    setCuisineId([...cuisineId, item._id])
                                                }
                                            }}
                                            selected={cuisineId.filter(e => e == item._id).length > 0 ? true : false}
                                            name={item.cuisineName} />
                                    )} />

                            </View>
                        }
                        {/* {
                            recommendations
                            &&
                            // <View style={styles.filterContainer}>
                            //     <View style={{ marginHorizontal: 20 }} >
                            //         <Text style={styles.cuision}>Recommendation</Text>
                            //     </View>
                            //     <FlatList data={recommendations}
                            //         style={{ marginHorizontal: 10, marginVertical: 5 }}
                            //         horizontal
                            //         showsHorizontalScrollIndicator={false}
                            //         renderItem={({ item, index }) => (
                            //             <FilterBy item={item} index={index}
                            //                 onPress={(status) => {
                            //                     if (!status) {
                            //                         setRecommendationsId(recommendationId.filter(e => e != item._id))
                            //                     } else {
                            //                         setRecommendationsId([...recommendationId, item._id])
                            //                     }
                            //                 }}
                            //                 selected={recommendationId.filter(e => e == item._id).length > 0 ? true : false}
                            //                 name={item.recommendationName} />
                            //         )} />

                            // </View>
                        } */}
                        {
                            coolAreas
                            &&
                            <View style={styles.filterContainer}>
                                <View style={styles.vw2} >
                                    <Text style={styles.cuision}>Location</Text>
                                    <Image source={require('../../assets/images/horiline.png')}
                                     style={styles.img}/>
                                    <Image source={require('../../assets/images/horiline.png')}
                                     style={styles.img2}/>
                                </View>
                                <FlatList data={coolAreas}
                                    style={styles.flat}
                                    horizontal
                                    showsHorizontalScrollIndicator={false}
                                    renderItem={({ item, index }) => (
                                        <FilterBy item={item}
                                            index={index}
                                            onPress={(status) => {
                                                if (!status) {
                                                    setCoolAreasId(coolAreasId.filter(e => e != item._id))
                                                } else {
                                                    setCoolAreasId([...coolAreasId, item._id])
                                                }
                                            }}
                                            selected={coolAreasId.filter(e => e == item._id).length > 0 ? true : false}
                                            name={item.areaName} />
                                    )} />

                            </View>}

                        {/* <View style={styles.filterContainer}>
                            <View style={{ marginHorizontal: 20 }} >
                                <Text style={styles.cuision}>Quick Availability</Text>
                            </View>
                            <FlatList data={QuickAvaliable}
                                style={{ marginHorizontal: 10, marginVertical: 5 }}
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                renderItem={({ item, index }) => (
                                    <FilterBy item={item} index={index} name={item.name} filter={quickAvaliable} setFilter={setQuickAvaliable} />
                                )} />

                        </View> */}

{
                            coolAreas
                            &&
                            <View style={styles.filterContainer}>
                                <View style={styles.vw} >
                                    <Text style={styles.cuision}>Quick Availability</Text>
                                    <Image source={require('../../assets/images/horiline.png')}
                                     style={styles.img3}/>
                                    <Image source={require('../../assets/images/horiline.png')}
                                     style={styles.img4}/>
                                </View>
                                <FlatList data={coolAreas}
                                    style={styles.flat}
                                    horizontal
                                    showsHorizontalScrollIndicator={false}
                                    renderItem={({ item, index }) => (
                                        <FilterBy item={item}
                                            index={index}
                                            onPress={(status) => {
                                                if (!status) {
                                                    setCoolAreasId(coolAreasId.filter(e => e != item._id))
                                                } else {
                                                    setCoolAreasId([...coolAreasId, item._id])
                                                }
                                            }}
                                            selected={coolAreasId.filter(e => e == item._id).length > 0 ? true : false}
                                            name={item.areaName} />
                                    )} />

                                <View style={styles.vw3} >
                                    <Text style={styles.cuision}>Price Range</Text>
                                    <Image source={require('../../assets/images/horiline.png')}
                                     style={styles.img5}/>
                                    <Image source={require('../../assets/images/horiline.png')}
                                     style={styles.img6}/>
                                    
                                    <Image source={require('../../assets/images/pricerange.png')}
                                     style={styles.img7}/>
                                    
                                    <View style={styles.vw7}>
                                     <View style={styles.vw8}></View>
                                     <View style={styles.vw9}></View>
                                     <View style={styles.vw10}></View>
                                     <View style={styles.vw11}></View>                                    
                                    </View>
                                    <View style={styles.vw6}>
                                     {PriceRange.map(function (item) {
                                      return <Text style={styles.price}>{item.name}</Text>;
                                       })}
                                    </View>
                                    {/* <Progressing/> */}
                                    {/* <ProgressBar progress={0.3} width={200} /> */}

                                </View>
                                <View style={styles.vw4} >
                                    <Text style={styles.cuision}>Review Score</Text>
                                    <Image source={require('../../assets/images/horiline.png')}
                                     style={styles.img5}/>
                                    <Image source={require('../../assets/images/horiline.png')}
                                     style={styles.img6}/>

                                    <Image source={require('../../assets/images/reviewscore.png')}
                                     style={styles.img8}/>
                                    
                                    <View style={styles.vw12}>
                                     <View style={styles.vw8}></View>
                                     <View style={styles.vw9}></View>
                                     <View style={styles.vw10}></View>
                                     <View style={styles.vw11}></View>
                                    </View>
                                    <View style={[styles.vw6,{top:35}]}>
                                     {ReviewScore.map(function (item) {
                                      return <Text style={styles.price}>{item.name}</Text>;
                                       })}
                                    </View>

                                </View>
                            </View>}



                        <View style={styles.vw5}>
                            < TouchableOpacity onPress={applyFilter} style={[globalStyles.Applybutton,{position:'absolute',top:10,right:5}]} >
                                <Text style={globalStyles.ApplybuttonText} >Apply</Text>
                            </TouchableOpacity>

                            {/* <TouchableOpacity onPress={toggleQuickFilterModalVisible} style={[globalStyles.Applybutton, { backgroundColor: Colors.WHITE, borderWidth: 1 }]}>
                                <Text style={[globalStyles.ApplybuttonText, { color: Colors.OUTER_SPACE }]} >Cancel</Text>
                            </TouchableOpacity> */}
                        </View>



                    </View>
                </KeyboardAvoidingView>
            </View>
        </Modal >

    )
}




export default (FilterModal);

// export default BlockedMemberModal

const styles = StyleSheet.create({
    modalContainer: {
        //flex: 1,
        flex:0,
        backgroundColor: '#00000050',
        justifyContent: 'flex-end',
        bottom:0,
        borderRadius:30,
        paddingBottom:240,
        height:800,
    },
    confirmContainer: {
        // flex: 0.25,
        flexDirection:'column',
        backgroundColor: Colors.WHITE,
        //backgroundColor:'transparent',
        borderBottomLeftRadius:30,
        borderBottomRightRadius:30,
        paddingBottom: 20,
        height:SCREEN_HEIGHT / 1.2,
        //height: SCREEN_HEIGHT / 1.5,
        //borderTopLeftRadius: 20,
        //borderTopRightRadius: 20,
        bottom:0
        
    },
    confirmHeader: {
        flexDirection: 'row',
        height: 46,
        justifyContent: 'space-between',
        alignItems: "center",
        paddingHorizontal: 20,
        //backgroundColor:'grey',
        
    },
    confirmDeliveryText: {
        // paddingLeft: 20,
        paddingTop: 15,
        paddingBottom: 15,
        fontFamily: Fonts.SEMIBOLD,
        fontSize: Fonts.SIZE_18,
        color: Colors.JUNGLE_BLACK,
        letterSpacing: 0.2,

    },
    clearAll: {
        fontSize: Fonts.SIZE_15,
        fontFamily: Fonts.MEDIUM,
        color: Colors.PRIMARY
    },
    cuision: {
        fontSize: Fonts.SIZE_16,
        fontFamily: Fonts.BOLD,
        //color: Colors.BLACK
        color:'#b3b3b3',
        alignSelf:'center'
    },
    filterContainer: {
        marginTop: 10,
        //backgroundColor:'#000',
    },
    cross1:{
        height:40,
        width:40,
        backgroundColor:'transparent',
        alignSelf:'center',
        top:620
    },
    cross2:{
        height:40,
        width:40,
    },
    clearAll2:{
        backgroundColor:'transparent',
        left:260
    },
    vw:{ 
        marginHorizontal: 20 
    },
    vw2:{ 
        marginHorizontal: 20, 
    },
    vw3:{ 
        marginHorizontal: 20,
        top:10 
    },
    vw4:{ 
        marginHorizontal: 20,
        top:70 
    },
    vw5:{
        flexDirection: "row", 
        alignItems: "flex-start", 
        justifyContent: "center",
        flex: 1,
        backgroundColor:'transparent',
        marginTop:70,
        position:'relative',
        bottom:SCREEN_HEIGHT/1.37,
        marginHorizontal:120,
        right:110,
    },
    vw7:{
        position:'relative',
        justifyContent:'center',
    },
    vw8:{
        height: 3,
        backgroundColor: Colors.PRIMARY,
        width:'60%',
        zIndex:2,
        position:'absolute',
        borderRadius:5,
        top:20
    },
    vw9:{
        height: 2,
        backgroundColor: Colors.GRAY_LIGHT,
        width:'100%',
        zIndex:1,
        position:'absolute',
        borderRadius:5,
        top:20
    },
    vw10:{
        height: 10,
        width:10,
        backgroundColor: '#F4756B',
        zIndex:2,
        position:'absolute',
        borderRadius:50,
        top:17,
        left:-4
    },
    vw11:{
        height: 10,
        width:10,
        backgroundColor: '#F4756B',
        zIndex:2,
        position:'absolute',
        borderRadius:50,
        top:17,
        left:185
    },
    vw12:{
        position:'relative',
        justifyContent:'center',
    }, 
    img:{
        width:70,
        bottom:17,
        left:50
    },
    img2:{
        width:70,
        bottom:19,
        left:200
    },
    img3:{
        width:70,
        bottom:17,
        left:10
    },
    img4:{
        width:70,
        bottom:19,
        left:240
    },
    img5:{
        width:70,
        bottom:17,
        left:25
    },
    img6:{
        width:70,
        bottom:19,
        left:225
    },
    img7:{
        height:12,
        width:62,
        left:255,
        top:0
    },
    img8:{
        height:15,
        width:65,
        left:255,
        top:5
    },
    flat:{ 
        marginHorizontal: 10, 
        marginVertical: 5 
    },
    price: {
        fontSize: 10,
        fontFamily: Fonts.MEDIUM,
        color: Colors.BLACK,
        // marginLeft: 60
    },
    vw6: { 
        flexDirection: "row", 
        justifyContent: "space-between", 
        top:30 
    },
});


import { View, Text, KeyboardAvoidingView, Platform, Modal, TouchableOpacity, TextInput, FlatList, Image, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { Colors, Fonts, ScreenNames, Server } from '../../global';

import { useNavigation } from '@react-navigation/core';

import { SCREEN_HEIGHT } from '../../global/constants';
import FilterBy from '../FilterBy/FilterBy';
// import { KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import { Author, Category, CuisionData, cusiene, LocationData, QuickAvaliable } from "../../Dummy/Dummy"
import { globalStyles } from '../../global/globalStyles';
import EatsEasyFilter from '../EatsEasyFilter/EatsEasyFilter';
import axios from 'axios';
import EatsEasyGuideFilter from '../EatsEasyGuideFilter/EatsEasyGuideFilter';
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar'
import CrossSvg from '../../assets/svg/crossicon.svg';

const EatsEzyModal = ({ toggleFilter, filter, userId, setEatEzy }) => {

    const navigation = useNavigation()

    const [tags, setTags] = React.useState(null)
    const [cuisineTags, setCuisineTags] = React.useState([])
    const [authorTags, setAuthorTags] = React.useState([])
    const [categoryTags, setCategoryTags] = React.useState([])


    const [temporaryCuisineTags, seTemporaryCuisineTags] = React.useState([])
    const [temporaryAuthorTags, setTemporaryAuthorTags] = React.useState([])
    const [temporaryCategoryTags, setTemporaryCategoryTags] = React.useState([])

    const clearAll = async () => {
        if (typeof toggleFilter !== 'undefined') {

            const response = await axios.post(`${Server.BASE_URL}/${Server.END_POINT.FILTER_BLOGS}`, {
                "cuisineTags": [],
                "authorTags": [],
                "categoryTags": []
            })
            setEatEzy(response.data.data)
            setAuthorTags([])
            setCuisineTags([])
            setCategoryTags([])

            seTemporaryCuisineTags([])
            setTemporaryAuthorTags([])
            setTemporaryCategoryTags([])
            toggleFilter()
        }

    }

    const applyFilter = async () => {
        const response = await axios.post(`${Server.BASE_URL}/${Server.END_POINT.FILTER_BLOGS}`, {
            "cuisineTags": cuisineTags,
            "authorTags": authorTags,
            "categoryTags": categoryTags
        })
        setAuthorTags(temporaryAuthorTags)
        setCuisineTags(temporaryCuisineTags)
        setCategoryTags(temporaryCategoryTags)


        setEatEzy(response.data.data)
        toggleFilter()
    }
    const cancelFilter = () => {
        seTemporaryCuisineTags([])
        setTemporaryAuthorTags([])
        setTemporaryCategoryTags([])
        toggleFilter()
    }

    //function




    const onShow = async () => {
        const response = await axios.get(`${Server.BASE_URL}/${Server.END_POINT.BLOGS_TAGS}`)
        setTags(response.data.data)
    }

    return (
        
        
        <Modal
            // onShow={BlockMember}
            animationType={'fade'}
            visible={filter}
            onShow={onShow}
            // onRequestClose={toggleModal}
            transparent={true}
            statusBarTranslucent={true}
            
        >
            <FocusAwareStatusBar isLightBar={true} isTopSpace={false} isTransparent={true} />
            <View style={styles.modalContainer}>

            {/* <TouchableOpacity style={styles.cross1} >
              <Image source={require('../../assets/images/crossicon.png')}
                style={styles.cross2}/>
            </TouchableOpacity> */}

                <KeyboardAvoidingView behavior={Platform.OS == "android" ? null : "padding"}>
                <TouchableOpacity style={styles.cross1} onPress={cancelFilter}>
                <CrossSvg style={styles.cross3} />
                </TouchableOpacity>
                    <View style={styles.confirmContainer}>
                        <View style={styles.confirmHeader}>
                            {/* <Text style={styles.confirmDeliveryText}
                                maxFontSizeMultiplier={1}>Filter by</Text> */}
                            <TouchableOpacity
                                onPress={applyFilter}
                                // hitSlop={{top:20,right:20,bottom:20,left:20}}
                                hitSlop={{ top: 20, right: 20, bottom: 20, left: 20 }}
                                style={styles.applybtncontainer}
                            >
                                <Text style={styles.applybtntxt}>Apply</Text>
                            </TouchableOpacity>    
                            <TouchableOpacity
                                onPress={() => {
                                    clearAll()

                                }}
                                // hitSlop={{top:20,right:20,bottom:20,left:20}}
                                hitSlop={{ top: 20, right: 20, bottom: 20, left: 20 }}
                            >
                                <Text style={styles.clearAll}>Clear All</Text>
                            </TouchableOpacity>
                        </View>
                        {
                            tags
                            &&
                            <ScrollView showsVerticalScrollIndicator={false}>
                                <View style={{ flex: 1 }}>

                                    <View style={styles.filterContainer}>
                                        <View style={styles.vw} >
                                            <Text style={styles.cuision}>Cuisine</Text>
                                        </View>
                                        <FlatList data={tags.cuisineTags}
                                            style={styles.flatlist}
                                            horizontal
                                            showsHorizontalScrollIndicator={false}
                                            renderItem={({ item, index }) => (
                                                <EatsEasyGuideFilter
                                                    item={item} index={index} name={item}
                                                    setUseData={setCuisineTags} useData={cuisineTags}
                                                    setTemporaryUseData={seTemporaryCuisineTags} temporaryUseData={temporaryCuisineTags}
                                                    
                                                />
                                            )} />

                                    </View>

                                    <View style={styles.filterContainer}>
                                        <View style={styles.vw} >
                                            <Text style={styles.cuision}>Author</Text>
                                        </View>
                                        <FlatList data={tags.authorTags}
                                            style={styles.flatlist}
                                            horizontal
                                            showsHorizontalScrollIndicator={false}
                                            renderItem={({ item, index }) => (
                                                <EatsEasyGuideFilter item={item}
                                                    index={index}
                                                    name={item.name}
                                                    setUseData={setAuthorTags} useData={authorTags}
                                                    setTemporaryUseData={setTemporaryAuthorTags} temporaryUseData={temporaryAuthorTags}

                                                />
                                            )} />

                                    </View>
                                    <View style={styles.filterContainer}>
                                        <View style={styles.vw} >
                                            <Text style={styles.cuision}>Category</Text>
                                        </View>
                                        <FlatList data={tags.categoryTags}
                                            style={styles.flatlist}
                                            horizontal
                                            showsHorizontalScrollIndicator={false}
                                            renderItem={({ item, index }) => (
                                                <EatsEasyGuideFilter item={item} index={index} name={item.name}
                                                    setUseData={setCategoryTags} useData={categoryTags}
                                                    setTemporaryUseData={setTemporaryCategoryTags} temporaryUseData={temporaryCategoryTags}
                                                />
                                            )} />

                                    </View>
                                </View>

                                <View style={styles.vw2}>



                                    {/* <TouchableOpacity
                                        onPress={applyFilter}
                                        style={globalStyles.Applybutton} >
                                        <Text style={globalStyles.ApplybuttonText} >Apply</Text>
                                    </TouchableOpacity> */}

                                    {/* <TouchableOpacity
                                        onPress={cancelFilter}
                                        style={[globalStyles.Applybutton, { backgroundColor: Colors.WHITE, borderWidth: 1 }]}>
                                        <Text style={[globalStyles.ApplybuttonText, { color: Colors.OUTER_SPACE }]} >Cancel</Text>
                                    </TouchableOpacity> */}
                                </View>
                                
                            </ScrollView>
                        }

                    </View>
                </KeyboardAvoidingView>
            </View>
        </Modal >

    )
}

const mapStateToProps = state => ({
    name: state.user.name,
    email: state.user.email,
    phNo: state.user.phNo,
    userImage: state.user.thumbnailImage,
    userId: state.user.userId
});



export default (EatsEzyModal);

// export default BlockedMemberModal

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        backgroundColor: '#00000050',
        justifyContent: 'flex-end',
        position:'absolute'
    },
    confirmContainer: {
        // flex: 0.25,
        backgroundColor: Colors.WHITE,
        //backgroundColor:'grey',
        //paddingBottom:20,
        //paddingTop:0,
        //height: SCREEN_HEIGHT / 1.5,
        height:SCREEN_HEIGHT / 2,
        //borderTopLeftRadius: 20,
        //borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        marginBottom:SCREEN_HEIGHT/ 2,
        bottom:50,
        
        
    },
    confirmHeader: {
        flexDirection: 'row',
        height: 72,
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
        color: Colors.BLACK
    },
    filterContainer: {
        marginTop: 0
    },
    cross1:{
        height:40,
        width:40,
        backgroundColor:'transparent',
        //backgroundColor:'grey',
        alignSelf:'center',
        top:360,
    },
    cross2:{
        height:40,
        width:40,
    },
    applybtncontainer:{
        backgroundColor:'#EF3340',
        borderRadius:10,
        height:30,
        width:70,
        
    },
    applybtntxt:{
        fontSize: Fonts.SIZE_15, 
        fontFamily: Fonts.MEDIUM, 
        color: Colors.WHITE,
        alignSelf:'center',
        top:3
    },
    cross3:{
        bottom:3,
        right:4
    },
    vw:{ 
        marginHorizontal: 20 
    },
    vw2:{
        flexDirection: "row", 
        alignItems: "center", 
        justifyContent: "center",
        marginTop: 20
    },
    flatlist:{ 
        marginHorizontal: 10, 
        marginVertical: 10 
    },
    
})


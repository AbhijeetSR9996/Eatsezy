import { View, Modal, FlatList, StyleSheet, TouchableOpacity, Text, ScrollView, ActivityIndicator } from 'react-native'
import React from 'react'
import { Colors, Constants, Fonts, ScreenNames, Server } from '../../global';

import { useNavigation } from '@react-navigation/core';

// import { KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import CrossSvg from "../../assets/svg/closecopy";
import { TablePrefer, TimeData, TimeData1, TableData,TableData2 } from '../../Dummy/Dummy';
import NoOfGuest from "../NoOfGuest/NoOfGuest";
import CalenderStrip from '../CalenderStrip/CalenderStrip';
import moment from 'moment';
import Timing from '../Timing/Timing';
import axios from 'axios';
import Slots from '../Slots/Slots'
import BackSVG from "../../assets/svg/backArrow"
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import TableList from './TableList';

const QuickBookingModal = ({ quickBookingVisible, toggleQuickModal, coverImage, restaurant_id, restaurantTimings, restaurantTableHaultTime }) => {

    const navigation = useNavigation()
    const [noOfGuest, setNoOfGuest] = React.useState(null)
    const [noOfTable, setNoOfTable] = React.useState(null)
    const [selectedData, setSelectedData] = React.useState({})
    const [time, setTime] = React.useState("")
    const [timeSlots, setTimeSlots] = React.useState(null)
    const flatlistRef = React.useRef(null)
    const [Col, setCol] = React.useState(false);    

    const getVal = (value) => {
        console.log("value", value);
        setCol(value);
    }

    //function
    const renderTime = ({ item, index }) => <View style={{ marginBottom: 15 }}>
        <Slots item={item} index={index} time={time} setTime={setTime} quickBook={true}
            onPress={(item) => {
                setSelectedData({
                    ...selectedData,
                })
                toggleQuickModal()
                navigation.navigate(ScreenNames.BOOKINGDETAIL_SCREEN, {
                    "selectedData": selectedData,
                    // "setSelectedData": setSelectedData, 
                    "restaurant_id": restaurant_id,
                    "coverImage": coverImage,
                    "timeSlot": item._id,
                    "table": item.table,
                    "selectedTimeSlots": item

                })
                // flatlistRef.current.scrollToIndex({ animated: true, index: 2, viewPosition: 0.5 })
            }} />
    </View>

    const getTimeSlots = async (date, people) => {
        try {
            const data = {
                "restaurantId": restaurant_id,
                "peopleCapacity": people,
                "day": moment(date).format("dddd").toUpperCase(),
                "time": moment(date).format("YYYY-MM-DD") != moment(new Date()).format("YYYY-MM-DD") ? "00:00" : moment(date).format("HH:mm"),
                "choosenDate": moment(date).format("YYYY-MM-DD")
            }
            const response = await axios.post(`${Server.BASE_URL}/${Server.END_POINT.TIME_SLOTS}`, data)
            if (response.data.data.length > 0) {
                setTimeSlots(response.data.data)
            } else {
                setTimeSlots([])
            }

        } catch (error) {
            console.warn("error", error.response);
        }
    }

    const listEmptyComponent = () => {
        return (
            <View style={styles.vw}>
                <Text style={styles.txt}>
                    No Slots Available
                </Text>
            </View>
        )
    }

    return (

        <Modal
            animationType={'fade'}
            visible={quickBookingVisible}
            transparent={true}
        >
            <View style={styles.modalContainer}>
                <TouchableOpacity style={{ flex: 1 }}
                    onPress={toggleQuickModal} />
                <View>

                    <FlatList
                        horizontal
                        pagingEnabled
                        ref={flatlistRef}
                        scrollEnabled={false}
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{ alignItems: "flex-end" }}
                        data={["1", "2", "3", "4"]}
                        renderItem={({ item, index }) => {
                            return (
                                <>
                                    {
                                        index == 0
                                            ?
                                            <View style={styles.confirmContainer}>
                                                <TouchableOpacity style={styles.crossIcon} onPress={toggleQuickModal}>
                                                    <CrossSvg />
                                                </TouchableOpacity>
                                                <View style={styles.vw2}>
                                                    <View style={styles.vw3}>
                                                        <Text style={styles.quickBookText}>
                                                            Quick Book
                                                        </Text>
                                                        <Text style={styles.stepsText}>
                                                            {'(Step 1 of 4)'}
                                                            {/* {'(Step 1 of 3)'} */}
                                                        </Text>
                                                    </View>
                                                    <ScrollView
                                                        showsHorizontalScrollIndicator={false}
                                                        horizontal
                                                        style={styles.sv}>
                                                        {
                                                            restaurantTableHaultTime.map((e, i) => {
                                                                return (
                                                                    <NoOfGuest
                                                                        item={e}
                                                                        index={i}
                                                                        guest={noOfGuest}
                                                                        setGuest={setNoOfGuest}
                                                                        onPress={(item) => {
                                                                            flatlistRef.current.scrollToIndex({ animated: true, index: 1, viewPosition: 0.5 })
                                                                            setSelectedData({
                                                                                ...selectedData,
                                                                                peopleCapacity: item
                                                                            })
                                                                        }}
                                                                    />

                                                                )
                                                            })
                                                        }
                                                    </ScrollView>
                                                </View>
                                            </View>
                                            :
                                            index == 1
                                                ?
                                                <View style={styles.confirmContainer}>
                                                    <TouchableOpacity style={styles.crossIcon} onPress={toggleQuickModal}>
                                                        <CrossSvg />
                                                    </TouchableOpacity>
                                                    <View style={styles.vw4}>
                                                        <View style={styles.vw3}>
                                                            <Text style={styles.quickBookText}>
                                                                Select Date
                                                            </Text>
                                                            <Text style={styles.stepsText}>
                                                                {'(Step 2 of 4)'}
                                                                {/* {'(Step 2 of 3)'} */}
                                                            </Text>
                                                        </View>
                                                        <Text style={styles.txt2}>
                                                            {moment(Date.now()).format("MMMM")}
                                                        </Text>
                                                        <View style={styles.vw5}>
                                                            <CalenderStrip
                                                                onPress={(item, day) => {
                                                                    flatlistRef.current.scrollToIndex({ animated: true, index: 2, viewPosition: 0.5 })
                                                                    setSelectedData({
                                                                        ...selectedData,
                                                                        date: item
                                                                    })
                                                                    getTimeSlots(item, selectedData.peopleCapacity)

                                                                }}
                                                            // defaultDate={moment(new Date()).add(1, "day")}
                                                            />
                                                        </View>
                                                    </View>
                                                    <TouchableOpacity
                                                        hitSlop={{ left: 20, right: 20, top: 20, bottom: 20 }}
                                                        onPress={() => {
                                                            flatlistRef.current.scrollToIndex({ animated: true, index: 0, viewPosition: 0.5 })
                                                        }}
                                                        style={[styles.container,{marginVertical:20,marginHorizontal:5}]}>
                                                        <BackSVG />
                                                    </TouchableOpacity>
                                                </View>
                                                
                                                  
                                                : index == 2
                                                ?
                                                <View style={styles.confirmContainer}>
                                                    <TouchableOpacity style={styles.crossIcon} onPress={toggleQuickModal}>
                                                        <CrossSvg />
                                                    </TouchableOpacity>
                                                    <View style={styles.vw4}>
                                                        
                                                        <View style={styles.vw11}>
                                                            <Text style={styles.quickBookText}>
                                                                Table Preference
                                                            </Text>
                                                            <Text style={styles.stepsText}>
                                                                {'(Step 3 of 4)'}
                                                            </Text>
                                                        </View>
                                                        <TouchableOpacity
                                                        hitSlop={{ left: 20, right: 20, top: 20, bottom: 20 }}
                                                        onPress={() => {
                                                            flatlistRef.current.scrollToIndex({ animated: true, index: 0, viewPosition: 0.5 })
                                                        }}
                                                        style={styles.container}>
                                                        <BackSVG />
                                                    </TouchableOpacity>
                                                    </View>


                <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.sv2}>    
                {TableData.map((item) => (
                    Col === item.name ? 
                <TouchableOpacity style={styles.container2}
                //onPress={() => {getVal(item.name)}}
                onPress={() => {
                    flatlistRef.current.scrollToIndex({ animated: true, index: 3, viewPosition: 0.5 })
                }}
                >
                   <Text style={styles.txt3}>{item.name}</Text>
               </TouchableOpacity>
                  :
                <TouchableOpacity style={styles.container3}
                //onPress={() => {getVal(item.name)}}
                onPress={() => {
                    flatlistRef.current.scrollToIndex({ animated: true, index: 3, viewPosition: 0.5 })
                }}
                >
                   <Text style={styles.txt4}>{item.name}</Text>
               </TouchableOpacity>
                )
                )}
                </ScrollView>

                <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.sv3}>    
                {TableData2.map((item) => (
                    Col === item.name ? 
                <TouchableOpacity style={styles.container2}
                //onPress={() => {getVal(item.name)}}
                onPress={() => {
                    flatlistRef.current.scrollToIndex({ animated: true, index: 3, viewPosition: 0.5 })
                }}>
                   <Text style={styles.txt3}>{item.name}</Text>
               </TouchableOpacity>
                  :
                <TouchableOpacity style={styles.container3}
                //onPress={() => {getVal(item.name)}}
                onPress={() => {
                    flatlistRef.current.scrollToIndex({ animated: true, index: 3, viewPosition: 0.5 })
                }}>
                   <Text style={styles.txt4}>{item.name}</Text>
               </TouchableOpacity>
                )
                )}
                </ScrollView>

                                                    
                                                </View>
                                                 
                                               :
                                             index == 3
                                                    ?
                                                    <View style={styles.confirmContainer} >
                                                        <TouchableOpacity style={styles.crossIcon} onPress={toggleQuickModal}>
                                                            <CrossSvg />
                                                        </TouchableOpacity>
                                                        <View style={styles.vw4}>
                                                            <View style={styles.vw3}>
                                                                <Text style={styles.quickBookText}>
                                                                    Select Time
                                                                </Text>
                                                                <Text style={styles.stepsText}>
                                                                    {'(Step 4 of 4)'}
                                                                    {/* {'(Step 3 of 3)'} */}
                                                                </Text>
                                                            </View>
                                                            {
                                                                !timeSlots
                                                                &&
                                                                <View style={styles.vw6}>
                                                                    <SkeletonPlaceholder>

                                                                        <View style={styles.vw7}>
                                                                            <View style={styles.vw9} />
                                                                            <View style={styles.vw9} />
                                                                            <View style={styles.vw9} />
                                                                            <View style={styles.vw9} />
                                                                        </View>
                                                                        <View style={styles.vw8}>
                                                                            <View style={styles.vw9} />
                                                                            <View style={styles.vw9} />
                                                                            <View style={styles.vw9} />
                                                                            <View style={styles.vw9} />
                                                                        </View>
                                                                    </SkeletonPlaceholder>
                                                                </View>
                                                            }
                                                            <View style={styles.vw10}>
                                                                <ScrollView
                                                                    horizontal>
                                                                    {
                                                                        timeSlots
                                                                        &&
                                                                        <FlatList
                                                                            showsHorizontalScrollIndicator={false}
                                                                            contentContainerStyle={{ marginRight: 10 }}
                                                                            keyExtractor={(item) => `${JSON.stringify(item)}`}
                                                                            numColumns={Math.round(timeSlots.length / 2)}
                                                                            data={timeSlots}
                                                                            //data={TimeData}
                                                                            ListEmptyComponent={listEmptyComponent}
                                                                            key={Math.round(timeSlots.length / 2)}
                                                                            renderItem={renderTime} />
                                                                    }
                                                                </ScrollView>
                                                            </View>
                                                        </View>
                                                        <TouchableOpacity
                                                            hitSlop={{ left: 20, right: 20, top: 20, bottom: 20 }}
                                                            onPress={() => {
                                                                setTimeSlots(null)
                                                                flatlistRef.current.scrollToIndex({ animated: true, index: 0, viewPosition: 0.5 })
                                                            }}
                                                            style={[styles.container,{marginVertical:20,marginHorizontal:5}]}>
                                                            <BackSVG />
                                                        </TouchableOpacity>
                                                    </View>
                                                    :
                                                    null
                                    }
                                </>
                            )
                        }}
                    />
                </View>
            </View>
        </Modal >

    )
}



export default (QuickBookingModal);

// export default BlockedMemberModal

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        backgroundColor: '#00000050',

    },
    confirmContainer: {
        backgroundColor: Colors.WHITE,
        height: 180,
        alignItems: "flex-start",
        marginHorizontal: 20,
        borderRadius: 10,
        marginBottom: 20,
        width: Constants.SCREEN_WIDTH - 40
    },
    confirmHeader: {
        flexDirection: 'row',
        height: 66,
        justifyContent: 'space-between',
        alignItems: "center",
        paddingHorizontal: 20,

    },
    crossIcon: {
        height: 20,
        width: 20,
        position: "absolute",
        right: 5,
        top: 5,
        zIndex: 1,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        backgroundColor: Colors.PRIMARY
    },
    quickBookText: {
        fontFamily: Fonts.MEDIUM,
        fontSize: Fonts.SIZE_16,
        marginLeft: 10
    },
    stepsText: {
        fontFamily: Fonts.MEDIUM,
        fontSize: Fonts.SIZE_12,
        color: Colors.PRIMARY,
        marginLeft: 10
    },
    vw: { 
        marginLeft: 10 
    },
    vw2: { 
        marginLeft: 10, 
        marginTop: 20 
    },
    vw3: { 
        flexDirection: "row", 
        alignItems: "center",
        backgroundColor:'white',
        marginHorizontal:20
    },
    vw4: { 
        marginLeft: 10, 
        marginTop: 20 
    },
    vw5: { 
        marginTop: 10, 
        marginLeft: 10 
    },
    vw6: { 
        marginTop: 10 
    },
    vw7: { 
        flexDirection: "row" 
    },
    vw8: { 
        flexDirection: "row", 
        marginTop: 10 
    },
    vw9: { 
        height: 30, 
        width: 70, 
        borderRadius: 5, 
        marginLeft: 10 
    },
    vw10: { 
        marginTop: 10, 
    },
    vw11: { 
        flexDirection: "row", 
        alignItems: "center", 
        backgroundColor:'white',
        marginHorizontal:20 
    },
    txt: { 
        fontFamily: Fonts.MEDIUM, 
        fontSize: 16, 
        marginTop: 5 
    },
    txt2: { 
        marginLeft: 10, 
        fontFamily: Fonts.LIGHT 
    },
    txt3: {
        position:'absolute',
        alignSelf:'center',
        color:Colors.WHITE
    },
    txt4: {
        position:'absolute',
        alignSelf:'center',
        color:Colors.GRAY_DARK
    },
    sv: { 
        flexDirection: "row", 
        marginTop: 20, 
        marginRight: 10 
    },
    sv2: {
        backgroundColor: 'white',
        position: 'relative',
        position: 'absolute',
        marginVertical:50,
    },
    sv3: {
        backgroundColor: 'white',
        position: 'relative',
        position: 'absolute',
        marginVertical:90,
    },
    container: { 
        //backgroundColor: Colors.PRIMARY, 
        position: "absolute",  
        left: 5, 
        height: 20, 
        width: 20, 
        zIndex: 2, 
        padding: 5, 
        borderRadius: 10,

    },
    container2: {
        height:30,
        width:70,
        backgroundColor:'#ee3450',
        position:'relative',
        justifyContent:'center',
        borderRadius:5,
        marginHorizontal:5,
        marginLeft:5
    },
    container3: {
        height:30,
        width:70,
        backgroundColor:Colors.GRAY_LIGHT,
        position:'relative',
        justifyContent:'center',
        borderRadius:5,
        marginHorizontal:5,
        marginLeft:5
    },
    
})


import { View, Text, KeyboardAvoidingView, Platform, Modal, TouchableOpacity, TextInput, FlatList, Image, StyleSheet, ScrollView, ActivityIndicator, Alert, Animated, Dimensions } from 'react-native'
import React from 'react'
import { Colors, Fonts, ScreenNames, Server } from '../../global';
import { useNavigation } from '@react-navigation/core';
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../global/constants';
import FilterBy from '../FilterBy/FilterBy';
// import { KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import { CuisionData, LocationData, QuickAvaliable, TablePrefer, TimeData1,TimeData } from "../../Dummy/Dummy"
import { globalStyles } from '../../global/globalStyles';
import GuestTime from '../GuestTime/GuestTime';
import NoOfGuest from '../NoOfGuest/NoOfGuest';
import SelectMonth from '../SelectMonth/SelectMonth';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import CalenderStrip from '../CalenderStrip/CalenderStrip';
import axios from 'axios';
import Timing from '../Timing/Timing';
import CrossSvg from "../../assets/svg/CrossSvg.svg"
import BackSvg from "../../assets/svg/backArrow.svg"
import Tablesvg from '../../assets/svg/Tablesvg'
import Tablesvg2 from '../../assets/svg/Table2svg'
import Tablesvg3 from '../../assets/svg/Table3svg'
import Dotsvg from '../../assets/svg/dot1.svg';
import Dotsvg2 from '../../assets/svg/dot2.svg';
import Dotsvg3 from '../../assets/svg/dot3.svg';
import Slots from '../Slots/Slots';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import ResTab from './ResTab';



const ReservedTableModal = ({ toggleGuestModalVisible, state, userId, show, opening_timings
    , restaurantName, restaurant_id, coverImage, restaurantTableHaultTime, restaurantTimings }) => {



    // console.warn("restaurantTimings", restaurantTimings);
    //function
    const navigation = useNavigation()




    const [time, setTime] = React.useState(null);
    const [guest, setGuest] = React.useState("");
    const [maxDate, setMaxDate] = React.useState(Platform.OS == "android" ? moment(Date.now()).endOf('month').format('YYYY-MM-DD') : moment(new Date()).endOf('month').format('YYYY-MM-DD[T00:00:00.000Z]'));
    const [minDate, setMinDate] = React.useState(Platform.OS == "android" ? moment(Date.now()).startOf('month').format('YYYY-MM-DD') : moment(new Date()).startOf('month').format('YYYY-MM-DD[T00:00:00.000Z]'));
    const [timeDate, setTimeDate] = React.useState(TimeData1)
    const [selectedMonth, setSelectedMonthData] = React.useState();
    const [selectedMonths, setSelectedMonth] = React.useState(null);
    const toggleMonthModal = () => { setMonthVisible(!monthVisible) }
    const [isToDateVisible, setToDateVisibility] = React.useState(false);
    const [currentDate, setCurrentDate] = React.useState(new Date());
    const [Todate, updateToDate] = React.useState('Select Post Date');
    const hideToDate = () => setToDateVisibility(false);
    const [monthVisible, setMonthVisible] = React.useState(false);
    const [currentMonthData, setCurrentMonthData] = React.useState();

    const [restab, setRestab] = React.useState(0);
    const flatlistRes = React.useRef(null);

    const renderResTab = ({item, index}) => {
        if (index > 7) {
            return null;
          } else {
        return (
          <ResTab
            item={item}
            index={index}
            setState={setRestab}
            state={restab}
            flatlistRes={flatlistRes}
          />
        );
       }
      };

    const isAndroid = Platform.OS == "android" ? true : false
    const setToDate = (d, date) => {
        // hideToDate();
        if (isAndroid) {
            if (d.type === 'set') {
                hideToDate();
                setCurrentDate(date);
                updateToDate(moment(date).format('YYYY-MM-DD'));
            } else {
                hideToDate();
            }
        } else {
            setCurrentDate(date);
            updateToDate(moment(date).format('YYYY-MM-DD'));
        }
    };

    React.useEffect(() => {
        let date = [
            "JANUARY",
            "FEBRUARY",
            "MARCH",
            "APRIL",
            "MAY",
            "JUNE",
            "JULY",
            "AUGUST",
            "SEPTEMBER",
            "OCTOBER",
            "NOVEMBER",
            "DECEMBER",
        ]
        const result = date.findIndex(e => e == selectedMonths?.object.month)
        const result1 = date.findIndex(e => e == moment(Date.now()).format("MMMM").toUpperCase())
        let currentMonth = moment(Date.now()).format("MMMM").toUpperCase()
        const data1 = moment(Date.now()).add((result + 1) - (result1 + 1), 'months').format('YYYY-MM-DD')
        const fetureMonth1 = moment(Date.now()).startOf('month').add((result + 1) - (result1 + 1), 'months').format('YYYY-MM-DD')
        updateToDate(currentMonth == selectedMonths?.object.month ? data1 : fetureMonth1);
        const data = Platform.OS == "android" ? moment(Date.now()).add((result + 1) - (result1 + 1), 'months').format('YYYY-MM-DD') : moment(new Date()).add((result + 1) - (result1 + 1), 'months').format('YYYY-MM-DD[T00:00:00.000Z]')
        const fetureMonth = Platform.OS == "android" ? moment(Date.now()).startOf('month').add((result + 1) - (result1 + 1), 'months').format('YYYY-MM-DD') : moment(new Date()).startOf('month').add((result + 1) - (result1 + 1), 'months').format('YYYY-MM-DD[T00:00:00.000Z]')
        const maxDate = Platform.OS == "android" ? moment(data).endOf('month').format("YYYY-MM-DD") : moment(data).endOf('month').format('YYYY-MM-DD[T00:00:00.000Z]')
        setMaxDate(maxDate)
        setMinDate(currentMonth == selectedMonths?.object.month ? data : fetureMonth)
        const latestMonth = currentMonthData?.filter(e => e.object.month == selectedMonths?.object.month.toUpperCase())
        if (latestMonth?.length > 0) {
            setSelectedMonthData(latestMonth[0])
        }
    }, [selectedMonths])


    const goBookingDetail = () => {

        if (typeof selectedData.date != "undefined" && typeof selectedData.peopleCapacity != "undefined" && selectedTimeSlots) {
            toggleGuestModalVisible()
            navigation.navigate(ScreenNames.BOOKINGDETAIL_SCREEN, {
                "selectedData": selectedData,
                // "setSelectedData": setSelectedData, 
                "restaurant_id": restaurant_id,
                "coverImage": coverImage,
                "restaurantName": restaurantName,
                "selectedTimeSlots": selectedTimeSlots
            })
        } else {
            Alert.alert("Alert", "Please select all Details")
        }
    }


    const [selectedData, setSelectedData] = React.useState({})
    const [timeSlots, setTimeSlots] = React.useState([])
    const [selectedTimeSlots, setSelectedTimeSlots] = React.useState(null)
    const [loading, setLoading] = React.useState(false)

    const getTimeSlots = async (date, people) => {
        try {
            setLoading(true)
            const data = {
                "restaurantId": restaurant_id,
                "peopleCapacity": people,
                "day": moment(date).format("dddd").toUpperCase(),
                "time": moment(date).format("YYYY-MM-DD") != moment(new Date()).format("YYYY-MM-DD") ? "00:00" : moment(date).format("HH:mm"),
                "choosenDate": moment(date).format("YYYY-MM-DD")
            }
            const response = await axios.post(`${Server.BASE_URL}/${Server.END_POINT.TIME_SLOTS}`, data)
            console.warn(response.data);
            if (typeof response.data.message != "undefined") {

            } else {
                if (response.data.data.length > 0) {
                    setTimeSlots(response.data.data)
                }
            }
            setLoading(false)
        } catch (error) {
            console.warn("error", error.message);
            setLoading(false)
        }
    }

    const renderTime = ({ item, index }) => <View style={{ marginBottom: 15 }}>
        <Slots item={item} index={index} time={time} setTime={setTime} quickBook={true}
            onPress={(item) => {
                setSelectedTimeSlots(item)
            }} />
    </View>



    const goCreateEnquires = () => {
        toggleGuestModalVisible()
        navigation.navigate(ScreenNames.CREATEENQUIRY_SCREEN, { restuarntId: restaurant_id })
    }
    return (

        <Modal
            // onShow={BlockMember}
            animationType={'fade'}
            visible={state}
            onShow={() => {
                getTimeSlots(new Date(), 1)
                setSelectedData({ ...selectedData, date: new Date(), peopleCapacity: 1 })
            }}
            // onRequestClose={toggleModal}
            transparent={true}
        // statusBarTranslucent={true}
        >
            {/* <FocusAwareStatusBar isLightBar={true} isTopSpace={false} isTransparent={true} /> */}

            <View style={styles.modalContainer}>

                <KeyboardAvoidingView behavior={Platform.OS == "android" ? null : "padding"}>
                    <View style={styles.confirmContainer}>
                        <View style={styles.confirmHeader}>
                            {/* <Text style={styles.confirmDeliveryText}
                                maxFontSizeMultiplier={1}>Reserve Table</Text> */}
                            <TouchableOpacity
                                onPress={toggleGuestModalVisible}
                                // onPress={() => {
                                //     _toggleblockModal()
                                //     // gotoMemberDetail()
                                // }}
                                // hitSlop={{top:20,right:20,bottom:20,left:20}}
                                hitSlop={{ top: 20, right: 20, bottom: 20, left: 20 }}
                            >
                                {/* <Text style={styles.clearAll}>Clear All</Text> */}
                                {/* <CrossSvg /> */}
                                <BackSvg/>
                            </TouchableOpacity>
                            <Text style={styles.confirmDeliveryText}
                                maxFontSizeMultiplier={1}>Reserve Table</Text>
                        </View>
                        <ScrollView>

                            <View style={{ flex: 1 }}>
                                <View style={styles.filterContainer}>
                                    <View style={styles.filterContainer2}>
                                        {/* <Text style={styles.fonttext1}>{restaurantName}</Text> */}
                                        <Text style={[styles.fonttext1,{color:Colors.GRAY_DARK}]}>Urban Tadka Dining</Text>
                                        {/* <Text style={[styles.fonttext2,{color:Colors.GRAY_DARK}]}>(Open Mon – Sat | Sunday Closed)</Text> */}
                                        <Text style={[styles.fonttext2,{color:Colors.GRAY_DARK}]}>(Open Mon – Sun | Friday Closed)</Text>
                                    </View>
                                    <View style={styles.vw1} >
                                        <Text style={styles.cuision}>Quickly book a table for</Text>
                                    </View>
                                    <FlatList
                                        data={restaurantTableHaultTime}
                                        style={styles.flatlist}
                                        horizontal
                                        showsHorizontalScrollIndicator={false}
                                        renderItem={({ item, index }) => (
                                            <NoOfGuest item={item}
                                                index={index}
                                                guest={guest}
                                                setGuest={setGuest}
                                                onPress={(item) => {
                                                    setSelectedData({
                                                        ...selectedData,
                                                        peopleCapacity: item
                                                    })
                                                    getTimeSlots(selectedData.date, item)
                                                }} />
                                        )} />

                                </View>

                                <View style={styles.filterContainer}>
                                    <View style={styles.vw1} >
                                        <Text style={styles.cuision}>Select Date</Text>
                                        <SelectMonth
                        monthVisible={monthVisible}
                        toggleMonthModal={toggleMonthModal}
                        months={currentMonthData}
                        setSelectedMonth={setSelectedMonth}
                    />
                                    </View>

                                   
                                    
                                    
                                    
                                    <View style={styles.vw2}>
                                        <CalenderStrip
                                            onPress={(item, day) => {
                                                setSelectedData({
                                                    ...selectedData,
                                                    date: item.toString()
                                                })
                                                getTimeSlots(item, selectedData.peopleCapacity)
                                                setSelectedTimeSlots(null)
                                                setTime(null)
                                            }}
                                            defaultDate={moment(new Date()).add(1, "day")}
                                        />


                                    </View>

                                </View>

                                <View style={styles.filterContainer}>
                                    <View style={styles.vw1} >
                                        <Text style={styles.cuision}>Time Slot</Text>
                                    </View>
                                    <View style={styles.vw3}>
                                        {
                                            loading
                                            &&
                                            <View style={styles.vw2}>
                                                <SkeletonPlaceholder>

                                                    <View style={styles.vw4}>
                                                        <View style={styles.vw5} />
                                                        <View style={styles.vw5} />
                                                        <View style={styles.vw5} />
                                                        <View style={styles.vw5} />
                                                    </View>
                                                    <View style={styles.vw5}>
                                                        <View style={styles.vw5} />
                                                        <View style={styles.vw5} />
                                                        <View style={styles.vw5} />
                                                        <View style={styles.vw5} />
                                                    </View>
                                                </SkeletonPlaceholder>
                                            </View>
                                        }
                                        <ScrollView
                                            horizontal
                                            showsHorizontalScrollIndicator={false}

                                        >
                                            {
                                                timeSlots.length > 0
                                                &&
                                                !loading
                                                &&
                                                <>
                                                    <FlatList
                                                        showsHorizontalScrollIndicator={false}
                                                        contentContainerStyle={{ marginRight: 10, marginLeft: 10 }}
                                                        keyExtractor={(item) => `${JSON.stringify(item)}`}
                                                        numColumns={Math.round(timeSlots.length / 2)}
                                                        data={timeSlots}
                                                        //data={TimeData}
                                                        key={Math.round(timeSlots.length / 2)}
                                                        renderItem={renderTime} />

                                                </>
                                            }
                                            
                                        </ScrollView>
                                        <View style={{ marginHorizontal: 20,  }} >
                                          <Text style={styles.cuision}>Table Preference</Text>
                                          <FlatList
                                           horizontal
                                           data={TablePrefer}
                                           keyExtractor={(item) => `${JSON.stringify(item)}`}
                                           renderItem={renderResTab} 
                                           />
                                        </View>   
                                        <View style={styles.vw7}>
                                         
                                         <View style={styles.vw8}>
                                         <TouchableOpacity style={styles.tableContainer}>
                                         <Tablesvg fill="#dddddd"/>
                                         </TouchableOpacity>
                                         <TouchableOpacity style={styles.tableContainer2}>
                                         <Tablesvg2 fill="#F5AB3B"/>
                                         </TouchableOpacity>
                                         <TouchableOpacity style={styles.tableContainer3}>
                                         <Tablesvg3 fill="#F5AB3B"/>
                                         </TouchableOpacity>
                                         </View>

                                         <View style={styles.vw9}>
                                         <TouchableOpacity style={styles.tableContainer}>
                                         <Tablesvg fill="#ef3340"/>
                                         </TouchableOpacity>
                                         <TouchableOpacity style={styles.tableContainer2}>
                                         <Tablesvg2 fill="#dddddd" />
                                         </TouchableOpacity>
                                         <TouchableOpacity style={styles.tableContainer4}>
                                         <Tablesvg3 fill="#dddddd"/>
                                         </TouchableOpacity>
                                         </View>

                                         <View style={styles.vw10}>
                                         <TouchableOpacity style={styles.tableContainer5}>
                                         <Tablesvg fill="#dddddd"/>
                                         </TouchableOpacity>
                                         <TouchableOpacity style={styles.tableContainer6}>
                                         <Tablesvg2 fill="#dddddd"/>
                                         </TouchableOpacity>
                                         <TouchableOpacity style={styles.tableContainer7}>
                                         <Tablesvg3 fill="#dddddd"/>
                                         </TouchableOpacity>
                                         </View>

                                         <View style={styles.vw11}>
                                         <View style={styles.vw13}>
                                            <Dotsvg /> 
                                            <Text style={styles.txt} >Open</Text> 
                                         </View>
                                         <View style={styles.vw13}>
                                            <Dotsvg2 /> 
                                            <Text style={styles.txt}>Reserved</Text> 
                                         </View>
                                         <View style={styles.vw13}>
                                            <Dotsvg3 /> 
                                            <Text style={styles.txt}>Selected</Text> 
                                         </View>
                                         </View>
                                        </View>   
                                    </View>

                                </View>
                            
                            </View>

                            

                            <TouchableOpacity
                                onPress={goBookingDetail}
                                //onPress={navigation.navigate('ConfirmationScreen')}
                                style={[globalStyles.button, { marginHorizontal: 20, marginVertical: 20 }]}>
                                <Text style={globalStyles.buttonText}>Proceed Booking</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={goCreateEnquires} style={{ marginVertical: 5 }}>
                                <Text style={styles.Booking}>Booking for a bigger group ? Ask restaurant manager.</Text>
                            </TouchableOpacity>

                        </ScrollView>

                    </View>
                    {
                        isToDateVisible
                        &&
                        <>
                            {Platform.OS === 'android'
                                ?
                                <DateTimePicker
                                    value={currentDate}
                                    is24Hour={true}
                                    mode='date'
                                    display='calendar'
                                    minimumDate={new Date(minDate)}
                                    maximumDate={new Date(maxDate)}
                                    onChange={setToDate}
                                />
                                
                                :
                                <>
                                    <View style={styles.vw14}>
                                    </View>

                                    <View style={styles.vw15}>
                                        <View style={styles.vw16}>
                                            <TouchableOpacity onPress={() => {
                                                setToDateVisibility(!isToDateVisible)
                                            }}>
                                                <Text style={styles.txt2}>Cancel</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity onPress={() => {
                                                setToDateVisibility(!isToDateVisible)
                                            }}>
                                                <Text style={styles.txt2}>Ok</Text>
                                            </TouchableOpacity>
                                        </View>
                                        <DateTimePicker
                                            value={currentDate}
                                            is24Hour={true}
                                            mode='date'
                                            minimumDate={minDate}
                                            display='spinner'
                                            maximumDate={maxDate}
                                            onChange={setToDate}
                                        />
                                    </View>
                                </>
                            }
                        </>
                    }
                    
                    <SelectMonth
                        monthVisible={monthVisible}
                        toggleMonthModal={toggleMonthModal}
                        months={currentMonthData}
                        setSelectedMonth={setSelectedMonth}
                    />
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



export default (ReservedTableModal);

// export default BlockedMemberModal

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        //backgroundColor: '#00000050',
        backgroundColor:Colors.WHITE,
        justifyContent: 'flex-end'
    },
    confirmContainer: {
        // flex: 0.25,
        backgroundColor: Colors.WHITE,
        paddingBottom: 20,
        //height: SCREEN_HEIGHT / 1.3,
        height: SCREEN_HEIGHT ,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    confirmHeader: {
        flexDirection: 'row',
        height: 66,
        justifyContent: 'space-between',
        alignItems: "center",
        paddingHorizontal: 20,
        //backgroundColor:'lime'
    },
    confirmDeliveryText: {
        // paddingLeft: 20,
        paddingTop: 15,
        paddingBottom: 15,
        fontFamily: Fonts.SEMIBOLD,
        fontSize: Fonts.SIZE_18,
        color: Colors.JUNGLE_BLACK,
        letterSpacing: 0.2,
        //backgroundColor:'grey',
        right:SCREEN_WIDTH / 4
    },
    fonttext1: {
        fontSize: Fonts.SIZE_17,
        fontFamily: Fonts.BOLD,
        color: Colors.BLACK
    },
    fonttext2: {
        fontSize: Fonts.SIZE_15,
        fontFamily: Fonts.MEDIUM,
        color: Colors.BLACK
    },


    clearAll: {
        fontSize: Fonts.SIZE_15,
        fontFamily: Fonts.MEDIUM,
        color: Colors.PRIMARY
    },
    cuision: {
        fontSize: Fonts.SIZE_18,
        fontFamily: Fonts.BOLD,
        color: Colors.BLACK
    },
    filterContainer: {
        marginTop: 10
    },
    Booking: {
        fontSize: Fonts.SIZE_15,
        // fontFamily: Fonts.BOLD,
        fontStyle: "italic",
        fontWeight: "bold",
        color: Colors.BLUE,
        textDecorationLine: "underline",
        // alignSelf: "center"
        textAlign: "center"
    },
    filterContainer2: { 
        marginHorizontal: 20, 
        marginBottom: 20 
    },
    vw1:{ 
        marginHorizontal: 20 
    },
    vw2:{ 
        marginTop: 10, 
        marginLeft: 20 
    },
    vw3:{ 
        marginTop: 10, 
    },
    vw4:{ 
        flexDirection: "row" 
    },
    vw5:{ 
        flexDirection: "row", 
        marginTop: 10 
    },
    vw6:{ 
        height: 30, 
        width: 70, 
        borderRadius: 5, 
        marginLeft: 10 
    },
    vw7:{ 
        marginTop:10, 
        backgroundColor:'white',
        height:SCREEN_HEIGHT,
        width:SCREEN_WIDTH, 
        position:'relative',
        display:'flex', 
        flexDirection:'column', 
        marginVertical:-50 
    },
    vw8:{ 
        backgroundColor:'white',
        height:SCREEN_HEIGHT/3,
        width:SCREEN_WIDTH, 
        position:'relative', 
        display:'flex', 
        flexDirection:'row' },
    vw9:{ 
        backgroundColor:'white',
        height:SCREEN_HEIGHT/4,
        width:SCREEN_WIDTH, 
        position:'relative', 
        display:'flex', 
        flexDirection:'row' 
    },
    vw10:{ 
        backgroundColor:'white',
        height:SCREEN_HEIGHT/6,
        width:SCREEN_WIDTH, 
        position:'relative', 
        display:'flex', 
        flexDirection:'row' 
    },
    vw11:{
        backgroundColor:'white',
        height:SCREEN_HEIGHT/13,
        width:SCREEN_WIDTH, 
        position:'relative', 
        display:'flex', 
        flexDirection:'row', 
        justifyContent:'center',
        paddingBottom:10,
        top:20
    },
    vw12:{
        backgroundColor:'white', 
        padding:20,
        position:'absolute'
    },
    vw13:{
        backgroundColor:'white', 
        padding:5,
        position:'relative',
        display:'flex',
        flexDirection:'row',
        top:10
    },
    vw14:{ 
        height: '70%', 
        backgroundColor: "#000000aa", 
        position: 'absolute', 
        width: SCREEN_WIDTH 
    },
    vw15:{ 
        height: '30%' 
    },
    vw16:{ 
        flexDirection: "row", 
        justifyContent: "space-between", 
        paddingHorizontal: 20, 
        paddingVertical: 20 
    },
    flatlist:{ 
        marginHorizontal: 10, 
        marginVertical: 10 
    },
    tableContainer:{
        backgroundColor:'white', 
        padding:20,
        position:'absolute',
        bottom:0
    },
    tableContainer2:{
        backgroundColor:'white', 
        padding:20,
        position:'absolute',
        left:120
    },
    tableContainer3:{
        backgroundColor:'white', 
        padding:20,
        position:'absolute',
        left:240,
        top:-5
    },
    tableContainer4:{
        backgroundColor:'white', 
        padding:20,
        position:'absolute',
        left:240,
        bottom:0
    },
    tableContainer5:{
        backgroundColor:'white', 
        padding:20,
        position:'absolute'
    },
    tableContainer6:{
        backgroundColor:'white', 
        padding:20,
        position:'absolute',
        left:120,
    },
    tableContainer7:{
        backgroundColor:'white', 
        padding:20,
        position:'absolute',
        left:240,
        top:-5
    },
    txt:{
        paddingHorizontal:10
    },
    txt2:{ 
        fontFamily: Fonts.MEDIUM, 
        fontSize: 20, 
        color: "#3D80D6" 
    },
   
});


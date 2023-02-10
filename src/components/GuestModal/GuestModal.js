import { View, Text, KeyboardAvoidingView, Platform, Modal, TouchableOpacity, TextInput, FlatList, Image, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { Colors, Fonts, ScreenNames, Server } from '../../global';

import { useNavigation } from '@react-navigation/core';

import { SCREEN_HEIGHT } from '../../global/constants';
import FilterBy from '../FilterBy/FilterBy';
// import { KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import { CuisionData, LocationData, QuickAvaliable, TimeData1 } from "../../Dummy/Dummy"
import { globalStyles } from '../../global/globalStyles';
import GuestTime from '../GuestTime/GuestTime';
import NoOfGuest from '../NoOfGuest/NoOfGuest';
import SelectMonth from '../SelectMonth/SelectMonth';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import CalenderStrip from '../CalenderStrip/CalenderStrip';
import axios from 'axios';
import Timing from '../Timing/Timing';

const GuestModal = ({ toggleGuestModalVisible, state, userId, show, opening_timings, restaurant_id, coverImage }) => {


    //function
    const navigation = useNavigation()

    const [time, setTime] = React.useState("");
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
        toggleGuestModalVisible()
        navigation.navigate(ScreenNames.BOOKINGDETAIL_SCREEN, {
            "selectedData": selectedData,
            "setSelectedData": setSelectedData, "restaurant_id": restaurant_id, "coverImage": coverImage
        })
    }


    const [selectedData, setSelectedData] = React.useState({})
    const [timeSlots, setTimeSlots] = React.useState([])
    const getTimeSlots = async (i, day) => {
        const time = moment(i).format("ss");

        try {
            const data = {
                "restaurantId": restaurant_id,
                "peopleCapacity": selectedData.noOfGuest,
                "day": day,
                "time": time,
                "choosenDate": i
            }
            const response = await axios.post(`${Server.BASE_URL}/restaurant/timeslots/get-all-slots`, data)
            if ((response.data.data).length > 0) {
                setTimeSlots(response.data.data)
            }
        } catch (error) {
            console.warn("error", error.message);
        }
    }



    const renderTime = ({ item, index }) => <View style={{ marginBottom: 15 }}>
        <Timing item={item} index={index} time={time} setTime={setTime} quickBook={true}
            onPress={(item) => {
                setSelectedData({
                    ...selectedData,
                    timming: item
                })
                // toggleQuickModal()
                // navigation.navigate(ScreenNames.BOOKINGDETAIL_SCREEN)
                // flatlistRef.current.scrollToIndex({ animated: true, index: 2, viewPosition: 0.5 })
            }} />
    </View>

    const clearAll = () => {
        toggleGuestModalVisible()

    }

    return (

        <Modal
            // onShow={BlockMember}
            animationType={'fade'}
            visible={state}
            // onRequestClose={toggleModal}
            transparent={true}
        // statusBarTranslucent={true}
        >
            <View style={styles.modalContainer}>

                <KeyboardAvoidingView behavior={Platform.OS == "android" ? null : "padding"}>
                    <View style={styles.confirmContainer}>
                        <View style={styles.confirmHeader}>
                            <Text style={styles.confirmDeliveryText}
                                maxFontSizeMultiplier={1}>Find a Table</Text>
                            <TouchableOpacity
                                onPress={clearAll}
                                // onPress={() => {
                                //     _toggleblockModal()
                                //     // gotoMemberDetail()
                                // }}
                                // hitSlop={{top:20,right:20,bottom:20,left:20}}
                                hitSlop={{ top: 20, right: 20, bottom: 20, left: 20 }}
                            >
                                <Text style={styles.clearAll}>Clear All</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ flex: 1 }}>
                            <View style={styles.filterContainer}>
                                <View style={{ marginHorizontal: 20 }} >
                                    <Text style={styles.cuision}>No. Of Guests.</Text>
                                </View>
                                <FlatList data={TimeData1}
                                    style={{ marginHorizontal: 10, marginVertical: 10 }}
                                    horizontal
                                    showsHorizontalScrollIndicator={false}
                                    renderItem={({ item, index }) => (
                                        <NoOfGuest item={item} index={index} guest={guest}
                                            setGuest={setGuest}
                                            onPress={(item) => {
                                                setSelectedData({
                                                    ...selectedData,
                                                    noOfGuest: item
                                                })
                                            }} />
                                    )} />

                            </View>

                            <View style={styles.filterContainer}>
                                <View style={{ marginHorizontal: 20 }} >
                                    <Text style={styles.cuision}>Select Date</Text>
                                </View>
                                <View style={{ marginTop: 10, marginLeft: 20 }}>
                                    <CalenderStrip
                                        onPress={(item, day) => {
                                            setSelectedData({
                                                ...selectedData,
                                                date: item
                                            })
                                            getTimeSlots(item, day)

                                        }}
                                    />
                                </View>

                            </View>

                            <View style={styles.filterContainer}>
                                <View style={{ marginHorizontal: 20 }} >
                                    <Text style={styles.cuision}>Time</Text>
                                </View>
                                <View style={{ marginTop: 10, }}>
                                    <ScrollView
                                        horizontal>
                                        {
                                            timeSlots.length > 0
                                            &&
                                            <FlatList
                                                showsHorizontalScrollIndicator={false}
                                                contentContainerStyle={{ marginRight: 10 }}
                                                keyExtractor={(item) => `${JSON.stringify(item)}`}
                                                numColumns={Math.round(timeSlots.length / 2)}
                                                data={timeSlots}
                                                renderItem={renderTime} />
                                        }
                                    </ScrollView>
                                </View>

                            </View>
                        </View>

                        <View style={{
                            flexDirection: "row", alignItems: "center", justifyContent: "center", marginVertical: 20
                        }}>

                            <TouchableOpacity onPress={toggleGuestModalVisible} style={globalStyles.Applybutton} >
                                <Text style={globalStyles.ApplybuttonText} >Apply</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={toggleGuestModalVisible} style={[globalStyles.Applybutton, { backgroundColor: Colors.WHITE, borderWidth: 1 }]}>
                                <Text style={[globalStyles.ApplybuttonText, { color: Colors.OUTER_SPACE }]} >Cancel</Text>
                            </TouchableOpacity>
                        </View>

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
                                    <View style={{ height: '70%', backgroundColor: "#000000aa", position: 'absolute', width: Constants.SCREEN_WIDTH }}>
                                    </View>

                                    <View style={{ height: '30%' }}>
                                        <View style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 20, paddingVertical: 20 }}>
                                            <TouchableOpacity onPress={() => {
                                                setToDateVisibility(!isToDateVisible)
                                            }}>
                                                <Text style={{ fontFamily: Fonts.MEDIUM, fontSize: 20, color: "#3D80D6" }}>Cancel</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity onPress={() => {
                                                setToDateVisibility(!isToDateVisible)
                                            }}>
                                                <Text style={{ fontFamily: Fonts.MEDIUM, fontSize: 20, color: "#3D80D6" }}>Ok</Text>
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



export default (GuestModal);

// export default BlockedMemberModal

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        backgroundColor: '#00000050',
        justifyContent: 'flex-end'
    },
    confirmContainer: {
        // flex: 0.25,
        backgroundColor: Colors.WHITE,
        paddingBottom: 20,
        height: SCREEN_HEIGHT / 1.3,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    confirmHeader: {
        flexDirection: 'row',
        height: 66,
        justifyContent: 'space-between',
        alignItems: "center",
        paddingHorizontal: 20,

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
        fontSize: Fonts.SIZE_18,
        fontFamily: Fonts.BOLD,
        color: Colors.BLACK
    },
    filterContainer: {
        marginTop: 10
    }

})


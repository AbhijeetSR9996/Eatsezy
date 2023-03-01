import React from 'react';
import {
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

//global
import { Fonts, Colors, Server } from '../../global';

//styles
import { styles } from './NotificationStyles';

//components
import HeaderScreen from '../../components/Header/Header';
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar';

//third party
import { SwipeListView } from 'react-native-swipe-list-view';
import moment from "moment";

//Svgs
//import DeleteSvg from '../../assets/svg/delete.svg';
//import UpdateSvg from '../../assets/svg/update.svg';
//import { connect } from 'react-redux';
import axios from 'axios';


// import Header from '../../components/Header/Header';


const NotificationsScreen = ({ userId, isSignedIn }) => {

    const [getNotificationdata, setgetNotificationdata] = React.useState(null);
    const [delNotificationdata, setdelgetNotificationdata] = React.useState([]);

    const [listData, setListData] = React.useState(null
        // Array(10)
        //     .fill('')
        //     .map((_, i) => ({
        //         key: `${i}`,
        //         text: `Sample text here about EatsEzy new updates & fixes in latest mobile app version for singapore region. #${i}`,
        //         text2: `Maison Kitsune | 20 March 2020`
        //     }))
    );

    const getNotification = async () => {
        try {
            const response = await axios.get(`${Server.BASE_URL}/user/notification/get-all-notification-of-user/${userId}`)
            // console.warn("====>", response.data.data);
            setListData(response.data.data)
        } catch (error) {
            //console.warn("error", error.message);
        }
    }


    React.useEffect(() => {
        // if (isSignedIn) {

        getNotification()
        // }
    }, [])

    // const closeRow = (rowMap, rowKey) => {
    //     if (rowMap[rowKey]) {
    //         rowMap[rowKey].closeRow();
    //     }
    // };

    const deleteRow = async (rowMap, rowKey) => {
        console.warn(`${Server.BASE_URL}/${Server.END_POINT.DELETE_NOTIFICATION}/${rowMap._id}`);
        //const response = await axios.delete(`${Server.BASE_URL}/${Server.END_POINT.DELETE_NOTIFICATION}/${rowMap._id}`)
        getNotification()
    };


    const renderItem = ({ item }) => (
        <TouchableOpacity
            activeOpacity={1}
            style={styles.rowFront}
            >
            <View>
                {/* <Text numberOfLines={1} style={[styles.notificationText, { paddingHorizontal: 30, color: Colors.SECONDARY, position:'relative' }]}>{item?.notificationBody[0]?.body}</Text> */}
                <Text numberOfLines={1} style={[styles.notificationText, { paddingHorizontal: 60, color: Colors.SECONDARY, position:'relative' }]}> Sample text here </Text>    
                {/* <Text numberOfLines={2} style={[styles.notificationText, { paddingHorizontal: 30, marginBottom: 5, fontFamily: Fonts.SEMIBOLD, color: '#040404', position:'relative'}]}>{item && item?.notificationBody[0]?.title}</Text> */}
                <Text numberOfLines={2} style={[styles.notificationText, { paddingHorizontal: 54, marginBottom: 5, fontFamily: Fonts.SEMIBOLD, color: '#040404', position:'relative'}]}>   Fixes in latest mobile app version.</Text>
                <Text numberOfLines={1} style={[styles.notificationText, { paddingHorizontal: 65, color: "#EF3340", fontFamily: Fonts.SEMIBOLD, opacity: 0.65, bottom:2, position:'relative' }]}>{moment(item && item?.createdAt).format("DD MMMM YYYY")}</Text>
            </View>
            {/* <View style={styles.update}><UpdateSvg/></View> */}
        </TouchableOpacity>
    );

    const renderHiddenItem = ({ item, rowMap }) => (
        <TouchableOpacity
            onPress={() => {
                deleteRow(item, rowMap);
            }}
            style={{ alignItems: "flex-end" }}>
            {/* <View style={[styles.delete]}><DeleteSvg /></View> */}
        </TouchableOpacity>
    );


    const renderEmptyList = ({ item, index }) => {
        return (
            // Array.isArray(getNotificationdata)
            // &&
            // getNotificationdata.length == 0
            // &&
            <View style={styles.vw}>
                <Text style={styles.txt}>There is no notification</Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <FocusAwareStatusBar isLightBar={false} isTopSpace={true} isTransparent={false} />
            {/* <HeaderScreen activateLeftIcon={true} name='Notifications' textColor={Colors.BLACK_C16} /> */}
            <View style={{ marginBottom: 15 }} />

            <SwipeListView
                ListEmptyComponent={renderEmptyList}
                disableRightSwipe={true}
                data={listData && listData}
                renderItem={renderItem}
                renderHiddenItem={renderHiddenItem}
                leftOpenValue={75}
                rightOpenValue={-75}
                previewRowKey={'0'}
                previewOpenValue={-40}
                previewOpenDelay={3000}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}

// const mapStateToProps = state => ({
//     state: state.user,
//     userId: state.user.userId,
//     isSignedIn: state.user.isSignedIn,
// });
//const mapDispatchToProps = (dispatch) => ({ dispatch });

//export default connect(mapStateToProps, mapDispatchToProps)(NotificationsScreen);
export default NotificationsScreen;

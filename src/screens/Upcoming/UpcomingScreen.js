import axios from 'axios';
import React from 'react'
import { FlatList, RefreshControl, ScrollView, StyleSheet, Text, View } from 'react-native'
//import { connect } from 'react-redux';
import ReservationCard from '../../components/ReservationCard/ReservationCard'
//import { ReservesionData } from '../../Dummy/Dummy';
import { Colors, Fonts, Server } from '../../global';

const UpcomingScreen = ({ userId, isSignedIn, guestId }) => {

    const [bookings, setBookings] = React.useState(null)
    const [noBookings, setNoBookings] = React.useState("")

    const getBookings = async () => {
        try {
            if (isSignedIn) {
                console.warn(`${Server.BASE_URL}/${Server.END_POINT.USER_BOOKINGS}/${userId}`);
                const response = await axios.get(`${Server.BASE_URL}/${Server.END_POINT.USER_BOOKINGS}/${userId}`)
                console.warn("response.data.data", response.data.data);
                setBookings(response.data.data)
            } else {
                const response = await axios.get(`${Server.BASE_URL}/${Server.END_POINT.USER_BOOKINGS}/${guestId}`)
                setBookings(response.data.data)
            }
        } catch (error) {
            setNoBookings("No Booking found")
        }
    }
    React.useEffect(() => {
        getBookings()
    }, [])
    const [refreshing, setRefreshing] = React.useState(false);

    const renderReservesion = ({ item, index }) => <ReservationCard data={item} route={"UPCOMING"} />
    return (
        <View style={{ flex: 1, backgroundColor: Colors.WHITE }}>

            {
                bookings
                    &&
                    bookings.length > 0
                    ?
                    <FlatList
                        refreshing={refreshing}
                        //onRefresh={getBookings}
                        contentContainerStyle={{}}
                        data={bookings.reverse()}
                        showsVerticalScrollIndicator={false}
                        renderItem={renderReservesion} />
                    :

                    <Text style={{ fontSize: 17, fontFamily: Fonts.MEDIUM, color: "#4BC537", textAlign: "center" }}>{noBookings}</Text>
            }
        </View>
    )
}
const mapStateToProps = state => ({
    state: state.user,
    userId: state.user.userId,
    favorite: state.user.favorite,
    isSignedIn: state.user.isSignedIn,
    guestId: state.user.guestId
});

const mapDispatchToProps = dispatch => ({ dispatch });

// export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen);
// export default connect(mapStateToProps, mapDispatchToProps)(UpcomingScreen)
export default UpcomingScreen

const styles = StyleSheet.create({})

import axios from 'axios';
import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
//import { connect } from 'react-redux';
import ReservationCard from '../../components/ReservationCard/ReservationCard'
//import { CompletetedData } from '../../Dummy/Dummy';
import { Colors, Fonts, Server } from '../../global';

const CancelledScreen = ({ userId, isSignedIn, guestId }) => {

    const [bookings, setBookings] = React.useState(null)
    const getBookings = async () => {

        try {
            if (isSignedIn) {
                const response = await axios.get(`${Server.BASE_URL}/${Server.END_POINT.USER_BOOKINGCOMPLETE}/${userId}`)
                setBookings(response.data.data)
            } else {
                const response = await axios.get(`${Server.BASE_URL}/${Server.END_POINT.USER_BOOKINGS}/${guestId}`)
                setBookings(response.data.data)
            }
        } catch (error) {
            //console.warn("asdda", error.message);
        }
    }
    const [refreshing, setRefreshing] = React.useState(false);


    React.useEffect(() => {
        getBookings()
    }, [])
    const renderReservesion = ({ item, index }) => <ReservationCard data={item} route={"CANCELLED"} />
    return (
        <View style={{ flex: 1, backgroundColor: Colors.WHITE }}>
            {
                bookings
                    &&
                    bookings.length > 0
                    ?
                    <FlatList
                        contentContainerStyle={{ flexGrow: 1 }}
                        data={bookings}
                        refreshing={refreshing}
                        onRefresh={getBookings}
                        showsVerticalScrollIndicator={false}
                        renderItem={renderReservesion} />
                    :
                    <Text style={{ fontSize: 17, fontFamily: Fonts.MEDIUM, color: "#4BC537", textAlign: "center" }}>There is no Bookings</Text>
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
//export default connect(mapStateToProps, mapDispatchToProps)(CancelledScreen)
export default CancelledScreen;

const styles = StyleSheet.create({})

import React from 'react'
import { View } from 'react-native'
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar'
import Header from '../../components/Header/Header'
import { Colors } from '../../global'
//import SubCategoryTopTab from '../../navigation/TopTab/SubCategoryTopTab'
//import UpcomingScreen from '../Upcoming/UpcomingScreen'
//import CompletedScreen from '../Completed/CompletedScreen'
import CancelledScreen from '../Cancelled/CancelledScreen'

const MyReservesionScreen = () => {
    return (
        <View style={{ flex: 1, backgroundColor: Colors.WHITE }}>
            <FocusAwareStatusBar isLightBar={false} isTopSpace={true} />
            <Header name="My Reservations" activateLeftIcon={false} activateRightIcon={false} />
            <View style={{ flex: 1, backgroundColor: Colors.WHITE }}>
                {/* <SubCategoryTopTab /> */}
                <CancelledScreen/>
                {/* <UpcomingScreen/> */}
                {/* <CompletedScreen/> */}
            </View>
        </View>
    )
}

export default MyReservesionScreen


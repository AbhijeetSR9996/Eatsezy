import React from 'react'
import { FlatList, Image, Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Colors, Constants, Fonts } from '../../global'
import { SCREEN_HEIGHT } from '../../global/constants';
import CrossSvg from "../../assets/svg/closecopy.svg"
import { InformationData } from '../../Dummy/Dummy';
//import { connect } from 'react-redux';
//import * as UserActions from '../../redux/actions/userActions'
const InformationModal = ({ item, index, isInformationModalVisible, toggleIsInformationModalVisible, dispatch }) => {
    const [indicatorIndex, setIndicatorIndex] = React.useState(0)

    const _onMomentumScrollEnd = ({ nativeEvent }) => {
        const index = Math.round(nativeEvent.contentOffset.x / Constants.SCREEN_WIDTH);
        setIndicatorIndex(index)
    }
    const renderIndicator = (item, index) => {
        return (
            <View style={{ width: index == indicatorIndex ? 25 : 14, height: index == indicatorIndex ? 8 : 5, borderRadius: 10, backgroundColor: index == indicatorIndex ? Colors.PRIMARY : Colors.GRAY_LIGHT, marginLeft: 5, marginRight: 5 }}>

            </View>
        )
    }

    return (
        <Modal
            // onShow={BlockMember}
            animationType={'fade'}
            visible={isInformationModalVisible}
            // onRequestClose={toggleModal}
            transparent={true}
        // statusBarTranslucent={true}
        >
            <View style={styles.modalContainer}>
                <ScrollView
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    onMomentumScrollEnd={_onMomentumScrollEnd}
                    contentContainerStyle={{ alignItems: "center" }}
                >
                    {

                        InformationData.map(function (item, index) {
                            return (
                                <View style={{ flex: 1, backgroundColor: "#FFF2F1", width: Constants.SCREEN_WIDTH - 40, height: Constants.SCREEN_WIDTH, marginHorizontal: 20, borderRadius: 10, padding: 10 }}>

                                    <View style={{ marginTop: 10, marginHorizontal: 10 }}>
                                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                            <Text style={styles.font1}>3 ways to be a Pro Diner !!</Text>
                                        </View>
                                        <TouchableOpacity
                                            onPress={() => {
                                                //dispatch(UserActions.setToggleModal(false))
                                                toggleIsInformationModalVisible()
                                            }}
                                            style={{ position: "absolute", backgroundColor: Colors.PRIMARY, padding: 5, borderRadius: 10, right: 0 }}>
                                            <CrossSvg />
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{ alignItems: "center", marginTop: 30 }}>
                                        <Image source={item.imgUrl} style={{ height: 135, width: 135 }} />
                                        <View style={{ alignSelf: "center", marginHorizontal: 20 }}>
                                            <Text style={styles.font2} >{item.title}</Text>
                                            <Text style={styles.font3} >{item.desc}</Text>
                                        </View>
                                    </View>
                                </View>
                            )
                        })
                    }
                </ScrollView>
                <View style={{ position: "absolute", bottom: Constants.SCREEN_HEIGHT / 3.3, left: (Constants.SCREEN_WIDTH / 2) - 50, flexDirection: "row" }}>
                    {InformationData.map(renderIndicator)}
                </View>
            </View>
        </Modal >
    )
}
// <FlatList
//     data={InformationData}
//     horizontal={true}
//     keyExtractor={(item) => `${JSON.stringify(item)}`}
//     contentContainerStyle={{ alignItems: "center" }}
//     renderItem={renderIndicator}
// />
const mapStateToProps = state => ({
    state: state.user,
    userId: state.user.userId,
    favorite: state.user.favorite
});

const mapDispatchToProps = dispatch => ({ dispatch });

// export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen);
//export default connect(mapStateToProps, mapDispatchToProps)(InformationModal)
export default InformationModal;

const styles = StyleSheet.create({

    modalContainer: {
        flex: 1,
        backgroundColor: '#00000050',
        justifyContent: 'center'

    },
    confirmContainer: {
        // flex: 0.25,
        backgroundColor: Colors.WHITE,
        paddingBottom: 20,
        height: SCREEN_HEIGHT / 2.1,
        marginHorizontal: 50,
        borderRadius: 20
    },
    underLine: {
        height: 5,
        width: 10,
        borderRadius: 50,
        backgroundColor: Colors.GRAY_DARK
    },
    font1: {
        fontSize: 14,
        fontFamily: Fonts.BOLD,
        color: Colors.BLACK
    },
    font2: {
        fontSize: 14,
        fontFamily: Fonts.BOLD,
        color: Colors.BLACK,
        textAlign: "center",
        marginTop: 10
    },
    font3: {
        fontSize: 12,
        fontFamily: Fonts.MEDIUM,
        color: Colors.BLACK,
        textAlign: "center",
        marginTop: 10

    },
})

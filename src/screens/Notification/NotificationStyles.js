import { StyleSheet } from 'react-native'

import { Colors, Fonts, Constants } from '../../global/index'

export const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.WHITE,
        flex: 1,
    },
    backTextWhite: {
        color: '#FFF',
    },
    rowFront: {
        backgroundColor: Colors.WHITE,
        justifyContent: 'center',
        height: 60,
        paddingTop: 10,
        marginBottom: 20,
    },
    rowBack: {
        alignItems: 'center',
        backgroundColor: '#DDD',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 15,
    },
    backRightBtn: {
        alignItems: 'center',
        bottom: 0,
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        width: 75,
    },
    backRightBtnLeft: {
        backgroundColor: 'blue',
        right: 75,
    },
    backRightBtnRight: {
        backgroundColor: 'yellow',
        right: 0,
    },
    notificationText: {
        fontFamily: Fonts.MEDIUM,
        fontSize: Fonts.SIZE_14,
        color: Fonts.CAMBOGE
    },
    delete: {
        width: 60,
        backgroundColor: '#d24649',
        paddingVertical: 20.5,
        alignItems: 'center'
    },
    update: {
        position:'absolute',
        width: 60,
        backgroundColor: 'white',
        paddingVertical: 20.5,
        alignItems: 'center'
    },
    vw: { 
        alignItems: 'center', 
        justifyContent: 'center', 
        flex: 1 
    },
    txt: { 
        fontFamily: Fonts.SEMIBOLD, 
        fontSize: 18 
    },
});
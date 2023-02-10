import { Colors, Constants, Fonts } from "../../global/index";

const { StyleSheet, Platform } = require("react-native");



export const styles = StyleSheet.create({
    container: {
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center'
    },

    headerLeftContainer: {
        flex: 1.1,
        // backgroundColor: Colors.PRIMARY
    },

    headerLeft: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 0
    
    },

    headerCenterContainer: {
        flex: 5,
        // backgroundColor: Colors.PRIMARY
    },

    headerCenter: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
        // alignItems: 'center',
    },

    headerRightContainer: {
        flex: 1.1,
        // backgroundColor: Colors.WHITE
    },

    headerRight: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 0,
    },

    headerText: {
        fontSize: Fonts.SIZE_20,
        fontFamily: Fonts.BOLD,
        color: Colors.BLACK,
        marginBottom: Platform.OS == "android" ? -4 : 0
    }
});
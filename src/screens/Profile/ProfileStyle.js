import { StyleSheet } from "react-native";
import { Fonts, Colors, Constants } from "../../global";

//global variables
const IMAGE_HEIGHT = 270;

export const styles = StyleSheet.create({
    userDetail: {
        marginLeft: 20
    },
    container: {
        backgroundColor: Colors.WHITE,
        flex: 1
    },
    edit: {
        // flex: 1,
        // backgroundColor: "red",
        // alignItems: "flex-start",
        marginBottom: 0
    },
    font1: {
        fontSize: Fonts.SIZE_15,
        fontFamily: Fonts.MEDIUM,
        color: Colors.BLACK
    },
    font2: {
        fontSize: Fonts.SIZE_12,
        fontFamily: Fonts.MEDIUM,
        color: Colors.GRAY_DARK
    },
    profileContainer: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginHorizontal: 20, marginVertical: 20 }
});
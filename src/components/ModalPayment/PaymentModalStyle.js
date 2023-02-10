import { StyleSheet } from "react-native";
import { Colors, Constants, Fonts } from "../../global";

export const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
    backgroundColor: '#000000aa',
    justifyContent: 'flex-end',
  },
  childContainer: {
    flexGrow: 0.9,
    backgroundColor: Colors.WHITE,
  },
  header: {
    backgroundColor: Colors.PRIMARY,
    flexDirection: 'row',
    justifyContent: "flex-end",
    width: "100%"
  },
  headerFirstChild: {
    flex: 1,
    paddingLeft: 20,
    paddingVertical: 20,
  },
  headerText: {
    fontFamily: Fonts.MEDIUM,
    fontSize: Fonts.SIZE_16,
    color: Fonts.BLACK
  },
  headerSecondChild: {
    paddingRight: 26,
    paddingVertical: 20,
    paddingLeft: 20
  },
  firstChild: {
    flexGrow: 1,
    paddingVertical: 20,
    paddingHorizontal: 20
  },

  editText: {
    fontFamily: Fonts.MEDIUM,
    fontSize: Fonts.SIZE_13,
    color: Fonts.BLACK,
  },
  shareText: {
    fontFamily: Fonts.MEDIUM,
    fontSize: Fonts.SIZE_13,
    color: Fonts.BLACK,
  },
  deleteText: {
    fontFamily: Fonts.MEDIUM,
    fontSize: Fonts.SIZE_13,
    color: Fonts.BLACK,
  },
  editContainer: {
    // backgroundColor: 'yellow',
    paddingBottom: 15,
  },
  shareContainer: {
    // backgroundColor: 'red',
    paddingBottom: 15,
  },
  deleteContainer: {
    // backgroundColor: 'skyblue',
    paddingBottom: 15,
  }
});
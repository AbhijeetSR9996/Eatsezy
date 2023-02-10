import { StyleSheet } from "react-native";
import { Fonts } from "../../global";

export const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: "flex-end",
    justifyContent: "center"
  },
  boxContainer: {
    flexDirection: 'row',
    // flex: 1,
    // justifyContent: 'flex-end'
    // backgroundColor: 'yellow'
    // alignItems: 'center',
  },
  greyBox: {
    height: 12,
    width: 12,
    flexDirection: 'row',
    backgroundColor: '#c6c6c6',
    borderRadius: 2,
    marginRight: 2,
    borderTopLeftRadius: 2,
    borderBottomLeftRadius: 2,
  },
  greyBoxRedPortion: {
    height: 12,
    backgroundColor: "#c03a2b",
    borderRadius: 2,
  },
  whiteStarCon: {
    height: 6,
    width: 6,
    position: 'absolute',
    zIndex: 100,
    top: 3,
    left: 3,
  },
  totalRating: {
    fontFamily: Fonts.BOLD,
    fontSize: 12,
    color: '#161616',
    marginTop: 5,

  }
});
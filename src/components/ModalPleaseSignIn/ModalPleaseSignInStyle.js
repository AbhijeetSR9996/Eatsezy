import { StyleSheet } from "react-native";
import { Colors, Fonts } from "../../global";

export const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: '#000000aa',
    justifyContent: 'flex-end'
  },
  confirmContainer: {
    flex: 0.25,
    backgroundColor: Colors.WHITE,
    paddingBottom: 20
  },
  confirmHeader: {
    backgroundColor: Colors.BLACK,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  confirmDeliveryText: {
    paddingLeft: 20,
    paddingTop: 20,
    paddingBottom: 20,
    fontFamily: Fonts.MEDIUM,
    fontSize: Fonts.SIZE_16,
    color: Colors.WHITE,
    letterSpacing: 0.2,

  },
  closeButton: {
    // paddingLeft: 20,
    // paddingTop: 20,
    // paddingBottom: 20,
    paddingRight: 20,
    justifyContent: 'center',
  },
  confirmTextContainer: {
    alignItems: "center",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
  },
  confirmText: {
    fontFamily: Fonts.MEDIUM,
    fontSize: Fonts.SIZE_14,
    color: Fonts.BLACK,
    letterSpacing: 0.2,
  },
  confirmTextButtonContainer: {
    paddingTop: 20,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  yesButton: {
    paddingVertical: 12,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.BLACK,
    borderRadius: 10,
    marginLeft: 10
  },
  yesButtonText: {
    fontFamily: Fonts.MEDIUM,
    fontSize: Fonts.SIZE_16,
    color: Colors.WHITE,
  },
});
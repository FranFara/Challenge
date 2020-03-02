import { StyleSheet } from "react-native";
import { responsiveSize, normalize } from "../../utils/dimensions";

export const styles = StyleSheet.create({
  input: {
    flex: 1,
    width: responsiveSize(300),
    height: responsiveSize(45),
    backgroundColor: "white",
    paddingHorizontal: responsiveSize(10),
    fontSize: normalize(18),
    elevation: 5,
    borderRadius: responsiveSize(10),
    borderWidth: responsiveSize(3),
    borderColor: "#eb9d3d"
  }
});

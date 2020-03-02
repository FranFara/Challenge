import { StyleSheet } from "react-native";
import { responsiveSize, normalize } from "../../utils/dimensions";

export const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    height: responsiveSize(120),
    width: "100%",
    backgroundColor: "#eb9d3d",
    borderRadius: responsiveSize(10),    
    marginVertical: responsiveSize(10)
  },
  image: {
    width: responsiveSize(100),
    height: responsiveSize(100),
    borderRadius: responsiveSize(50),
    borderWidth: responsiveSize(2),
    borderColor: "white",
    marginHorizontal: responsiveSize(15)
  },
  titleContainer: {
    width: responsiveSize(230),
    justifyContent: "center",
    paddingHorizontal: responsiveSize(20)
  },
  title: {
    fontSize: normalize(24),
    color: "white"
  }
});

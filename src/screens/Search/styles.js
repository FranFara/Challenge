import { StyleSheet } from "react-native";
import {responsiveSize, normalize} from '../../utils/dimensions';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start"
  },
  buttonContainer: {
    marginLeft: responsiveSize(10)
  },
  flatListContainer: {
    width: "100%",
    paddingHorizontal: responsiveSize(10)
  },
  backButton: {
    height: responsiveSize(40),
    width: responsiveSize(50),
    justifyContent: "center",
    backgroundColor: "#eb9d3d",
    borderWidth: 1,
    borderRadius: responsiveSize(5),
    borderColor: "white",
    alignItems: "center",
    marginRight: responsiveSize(5)
  },
  textButtonBack: {
    fontSize: normalize(16),
    color: "white"
  },
  inputContainer: {
    flexDirection: "row",    
    height: responsiveSize(45),
    margin: responsiveSize(10),
    alignItems: "center",
    justifyContent: "flex-start"
  }
});

import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start"
  },
  buttonContainer: {
    marginLeft: 10
  },
  flatListContainer: {
    width: "100%",
    paddingHorizontal: 10
  },
  backButton: {
    height: "80%",
    width: "15%",
    justifyContent: "center",
    backgroundColor: "#eb9d3d",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "white",
    alignItems: "center",
    marginRight: 5
  },
  textButtonBack: {
    fontSize: 16,
    color: "white"
  },
  inputContainer: {
    flexDirection: "row",
    width: "95%",
    height: 50,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "flex-start"
  }
});

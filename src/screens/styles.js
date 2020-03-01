import { StyleSheet, Platform } from "react-native";

export const stylesSearch = StyleSheet.create({
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
  setInputContainer: {
    flexDirection: "row",
    width: "95%",
    height: 50,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "flex-start"
  }
});

export const stylesHome = StyleSheet.create({
    screen: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "white",
      borderWidth: 3,
      borderColor: "#eb9d3d"
    },
    container: {
      width: "100%",
      height: 50,
      alignItems: "center"
    },
    titleContainer: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 5
    },
    title: {
      fontSize: 30,
      color: "#eb9d3d"
    },
    titleCocktail: {
      fontFamily: Platform.OS === "android" ? "sans-serif-medium" : "Arial-BoldMT"
    },
    titleFinder: {
      fontFamily: Platform.OS === "android" ? "sans-serif-light" : "Arial"
    }
  });
import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
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

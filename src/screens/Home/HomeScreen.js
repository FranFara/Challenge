import React from "react";
import { View, Text } from "react-native";
import { styles } from './styles';
import Input from "../../components/Input/Input";

const Home = props => {
  const { navigate } = props.navigation;
  
  return (
    <View style={styles.screen}>
      <View style={styles.titleContainer}>
        <Text style={{ ...styles.title, ...styles.titleCocktail }}>
          Cocktail
        </Text>
        <Text style={{ ...styles.title, ...styles.titleFinder }}>Finder</Text>
      </View>
      <View style={styles.container}>
        <Input
          placeholder="Search your favorite cocktail..."
          onFocus={() => {
            navigate({ routeName: "Search" });
          }}
        />
      </View>
    </View>
  );
};

export default Home;

import React from "react";
import { View, Text } from "react-native";
import { stylesHome } from './styles';
import Input from "../components/Input";

const Home = props => {
  const { navigate } = props.navigation;
  
  return (
    <View style={stylesHome.screen}>
      <View style={stylesHome.titleContainer}>
        <Text style={{ ...stylesHome.title, ...stylesHome.titleCocktail }}>
          Cocktail
        </Text>
        <Text style={{ ...stylesHome.title, ...stylesHome.titleFinder }}>Finder</Text>
      </View>
      <View style={stylesHome.container}>
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

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Input from '../components/Input';

const Home = props => {
  const {navigate} = props.navigation;
  return (
    <View style={styles.screen}>
      <View style={styles.titleContainer}>
        <Text style={{...styles.title, ...styles.titleCocktail}}>Cocktail</Text>
        <Text style={{...styles.title, ...styles.titleFinder}}>Finder</Text>
      </View>
      <View style={styles.container}>
        <Input
          placeholder="Search your favorite cocktail..."
          onFocus={() => {
            navigate({routeName: 'Search'});
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderWidth: 3,
    borderColor: '#eb9d3d',
  },
  container: {
    width: '100%',
    height: 50,
    alignItems: 'center',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  title: {
    fontSize: 30,
    color: '#eb9d3d',
  },
  titleCocktail: {
    fontFamily: 'sans-serif-medium',
  },
  titleFinder: {
    fontFamily: 'sans-serif-light',
  },
});

export default Home;

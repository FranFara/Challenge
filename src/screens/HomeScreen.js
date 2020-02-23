import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Input from '../components/Input';

const Home = props => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>cockTAIL</Text>
      <Input
        placeholder="Search your favorite cocktail..."
        onFocus={() => {
          props.navigation.navigate({routeName: 'Search'});
        }}
        autoCapitalize="none"
      />
    </View>
  );
};

Home.navigationOptions = {
  headerShown: false,
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
  title: {
    fontSize: 30,
    color: '#eb9d3d',
    marginBottom: 5,
  },
});

export default Home;

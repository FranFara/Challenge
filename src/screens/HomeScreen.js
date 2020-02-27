import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Input from '../components/Input';

const Home = props => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>cockTAIL</Text>
      <View style={styles.container}>
        <Input
          placeholder="Search your favorite cocktail..."
          onFocus={() => {
            props.navigation.navigate({routeName: 'Search'});
          }}
          autoCapitalize="none"
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
  title: {
    fontSize: 30,
    color: '#eb9d3d',
    marginBottom: 5,
  },
});

export default Home;

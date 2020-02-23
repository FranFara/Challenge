import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Search = props => {
  return (
    <View style={styles.screen}>
      <Text>Search</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Search;

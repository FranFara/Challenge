import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

const Input = props => {
  return <TextInput style={styles.input} {...props} />;
};

const styles = StyleSheet.create({
  input: {
    flex: 1,
    width: '85%',
    backgroundColor: 'white',
    paddingHorizontal: 10,
    fontSize: 18,
    elevation: 5,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#eb9d3d',
  },
});

export default Input;

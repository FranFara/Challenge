import React from 'react';
import {StyleSheet} from 'react-native';
import AppContainer from './src/navigation/navigator';

const App = () => {
  return <AppContainer style={styles.screen} />;
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default App;

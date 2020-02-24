import React from 'react';
import {StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import configureStore from './src/store/configureStore';

import AppContainer from './src/navigation/navigator';

let store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <AppContainer style={styles.screen} />
    </Provider>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default App;

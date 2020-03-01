import React from "react";
import { Provider } from "react-redux";
import configureStore from "./src/store/configureStore";

import AppContainer from "./src/navigation/navigator";

let store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
};

export default App;

// Imports: Dependencies
import React from "react";

import { Provider } from "react-redux";
// Imports: Screens
import Counter from "./app/screens/Counter";
// Imports: Redux Store
import { store } from "./app/store/store";

// React Native App
export default App = () => {
  return (
    // Redux: Global Store
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};

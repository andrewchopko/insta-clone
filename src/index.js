import React from "react";
import ReactDOM from "react-dom";
import App from './components/App/App';
import "./components/global-styles.js";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from "./reducers/rootReducer";

function configureStore() {
  const store = createStore(rootReducer);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept("./reducers/rootReducer", () => {
      const nextRootReducer = require("./reducers/rootReducer");
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}

const store = configureStore();


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("app"));

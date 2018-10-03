import React from "react";
import ReactDOM from "react-dom";
import App from './components/App/App';
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { Provider } from 'react-redux';
import rootReducer from "./store/reducers/rootReducer";
import { someSagaFunc } from "./sagas/sagas";


const sagaMiddleware = createSagaMiddleware();

function configureStore() {
  const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(someSagaFunc);
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept("./store/reducers/rootReducer", () => {
      const nextRootReducer = require("./store/reducers/rootReducer");
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}

const store = configureStore();


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("app"));

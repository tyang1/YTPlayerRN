// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow
//  */

import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import reducer from "./ytapp/reducers";
import AppContainer from "./ytapp/containers/AppContainer"


configureStore = initialState => {
  const enhancer = compose(applyMiddleware(thunkMiddleware));
  return createStore(reducer, initialState, enhancer);
};

const store = configureStore({});


const App = () => (
  <Provider store={store}>
    <AppContainer />
  </Provider>
);

export default App;

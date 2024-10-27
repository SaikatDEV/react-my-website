import React from "react";
import ReactDOM from "react-dom/client";
// import Tailwind style
import "../src/styles.css";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
// This below will help to use React Router
import { BrowserRouter } from "react-router-dom";
// REDUX set up----------------------------
import { configureStore, applyMiddleware, compose } from "@reduxjs/toolkit";
// import rootRouter from "./reducers";
import rootReducer from "./reducers";
// This below is a redux connection with the app
import { Provider } from "react-redux";
// THUNK
import { thunk } from "redux-thunk";

// We will use this if we dont need thunk
// const devToolExt =
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

// We need this for thunk, So we can use applymiddleware for thunk
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// create store, SO we can use devtool and combine reducer
const store = configureStore(
  {
    reducer: rootReducer,
  },
  composeEnhancer(applyMiddleware(thunk))
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

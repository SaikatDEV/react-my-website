import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
// This below will help to use React Router
import { BrowserRouter } from "react-router-dom";
// REDUX set up----------------------------
import { configureStore } from "@reduxjs/toolkit";
import rootRouter from "./reducers";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
// This below is a redux connection with the app
import { provider } from "react-redux";

// create store, SO we can use devtool and combine reducer
const store = configureStore(
  {
    reducer: rootReducer,
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </provider>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

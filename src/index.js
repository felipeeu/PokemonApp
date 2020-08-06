import React from "react";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import storage from "redux-persist/lib/storage";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./containers/App";
import * as serviceWorker from "./serviceWorker";
import { createStore, applyMiddleware } from "redux";
import Reducers from "./reducers/index";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import thunk from "redux-thunk";

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['pokemons'] 
};

const persistedReducer = persistReducer(persistConfig, Reducers);


const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistStore(store)}>
          <App />
        </PersistGate>
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

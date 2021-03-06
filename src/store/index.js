// libs
import { getFirebase } from "react-redux-firebase";
import { applyMiddleware, compose, createStore } from "redux";
import { reduxFirestore } from "redux-firestore";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";

// config
import firebaseConfig from "../services/firebase/config";
// reducers
import rootReducer from "./reducers/rootReducer";

let middlewares = [thunk.withExtraArgument({ getFirebase })];
let composeEnhancers = compose;

if (process.env.NODE_ENV === "development") {
  const logger = createLogger({ collapsed: true });
  middlewares = [...middlewares, logger];
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares), reduxFirestore(firebaseConfig))
);

export default store;

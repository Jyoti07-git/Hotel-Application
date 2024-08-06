import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer"; // Adjust the path if necessary

const logger = createLogger();
const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;

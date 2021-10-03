import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";

import rootReducer from "./reducers";

const middleWares = [thunk];
const store = createStore(rootReducer, applyMiddleware(...middleWares));

export default store;

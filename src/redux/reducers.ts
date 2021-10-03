import { combineReducers } from "redux";

import pokeReducer from "./poke/reducers";
import pokeDetailsReducer from "./pokeDetails/reducers";
import configReducer from "./config/reducers";

const reducers = combineReducers({
  pokemon: pokeReducer,
  details: pokeDetailsReducer,
  config: configReducer,
});

export default reducers;

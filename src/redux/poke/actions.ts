import axios from "axios";
import { POKEMON_ERR, POKEMON_LOADING, POKEMON_SUCCESS } from "../actionTypes";

export const getPokemons = () => (dispatch: any) => {
  dispatch({ type: POKEMON_LOADING });

  axios
    .get("/pokemon?limit=151")
    .then(({ data }) => dispatch({ type: POKEMON_SUCCESS, payload: data.results }))
    .catch((err) => dispatch({ type: POKEMON_ERR }));
};

import axios from "axios";
import { POKEMON_DETAILS_ERR, POKEMON_DETAILS_LOADING, POKEMON_DETAILS_SUCCESS } from "../actionTypes";

export const getPokemonDetails = (id: number) => (dispatch: any) => {
  dispatch({ type: POKEMON_DETAILS_LOADING });

  axios
    .get(`/pokemon/${id}`)
    .then(({ data }) => dispatch({ type: POKEMON_DETAILS_SUCCESS, payload: data }))
    .catch((err) => dispatch({ type: POKEMON_DETAILS_ERR }));
};

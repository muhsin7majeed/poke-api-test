import { POKEMON_DETAILS_ERR, POKEMON_DETAILS_LOADING, POKEMON_DETAILS_SUCCESS } from "redux/actionTypes";
import { Action, PokemonDetailsState } from "types/redux";

const initialState: PokemonDetailsState = {
  loading: false,
  details: null,
};

const pokeDetailsReducer = (state = initialState, action: Action): PokemonDetailsState => {
  const { payload, type } = action;

  switch (type) {
    case POKEMON_DETAILS_LOADING:
      return {
        ...state,
        loading: true,
      };

    case POKEMON_DETAILS_SUCCESS:
      return {
        loading: false,
        details: payload,
      };

    case POKEMON_DETAILS_ERR:
      return {
        loading: false,
        details: null,
      };

    default:
      return state;
  }
};

export default pokeDetailsReducer;

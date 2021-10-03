import { POKEMON_ERR, POKEMON_LOADING, POKEMON_SUCCESS } from "redux/actionTypes";
import { Action, PokemonState } from "types/redux";

const initialState: PokemonState = {
  loading: false,
  pokemons: null,
};

const pokeReducer = (state = initialState, action: Action): PokemonState => {
  const { payload, type } = action;

  switch (type) {
    case POKEMON_LOADING:
      return {
        ...state,
        loading: true,
      };

    case POKEMON_SUCCESS:
      return {
        loading: false,
        pokemons: payload,
      };

    case POKEMON_ERR:
      return {
        loading: false,
        pokemons: null,
      };

    default:
      return state;
  }
};

export default pokeReducer;

import reducers from "redux/reducers";
import { Pokemon, PokemonDetails } from "./pokemon";

export interface PokemonState {
  loading: boolean;
  pokemons: Pokemon[] | null;
}

export interface PokemonDetailsState {
  loading: boolean;
  details: PokemonDetails | null;
}

export interface ConfigState {
  darkMode: boolean;
}

export interface Action {
  type: string;
  payload?: any;
}

export type RootState = ReturnType<typeof reducers>;

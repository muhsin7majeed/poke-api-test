export interface Pokemon {
  name: string;
  url: string;
}

export interface PokemonAbilities {
  ability: Pokemon;
  is_hidden: boolean;
  slot: number;
}

interface PokemonHeldItemsVersion {
  rarity: number;
  version: Pokemon;
}

interface PokemonHeldItems {
  item: Pokemon;
  version_details: PokemonHeldItemsVersion[];
}

interface PokemonMoveDetails {
  level_learned_at: number;
  move_learn_method: Pokemon;
  version_group: Pokemon;
}

interface PokemonMoves {
  move: Pokemon;
  version_group_details: PokemonMoveDetails[];
}

export interface PokemonStats {
  base_stat: number;
  effort: number;
  stat: Pokemon;
}

export interface PokemonDetails {
  abilities: PokemonAbilities[];
  base_experience: number;
  forms: Pokemon[];
  height: number;
  held_items: PokemonHeldItems[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: PokemonMoves[];
  name: string;
  order: number;
  species: Pokemon;
  stats: PokemonStats[];
  weight: number;
}

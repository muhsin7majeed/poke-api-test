import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "redux/poke/actions";
import { Pokemon } from "types/pokemon";

import { PokemonState, RootState } from "types/redux";

import s from "./style.module.scss";
import Suggestions from "./Suggestions";

const Search = () => {
  const dispatch = useDispatch();
  const { loading, pokemons } = useSelector<RootState, PokemonState>((state) => state.pokemon);

  const [keyword, setKeyword] = useState<string>("");
  const [filteredPokemons, setFilteredPokemons] = useState<Pokemon[]>([]);

  function handleKeyword(event: React.ChangeEvent<HTMLInputElement>) {
    setKeyword(event.target.value);
  }

  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch]);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (!keyword) return setFilteredPokemons([]);

      const filtered = pokemons?.filter((p: Pokemon) => p.name.includes(keyword));

      setFilteredPokemons(filtered || []);
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [keyword, pokemons]);

  return (
    <div className={s.wrapper}>
      <div className={s.form_group}>
        <input
          name="pokemon"
          type="search"
          placeholder={loading ? "loading.." : "Search for a pokemon 😀"}
          value={keyword}
          onChange={handleKeyword}
        />

        <Suggestions pokemons={filteredPokemons} searchWord={keyword} />
      </div>
    </div>
  );
};

export default Search;

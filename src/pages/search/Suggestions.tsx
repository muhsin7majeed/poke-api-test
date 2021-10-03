import s from "./style.module.scss";
import { Pokemon } from "types/pokemon";
import { useHistory } from "react-router-dom";
import { findIdFromUrl } from "helpers/utils";

interface Props {
  pokemons: Pokemon[];
  searchWord: string;
}

const Suggestions = ({ pokemons, searchWord }: Props) => {
  const history = useHistory();

  function handleClick(p: Pokemon) {
    const pokeId = findIdFromUrl(p.url);

    history.push(`/pokemon/${pokeId}`);
  }

  if (searchWord && !pokemons.length) return <span className={s.info}>are you sure you got the right name? </span>;

  return (
    <ul className={s.suggestion_wrapper}>
      {pokemons.map((p: Pokemon, idx: number) => (
        <li key={idx} onClick={() => handleClick(p)}>
          {p.name}
        </li>
      ))}
    </ul>
  );
};

export default Suggestions;

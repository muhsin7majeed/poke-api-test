import s from "./style.module.scss";
import { PokemonAbilities } from "types/pokemon";

interface Props {
  abilities?: PokemonAbilities[];
}

const Abilities = ({ abilities }: Props) => {
  return (
    <div className={s.ability_wrapper}>
      <h2>Abilities</h2>

      <ul>
        {abilities?.map((s: PokemonAbilities) => (
          <li key={s.ability.name}>{s.ability.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Abilities;

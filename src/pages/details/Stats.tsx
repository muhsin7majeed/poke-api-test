import s from "./style.module.scss";
import { PokemonStats } from "types/pokemon";

interface Props {
  stats?: PokemonStats[];
}

const Stats = ({ stats }: Props) => {
  return (
    <div className={s.stat_wrapper}>
      <h2>Stats</h2>

      <ul>
        {stats?.map((s: PokemonStats) => (
          <li key={s.stat.name}>
            {s.stat.name} - {s.base_stat}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Stats;

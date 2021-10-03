import SplashScreen from "components/SplashScreen";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RouteComponentProps } from "react-router";

import { getPokemonDetails } from "redux/pokeDetails/actions";
import { PokemonDetailsState, RootState } from "types/redux";
import Abilities from "./Abilities";
import Stats from "./Stats";
import s from "./style.module.scss";

interface MatchParams {
  id: string;
}

const PokemonDetails = ({ match }: RouteComponentProps<MatchParams>) => {
  const dispatch = useDispatch();

  const { loading, details } = useSelector<RootState, PokemonDetailsState>((state) => state.details);

  useEffect(() => {
    dispatch(getPokemonDetails(+match.params.id));
  }, [dispatch, match.params.id]);

  if (loading) return <SplashScreen />;

  return (
    <div className="container">
      <div className={s.wrapper}>
        <div className={s.left}>
          <h1>{details?.name}</h1>

          <Abilities abilities={details?.abilities} />
        </div>

        <div className={s.right}>
          <Stats stats={details?.stats} />
        </div>
      </div>
    </div>
  );
};

export default PokemonDetails;

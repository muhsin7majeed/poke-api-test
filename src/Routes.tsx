import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

const Search = React.lazy(() => import(/* webpackChunkName: "search-pokemons" */ "./pages/search"));
const PokemonDetails = React.lazy(() => import(/* webpackChunkName: "pokemon-details" */ "./pages/details"));

const Routes = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Search} />
        <Route path="/pokemon/:id" component={PokemonDetails} />
        <Redirect from="*" to="/" />
      </Switch>
    </>
  );
};

export default Routes;

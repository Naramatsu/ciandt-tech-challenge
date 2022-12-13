import React, { useContext, useEffect } from "react";
import { AppContext } from "../../context";
import { Chip } from "@mui/material";
import { Link } from "react-router-dom";
import PieChart from "../PieChart";
import { useHistory } from "react-router-dom";
import "./Overview.style.scss";

const extractPokemonNameFromUrl = (path) => {
  return path.split("/")[2];
};

const splitStatName = (stat) => stat.split("-").join(" ");

const Overview = () => {
  const { pokemon, getPokemonInformation, isFetching } = useContext(AppContext);
  const history = useHistory();
  const pokemonName = extractPokemonNameFromUrl(history.location.pathname);

  useEffect(() => {
    if (!pokemon || !pokemon[pokemonName]) {
      getPokemonInformation(pokemonName);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pokemon, pokemonName]);

  const officialArtWork = "official-artwork";
  let pokemonOveriew = null;
  if (pokemon && pokemon[pokemonName]) pokemonOveriew = pokemon[pokemonName];

  return (
    <section className="pokemon__overview">
      <Link to="/">Back to home</Link>
      {isFetching ? (
        <p>Loading...!</p>
      ) : (
        <section className="container">
          <section className="info__group">
            <section>
              <section className="info__group groups">
                <img
                  src={
                    pokemonOveriew?.sprites?.other[officialArtWork]
                      .front_default
                  }
                  alt="pokemon preview"
                />
                <section>
                  <h1>{pokemonOveriew?.name}</h1>
                  <p>
                    <b>Weight:</b> {pokemonOveriew?.weight}Lbs
                  </p>
                  <p>
                    <b>Height:</b> {pokemonOveriew?.height}In
                  </p>
                  <h3>Types</h3>
                  {pokemonOveriew?.types?.map(({ type }, index) => (
                    <Chip key={index} label={splitStatName(type.name)} />
                  ))}
                </section>
              </section>
              <section>
                <h3>Stats</h3>
                {pokemonOveriew?.stats?.map((stat, index) => (
                  <React.Fragment key={index}>
                    <p>
                      <b>{splitStatName(stat.stat.name)}: </b> {stat.base_stat}
                    </p>
                  </React.Fragment>
                ))}
              </section>
            </section>
            <section style={{ width: "-webkit-fill-available" }}>
              {pokemonOveriew?.stats && (
                <PieChart
                  data={pokemonOveriew.stats.map((stat) => ({
                    name: stat.stat.name,
                    base: stat.base_stat,
                  }))}
                />
              )}
            </section>
          </section>
          <h3>Abilities</h3>
          {pokemonOveriew?.abilities?.map(({ ability }, index) => (
            <Chip key={index} label={splitStatName(ability.name)} />
          ))}
          <h3>Moves</h3>
          {pokemonOveriew?.moves?.map(({ move }, index) => (
            <Chip key={index} label={splitStatName(move.name)} />
          ))}
        </section>
      )}
    </section>
  );
};

export default Overview;

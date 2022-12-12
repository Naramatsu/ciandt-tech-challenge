import React, { useContext } from "react";
import { AppContext } from "../../context";
import CardPreview from "../CardPreview";
import "./FightSection.style.scss";

const FightSection = () => {
  const { fight } = useContext(AppContext);
  return (
    <>
      {fight.map((pokemon, index) => {
        const [type] = pokemon.types;
        const [hp, attack, defense, specialAttack, specialDefense, speed] =
          pokemon.stats;
        const officialArtWork = "official-artwork";
        return (
          <section className="section__fight__card" key={index}>
            <CardPreview
              name={pokemon.name}
              img={pokemon.sprites.other[officialArtWork].front_default}
              type={type.type.name}
              weight={pokemon.weight}
              height={pokemon.height}
              hp={hp.base_stat}
              attack={attack.base_stat}
              defense={defense.base_stat}
              specialAttack={specialAttack.base_stat}
              specialDefense={specialDefense.base_stat}
              speed={speed.base_stat}
            />
            <img className="vs__logo" src="vs.png" alt="vs" />
          </section>
        );
      })}
    </>
  );
};

export default FightSection;

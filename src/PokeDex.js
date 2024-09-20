import React from "react";
import { useAxios } from './hooks';
import PokemonSelect from "./PokemonSelect";
import PokemonCard from "./PokemonCard";
import "./PokeDex.css";

/* Renders a list of pokemon cards.
 * Can also add a new card at random,
 * or from a dropdown of available pokemon. */
function PokeDex() {
  const [pokemon, addPokemon] = useAxios("https://pokeapi.co/api/v2/pokemon/");
  
  const addNewPokemon = async name => {
   
    await addPokemon(name);
  };

  return (
    <div className="PokeDex">
      <div className="PokeDex-buttons">
        <h3>Please select your pokemon:</h3>
        <PokemonSelect add={addNewPokemon} />
      </div>
      <div className="PokeDex-card-area">
        {pokemon.map(cardData => (
          cardData.sprites && cardData.sprites.front_default ? (
            <PokemonCard
              key={cardData.id}
              front={cardData.sprites.front_default}
              back={cardData.sprites.back_default}
              name={cardData.name}
              stats={cardData.stats.map(stat => ({
                value: stat.base_stat,
                name: stat.stat.name
              }))}
            />
          ) : null
        ))}
      </div>
    </div>
  );
}

export default PokeDex;

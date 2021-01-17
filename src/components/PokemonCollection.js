import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokemon, search}) {

  const searchPokemon = pokemon.filter((pokemon) => pokemon.name.toLowerCase().includes(search.toLowerCase()))

  const showPokemon = searchPokemon.map((pokemonObj) => {
    return (
      <PokemonCard key={pokemonObj.id} pokemonObj={pokemonObj} />
    )
  })
  return (
    <Card.Group itemsPerRow={6}>
      <h1>Hello From Pokemon Collection</h1>
      {showPokemon}
    </Card.Group>
  );
}

export default PokemonCollection;

import React, {useState} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage({pokemon, onHandlePokeForm}) {
  const [search, setSearch] = useState('')

  function handleSearch(input) {
    setSearch(input)
  }

  // console.log(search)


  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onHandlePokeForm={onHandlePokeForm} />
      <br />
      <Search onHandleSearch={handleSearch} />
      <br />
      <PokemonCollection pokemon={pokemon} search={search}/>
    </Container>
  );
}

export default PokemonPage;

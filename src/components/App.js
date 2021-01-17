import React, { useState, useEffect} from "react";
import PokemonPage from "./PokemonPage";

function App() {
  const [pokemon, setPokemon] = useState([])

  useEffect(() => {

    fetch('http://localhost:3001/pokemon')
      .then(response => response.json())
      .then(pokeArray => setPokemon(pokeArray))
  }, [])
    

  function handlePokeForm(newPokemon) {
    console.log(newPokemon)
    setPokemon([newPokemon, ...pokemon])
  }

  // console.log(pokemon)
  

  return (
    <div className="App">
      <PokemonPage pokemon={pokemon} onHandlePokeForm={handlePokeForm}/>
    </div>
  );
}


export default App;

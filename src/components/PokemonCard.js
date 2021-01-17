import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({pokemonObj}) {

  const [imageflip, setImageFlip] = useState(true)

  function handleFlip() {
    setImageFlip(!imageflip)
  }

  

  return (
    <Card>
      <div>
        <div className="image">
          {imageflip ? <img onClick={handleFlip} src={pokemonObj.sprites.front} alt={pokemonObj.name} /> : 
          <img onClick={handleFlip} src={pokemonObj.sprites.back} alt={pokemonObj.name} />}    
        </div>
        <div className="content">
          <div className="header">{pokemonObj.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
           {pokemonObj.hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;

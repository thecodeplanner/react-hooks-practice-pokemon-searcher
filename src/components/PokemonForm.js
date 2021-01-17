import React, {useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({onHandlePokeForm}) {
  const [name, setName] = useState('')
  const [hp, setHp] = useState('')
  const [frontImg, setFrontImg] = useState('')
  const [backImg, setBackImg] = useState('')

  function handleNameInput(event) {
    setName(event.target.value)
  }

  function handleHpInput(event) {
    setHp(event.target.value)
  }

  function handleFrontImgInput(event) {
    setFrontImg(event.target.value)
  }

  function handleBackImgInput(event) {
    setBackImg(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()

    const newPokemon = {
      name,
      hp,
      sprites: {front: frontImg, back: backImg}
    }

    onHandlePokeForm(newPokemon)

    setName('')
    setHp('')
    setFrontImg('')
    setBackImg('')

    fetch('http://localhost:3001/pokemon', {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPokemon),
      })
      .then(response => response.json())
      .then(data => {
      console.log('Success:', data);
      })

  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" value={name} onChange={handleNameInput}/>
          <Form.Input fluid label="hp" placeholder="hp" name="hp" value={hp} onChange={handleHpInput}/>
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={frontImg}
            onChange={handleFrontImgInput}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={backImg}
            onChange={handleBackImgInput}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;

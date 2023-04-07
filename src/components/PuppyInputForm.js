
import React, { useState } from 'react';
import { addNewPlayer } from '../ajaxHelpers'

export default function PuppyInputForm(props) {

  const { puppies, setPuppies } = props;
  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    addNewPlayer({ name, breed });
    setPuppies([...puppies,{name,breed}] )
    setName('');
    setBreed('');
    
  };

  return (
    <form onSubmit={handleSubmit} className="new-puppy-form">
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)} />

        <label htmlFor="breed">Breed:</label>
        <input
          type="text"
          name="breed"
          value={breed}
          onChange={(event) => setBreed(event.target.value)} />
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

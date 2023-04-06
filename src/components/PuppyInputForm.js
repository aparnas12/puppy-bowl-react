import React from 'react';

export default function PuppyInputForm() {
    return (
      <form className = "new-puppy-form">
      <label htmlFor="name">Name:</label>
      <input type="text" name="name" />
      <label htmlFor="breed">Breed:</label>
      <input type="text" name="breed" />
      <button type="submit">Submit</button>
    </form>
    );
  }
  
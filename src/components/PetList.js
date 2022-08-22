import React from 'react';
import SinglePet from './SinglePet';

// PetList only renders one SinglePet. We'd like it to render a list of pets,
// passed in as props.pets. Don't forget to add a unique key to each one!
const PetList = (props) => {
  const pets = props.pets
  return (
    <>
    <div id="pets">
      {
        pets.map(pet => <SinglePet pet={pet} key={pet.id} />)
      }
    </div>
    <select>
      <option value='cats'>Cats</option>
      <option value='dogs'>Dogs</option>
      <option value='all'>All</option>
    </select>
    </>
  )
}

export default PetList


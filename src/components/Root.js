import React, {useState, useEffect} from 'react';
import PetList from './PetList';

// We'll render these sample pets for now. Later, we'll instead fetch the list
// of pets from the server! We won't need samplePets after that.
import samplePets from '../petdata';



const Root = () => {

  const [adoptionStatus, setAdoptionStatus] = useState([])
function changeAdoptStatus(){
  
}

  return (
    <>
      <h1>Adoption Center</h1>
      <PetList pets={samplePets} />
    </>
  )
}

export default Root;

import React from 'react'

const SinglePet = (props) => {
  const name = props.pet.name
  const description = props.pet.description
  const species = props.pet.species
  let adoptedStatus = 'single-pet'
  let adoptedStatusButton = 'Available'

  function changeAdoptStatus() {
    if (adoptedStatusButton === 'Available'){
      console.log('Changing status to Adopted')
      adoptedStatusButton = 'Adopted'
      adoptedStatus = 'single-pet-adopted'
    } else{
      adoptedStatusButton = 'Available'
      adoptedStatus = 'single-pet'
    }
  }

  return (
    <div className={adoptedStatus}>
      <p>Name: {name}</p>
      <p>Species: {species}</p>
      <p>Description: {description}</p>
      <button className='Toggle Status' onClick={changeAdoptStatus}>
        {adoptedStatusButton}
      </button>
    </div>
  )
}

export default SinglePet

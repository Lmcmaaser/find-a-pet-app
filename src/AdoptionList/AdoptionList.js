import React from 'react'
// import { NavLink } from 'react-router-dom';
import PetContext from '../PetContext';
// import { getAdoptedPets } from '../pets-helpers'
// import HasError from '../HasError';import './AdoptionList.css'

//renders list of notes
class AdoptionList extends React.Component {
  static contextType = PetContext
  render () {
    const { pets=[] } = this.context;
    console.log(pets); // works, returns all pets
    const adoptedPets = pets.filter(function (pet) {
      return pet.adopted;
    })
    console.log(adoptedPets) //returns adopted pets
    return (
      <div className='AdoptedList'>
        <h3>All Pets that Have Been Adopted</h3>
          <ul className='list'>
            {adoptedPets.map((pet) =>
              <li key={pet.id}>
                Id: {pet.id}
                Name: {pet.name}
                Sex: {pet.sex}
                Age: {pet.age}
              </li>
            )}
          </ul>
      </div>
    )
  }
}


export default AdoptionList;

import React from 'react';
import PetContext from '../PetContext';

export default class ShowAll extends React.Component {
  static contextType = PetContext
  render () {
    const { pets=[], types=[] } = this.context;
    console.log(pets, types); // works, returns all pets
    const allPets = pets.filter(function (pet) {
      return pet.id;
    })
    console.log('allPets:', allPets)
    return (
      <div className='AdoptedList'>
        <h3>All Pets</h3>
          <ul className='list'>
            {allPets.map((pet) =>
              <li key={pet.id}>
                Pet: {pet.name}
              </li>
            )}
          </ul>
      </div>
    )
  }
}

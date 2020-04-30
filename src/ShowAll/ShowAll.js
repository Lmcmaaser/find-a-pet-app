import React from 'react';
import PetContext from '../PetContext';

export default class ShowAll extends React.Component {
  constructor(props) {
    super(props) {
      this.state = {
        filteredPets: []
      }
    }
  }

  static contextType = PetContext

  updateAdopted = (filter) => {
    // =call pets helpers.getAdopted(pets, filter)
    //
    let newFilteredPets = findAdopted(this.state.filteredPets, filter);
    this.setState({
      filteredPets: newFilteredPets
    })
  }

  // call inside render
  updateType = (filter) => {
    // =call pets helpers.getAdopted(pets, filter)
    //
    let newFilteredPets = getPetsInType(this.state.filteredPets, filter);
    this.setState({
      filteredPets: newFilteredPets
    })
  }

  render () {
    const { pets=[], types=[] } = this.context;
    console.log(pets, types); // works, returns all pets
    const allPets = pets.filter(function (pet) {
      return pet.id;
    })
    console.log('allPets:', allPets)
    return (
      // formatted  checkbox text area, maybe a submit button
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

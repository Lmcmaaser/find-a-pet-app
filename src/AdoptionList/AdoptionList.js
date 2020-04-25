import React from 'react'
import { Link } from 'react-router-dom'
import PetContext from '../PetContext'
import './AdoptionList.css'

//renders list of notes
class AdoptionList extends React.Component {
  // defaultProps is a property in React component used to set default values for the props argument.
  // It will be changed if the prop property is passed.
  static defaultProps = {
    match: {
      params: {}
    }
  }

  static contextType = PetContext
  render () {
    const { pets=[] } = this.context
    console.log(pets) //returns all pets
    return (
      <div className='AdoptedList'>
        <h3>All Pets that Have Been Adopted</h3>
          <ul className='list'>
            {pets.map(pet =>
              <li key={pet.adopted}>
                <HasError>
                  <NavLink
                    className='petadopted-link'
                    to={`/pet/${pet.adopted}`}
                  >
                    {pet.name}
                  </NavLink>
                </HasError>
              </li>
            )}
          </ul>
      </div>
    )
  }
}


export default AdoptionList;

import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Note from '../Note/Note'
import CircleButton from '../CircleButton/CircleButton'
import ApiContext from '../ApiContext'
import { getAdoptedinPets } from '../pets-helpers'
import './NoteListMain.css'
import HasError from '../HasError'
import PropTypes from 'prop-types'

//renders list of notes
class AdoptionList extends React.Component {
  // defaultProps is a property in React component used to set default values for the props argument.
  // It will be changed if the prop property is passed.
  static defaultProps = {
    match: {
      params: {}
    }
  }

  static contextType = ApiContext
  render () {
    const { petdopted } = this.props.match.params
    const { pets=[] } = this.context
    console.log(pets) //returns all pets
    const adoptedInPets = getAdoptedinPets(pets, petadopted)
    console.log(adoptedInPets)
    return (
      <div className='AdoptedList'>
        <h3>All Pets that Have Been Adopted</h3>
        <HasError>
          <ul className='list'>
            {adoptedInPets.map((pet) =>
              <li key={pet.adopted} id={pet.adopted}>
                <Link to={`/pet/${adopted}`}>
                  {name, pet_type, sex, age, date_arrived}
                </Link>
              </li>
            )}
          </ul>
        </HasError>
      </div>
    )
  }
}

NoteListMain.propTypes = {
  match: PropTypes.object
}

export default NoteListMain;

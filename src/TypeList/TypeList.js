import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import ApiContext from '../ApiContext';
import HasError from '../HasError';
import { countPetsInType } from '../pets-helpers';
import './TypeList.css';

class TypeList extends React.Component {
  static contextType = ApiContext;
  render () {
    const { types=[], pets=[] } = this.context  //an object containing 2 arrays are assiged the value of this.context
    return (
      <div className='TypeList'>
        <h3>Click a Pet Type to Sort Pets by Type</h3>
        <ul className='list'>
          {types.map(type =>
            <li key={type.typeid}>
              <HasError>
                <NavLink
                  className='type-link'
                  to={`/type/${type.typeid}`}
                >
                  <span className='count'>
                    {countPetsInType(pets, type.typeid)}
                  </span>
                  {type.pet_type}
                </NavLink>
              </HasError>
            </li>
          )}
        </ul>
      </div>
    )
  }
}
// NoteListNav__folder-link contains a link to the folders added to the app
// NoteListNav__num-notes displays the # of notes in each folder
export default NoteListNav;

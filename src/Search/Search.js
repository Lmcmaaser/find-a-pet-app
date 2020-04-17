import React from 'react';
import ApiContext from '../ApiContext';
import DogFilter from '../TypeFilter/DogFilter';
import CatFilter from '../TypeFilter/CatFilter';
import BirdFilter from '../TypeFilter/BirdFilter';
import './Search.css';
//add a show results component

class Search extends React.Component {
  static contextType = ApiContext;
  render () {
    // const { type=[], animals=[] } = this.context
    return (
      <div className="search-db">
        <h2>
          Search for an Animal in the Database by type (* required field)
        </h2>
        <DogFilter />
        <CatFilter />
        <BirdFilter />
      </div>
    )
  }
}

export default Search;

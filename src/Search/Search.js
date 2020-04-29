import React from 'react';
import { Route, Link } from 'react-router-dom';
import PetContext from '../PetContext';
import TypeList from '../TypeList/TypeList';
import AdoptionList from '../AdoptionList/AdoptionList';
import ShowAll from '../ShowAll/ShowAll';
import './Search.css';
//add a show results component

class Search extends React.Component {
  static contextType = PetContext;
  render () {
    return (
      <div className="search-db">
        <h2>Search the Pet DataBase</h2>
        <div>
          <ul>
            <li>
              <Link to="/search/all">All Pets</Link>
            </li>
            <li>
              <Link to="/search/type">Pets by Type</Link>
            </li>
            <li>
              <Link to="/search/adopted">Adopted Pets</Link>
            </li>
          </ul>
        </div>
        <div>
          <Route path ='/search/all' component={ShowAll} />
          <Route path='/search/type' component={TypeList} />
          <Route path='/search/adopted' component={AdoptionList} />
        </div>
      </div>
    )
  }
}

export default Search;

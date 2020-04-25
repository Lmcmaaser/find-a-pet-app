import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import PetContext from '../PetContext';
// import HasError from '../HasError';
import TypeList from '../TypeList/TypeList';
import AdoptionList from '../AdoptionList/AdoptionList';
import './Search.css';
//add a show results component

class Search extends React.Component {
  static contextType = PetContext;
  render () {
    const { pets=[], types=[] } = this.context;
    return (
      <div className="search-db">
        <h2>Search the Pet DataBase</h2>
        <Route exact path='/search' component={Search} />
        <Route path='/search/type' component={TypeList} />
        <Route path='/search/adopted' component={AdoptionList} />
      </div>
    )
  }
}

export default Search;

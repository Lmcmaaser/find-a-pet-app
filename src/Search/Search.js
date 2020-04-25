import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import PetContext from '../PetContext';
// import HasError from '../HasError';
import TypeList from '../TypeList/TypeList';
import AdoptionList from '../AdoptionList/AdoptionList';
import './Search.css';
//add a show results component

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pets: this.props.data.pets,
      types: this.props.data.types
    }
  };
  /*constructor(props) {
      super(props);
      this.handleInput = this.handleInput.bind(this);
      this.state = {
        query: '',
        results: []
      }
  }*/

  static defaultProps = {
    match: {
      params: {}
    }
  }
  static contextType = PetContext;

  /*handleInput(title) {
      console.log("handleInput fired")
      console.log(title) //correctly passes input
      this.setState({title})
  }

  /*handleSubmit(event) {
    event.preventDefault();
    fetch(pets)
      .then(response => response.json())
      .then(data => {
          console.log(data) //displays json data in console
          this.props.onSubmit(data.pets);
      }
  }*/

  render () {
    const { animals=[] } = this.context;
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

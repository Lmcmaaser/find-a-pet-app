import React from 'react';
import ApiContext from '../ApiContext';
// import HasError from '../HasError';
import TypeList from '../TypeList';
import AdoptionList from '../AdoptionList';
import './Search.css';
//add a show results component

class Search extends React.Component {

  Constructor(props) {
      super(props);
      this.handleInput = this.handleInput.bind(this);
      this.state = {
        query: '',
        results: []
  }
   // static contextType = ApiContext;

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
    const { animals=[] } = this.context
    return (
      <div className="search-db">
        <h2>Search the Pet DataBase</h2>
        <Route exact path='/search' component={Search} />
        <Route path='/search/type' component={TypeList} />
        <Route path='/search/adopted' component={AdoptionList}
      </div>
    )
  }
}

export default Search;

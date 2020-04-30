import React from 'react';
import PetContext from '../PetContext';
import { findAdopted, findPetType, findSex, findName, findAge } from '../pets-helpers'
import './Search.css';
//add a show results component?

export default class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        filteredPets: []
      }
  }

  static contextType = PetContext;

  updateAdopted(filter) {
    let newFilteredPets = findAdopted(this.state.filteredPets, filter);
    this.setState({
      filteredPets: newFilteredPets
    })
  }
  updatePetType(filter) {
    let newFilteredPets = findPetType(this.state.filteredPets, filter);
    this.setState({
      filteredPets: newFilteredPets
    })
  }
  updateSex(filter) {
    let newFilteredPets = findSex(this.state.filteredPets, filter);
    this.setState({
      filteredPets: newFilteredPets
    })
  }

  updateName(filter) {
    let newFilteredPets = findName(this.state.filteredPets, filter);
    this.setState({
      filteredPets: newFilteredPets
    })
  }

  updateAge(filter) {
    let newFilteredPets = findAge(this.state.filteredPets, filter);
    this.setState({
      filteredPets: newFilteredPets
    })
  }

  /*handleSubmit(event) {
    event.preventDefault();
  }*/

  render () {
    const { filteredPets } = this.state ;
    console.log("search results:", filteredPets);
    return(
      <div>
        <form className="search-form" onSubmit={event => this.handleSubmit(event)}>
          <h2>Search the Database</h2>
          <fieldset>
            <legend>Search Form</legend>
              <label htmlFor="container">
                <input
                  type="checkbox"
                  id="dog"
                  name="pet_type"
                  value="dog"
                  aria-label="select pet type"
                  onChange={event => this.updatePetType(event.target.value)}
                />
                <span className="checkmark"></span>
              Dog</label>

              <label htmlFor="container">
                <input
                  type="checkbox"
                  id="cat"
                  name="pet_type"
                  value="cat"
                  aria-label="select pet type"
                  onChange={event => this.updatePetType(event.target.value)}
                />
                <span className="checkmark"></span>
              Cat</label>

              <label htmlFor="container">
                <input
                  type="checkbox"
                  id="pet_type"
                  name="bird"
                  value="bird"
                  aria-label="select pet type"
                  onChange={event => this.updatePetType(event.target.value)}
                />
                <span className="checkmark"></span>
              Bird</label>

              <label htmlFor="container">
                <input
                  type="checkbox"
                  id="male"
                  name="sex"
                  value="male"
                  aria-label="select-male-sex"
                  onChange={event => this.updateSex(event.target.value)}
                />
                <span className="checkmark"></span>
              Male</label>
              <label htmlFor="container">
                <input
                  type="checkbox"
                  id="female"
                  name="sex"
                  value="female"
                  aria-label="select-female-sex"
                  onChange={event => this.updateSex(event.target.value)}
                />
                <span className="checkmark"></span>
              Female</label>

              <label htmlFor="container">
                <input
                  type="checkbox"
                  id="adopted"
                  name="adopted"
                  value="adopted"
                  aria-label="select adopted"
                  onChange={event => this.updateAdopted(event.target.value)}
                />
                <span className="checkmark"></span>
              Adopted</label>

              <label  className="main-label" htmlFor="name">Name *</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Fluffy"
                aria-label=" input name"
                onChange={event => this.updateName(event.target.value)}
              />

              <label className="main-label" htmlFor="age">Age *</label>
              <input
                type="text"
                name="age"
                id="age"
                placeholder="5"
                aria-label="input age"
                onChange={event => this.updateAge(event.target.value)}
              />

            <div>
              <button
                type="submit"
                className="submit-button"
                aria-label="submit-button"
              >
                Search
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    )
  }
}

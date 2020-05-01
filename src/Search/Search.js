import React from 'react';
import PetContext from '../PetContext';
import { findAdopted, findPetType, findSex, findName, findAge } from '../pets-helpers'
import Store from '../dummy-store';
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
  /*The contextType property on a class can be assigned a Context object created by React.createContext(). This lets you consume the nearest current value of that Context type using this.context*/

  componentDidMount() {
    this.context.setPets(Store.pets)
  }

   getFilteredPets() {
    // Make a copy of the
    const filteredPets = this.context.pets

    if (this.state.nameFilter) {
      filteredPets = findName(filteredPets , this.state.nameFilter)
     }

    if (this.state.petTypeFilter) {
      filteredPets = findPetType(filteredPets, this.state.petTypeFilter)
    }

    if (this.state.sexFilter) {
      filteredPets = findSex(filteredPets, this.state.sexFilter)
    }

    if (this.state.adoptedFilter) {
      filteredPets = findAdopted(filteredPets, this.state.adoptedFilter)
    }

    if (this.state.ageFilter) {
      filteredPets = findAge(filteredPets, this.state.ageFilter)
    }

  }

  updateAdopted(filter) {
    this.setState({
      adopted: filter,
    })

  }
  updatePetType(filter) {
    this.setState({
      petType: filter,
    })
  }
  updateSex(filter) {
    this.setState({
      sex: filter,
    })
  }

  updateName(filter) {
    this.setState({
      name: filter,
    })
  }

  updateAge(filter) {
    this.setState({
      age: filter,
    })
  }


  render () {
    let filteredPets = this.getFilteredPets()
    console.log(filteredPets);
    return(
      <div>
        <form className="search-form">
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
              <p>
                * Name must include characters from the modern English alphabet.
              </p>

              <label className="main-label" htmlFor="age">Age *</label>
              <input
                type="text"
                name="age"
                id="age"
                placeholder="5"
                aria-label="input age"
                onChange={event => this.updateAge(event.target.value)}
              />
              <p>
                * Age must contain at least one number and be between 1 and 2 characters long.
              </p>
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
        <div className="results-section">
          <h4>Results:</h4>
          <div className="results-list">
            list of retrieved search items
              <div>Pets:{filteredPets}</div>
          </div>
        </div>
      </div>
    )
  }
}

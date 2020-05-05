import React from 'react';
import PetContext from '../PetContext';
// import { findAdopted, findPetType, findSex, findName, findAge } from '../pets-helpers'
import Store from '../dummy-store';
import './Search.css';
//add a show results component?

export default class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        // filteredPets: []
        name: {
          value: '',
          touched: false
        },
        type: {
          value: '',
          touched: false
        },
        sex: {
          value: '',
          touched: false
        },
        age: {
          value: '',
          touched: false
        },
        adopted: {
          value: '',
          touched: false
        }
      }
  }

  static contextType = PetContext;
  /*The contextType property on a class can be assigned a Context object created by React.createContext(). This lets you consume the nearest current value of that Context type using this.context*/

  // occurs after render
  componentDidMount() {
    this.context.setPets(Store.pets)
  }

  // "filter" is the value of the selected input
  updateAdopted(filter) {
    this.setState({
      adoptedFilter: filter
    })
    console.log("adopted", filter)
  }

  updateDog(filter) {
    this.setState({
      dogFilter: filter
    })
  }

  updateCat(filter) {
    this.setState({
      catFilter: filter
    })
  }

  updateBird(filter) {
    this.setState({
      birdFilter:filter
    })
  }

  updateSex(filter) {
    this.setState({
      sexFilter: filter
    })
  }

  updateName(filter) {
    this.setState({
      nameFilter: filter
    })
  }

  updateAge(filter) {
    this.setState({
      ageFilter: filter
    })
  }

  // event listener for when a pet_type checkbox is unchecked and the filter is removed
  /*handleCheck() {
	  this.setState({
      checked: !this.state.checked
    });
  }*/
  /*a function that takes in an array of pets and returns a filtered array based on the filter values on the state
  // checking for equality
  // In the filter callback, check each filter to see if it was applied. If it has a value and that value does not match the pet's value, return false (leave the pet out of the results). If the filter callback checks all the filters and still hasn't returned false, return true (keep the pet in the results).*/
  getFilteredPets = (pets) => {
    return pets.filter((pet) => {
        if (this.state.nameFilter && pet.name !== this.state.nameFilter)
          return false;
        if (this.state.dogFilter && pet.pet_type !== this.state.dogFilter)
          return false;
        if (this.state.catFilter && pet.pet_type !== this.state.catFilter)
          return false;
        if (this.state.birdFilter && pet.pet_type !== this.state.birdFilter)
          return false;
        if (this.state.sexFilter && pet.sex !== this.state.sexFilter)
          return false;
        if (this.state.adoptedFilter && pet.adopted !== this.state.adoptedFilter)
          return false;
        if (this.state.ageFilter && pet.age !== this.state.ageFilter)
          return false;
        return true;
    });
  }

  //does nothing currently
  handleSubmit(event) {
    event.preventDefault();
    const filteredPets = this.getFilteredPets()
    console.log("handleSubmit():", filteredPets)
  }

  // does not reset the state, just unselects everything
  // resetForm(event) {
  resetForm = () => {
    this.setState({
      name: '',
      dog: '',
      cat: '',
      bird: '',
      male: '',
      female: '',
      age: ''
    });
  }

  // document.getElementById("search-form").reset();
  // onSubmit={event => this.handleSubmit(event)}
  render () {
    const { pets=[] } = this.context
    let filteredPets = this.getFilteredPets(pets)
    console.log("render-section:", filteredPets); //displays twice in console??
    return(
      <div>
        <form className="search-form" id="search-form" onSubmit={event => this.handleSubmit(event)}>
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
                  onChange={event => this.updateDog(event.target.value)}
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
                  onChange={event => this.updateCat(event.target.value)}
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
                  onClick={event => this.updateBird(event.target.value)}
                />
                <span className="checkmark"></span>
              Bird</label>

              <label htmlFor="container">
                <input
                  type="radio"
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
                  type="radio"
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
                  type="radio"
                  id="yes"
                  name="adopted"
                  value="yes"
                  aria-label="select adopted"
                  onChange={event => this.updateAdopted(event.target.value)}
                />
                <span className="checkmark"></span>
              Adopted</label>

              <label htmlFor="container">
                <input
                  type="radio"
                  id="no"
                  name="adopted"
                  value="no"
                  aria-label="select adopted"
                  onChange={event => this.updateAdopted(event.target.value)}
                />
                <span className="checkmark"></span>
              Unadopted</label>

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
                className="reset-button"
                aria-label="reset button"
              >
                Submit
              </button>
              <button
                type="reset"
                value="Reset"
                className="reset-button"
                aria-label="reset button"
                onClick={this.resetForm}
              >
                Reset Search
              </button>
            </div>
          </fieldset>
        </form>
        <div className="results-section">
          <h4>Results:</h4>
          <div className="results-list">
            <ul>list of retrieved search items
              {filteredPets.map((pet) =>
                <li key={pet.id}>
                  Id: {pet.id}
                  Name: {pet.name}
                  Type: {pet.pet_type}
                  Sex: {pet.sex}
                  Age: {pet.age}
                  Adopted: {pet.adopted}
                </li>
              )}
            </ul>
          </div>

        </div>
      </div>
    )
  }
}

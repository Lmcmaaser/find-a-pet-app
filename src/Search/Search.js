import React from 'react';
import PetContext from '../PetContext';
import Store from '../dummy-store';
import './Search.css';

export default class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        pet_typeFilter  : [],
        name: {
          value: '',
          touched: false
        },
        pet_type: {
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

  componentDidMount() {
    this.context.setPets(Store.pets)
  }

  // "filter" is the value of the selected input
  // this.state.pet_typeFilter will contain an array of the selected animals to be filtered
  updatePetType(event) {
    let selectedValues = [...this.state.pet_typeFilter];
    if (event.target.checked) {
      if (selectedValues.indexOf(event.target.value) === -1) {
        selectedValues.push(event.target.value);
      }
    } else {
      selectedValues = selectedValues.filter(item => item !== event.target.value);
    }
    this.setState({
      pet_typeFilter: selectedValues
    }, ()=>{console.log(this.state.pet_typeFilter)})
  }

  updateSex(filter) {
    this.setState({
      sexFilter: filter
    })
  }

  updateAdopted(filter) {
    this.setState({
      adoptedFilter: filter
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

  /*a function that takes in an array of pets and returns a filtered array based on the filter values on the state*/
  // checking for equality
  //logical operator (&&) returns the boolean value TRUE if both operands are TRUE and returns FALSE otherwise//
  getFilteredPets = (pets) => {
    return pets.filter((pet) => {
        if (
          (this.state.pet_typeFilter.length === 0 || this.state.pet_typeFilter.indexOf(pet.pet_type) > -1)
          &&
            (!this.state.sexFilter || this.state.sexFilter === pet.sex)
          &&
            (!this.state.adoptedFilter || this.state.adoptedFilter === pet.adopted)
          &&
            (!this.state.nameFilter || pet.name === this.state.nameFilter)
          &&
            (!this.state.ageFilter || pet.age === this.state.ageFilter)
          ) {
           return true;
        } else {
          return false;
        }
    });
  }

  // unselects everything
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

  render () {
    const { pets=[] } = this.context
    let filteredPets = this.getFilteredPets(pets)
    return(
      <div>
        <form className="search-form" id="search-form" >
          <h2>Search the Database</h2>
          <fieldset>
            <legend>Search Form</legend>
              <label htmlFor="container">
                <input
                  type="checkbox"
                  id="pet_type"
                  name="pet_type"
                  value="dog"
                  aria-label="select pet type"
                  onChange={event => this.updatePetType(event)}
                />
                <span className="checkmark"></span>
              Dog</label>

              <label htmlFor="container">
                <input
                  type="checkbox"
                  id="pet_type"
                  name="pet_type"
                  value="cat"
                  aria-label="select pet type"
                  onChange={event => this.updatePetType(event)}
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
                  onClick={event => this.updatePetType(event)}
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
          <h4>Search Results:</h4>
          <div className="results-list">
            <ul>List of pets:
              {filteredPets.map((pet) =>
                <li key={pet.id}>
                  Id: {pet.id}<br>
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

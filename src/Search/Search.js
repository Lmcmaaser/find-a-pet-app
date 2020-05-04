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
        filteredPets: []
        /*name: {
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
        }*/
      }
  }

  static contextType = PetContext;
  /*The contextType property on a class can be assigned a Context object created by React.createContext(). This lets you consume the nearest current value of that Context type using this.context*/

  componentDidMount() {
    this.context.setPets(Store.pets)
  }
  /*a function that takes in an array of pets and returns a filtered array based on the filter values on the state
  // store the pet type, name, etc in state, and then have one filter in your render method
  // checking for equality
  // In the filter callback, check each filter to see if it was applied. If it has a value and that value does not match the pet's value, return false (leave the pet out of the results). If the filter callback checks all the filters and still hasn't returned false, return true (keep the pet in the results).*/
  // getFilteredPets(filteredPets) {
  getFilteredPets (pets) => {
    return pets.filter((pet) => {
        if (this.state.nameFilter && pet.name !== this.state.nameFilter)
          return false;
        if (this.state.petTypeFilter && pet.pet_type !== this.state.petTypeFilter)
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

  /*getFilteredPets() {

    let filteredPets = this.context.pets
    console.log("First, line 26:", filteredPets)

    if (this.state.nameFilter) {
      filteredPets = findName(filteredPets , this.state.nameFilter)
     }

    if (this.state.petTypeFilter) {
      filteredPets = findPetType(filteredPets, this.state.petTypeFilter)
    } //petTypeFilter currently shows one type, needs to show multiple types


    if (this.state.sexFilter) {
      filteredPets = findSex(filteredPets, this.state.sexFilter)
    }

    if (this.state.adoptedFilter) {
      filteredPets = findAdopted(filteredPets, this.state.adoptedFilter)
    }

    if (this.state.ageFilter) {
      filteredPets = findAge(filteredPets, this.state.ageFilter)
    }

    return filteredPets;

  }*/

  updatePetType(pet_type) {
    this.setState({pet_type: {value: pet_type, touched: true}});
  }
  updateName(name) {
    this.setState({name: {value: name, touched: true}});
  }
  updateSex(sex) {
    this.setState({sex: {value: sex, touched: true}});
  }
  updateAge(age) {
    this.setState({age: {value: age, touched: true}});
  }
  updateAdopted(adopted) {
    this.setState({adopted: {value: adopted, touched: true}})
  }
  /*updateAdopted(filter) {
    this.setState({
      adoptedFilter: filter
    })
  }

  updatePetType(filter) {
    this.setState({
      petTypeFilter: filter
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
  }*/

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
    let filteredPets = this.getFilteredPets()
    console.log("final:", filteredPets);
    return(
      <div>
        <form className="search-form" id="search-form" >
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
                  value="yes"
                  aria-label="select adopted"
                  onChange={event => this.updateAdopted(event.target.value)}
                />
                <span className="checkmark"></span>
              Adopted</label>

              <label htmlFor="container">
                <input
                  type="checkbox"
                  id="adopted"
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
                Reset
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

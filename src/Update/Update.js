import React from 'react'
import PetContext from '../PetContext'
// import ValidationError from '../ValidationError.js'
import './Update.css';

class Update extends React.Component {
  state = {
    pet: {
      value: ''
    }
  }

  static contextType = PetContext;

  constructor(props) {
    super(props);
    this.state = {
      id: {
        value: '',
        touched: false
      },
      name: {
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
    };
  }

  static defaultProps = {
    match: {
      params: {}
    }

  }

  updateName(name) {
    this.setState({
      nameChange: name
    });
    console.log(name)
  }

  updateAge(age) {
    this.setState({
      ageChange: age
    });
    console.log(age)
  }

  updateAdopted(adopted) {
    this.setState({
      adoptedChange: adopted
    });
    console.log(adopted)
  }

  /*updateId(id) {
    this.setState({
      selectedId: id
    })
    console.log(id) //shows correct id info
  }*/

  /*findObj(pets, selectedId) {
    // const { pets=[] } = this.context //overwrites pets argument
      // if the selected id matches an id in the pets array
    if (this.state.selectedId && pet.id === this.state.selectedId) {
        //should return desired object
        return pets.find(pet => pet.id === selectedId);
      }
    console.log(pets)
    pets.modifyObj(); //calls function to update the desire object
  }

  modifyObj() {
    //if the name input has been changed and does not match the original
    if (this.state.nameChange && pet.name === this.state.nameChange) {
      // update the value for name
      return pets.name = this.state.nameChange
    }
    if (this.state.ageChange && pet.age === this.state.ageChange) {
      return pets.age = this.state.ageChange
    }
    if (this.state.adoptedChange && pet.adopted === this.state.adoptedChange) {
      return pets.adopted = this.state.ageChange
    }
    console.log(pets)
  }*/

  getPet(pet) {
    return pet === pet.id
  }

  handleSubmit(event) {
    console.log("submit fired")
    event.preventDefault();
    const pet = {
      name: event.target.name.value,
      age: event.target.age.value,
      adopted: event.target.adopted.value
    }
    console.log(pet)
    this.context.updatePet(pet)
    //I have no idea what to do with this.
  }


  render() {
    const { pets=[] } = this.context;
    // const { pet } = this.props.match.params;
    // console.log(pets)
    const pet = pets.find(pet => pet.id === this.props.match.params.id)
    // gets from route
    console.log(pet) //shows pet
    let displayArr = Object.values(pet); //shows desired pet
    //fix format
    return (
      <form className="update-form" onSubmit={event => this.handleSubmit(event)}>
        <h2>Update a Pets's Information</h2>
        <fieldset>
          <legend>Update Form</legend>
            <label className="main-label">Current Information:</label>
              <div>
                {displayArr}
              </div>
            <h4>Enter Information to Update</h4>
            <label  className="main-label" htmlFor="name">Name </label>
            <input
              type="text"
              name="name"
              id="name"
              // placeholder= { pet.name }
              aria-label=" input name"
              onChange={event => this.updateName(event.target.value)}
            />

            <label className="main-label" htmlFor="age">Age *</label>
            <input
                type="text"
                name="age"
                id="age"
                // placeholder= {pet.age}
                onChange={event => this.updateAge(event.target.value)}
            />

            <label htmlFor="container">
              <input
                type="radio"
                id="yes"
                name="adopted"
                value="yes"
                aria-label="select adopted"
                // {pet.adopted === "yes" ? "checked":;}
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
          <div>
            <button
              type="submit"
              className="submit-button">
              Submit
            </button>
          </div>
        </fieldset>
      </form>
    )
  }
}

export default Update;

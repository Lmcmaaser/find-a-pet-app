import React from 'react'
import PetContext from '../PetContext'
import ValidationError from '../ValidationError.js'
import './Update.css';

class Update extends React.Component {
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

  updateId(id) {
    this.setState({
      selectedId: id
    })
    console.log(id) //shows correct id info
  }

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

  handleSubmit(event) {
    console.log("submit fired")
    event.preventDefault();
    const { pets=[] } = this.context
    const { id, name, pet_type, sex, age } = this.state;
    pets.findObj();
    //I have no idea what to do with this.
  }

  validateId() {
    const id = this.state.id.value.trim();
    if (id.length < 0) {
      return "Id is required";
    }
  }

  render() {
    const { pets=[] } = this.context;
    console.log(pets)
    const { pet } = pets.find(pet => pet.id === this.props.match.params.id)
    // gets from route
    console.log(pet)

    return (
      <form className="update-form" onSubmit={event => this.handleSubmit(event)}>
        <h2>Update an animal's information</h2>
        <fieldset>
          <legend>Update Form</legend>


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
              className="submit-button"
              disabled={
              this.validateId()
            }>
              Submit
            </button>
          </div>
        </fieldset>
      </form>
    )
  }
}

export default Update;

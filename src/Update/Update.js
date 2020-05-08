import React from 'react'
import PetContext from '../PetContext'
import ValidationError from '../ValidationError.js'
import './Update.css';

class Update extends React.Component {
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

  static contextType = PetContext;

  updateId(id) {
    this.setState({
      selected: id
    })
    console.log(id) //shows correct id info
  }

  updateName(name) {
    this.setState({name: {value: name, touched: true}});
  }

  updateAge(age) {
    this.setState({age: {value: age, touched: true}});
  }

  updateAdopted(adopted) {
    this.setState({adopted: {value: adopted, touched: true}});
  }

  // finds desired pet by id input
  findSelectedPet = (pets) => {
    return pets.filter((pet) => {
      if (this.state.selected && pet.id === this.state.selected) {
        return true;
      } else {
        return false
      }
    })
    let selectedPet = this.findSelectedPet(pets)
    console.log(selectedPet);
  }

  // replaces old values with new ones
  Replace(selectedPet) {
    selectedPet.name = {this.state.name.value},
    selectedPet.age = {this.state.age.value},
    selectedPet.adopted = {this.state.adopted.value}
    return selectedPet
    console.log(selectedPet);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.context.updatePet(selectedPet)
  }

// works after s
  validateId() {
    const id = this.state.id.value.trim();
    if (id.length === 0) {
      return "Id is required";
    }
  }
// validation functions work!
  validateName() {
    const name = this.state.name.value.trim();
    if (!name.match(/[A-z]/)) {
      return "Name must include characters from the modern English alphabet";
    }
  }
  validateAge() {
    const age = this.state.age.value.trim();
    if (age.length < 0 || age.length > 2) {
      return "Age must be between 1 and 2 characters long.";
    } else if (!age.match(/[0-9]/)) {
      return "Age must contain at least one number";
    }
  }

  render() {
    // const { pets=[] } = this.context
    const idError = this.validateId();
    const nameError = this.validateName();
    const ageError = this.validateAge();
    return (
      <form className="update-form" onSubmit={event => this.handleSubmit(event)}>
        <h2>Update an animal's information</h2>
        <fieldset>
          <legend>Update Form</legend>
            <label  className="main-label" htmlFor="id">Id *</label>
            <input
              type="text"
              name="id"
              id="id"
              placeholder="34996177-5809-4d03-a4d1-ce0d4309a84d"
              onChange={event => this.updateId(event.target.value)}
            />
            {this.state.name.touched && (
              <ValidationError message={idError} />
            )}

            <label  className="main-label" htmlFor="name">Name </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Fluffy"
              aria-label=" input name"
              onChange={event => this.updateName(event.target.value)}
            />
            {this.state.name.touched && (
              <ValidationError message={nameError} />
            )}

            <label className="main-label" htmlFor="age">Age *</label>
            <input
                type="text"
                name="age"
                id="age"
                placeholder="5"
                onChange={event => this.updateAge(event.target.value)}
            />
            {this.state.age.touched && (
                <ValidationError message={ageError} />
            )}

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
          <div>
            <button
              type="submit"
              className="submit-button"
              disabled={
              this.validateName() ||
              this.validateAge() ||
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

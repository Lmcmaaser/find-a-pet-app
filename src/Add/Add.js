import React from 'react';
// import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import ValidationError from '../ValidationError.js';
import PetContext from '../PetContext';
import './Add.css';


class Add extends React.Component {
  static contextType = PetContext;

  constructor(props) {
    super(props)
    this.state = {
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
      }
    };
  }

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
  // uuid library works
  handleSubmit(event) {
    event.preventDefault();
    const { name, pet_type, sex, age } = this.state;
    const uuid = uuidv4();
    const pet = {
      id: uuid,
      name: name.value,
      pet_type: pet_type.value,
      sex: sex.value,
      age: age.value
    }
    console.log(pet)
    this.context.addPet(pet)
  }

  // validations work
  validateName() {
    const name = this.state.name.value.trim();
    if (!this.state.name.touched) {
      return
    }
    if (name.length === 0) {
      // this.name.current.focus();
      return "Name is required";
    } else if (!name.match(/[A-z]/)) {
      this.name.current.focus();
      return "Name must include characters from the modern English alphabet";
    }
  }

  validateAge() {
    const age = this.state.age.value.trim();
    if (age.length === 0) {
      return "Age is required";
    } else if (age.length < 0 || age.length > 2) {
      return "Age must be between 1 and 2 characters long.";
    } else if (!age.match(/[0-9]/)) {
      return "Age must contain at least one number";
    }
  }

  render () {
    const nameError = this.validateName();
    const ageError = this.validateAge();
    return (
      <form className="add-form" onSubmit={event => this.handleSubmit(event)}>
        <h2>Add an animal to the database (*  indicates a required field)</h2>
        <fieldset>
          <legend>Add Form</legend>
          <label className="main-label" htmlFor="pet_type">Select a type for your no * </label>
          <select
            name="pet_type"
            aria-label="select pet type"
            onChange={event => this.updatePetType(event.target.value)}
          >
            {this.context.types.map(type =>
              <option key={type.pet_type} value={type.pet_type}>{type.pet_type}</option>
            )}
          </select>
          <div className="part">
            <label  className="main-label" htmlFor="name">Name *</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Fluffy"
              aria-label="add-name"
              aria-required="true"
              aria-invalid={ this.state.name.touched && !!nameError }
              aria-describedby="nameError"
              onChange={event => this.updateName(event.target.value)}
            />
              {this.state.name.touched && (
                <ValidationError message={nameError} id="nameError"/>
              )}
          </div>
          <div className="part">
            <label className="main-label" htmlFor="sex">Sex *</label>
            <input
              type="radio"
              id="male"
              name="sex"
              value="male"
              aria-label="add-male-sex"
              required
              onChange={event => this.updateSex(event.target.value)}
            />
            <label htmlFor="male">Male</label>

            <input
              type="radio"
              id="female"
              name="sex"
              value="female"
              aria-label="add-female-sex"
              onChange={event => this.updateSex(event.target.value)}
            />
            <label htmlFor="female">Female</label>
          </div>
          <div className="part">
            <label className="main-label" htmlFor="age">Age *</label>
            <input
              type="text"
              name="age"
              id="age"
              required
              placeholder="5"
              aria-label="add-age"
              onChange={event => this.updateAge(event.target.value)}
            />
            {this.state.age.touched && (
              <ValidationError message={ageError} />
            )}
          </div>
          <div>
            <button
              type="submit"
              className="submit-button"
              aria-label="submit-button"
              disabled={
              this.validateName() ||
              this.validateAge()
              }
            >
              Submit
            </button>
          </div>
        </fieldset>
      </form>
    )
  }
}
export default Add;

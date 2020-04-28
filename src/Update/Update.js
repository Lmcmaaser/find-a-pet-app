import React from 'react'
import PetContext from '../PetContext'
import ValidationError from '../ValidationError.js'
import './Update.css';

class Update extends React.Component {
  static contextType = PetContext;
  constructor(props) {
    super(props);
    this.state = {
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
    this.setState({name: {value: name, touched: true}});
  }

  updateAge(age) {
    this.setState({age: {value: age, touched: true}});
  }

  updateAdoptionStatus(adopted) {
    this.setState({adopted: {value: adopted, touched: true}});
  }

  handleSubmit(event) {
    event.preventDefault();
    const { name, age, adopted } = this.state;
    console.log('Name: ', name.value);
    console.log('Age: ', age.value);
    console.log('Adopted: ', adopted.value);
  }

// validation functions work!

  validateName() {
    const name = this.state.name.value.trim();
    if (name.length === 0) {
      return "Name is required";
    } else if (!name.match(/[A-z]/)) {
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

  render() {
    // const { types=[], pets=[] } = this.context
    const nameError = this.validateName();
    const ageError = this.validateAge();
    return (
      <form className="update-form">
        <h2>Update an animal's information</h2>
        <fieldset>
          <legend>Update Form</legend>
          <div className="part">
            <label  className="main-label" htmlFor="name">Name *</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Rocco"
              onChange={event => this.updateName(event.target.value)}
            />
            {this.state.name.touched && (
              <ValidationError message={nameError} />
            )}
          </div>
          <div className="part">
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
            </div>
          <div className="part">
            <label className="main-label" htmlFor="adoption">Adoption status</label>
            <input
              type="radio"
              id="yes"
              name="yes"
              value="yes"
              onChange={event => this.updateAdoptionStatus(event.target.value)}
            />
            <label htmlFor="yes">Yes</label>
          </div>
          <div>
            <button
              type="submit"
              className="submit-button"
              disabled={
              this.validateName() ||
              this.validateAge()}>
              Submit
            </button>
          </div>
        </fieldset>
      </form>
    )
  }
}

export default Update;

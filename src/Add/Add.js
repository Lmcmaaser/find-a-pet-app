import React from 'react'
import ValidationError from '../ValidationError.js'
import './Add.css';

class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: {
        value: '',
        touched: false
      },
      name: {
        value: '',
        touched: false
      },
      gender: {
        value: '',
        touched: false
      },
      age: {
        value: '',
        touched: false
      },
      arrived: {
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

  addType(type) {
    this.setState({type: {value: type, touched: true}});
  }
  addName(name) {
    this.setState({name: {value: name, touched: true}});
  }
  addGender(gender) {
    this.setState({gender: {value: gender, touched: true}});
  }
  addAge(age) {
    this.setState({age: {value: age, touched: true}});
  }
  addArrived(arrived) {
    this.setState({arrived: {value: arrived, touched: true}});
  }

  handleSubmit(event) {
    event.preventDefault();
    const { name, type, gender, age, arrived } = this.state;
    console.log('Name: ', name.value);
    console.log('Type: ', type.value);
    console.log('Gender: ', gender.value);
    console.log('Age: ', age.value);
    console.log('Arrived: ', arrived.value)
  }

  validateName() {
    const name = this.state.name.value.trim();
    if (name.length === 0) {
      return "Name is required";
    } else if (!name.match(/[A-z]/)) {
      return "Name must include characters from the modern English alphabet";
    }
  }

  /*validateGender() {
    const name = this.state.name.value.trim();
    if (name.length === 0) {
      return "Name is required";
    }
  }*/

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

  validateArrived() {
    const arrived = this.state.age.value.trim();
    if (arrived.length === 0) {
      return "Arrival month and year is required";
    } else if (arrived.length < 7 || arrived.length > 7) {
      return "Arrival information must be formatted as MM-YYYY.";
    }
  }

  render () {
    const nameError = this.validateName();
    // const typeError = this.validateType();
    // const genderError = this.validateGender();
    const ageError = this.validateAge();
    const arrivedError = this.validateArrived();
    return(
      <form className="add-form" onSubmit={event =>       this.handleSubmit(event)}>
        <h2>Add an animal to the database (*  indicates a required field)</h2>
        <fieldset>
          <legend>Add Form</legend>
          <div className="part">
            <label className="main-label" htmlFor="type">Select a type for your animal * </label>
            <input
              type="radio"
              name="dog"
              id="dog"
              onChange={e => this.addType(e.target.value)}
            />
            <label htmlFor="dog">Dog</label>

            <input
              type="radio"
              name="cat"
              id="cat"
              onChange={e => this.addType(e.target.value)}
            />
            <label htmlFor="cat">Cat</label>

            <input
              type="radio"
              name="bird"
              id="bird"
              onChange={e => this.addType(e.target.value)}
            />
            <label htmlFor="bird">Bird</label>
          </div>
          <div className="part">
            <label  className="main-label" htmlFor="name">Name *</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Jane"
              required
              onChange={e => this.addName(e.target.value)}
            />
              {this.state.name.touched && (
                <ValidationError message={nameError} id="nameError"/>
              )}
          </div>
          <div className="part">
            <label className="main-label" htmlFor="gender">Gender *</label>
            <input
              type="radio"
              id="male"
              name="gender"
              value="male"
              required
              onChange={e => this.addGender(e.target.value)}
            />
            <label htmlFor="male">Male</label>

            <input
              type="radio"
              id="female"
              name="gender"
              value="female"
              onChange={e => this.addGender(e.target.value)}
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
            />
            {this.state.age.touched && (
              <ValidationError message={ageError} />
            )}
          </div>
          <div className="part">
            <label className="main-label" htmlFor="arrived">Arrived (input must be formatted as MM-YYYY) *</label>
            <input
              type="text"
              name="arrived"
              id="arrived"
              placeholder="01-2020"
              onChange={e => this.addArrived(e.target.value)}
            />
            {this.state.arrived.touched && (
                <ValidationError message={arrivedError}
                id="arrivedError" />
            )}
          </div>
          <div>
            <button
              type="submit"
              className="submit-button"
              disabled={
              this.validateName() ||
              this.validateAge() ||
              this.validateArrived()
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

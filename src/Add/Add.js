import React from 'react'
import ValidationError from '../ValidationError.js'
import './Add.css';

class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: {
        value: '',
        touched: false
      },
      type: {
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
      }
    };
  }

  addName(name) {
    this.setState({name: {value: name, touched: true}});
  }

  addType(type) {
    this.setState({type: {value: type, touched: true}});
  }

  addGender(gender) {
    this.setState({gender: {value: gender, touched: true}});
  }

  addAge(age) {
    this.setState({age: {value: age, touched: true}});
  }

  handleSubmit(event) {
    event.preventDefault();
    const { name, type, gender, age } = this.state;
    console.log('Name: ', name.value);
    console.log('Type: ', type.value);
    console.log('Gender: ', gender.value);
    console.log('Age: ', age.value);
  }

  validateName() {
    const name = this.state.name.value.trim();
    if (name.length === 0) {
      return "Name is required";
    }
  }

  /*validateType() {
    const name = this.state.name.value.trim();
    if (name.length === 0) {
      return "Name is required";
    }
  }*/

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
      return "Age must be between 1 and 2 characters long";
    } else if (!age.match(/[0-9]/)) {
      return "Age must be a number";
    }
  }

  render () {
    const nameError = this.validateName();
    // const typeError = this.validateType();
    // const genderError = this.validateGender();
    const ageError = this.validateAge();
    return(
      <form className="add" onSubmit={event => this.handleSubmit(event)}>
        <h2>Add an animal to the database (* required field)</h2>

        <div className="form-group">
          <label htmlFor="name">
            Name *   
            <input type="text" className="registration-control"
                name="name" id="name" onChange={e => this.addAge(e.target.value)}/>
                {this.state.age.touched && (
                  <ValidationError message={nameError} />
                )}
          </label>

        </div>

        <div className="form-group">
            <label htmlFor="type">Type *</label>

            <input type="radio" className="radio"
              name="dog" id="dog" onChange={e => this.addType(e.target.value)}/>
            <label htmlFor="dog">Dog</label>

            <input type="radio" className="radio"
              name="cat" id="cat" onChange={e => this.addType(e.target.value)}/>
            <label htmlFor="cat">Cat</label>

            <input type="radio" className="radio"
              name="bird" id="bird" onChange={e => this.addType(e.target.value)}/>
            <label htmlFor="bird">Bird</label>
        </div>
        <div className="form-group">
            <label htmlFor="gender">Gender *</label>
            <input type="radio" className="radio" id="male" name="gender" value="male" onChange={e => this.addGender(e.target.value)}/>
            <label htmlFor="male">Male</label>

            <input type="radio" className="radio" id="female" name="gender" value="female" onChange={e => this.addGender(e.target.value)}/>
            <label htmlFor="female">Female</label>
        </div>
        <div className="form-group">
            <label htmlFor="age">
              Age (Must be a number, leave blank if age is unknown.)
              <input type="text" className="registration-control"
                name="age" id="age" onChange={e => this.addAge(e.target.value)}/>
                {this.state.age.touched && (
                  <ValidationError message={ageError} />
                )}
            </label>

        </div>
        <div>
          <button
            type="submit"
            className="submit-button"
            disabled={
            this.validateName() ||
            // this.validateType() ||
            // this.validateGender() ||
            this.validateAge()
           }
          >
              Submit
          </button>
        </div>
      </form>
    )
  }
}

export default Add;

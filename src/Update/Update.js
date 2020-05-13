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
    this.setState({name: {value: name, touched: true}});
    console.log(name) //shows input
  }

  updateAge(age) {
    this.setState({age: {value: age, touched: true}});
    console.log(age) //shows input
  }

  updateAdopted(adopted) {
    this.setState({adopted: {value: adopted, touched: true}});
    console.log(adopted) //shows input
  }

  updatePet(pet) {
    pet.name = this.props.name;
    pet.age = this.props.age;
    pet.adopted = this.props.adopted;
    return pet;
    console.log(pet)
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
  }


  render() {
    const { pets=[] } = this.context;
    // const { pet } = this.props.match.params;
    // console.log(pets)
    const pet = pets.find(pet => pet.id === this.props.match.params.id)
    // gets from route
    console.log(pet) //shows pet
    let displayArr = Object.values(pet); //shows desired pet; FIX FORMAT!
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

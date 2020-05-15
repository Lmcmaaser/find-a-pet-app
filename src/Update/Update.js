import React from 'react'
import { useAlert } from 'react-alert'
import PetContext from '../PetContext'
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

  //pet original object
  updatePet(pet) {
    // value update for keys
    if (this.state.name.touched){
      pet.name = this.state.name.value;
    }
    if (this.state.age.touched) {
      pet.age = this.state.age.value;
    }
    if (this.state.adopted.touched) {
      pet.adopted = this.state.adopted.value;
    }
    console.log(pet);
    return pet;
  }

  handleSubmit(event, pet) {
    console.log("submit fired");
    event.preventDefault();
    console.log(pet);
    const updatedPet = this.updatePet(pet);
    //fetch to server patch request, pet obj
    this.context.updatePet(updatedPet);
    //add code to redirect to home page, things happened
  }

  handleAlert(event) {
    const alert = useAlert()
    return
     {alert.show(
      'Oh look, an alert!'
    )}
  }


  render() {
    const { pets=[] } = this.context;
    // const alertMessage = useAlert(alert)
    // const { pet } = this.props.match.params;
    // console.log(pets)
    const pet = pets.find(pet => pet.id === this.props.match.params.id)
    // gets from route
    console.log(pet) //shows pet
    let displayArr = Object.values(pet); //shows desired pet; FIX FORMAT!
    return (
      <form className="update-form" onSubmit={event => this.handleSubmit(event, pet)}>
        <h2>Update a Pets's Information</h2>
        <fieldset>
          <legend>Update Form</legend>
            <label className="main-label">Pet to Update:</label>
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
              className="submit-button"
              onClick={event => this.handleAlert(event)}
            >
              Submit
            </button>
          </div>
        </fieldset>
      </form>
    )
  }
}

export default Update;

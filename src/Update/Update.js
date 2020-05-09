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

  updateId(id) {
    this.setState({
      selected: id
    })
    console.log(id) //shows correct id info
  }

  updateName(name) {
    this.setState({
      name: {value: name, touched: true}
    });
    console.log(name)
  }

  updateAge(age) {
    this.setState({
      age: {value: age, touched: true}
    });
    console.log(age)
  }

  updateAdopted(adopted) {
    this.setState({
      adopted: {value: adopted, touched: true}
    });
    console.log(adopted)
  }
  // map MODIFIES the data inside that array index with the value that is RETURNED by the callback function.
  handleSubmit(event) {
    console.log("submit fired")
    event.preventDefault();
    // const { selected, name, age, adopted } = this.state;
    this.context.updatePet(event)
    const { pets=[] } = this.context
    const selectedPet = pets.map((pet) => {
      if (this.state.selected && pet.id === this.state.selected) {
        selectedPet.name = this.state.name.value
        selectedPet.age = this.state.age.value
        selectedPet.adopted = this.state.adopted.value
      } else {
        return "Id not found"
      }
    })
    console.log(selectedPet);
  }

  // works after submit
  validateId() {
    const id = this.state.id.value.trim();
    if (id.length < 0) {
      return "Id is required";
    }
  }

  render() {
    // const { pets=[] } = this.context
    const idError = this.validateId();
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


            <label className="main-label" htmlFor="age">Age *</label>
            <input
                type="text"
                name="age"
                id="age"
                placeholder="5"
                onChange={event => this.updateAge(event.target.value)}
            />


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

import React from 'react';
import AlertButton from '../pets-helpers/pets-helpers';
// import ValidationError from '../ValidationError.js';
import PetContext from '../PetContext';

export default class Delete extends React.Componenent {
  static contextType = PetContext;

  constructor(props) {
    super(props);
    this.state = {
      remove: {
        value: '',
        touched: false
      }
    }
  }

  static defaultProps = {
    match: {
      params: {}
    }

  }

  updateStatus(remove) {
    this.setState({remove: {value: remove, touched: true}});
    console.log(remove) //shows input
  }

  updatePet(pet) {
    if (this.state.remove.touched {
      
    })
  }

  handleSubmit(event, pet) {
    console.log("submit fired");
    event.preventDefault();
    const pet = this.props.id
  }

  render() {
    const { pets=[] } = this.context;
    const pet = pets.find(pet => pet.id === this.props.match.params.id)
    return (
      <form className="delete-form" onSubmit={event => this.handleSubmit(event, pet)}>
        <h2>Would you like to delete this pet?</h2>
        <fieldset>
          <legend>Delete Form</legend>
            <label className="main-label" htmlFor="delete">
              Delete
            </label>
            <label htmlFor="container">
              <input
                type="radio"
                id="yes"
                name="delete"
                value="yes"
                aria-label="delete pet"
                onChange={event => this.updateStatus(event.target.value)}
              />
              <span className="checkmark"></span>
            Yes</label>

            <label htmlFor="container">
              <input
                type="radio"
                id="no"
                name="remove"
                value="no"
                aria-label="do not delete pet"
                onChange={event => this.updateStatus(event.target.value)}
              />
              <span className="checkmark"></span>
            No</label>
            <div>
              <AlertButton />
            </div>
        </fieldset>
      </form>

    )
  }
}

import React from 'react';
import AlertButton from '../pets-helpers/pets-helpers';
// import ValidationError from '../ValidationError.js';
import PetContext from '../PetContext';
import './Delete.css'

class Delete extends React.Component {
  static contextType = PetContext;

  constructor(props){
    super(props);
  }

  static defaultProps = {
    onDeleteNote: () => {},
  }

  updateStatus(remove) {
    this.setState({remove: {value: remove, touched: true}});
    console.log(remove) //shows input
  }

  updatePet(pet) {
    if (this.state.remove.touched.value === "yes") {
      return pet
    } else {

    }
      //link back to search page

  }

  handleSubmit(event, pet) {
    console.log("submit fired");
    event.preventDefault();
    // const pet = this.props.id
    //to do, fetch delete request to server
    this.context.deletePet(pet);
    this.props.history.push('/');
  }

  render() {
    const { pets=[] } = this.context;
    const pet = pets.find(pet => pet.id === this.props.match.params.id)
    return (
      <form className="delete-form" onSubmit={event => this.handleSubmit(event, pet)}>
        <h2>Would you like to delete this pet?</h2>
          <fieldset>
            <legend>Pet to Delete</legend>
              <ul>
                  <li key={pet.id}>
                    <div>Name: {pet.name}<br /></div>
                    <div>Type: {pet.pet_type}<br /></div>
                    <div>Sex: {pet.sex}<br /></div>
                    <div>Age: {pet.age}<br /></div>
                    <div>Adopted: {pet.adopted}<br /></div>
                  </li>
              </ul>
          </fieldset>
          <fieldset>
            <legend>Delete Form</legend>

          <div>
            <button
              className="submit-button"
              type="submit"
              onClick={(event) => {this.handleSubmit(event, pet)
              }}
            >
              Delete
            </button>

            <button
              className="submit-button"
              onClick={() => {
                this.props.history.push('/')
              }}
            >
              Cancel
            </button>
          </div>
        </fieldset>
      </form>
    )
  }
}
export default Delete

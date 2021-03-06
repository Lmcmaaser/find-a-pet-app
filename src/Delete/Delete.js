import React from 'react';
import PetContext from '../PetContext';
import './Delete.css';

class Delete extends React.Component {
  static contextType = PetContext;

  static defaultProps = {
    onDeletePet: () => {},
  }

  updateStatus(remove) {
    this.setState({remove: {value: remove, touched: true}});
    console.log(remove) //shows input
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
      <div className="delete-form" >
        <h2>Would you like to delete this pet?</h2>
          <div className="section">
            <div className="pet-section">
              <div key={pet.id}>
                <div>Name: {pet.name}<br /></div>
                <div>Type: {pet.pet_type}<br /></div>
                <div>Sex: {pet.sex}<br /></div>
                <div>Age: {pet.age}<br /></div>
                <div>Adopted: {pet.adopted}<br /></div>
              </div>
            </div>

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
      </div>
    )
  }
}
export default Delete
